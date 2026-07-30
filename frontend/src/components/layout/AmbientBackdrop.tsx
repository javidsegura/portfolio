/**
 * The pinned backdrop: a ruled plane tilted away from the viewer, breathing
 * slowly. Fixed rather than scrolling, so the foreground changes against one
 * calm, continuous background instead of competing parallax layers.
 *
 * Base opacity sits on the wrapper and the breathing animation on the child:
 * the keyframes set `opacity` directly, so they would otherwise override any
 * opacity utility applied to the same element.
 */

import { cn } from "@/lib/utils";

interface AmbientBackdropProps {
  /** Deeper, more present grid. Reserved for the homepage. */
  variant?: "default" | "home";
  className?: string;
}

export function AmbientBackdrop({
  variant = "default",
  className,
}: AmbientBackdropProps) {
  const isHome = variant === "home";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper",
        className,
      )}
    >
      <div className={isHome ? "opacity-100" : "opacity-55"}>
        <div
          className="grid-plane anim-breathe absolute inset-x-[-30%] top-0 h-[140%] origin-top"
          style={{
            transform: isHome
              ? "perspective(760px) rotateX(62deg)"
              : "perspective(900px) rotateX(58deg)",
            maskImage:
              "radial-gradient(ellipse 62% 52% at 50% 12%, black 0%, transparent 76%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 62% 52% at 50% 12%, black 0%, transparent 76%)",
          }}
        />
      </div>

      {/* Light pooling toward the top, keeping the page from reading flat. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_78%_46%_at_50%_0%,var(--paper-raised)_0%,transparent_72%)]" />
    </div>
  );
}
