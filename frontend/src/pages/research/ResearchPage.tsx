import { ArrowUpRight } from "lucide-react";
import { usePageView } from "@/hooks/useAnalytics";
import { useT } from "@/providers/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { FadeLift } from "@/components/motion/FadeLift";
import { ArrowLink, Chip, Eyebrow, LocaleLink } from "@/components/primitives";
import { ROUTES } from "@/config";
import { AFFILIATIONS, PUBLICATIONS } from "@/content/research";

export default function ResearchPage() {
  usePageView("research");
  const t = useT();

  return (
    <>
      <AmbientBackdrop />
      <Container>
        <PageHeader
          title={t("research.title")}
          description={t("research.description")}
        />

        {/* Thesis entry point: the one bold element on this page. */}
        <FadeLift>
          <LocaleLink
            to={ROUTES.thesis}
            className="group block rounded-2xl border border-amber/35 bg-amber-soft/50 p-8
                       transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                       hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]
                       motion-reduce:hover:translate-y-0"
          >
            <Eyebrow className="mb-3">{t("research.thesis")}</Eyebrow>
            <h2 className="type-title max-w-2xl text-2xl text-ink sm:text-3xl">
              {t("research.thesisTitle")}
            </h2>
            <p className="type-body measure mt-3 text-sm text-ink-muted">
              {t("research.thesisBlurb")}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
              {t("research.readEssay")}
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </LocaleLink>
        </FadeLift>

        <FadeLift className="pt-16">
          <Eyebrow className="mb-4">{t("research.publications")}</Eyebrow>
          <ul className="divide-y divide-line border-y border-line">
            {PUBLICATIONS.map((publication) => (
              <li
                key={publication.id}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink">
                    {publication.title}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-muted">
                    {publication.venue}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Chip accent>{publication.kind}</Chip>
                  <span className="text-xs text-ink-faint">
                    {publication.year}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </FadeLift>

        <FadeLift className="py-16">
          <Eyebrow className="mb-4">{t("research.affiliations")}</Eyebrow>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {AFFILIATIONS.map((affiliation) => (
              <div key={affiliation.id} className="border-t border-line pt-3">
                <dt className="text-sm font-medium text-ink">
                  {affiliation.name}
                </dt>
                <dd className="mt-1 text-sm text-ink-muted">
                  {affiliation.detail}
                </dd>
              </div>
            ))}
          </dl>
        </FadeLift>

        <div className="pb-16">
          <ArrowLink to={ROUTES.projects}>
            {t("research.relatedProjects")}
          </ArrowLink>
        </div>
      </Container>
    </>
  );
}
