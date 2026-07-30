import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LocaleLink } from "./LocaleLink";

interface ArrowLinkProps {
  to: string;
  children: React.ReactNode;
  /** Renders an anchor with an outward arrow instead of a router link. */
  external?: boolean;
  className?: string;
}

/** Text link with an arrow that slides on hover. */
export function ArrowLink({
  to,
  children,
  external = false,
  className,
}: ArrowLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {external ? (
        <ArrowUpRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : (
        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const classes = cn(
    "group inline-flex items-center gap-1.5 text-sm font-medium text-ink",
    "transition-colors hover:text-ink-muted",
    className,
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer noopener" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <LocaleLink to={to} className={classes}>
      {content}
    </LocaleLink>
  );
}
