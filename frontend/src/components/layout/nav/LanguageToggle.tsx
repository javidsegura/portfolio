import { Link } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";
import { FlagES, FlagUS } from "@/components/brand/FlagIcon";
import { cn } from "@/lib/utils";

/**
 * Language switch. Links to the same page under the other locale rather than
 * flipping a flag in state, so the Spanish mirror stays deep-linkable.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, alternatePath, otherLocale } = useLanguage();

  return (
    <Link
      to={alternatePath}
      aria-label={`Switch to ${otherLocale === "es" ? "Spanish" : "English"}`}
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium text-ink-faint transition-colors hover:text-ink",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1",
          locale === "en" ? "text-ink" : "opacity-45",
        )}
      >
        <FlagUS className="h-3 w-[1.05rem] rounded-[2px]" />
        EN
      </span>
      <span className="text-line-strong">/</span>
      <span
        className={cn(
          "inline-flex items-center gap-1",
          locale === "es" ? "text-ink" : "opacity-45",
        )}
      >
        <FlagES className="h-3 w-[1.05rem] rounded-[2px]" />
        ES
      </span>
    </Link>
  );
}
