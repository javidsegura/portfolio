import { cn } from "@/lib/utils";

interface StatusDotProps {
  /** Only a live status earns the expanding signal ring. */
  live?: boolean;
  className?: string;
}

/**
 * Small presence indicator. The signal ring is the one place on the site
 * that uses an expanding pulse, so it stays legible as "live".
 */
export function StatusDot({ live = false, className }: StatusDotProps) {
  return (
    <span className={cn("relative inline-flex h-2 w-2 shrink-0", className)}>
      {live && (
        <span
          className="anim-signal absolute inset-0 rounded-full bg-amber"
          aria-hidden="true"
        />
      )}
      <span
        className={cn(
          "relative inline-flex h-2 w-2 rounded-full",
          live ? "bg-amber" : "bg-ink-faint",
        )}
      />
    </span>
  );
}
