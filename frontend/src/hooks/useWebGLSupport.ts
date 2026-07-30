import { useEffect, useState } from "react";
import { useResponsive } from "./useResponsive";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Whether a WebGL scene should be mounted at all.
 *
 * False on mobile, under reduced-motion, and wherever a context cannot be
 * created. Callers render the static fallback instead. Starts false so nothing
 * heavy is mounted during the first paint.
 */
export function useWebGLSupport(): boolean {
  const { isMobile } = useResponsive();
  const prefersReduced = usePrefersReducedMotion();
  const [hasContext, setHasContext] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const context =
        canvas.getContext("webgl2") ?? canvas.getContext("webgl");
      setHasContext(Boolean(context));
    } catch {
      setHasContext(false);
    }
  }, []);

  return hasContext && !isMobile && !prefersReduced;
}
