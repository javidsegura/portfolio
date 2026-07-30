import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PRIMARY_NAV, ROUTES, SITE, UTILITY_NAV } from "@/config";
import { useLanguage } from "@/providers/LanguageProvider";
import { LocaleLink } from "@/components/primitives";
import { CommandTrigger } from "./CommandTrigger";
import { LanguageToggle } from "./LanguageToggle";

export function DesktopNav() {
  const { t, localePath } = useLanguage();

  return (
    <div className="flex w-full items-center gap-8">
      <LocaleLink
        to={ROUTES.home}
        className="type-title shrink-0 text-sm text-ink transition-colors hover:text-ink-muted"
      >
        {SITE.shortName}
      </LocaleLink>

      <nav className="flex items-center gap-6">
        {PRIMARY_NAV.map((item) => (
          <NavLink
            key={item.path}
            to={localePath(item.path)}
            className={({ isActive }) =>
              cn(
                "relative text-sm transition-colors",
                isActive ? "text-ink" : "text-ink-muted hover:text-ink",
              )
            }
          >
            {({ isActive }) => (
              <>
                {t(item.key as Parameters<typeof t>[0])}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-full bg-amber" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-5">
        <LanguageToggle />
        {UTILITY_NAV.map((item) => (
          <LocaleLink
            key={item.path}
            to={item.path}
            className="text-sm font-medium text-ink transition-colors hover:text-ink-muted"
          >
            {t(item.key as Parameters<typeof t>[0])}
          </LocaleLink>
        ))}
        <CommandTrigger />
      </div>
    </div>
  );
}
