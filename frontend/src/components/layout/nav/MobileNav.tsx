import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PRIMARY_NAV, ROUTES, UTILITY_NAV } from "@/config";
import { useLanguage } from "@/providers/LanguageProvider";
import { useSiteIdentity } from "@/hooks/useSiteIdentity";
import { LocaleLink } from "@/components/primitives";
import { CommandTrigger } from "./CommandTrigger";
import { LanguageToggle } from "./LanguageToggle";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function MobileNavBar({ isOpen, setIsOpen }: MobileNavProps) {
  const { t } = useLanguage();
  const identity = useSiteIdentity();

  return (
    <div className="flex w-full items-center justify-between">
      <LocaleLink to={ROUTES.home} className="type-title text-sm text-ink">
        {identity.shortName}
      </LocaleLink>

      <div className="flex items-center gap-3">
        <CommandTrigger />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t("nav.close") : t("nav.menu")}
          aria-expanded={isOpen}
          className="text-ink"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </div>
  );
}

export function MobileNavMenu({ isOpen, setIsOpen }: MobileNavProps) {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  // Close on navigation, and lock the page behind the open sheet.
  useEffect(() => setIsOpen(false), [pathname, setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 top-[var(--nav-height)] bottom-0 z-40 border-t border-line bg-paper px-5 py-8">
      <nav className="flex flex-col gap-1">
        {[...PRIMARY_NAV, ...UTILITY_NAV].map((item) => (
          <LocaleLink
            key={item.path}
            to={item.path}
            className="type-title border-b border-line py-4 text-2xl text-ink"
          >
            {t(item.key as Parameters<typeof t>[0])}
          </LocaleLink>
        ))}
      </nav>
      <div className="mt-8">
        <LanguageToggle className="text-sm" />
      </div>
    </div>
  );
}
