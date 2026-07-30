import { cn } from "@/lib/utils";

type ContainerWidth = "narrow" | "default" | "wide";

const WIDTHS: Record<ContainerWidth, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-[88rem]",
};

interface ContainerProps {
  children: React.ReactNode;
  width?: ContainerWidth;
  className?: string;
}

export function Container({
  children,
  width = "default",
  className,
}: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", WIDTHS[width], className)}>
      {children}
    </div>
  );
}
