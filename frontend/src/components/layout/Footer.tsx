import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin, SiMedium } from "react-icons/si";
import type { IconType } from "react-icons";
import { Container } from "./Container";
import { LocaleLink } from "@/components/primitives";
import { EXTERNAL_LINKS, PRIMARY_NAV, SITE } from "@/config";
import { useLanguage } from "@/providers/LanguageProvider";

interface SocialLink {
  label: string;
  href: string;
  Icon: IconType;
}

const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: EXTERNAL_LINKS.github, Icon: SiGithub },
  { label: "LinkedIn", href: EXTERNAL_LINKS.linkedin, Icon: SiLinkedin },
  { label: "Medium", href: EXTERNAL_LINKS.blog, Icon: SiMedium },
];

export function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();
  const fullName = locale === "es" ? SITE.nameEs : SITE.name;

  return (
    <footer className="mt-auto border-t border-line py-12 no-print">
      <Container width="wide">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="type-title text-sm text-ink">{fullName}</p>
            <p className="mt-1.5 text-sm text-ink-muted">{SITE.tagline}</p>

            <ul className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    title={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line
                               bg-paper-raised text-ink-muted transition-[transform,color,border-color]
                               duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                               hover:-translate-y-1 hover:border-line-strong hover:text-ink
                               motion-reduce:hover:translate-y-0"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  aria-label="Email"
                  title={SITE.email}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line
                             bg-paper-raised text-ink-muted transition-[transform,color,border-color]
                             duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                             hover:-translate-y-1 hover:border-line-strong hover:text-ink
                             motion-reduce:hover:translate-y-0"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          <nav className="flex flex-col gap-2">
            {PRIMARY_NAV.map((item) => (
              <LocaleLink
                key={item.path}
                to={item.path}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {t(item.key as Parameters<typeof t>[0])}
              </LocaleLink>
            ))}
          </nav>
        </div>

        <p className="mt-10 text-xs text-ink-faint">
          © {year} {fullName}
        </p>
      </Container>
    </footer>
  );
}
