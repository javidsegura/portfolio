import { usePageView } from "@/hooks/useAnalytics";
import { useSiteIdentity } from "@/hooks/useSiteIdentity";
import { useT } from "@/providers/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { FadeLift } from "@/components/motion/FadeLift";
import { ArrowLink, Eyebrow, Prose } from "@/components/primitives";
import { EXTERNAL_LINKS, ROUTES } from "@/config";
import { CORE_TECH_MARKS } from "@/components/brand/techIcons";
import profilePic from "@/assets/about-me/profile-pic.png";

export default function AboutPage() {
  usePageView("about");
  const t = useT();
  const identity = useSiteIdentity();

  return (
    <>
      <AmbientBackdrop />
      <Container width="narrow">
        <div className="grid grid-cols-1 gap-10 pt-14 sm:grid-cols-[minmax(0,1fr)_10rem] sm:pt-20">
          <FadeLift>
            <Eyebrow className="mb-3">{t("about.title")}</Eyebrow>
            <h1 className="type-display text-4xl text-ink sm:text-5xl">
              {identity.name}
            </h1>
            <p className="type-body mt-3 text-ink-muted">
              {identity.role} · {identity.location}
            </p>
          </FadeLift>

          <FadeLift delay={80}>
            <img
              src={profilePic}
              alt={identity.name}
              className="iso-object-soft w-32 rounded-2xl border border-line object-cover sm:w-40"
            />
          </FadeLift>
        </div>

        <FadeLift delay={120} className="pt-12">
          <Prose>
            <p>{t("about.bio1")}</p>
            <p>{t("about.bio2")}</p>
            <p>{t("about.bio3")}</p>
          </Prose>
        </FadeLift>

        <FadeLift delay={160} className="pt-12">
          <Eyebrow className="mb-4">{t("about.coreStack")}</Eyebrow>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-4">
            {CORE_TECH_MARKS.map(({ name, Icon }) => (
              <li key={name} className="group relative">
                <Icon
                  aria-hidden
                  className="h-[1.35rem] w-[1.35rem] text-ink-faint transition-[color,transform]
                             duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                             group-hover:-translate-y-1 group-hover:text-ink
                             motion-reduce:group-hover:translate-y-0"
                />
                <span className="sr-only">{name}</span>
                <span
                  className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2
                             whitespace-nowrap rounded bg-ink px-1.5 py-0.5 text-[0.65rem]
                             text-paper-raised opacity-0 transition-opacity duration-200
                             group-hover:opacity-100"
                >
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </FadeLift>

        <FadeLift delay={200} className="py-12">
          <Eyebrow className="mb-3">{t("about.elsewhere")}</Eyebrow>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <ArrowLink to={EXTERNAL_LINKS.github} external>
              GitHub
            </ArrowLink>
            <ArrowLink to={EXTERNAL_LINKS.linkedin} external>
              LinkedIn
            </ArrowLink>
            <ArrowLink to={EXTERNAL_LINKS.blog} external>
              Writing
            </ArrowLink>
            <ArrowLink to={ROUTES.cv}>CV</ArrowLink>
          </div>
        </FadeLift>
      </Container>
    </>
  );
}
