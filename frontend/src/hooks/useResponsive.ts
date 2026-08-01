import { useState, useEffect } from "react";

/** Tailwind's `lg` breakpoint, so JS and CSS agree on where mobile ends. */
const MOBILE_MAX_WIDTH = 1024;

function readIsMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < MOBILE_MAX_WIDTH;
}

/**
 * Tracks whether the viewport is below the `lg` breakpoint.
 *
 * Seeded from the real width on first render rather than defaulting to false:
 * components that move content between layouts would otherwise paint the
 * desktop arrangement and visibly jump once the effect ran.
 */
export function useResponsive() {
  const [isMobile, setIsMobile] = useState(readIsMobile);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(readIsMobile());

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return { isMobile };
}
