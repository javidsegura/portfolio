import { cn } from "@/lib/utils";

interface StickyPaneProps {
  children: React.ReactNode;
  /**
   * Presents the pane as a solid object angled in space rather than a flat
   * rectangle. Used for media panes; WebGL scenes carry their own perspective
   * and would fight a second one. Straightens on hover so the content is
   * readable once the reader engages with it.
   */
  tilted?: boolean;
  className?: string;
}

/**
 * Right-hand column of the project template.
 *
 * Sticky on desktop so it holds position while the narrative scrolls past it.
 * On mobile it is not sticky and not tall: the narrative is the content there,
 * and a pinned pane would just eat the viewport.
 */
export function StickyPane({ children, tilted, className }: StickyPaneProps) {
  const surface = (
    <div
      className={cn(
        "aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line",
        "bg-paper-raised lg:aspect-square",
        tilted
          ? [
              "shadow-[var(--shadow-iso)] transition-transform duration-700",
              "ease-[cubic-bezier(0.22,1,0.36,1)]",
              "lg:[transform:rotateX(9deg)_rotateY(-24deg)_rotateZ(2deg)_scale(1.02)]",
              "lg:hover:[transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_scale(1)]",
              "motion-reduce:transition-none",
            ]
          : "shadow-[var(--shadow-rest)]",
        className,
      )}
      style={tilted ? { transformStyle: "preserve-3d" } : undefined}
    >
      {children}
    </div>
  );

  return (
    <div
      className="lg:sticky lg:top-[calc(var(--nav-height)+2rem)]"
      style={tilted ? { perspective: "1500px" } : undefined}
    >
      {surface}
    </div>
  );
}
