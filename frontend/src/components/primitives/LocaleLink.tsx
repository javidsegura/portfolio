/** Router link that keeps the active locale prefix. Use instead of `Link`. */

import { forwardRef } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";

export const LocaleLink = forwardRef<HTMLAnchorElement, LinkProps>(
  function LocaleLink({ to, ...props }, ref) {
    const { localePath } = useLanguage();
    const target = typeof to === "string" ? localePath(to) : to;
    return <Link ref={ref} to={target} {...props} />;
  },
);
