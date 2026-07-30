import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reset scroll on route change, but leave in-page anchor jumps alone so the
 * thesis contents rail and section links still work.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
