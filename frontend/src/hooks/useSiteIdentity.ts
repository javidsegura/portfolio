import { SITE } from "@/config";
import { useLanguage } from "@/providers/LanguageProvider";

interface SiteIdentity {
  /** Full name, accented on the Spanish mirror. */
  name: string;
  shortName: string;
  role: string;
  location: string;
}

/**
 * Name, role and location in the active locale.
 *
 * The Spanish spelling carries accents the English one does not, and the role
 * and location are prose rather than proper nouns, so both need translating
 * wherever the site introduces itself.
 */
export function useSiteIdentity(): SiteIdentity {
  const { locale, t } = useLanguage();
  const isEs = locale === "es";

  return {
    name: isEs ? SITE.nameEs : SITE.name,
    shortName: isEs ? SITE.shortNameEs : SITE.shortName,
    role: t("site.role"),
    location: t("site.location"),
  };
}
