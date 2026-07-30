/**
 * The organisations I have worked with, orbiting as a 3D cloud.
 *
 * Full-colour logos on a Fibonacci sphere whose axis is tilted twice — pitched
 * back and rolled in the screen plane — so items cross the space diagonally
 * rather than circling flat. Every logo is a link into the projects done with
 * that organisation. Plain math and transforms, no WebGL: this sits in the
 * hero and must cost nothing on first paint.
 */

import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { LocaleLink } from "@/components/primitives";
import { AFFILIATION_MARKS } from "@/components/brand/affiliationMarks";
import { ROUTES } from "@/config";

/**
 * Evenly distributed sphere points via the golden angle.
 *
 * `y` is clamped away from ±1: a point sitting on the rotation pole barely
 * moves when the sphere spins, which is exactly the "some logos are frozen"
 * failure. Keeping everything below latitude ~46° gives every item a visible
 * orbit.
 */
function fibonacciSphere(count: number): [number, number, number][] {
  const points: [number, number, number][] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let index = 0; index < count; index += 1) {
    const y = count === 1 ? 0 : (1 - (index / (count - 1)) * 2) * 0.72;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * index;
    points.push([Math.cos(theta) * radius, y, Math.sin(theta) * radius]);
  }
  return points;
}

const PITCH = -0.5;
const ROLL = 0.38;

export function OrgCloud({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const prefersReduced = usePrefersReducedMotion();

  const points = useMemo(() => fibonacciSphere(AFFILIATION_MARKS.length), []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cosP = Math.cos(PITCH);
    const sinP = Math.sin(PITCH);
    const cosR = Math.cos(ROLL);
    const sinR = Math.sin(ROLL);

    const applyFrame = (yaw: number) => {
      const radius = container.clientWidth / 2 - 48;
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);

      points.forEach(([px, py, pz], index) => {
        const element = itemRefs.current[index];
        if (!element) return;

        // Spin around Y, pitch back, then roll the projection so the orbit
        // reads as a diagonal sweep. Elements themselves stay upright.
        const x0 = px * cosY + pz * sinY;
        const z0 = -px * sinY + pz * cosY;
        const y0 = py * cosP - z0 * sinP;
        const z = py * sinP + z0 * cosP;
        const x = x0 * cosR - y0 * sinR;
        const y = x0 * sinR + y0 * cosR;

        // Depth drives an aggressive swell: items visibly expand as they come
        // toward the screen and recede small behind the sphere.
        const depth = (z + 1) / 2;
        element.style.transform = `translate(-50%, -50%) translate3d(${x * radius}px, ${
          y * radius
        }px, 0) scale(${0.42 + depth * 1.0})`;
        element.style.opacity = String(0.28 + depth * 0.72);
        element.style.zIndex = String(Math.round(depth * 100));
      });
    };

    if (prefersReduced) {
      applyFrame(0.9);
      return;
    }

    let frame: number;
    let yaw = 0;
    let last = performance.now();

    const tick = (now: number) => {
      yaw += ((now - last) / 1000) * 0.26;
      last = now;
      applyFrame(yaw);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [points, prefersReduced]);

  return (
    <div
      ref={containerRef}
      className={cn("relative aspect-square select-none", className)}
    >
      {AFFILIATION_MARKS.map((mark, index) => (
        <span
          key={mark.id}
          ref={(element) => {
            itemRefs.current[index] = element;
          }}
          className="absolute left-1/2 top-1/2 will-change-transform"
        >
          <LocaleLink
            to={`${ROUTES.projects}?org=${mark.id}`}
            title={`${mark.name} — see related projects`}
            aria-label={`${mark.name} — see related projects`}
            className="block transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                       hover:scale-110 motion-reduce:hover:scale-100"
          >
            {mark.logo ? (
              <img
                src={mark.logo}
                alt=""
                className="h-12 w-auto max-w-[7.5rem] object-contain"
              />
            ) : (
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-ink-muted">
                {mark.wordmark}
              </span>
            )}
          </LocaleLink>
        </span>
      ))}
    </div>
  );
}
