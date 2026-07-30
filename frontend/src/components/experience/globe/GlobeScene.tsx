/**
 * Career globe: a real Earth with countries and water, milestone dots, and
 * pulses travelling the arcs between them.
 *
 * Selection is click-driven in both directions: the page passes the active
 * milestone in (set by timeline clicks), and dot clicks call back out so the
 * timeline can highlight the matching role. Default-exported for React.lazy so
 * three.js and the country data stay out of the critical path.
 */

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { Line, OrbitControls, Sphere } from "@react-three/drei";
import {
  AdditiveBlending,
  BackSide,
  Vector3,
  type Group,
  type Mesh,
  type MeshBasicMaterial,
} from "three";
import { CAREER_MILESTONES } from "@/content/experience/milestones";
import { arcPoints, latLonToVec3, rotationToFace } from "./geo";
import { getEarthTexture } from "./earthTexture";

const AMBER = "#f5a524";
const INK_FAINT = "#8d877d";
const RADIUS = 1;

/* Scratch vectors reused across frames and clicks, so neither allocates. */
const SCRATCH_WORLD = new Vector3();
const SCRATCH_VIEW = new Vector3();

/** A dot running the length of an arc, restarting on a stagger. */
function ArcPulse({ points, offset }: { points: Vector3[]; offset: number }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * 0.28 + offset) % 1;
    const index = Math.floor(t * (points.length - 1));
    const point = points[index];
    if (point) ref.current.position.copy(point);
    // Fade in and out at the ends so the dot does not pop.
    const fade = Math.sin(t * Math.PI);
    ref.current.scale.setScalar(0.6 + fade * 0.9);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.016, 12, 12]} />
      <meshBasicMaterial color={AMBER} transparent opacity={0.95} />
    </mesh>
  );
}

interface DotProps {
  position: Vector3;
  active: boolean;
  onSelect: () => void;
}

function MilestoneDot({ position, active, onSelect }: DotProps) {
  const group = useRef<Group>(null);
  const halo = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Every dot keeps a faint constant halo so it reads as clickable; the
  // active dot upgrades it to the site's expanding signal-ring pulse.
  useFrame((state) => {
    if (!halo.current) return;
    const material = halo.current.material as MeshBasicMaterial;
    if (active) {
      const phase = (state.clock.elapsedTime % 1.4) / 1.4;
      halo.current.scale.setScalar(1 + phase * 2.6);
      material.opacity = 0.4 * (1 - phase);
    } else {
      halo.current.scale.setScalar(hovered ? 2 : 1.6);
      material.opacity = hovered ? 0.35 : 0.16;
    }
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    if (!group.current) return;
    // Ignore clicks whose ray passes through the globe to a far-side dot.
    const world = group.current.getWorldPosition(SCRATCH_WORLD);
    const toCamera = SCRATCH_VIEW.copy(event.camera.position)
      .sub(world)
      .normalize();
    if (toCamera.dot(world.normalize()) < 0.05) return;
    onSelect();
  };

  return (
    <group ref={group} position={position}>
      <mesh>
        <sphereGeometry args={[active ? 0.04 : 0.028, 16, 16]} />
        <meshBasicMaterial color={active || hovered ? AMBER : INK_FAINT} />
      </mesh>

      <mesh ref={halo}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial
          color={AMBER}
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      {/* Oversized invisible hit target so the dots are easy to click. */}
      <mesh
        onClick={handleClick}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "";
        }}
      >
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  );
}

interface GlobeProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

function Globe({ activeIndex, onSelect }: GlobeProps) {
  const group = useRef<Group>(null);
  const texture = useMemo(() => getEarthTexture(), []);

  const positions = useMemo(
    () => CAREER_MILESTONES.map((m) => latLonToVec3(m.lat, m.lon, RADIUS)),
    [],
  );

  const arcs = useMemo(
    () =>
      positions
        .slice(0, -1)
        .map((from, index) => arcPoints(from, positions[index + 1]!)),
    [positions],
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    const target = positions[activeIndex];
    if (!target) return;

    // Aim relative to where the camera actually is, not the initial +Z view —
    // otherwise the first user drag breaks every subsequent relocation.
    const camera = state.camera;
    const cameraAzimuth = Math.atan2(camera.position.x, camera.position.z);
    const targetY = rotationToFace(target) + cameraAzimuth;
    const targetX = (target.y * Math.PI) / 6;

    // Shortest path, so crossing the antimeridian does not spin the long way.
    let deltaY = targetY - group.current.rotation.y;
    while (deltaY > Math.PI) deltaY -= Math.PI * 2;
    while (deltaY < -Math.PI) deltaY += Math.PI * 2;

    const step = Math.min(delta * 1.8, 1);
    group.current.rotation.y += deltaY * step;
    group.current.rotation.x += (targetX - group.current.rotation.x) * step;
  });

  return (
    <group ref={group}>
      <Sphere args={[RADIUS, 64, 64]}>
        <meshStandardMaterial map={texture} roughness={0.95} metalness={0} />
      </Sphere>

      {/* Thin atmosphere, drawn from the inside so it rims the silhouette. */}
      <Sphere args={[RADIUS * 1.035, 48, 48]}>
        <meshBasicMaterial
          color={AMBER}
          transparent
          opacity={0.07}
          side={BackSide}
          blending={AdditiveBlending}
        />
      </Sphere>

      {arcs.map((points, index) => (
        <group key={index}>
          <Line
            points={points}
            color={index < activeIndex ? AMBER : INK_FAINT}
            lineWidth={index < activeIndex ? 1.8 : 0.9}
            transparent
            opacity={index < activeIndex ? 0.85 : 0.3}
          />
          {index < activeIndex && (
            <ArcPulse points={points} offset={index * 0.22} />
          )}
        </group>
      ))}

      {positions.map((position, index) => (
        <MilestoneDot
          key={CAREER_MILESTONES[index]!.id}
          position={position}
          active={index === activeIndex}
          onSelect={() => onSelect(index)}
        />
      ))}
    </group>
  );
}

/** Eases the camera to the requested distance without touching its direction. */
function CameraRig({ distance }: { distance: number }) {
  useFrame((state, delta) => {
    const camera = state.camera;
    const current = camera.position.length();
    camera.position.setLength(
      current + (distance - current) * Math.min(delta * 3.5, 1),
    );
  });
  return null;
}

interface GlobeSceneProps {
  activeIndex: number;
  onSelect: (index: number) => void;
  distance: number;
}

export default function GlobeScene({
  activeIndex,
  onSelect,
  distance,
}: GlobeSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 3.3], fov: 36 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      {/* Weighted toward the directional light so the sphere shades round the
          limb rather than reading as a flat disc. */}
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 3, 5]} intensity={1.5} />
      <directionalLight position={[-4, -1, -3]} intensity={0.25} />
      <Globe activeIndex={activeIndex} onSelect={onSelect} />
      <CameraRig distance={distance} />
      {/* Wheel zoom stays off: the buttons handle it, and a canvas that
          swallows scroll would trap the reader mid-page. */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.45}
        enableDamping
        dampingFactor={0.08}
        makeDefault
      />
    </Canvas>
  );
}
