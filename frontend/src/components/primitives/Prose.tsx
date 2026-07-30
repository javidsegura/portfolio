import { cn } from "@/lib/utils";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

/** Long-form text column, held to a readable measure. */
export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "type-body measure text-[0.975rem] text-ink-muted [&>p+p]:mt-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
