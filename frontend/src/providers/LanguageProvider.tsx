/**
 * Locale context derived from the URL rather than from state.
 *
 * The Spanish mirror is a path prefix (`/es/...`) over the same route tree and
 * the same components, so language is a content lookup and never a component
 * fork. Reading it from the URL keeps every locale deep-linkable.
 */

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_LOCALE, type Locale } from "@/config/routes.config";
import { DICTIONARIES, type TranslationKey } from "@/content/i18n";

interface LanguageContextValue {
  locale: Locale;
  /** Translate a chrome key. Falls back to the key itself if missing. */
  t: (key: TranslationKey) => string;
  /** Prefix an app-relative path with the active locale. */
  localePath: (path: string) => string;
  /** The same path under the other locale, for the language toggle. */
  alternatePath: string;
  otherLocale: Locale;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readLocale(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : DEFAULT_LOCALE;
}

function stripLocale(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3) || "/";
  return pathname;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  const value = useMemo<LanguageContextValue>(() => {
    const locale = readLocale(pathname);
    const dictionary = DICTIONARIES[locale];
    const bare = stripLocale(pathname);
    const otherLocale: Locale = locale === "en" ? "es" : "en";

    const localePath = (path: string): string => {
      const normalised = path.startsWith("/") ? path : `/${path}`;
      if (locale === DEFAULT_LOCALE) return normalised;
      return normalised === "/" ? "/es" : `/es${normalised}`;
    };

    return {
      locale,
      t: (key) => dictionary[key] ?? key,
      localePath,
      otherLocale,
      alternatePath:
        otherLocale === DEFAULT_LOCALE ? bare : bare === "/" ? "/es" : `/es${bare}`,
    };
  }, [pathname]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return context;
}

/** Convenience for the common case of only needing the translate function. */
export function useT(): (key: TranslationKey) => string {
  return useLanguage().t;
}
