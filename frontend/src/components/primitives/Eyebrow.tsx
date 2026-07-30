import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/** Small tracked label that sits above a heading. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("type-eyebrow text-ink-faint", className)}>{children}</p>
  );
}
