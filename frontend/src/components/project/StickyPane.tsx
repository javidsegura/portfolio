import { cn } from "@/lib/utils";

/**
 * Right-hand column of the project template.
 *
 * Sticky on desktop so it holds position while the narrative scrolls past it.
 * On mobile it is not sticky and not tall: the narrative is the content there,
 * and a pinned pane would just eat the viewport.
 */
export function StickyPane({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "lg:sticky lg:top-[calc(var(--nav-height)+2rem)]",
        "aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line",
        "bg-paper-raised shadow-[var(--shadow-rest)] lg:aspect-square",
        className,
      )}
    >
      {children}
    </div>
  );
}
