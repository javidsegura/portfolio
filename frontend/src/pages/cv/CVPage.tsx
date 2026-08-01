/**
 * Inline CV summary with a direct PDF download. No email gate, by design:
 * a recruiter arriving here should reach the file in one click.
 */

import { Download } from "lucide-react";
import { usePageView } from "@/hooks/useAnalytics";
import { useT } from "@/providers/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { FadeLift } from "@/components/motion/FadeLift";
import { ArrowLink, Chip, Eyebrow } from "@/components/primitives";
import { CURRENT_STATUS, EXTERNAL_LINKS, ROUTES, SITE } from "@/config";
import { EXPERIENCE_ENTRIES } from "@/content/experience";
import { PROJECTS } from "@/content/projects";

const CV_URL = `${import.meta.env.BASE_URL}${SITE.cvFile}`;

export default function CVPage() {
  usePageView("cv");
  const t = useT();
  const highlights = PROJECTS.filter((project) => project.featured);

  return (
    <>
      <AmbientBackdrop />
      <Container width="narrow">
        <FadeLift as="header" className="pb-10 pt-14 sm:pt-20">
          <Eyebrow className="mb-3">{t("cv.title")}</Eyebrow>
          <h1 className="type-display text-4xl text-ink sm:text-5xl">
            {SITE.name}
          </h1>
          <p className="type-body mt-3 text-ink-muted">
            {SITE.role} · {SITE.location} · Graduating {SITE.graduation}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4 no-print">
            <a
              href={CV_URL}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5
                         text-sm font-medium text-paper-raised transition-transform duration-200
                         hover:-translate-y-0.5 active:animate-[press-pulse_600ms_ease-out]
                         motion-reduce:hover:translate-y-0"
            >
              <Download size={15} />
              {t("cv.download")}
            </a>
            <span className="text-xs text-ink-faint">{t("cv.noGate")}</span>
          </div>
        </FadeLift>

        <FadeLift delay={80} className="border-t border-line py-8">
          <Eyebrow className="mb-3">{t("cv.now")}</Eyebrow>
          <p className="text-sm text-ink">{CURRENT_STATUS.label}</p>
          <p className="mt-1 text-sm text-ink-muted">{CURRENT_STATUS.detail}</p>
        </FadeLift>

        <FadeLift delay={120} className="border-t border-line py-8">
          <Eyebrow className="mb-4">{t("cv.experience")}</Eyebrow>
          <ul className="space-y-5">
            {EXPERIENCE_ENTRIES.map((entry) => (
              <li key={entry.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="text-sm font-medium text-ink">{entry.title}</p>
                  <p className="text-xs text-ink-faint">{entry.date}</p>
                </div>
                <p className="text-sm text-ink-muted">{entry.company}</p>
              </li>
            ))}
          </ul>
          <div className="mt-5 no-print">
            <ArrowLink to={ROUTES.experience}>{t("cv.fullTimeline")}</ArrowLink>
          </div>
        </FadeLift>

        <FadeLift delay={160} className="border-t border-line py-8">
          <Eyebrow className="mb-4">{t("cv.selectedWork")}</Eyebrow>
          <ul className="space-y-5">
            {highlights.map((project) => (
              <li key={project.slug}>
                <p className="text-sm font-medium text-ink">{project.title}</p>
                <p className="mt-0.5 text-sm text-ink-muted">{project.impact}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.techstack.slice(0, 5).map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 no-print">
            <ArrowLink to={ROUTES.projects}>{t("cv.allProjects")}</ArrowLink>
          </div>
        </FadeLift>

        <FadeLift delay={200} className="border-t border-line py-8 pb-24">
          <Eyebrow className="mb-3">{t("cv.contact")}</Eyebrow>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm font-medium text-ink hover:text-ink-muted"
            >
              {SITE.email}
            </a>
            <ArrowLink to={EXTERNAL_LINKS.github} external>
              GitHub
            </ArrowLink>
            <ArrowLink to={EXTERNAL_LINKS.linkedin} external>
              LinkedIn
            </ArrowLink>
          </div>
        </FadeLift>
      </Container>
    </>
  );
}
