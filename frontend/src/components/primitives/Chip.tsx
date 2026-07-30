import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  /** Amber fill. Reserved for one chip per view at most. */
  accent?: boolean;
  className?: string;
}

/** Quiet tag for tech stack entries and categories. */
export function Chip({ children, accent = false, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap",
        accent
          ? "bg-amber-soft text-ink ring-1 ring-amber/30"
          : "bg-paper-sunken text-ink-muted ring-1 ring-line",
        className,
      )}
    >
      {children}
    </span>
  );
}
