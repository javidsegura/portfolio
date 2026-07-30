import { Eyebrow } from "@/components/primitives";
import { FadeLift } from "@/components/motion/FadeLift";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: React.ReactNode;
  className?: string;
}

/** Standard page opening: eyebrow, title, one line of orientation. */
export function PageHeader({
  title,
  description,
  eyebrow,
  children,
  className,
}: PageHeaderProps) {
  return (
    <FadeLift as="header" className={cn("pb-10 pt-14 sm:pt-20", className)}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <h1 className="type-display text-4xl text-ink sm:text-5xl">{title}</h1>
      {description && (
        <p className="type-body measure mt-4 text-ink-muted">{description}</p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </FadeLift>
  );
}
