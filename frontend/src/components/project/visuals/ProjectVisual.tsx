/**
 * Chooses what fills the sticky pane.
 *
 * Full-tier projects get the lazy WebGL scene when the device can take it and
 * the static diagram otherwise. Simple-tier projects get media. The decision
 * is made here so neither template has to know about WebGL at all.
 */

import { Suspense, lazy } from "react";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { StackFallback } from "./StackFallback";

const LayerScene = lazy(() => import("./LayerScene"));

interface ProjectVisualProps {
  /** Labels for each narrative step, one per stack layer. */
  layers: string[];
  activeIndex: number;
  caption?: string;
}

export function ProjectVisual({
  layers,
  activeIndex,
  caption,
}: ProjectVisualProps) {
  const canRender3D = useWebGLSupport();
  const fallback = (
    <StackFallback layers={layers} activeIndex={activeIndex} caption={caption} />
  );

  if (!canRender3D) return fallback;

  return (
    <div className="relative h-full w-full">
      <Suspense fallback={fallback}>
        <LayerScene layerCount={layers.length} activeIndex={activeIndex} />
      </Suspense>
      <p className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-xs text-ink-faint">
        {layers[activeIndex] ?? caption}
      </p>
    </div>
  );
}
