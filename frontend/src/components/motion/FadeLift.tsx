/**
 * Scroll entrance: foreground content fades and lifts into place once, as the
 * reader reaches it. The pinned backdrop keeps moving underneath, which is
 * what gives continuity between sections without parallax layers.
 */

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface FadeLiftProps {
  children: ReactNode;
  /** Stagger within a group, in milliseconds. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

export function FadeLift({
  children,
  delay = 0,
  as = "div",
  className,
}: FadeLiftProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      setShown(true);
      return;
    }
    const element = ref.current;
    if (!element) return;

    // Anything already on screen at mount is shown at once. Above-the-fold
    // content must never depend on a scroll event to become readable.
    if (element.getBoundingClientRect().top < window.innerHeight) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReduced]);

  // createElement rather than <Tag />: a union ElementType cannot be resolved
  // to a concrete props type in JSX position.
  return createElement(
    as,
    {
      ref,
      style: { transitionDelay: shown ? `${delay}ms` : "0ms" },
      className: cn(
        "transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-3.5 opacity-0",
        className,
      ),
    },
    children,
  );
}
