/**
 * WebGL visual pane for full-treatment projects.
 *
 * Default-exported and only ever reached through React.lazy, so three.js lands
 * in its own chunk and never enters the critical path. Anything imported here
 * is part of that chunk.
 */

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import type { Group, Mesh } from "three";

const INK = "#413c36";
const PAPER = "#ffffff";
const AMBER = "#f5a524";

interface LayerProps {
  index: number;
  total: number;
  active: boolean;
}

function Layer({ index, total, active }: LayerProps) {
  const ref = useRef<Mesh>(null);
  const baseY = (total - 1) / 2 - index;

  useFrame((_, delta) => {
    if (!ref.current) return;
    const targetY = baseY * 0.62 + (active ? 0.22 : 0);
    const targetX = active ? 0.3 : 0;
    // Critically damped follow, so section changes settle rather than snap.
    ref.current.position.y += (targetY - ref.current.position.y) * delta * 4;
    ref.current.position.x += (targetX - ref.current.position.x) * delta * 4;
  });

  return (
    <RoundedBox
      ref={ref}
      args={[3.1, 0.42, 2.2]}
      radius={0.09}
      smoothness={4}
      position={[0, baseY * 0.62, 0]}
    >
      <meshStandardMaterial
        color={active ? AMBER : PAPER}
        roughness={active ? 0.35 : 0.72}
        metalness={0.04}
        emissive={active ? AMBER : "#000000"}
        emissiveIntensity={active ? 0.16 : 0}
      />
    </RoundedBox>
  );
}

function Rig({ count, activeIndex }: { count: number; activeIndex: number }) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    // Very slow drift, plus a slight lean toward the pointer. Ambient, not
    // attention-seeking: the eye should catch this only in peripheral vision.
    const t = state.clock.elapsedTime;
    group.current.rotation.y = -0.62 + Math.sin(t * 0.16) * 0.06;
    group.current.position.y = Math.sin(t * 0.42) * 0.045;
  });

  return (
    <group ref={group} rotation={[0.52, -0.62, 0]}>
      {Array.from({ length: count }, (_, index) => (
        <Layer
          key={index}
          index={index}
          total={count}
          active={index === activeIndex}
        />
      ))}
    </group>
  );
}

interface LayerSceneProps {
  layerCount: number;
  activeIndex: number;
}

export default function LayerScene({ layerCount, activeIndex }: LayerSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [5.2, 3.4, 5.2], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 7, 4]} intensity={1.5} castShadow={false} />
      <directionalLight position={[-4, 2, -3]} intensity={0.35} color={INK} />
      <Rig count={layerCount} activeIndex={activeIndex} />
    </Canvas>
  );
}
