/**
 * Thesis visual essay.
 *
 * Three-column on desktop: contents rail, narrative, sticky visual. The TL;DR
 * sits above the scroll so a reviewer who reads nothing else still gets the
 * argument. Collapses to a plain stacked document on mobile and in print.
 */

import { useMemo } from "react";
import { usePageView } from "@/hooks/useAnalytics";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useT } from "@/providers/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { FadeLift } from "@/components/motion/FadeLift";
import { ArrowLink, Eyebrow, Prose } from "@/components/primitives";
import { StickyPane } from "@/components/project/StickyPane";
import { ProjectVisual } from "@/components/project/visuals/ProjectVisual";
import { FormalVersion } from "@/components/thesis/FormalVersion";
import { HeterogeneityToggle } from "@/components/thesis/HeterogeneityToggle";
import { ThesisContents } from "@/components/thesis/ThesisContents";
import { ROUTES } from "@/config";
import { THESIS_SECTIONS, THESIS_TLDR } from "@/content/research";

export default function ThesisPage() {
  usePageView("research_thesis");
  const t = useT();

  const sectionIds = useMemo(
    () => THESIS_SECTIONS.map((section) => section.id),
    [],
  );
  const activeId = useScrollSpy(sectionIds);
  const activeIndex = Math.max(0, sectionIds.indexOf(activeId));

  return (
    <>
      <AmbientBackdrop />
      <Container width="wide">
        <FadeLift as="header" className="pb-10 pt-14 sm:pt-20">
          <Eyebrow className="mb-3">Thesis · in progress</Eyebrow>
          <h1 className="type-display max-w-4xl text-4xl text-ink sm:text-5xl">
            Portfolio-optimizing agentic scientific workflows across
            heterogeneous HPC resources
          </h1>
        </FadeLift>

        {/* TL;DR above the scroll: the whole argument, for a reader who stops here. */}
        <FadeLift delay={80}>
          <div className="rounded-2xl border border-line bg-paper-raised p-7 shadow-[var(--shadow-rest)] print-plain">
            <Eyebrow className="mb-4">{t("thesis.tldr")}</Eyebrow>
            <ol className="space-y-3">
              {THESIS_TLDR.map((sentence, index) => (
                <li key={index} className="flex gap-3">
                  <span className="type-eyebrow mt-1 shrink-0 text-amber tabular-nums">
                    {index + 1}
                  </span>
                  <p className="type-body text-[0.975rem] text-ink-muted">
                    {sentence}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </FadeLift>

        <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-[13rem_minmax(0,1fr)_minmax(0,24rem)] lg:gap-12">
          <aside className="lg:sticky lg:top-[calc(var(--nav-height)+2rem)] lg:h-fit no-print">
            <ThesisContents sections={THESIS_SECTIONS} activeId={activeId} />
          </aside>

          <div className="space-y-16">
            {THESIS_SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-[calc(var(--nav-height)+2rem)]"
              >
                <FadeLift>
                  <div className="flex items-baseline gap-3">
                    <span className="type-eyebrow text-ink-faint tabular-nums">
                      {section.index}
                    </span>
                    <h2 className="type-title text-xl text-ink sm:text-2xl">
                      {section.heading}
                    </h2>
                  </div>

                  <Prose className="mt-4">
                    {section.body.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </Prose>

                  {section.id === "heterogeneity" && <HeterogeneityToggle />}
                  {section.formal && <FormalVersion block={section.formal} />}

                  {section.id === "status" && (
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                      <ArrowLink to={ROUTES.project("flowgentic")}>
                        FlowGentic
                      </ArrowLink>
                      <ArrowLink to={ROUTES.project("binderflow-thesis")}>
                        BinderFlow
                      </ArrowLink>
                      <ArrowLink to={ROUTES.research}>All research</ArrowLink>
                    </div>
                  )}
                </FadeLift>
              </section>
            ))}
          </div>

          <div className="order-first no-print lg:order-none">
            <StickyPane className="lg:aspect-[4/5]">
              <ProjectVisual
                layers={THESIS_SECTIONS.map((section) => section.heading)}
                activeIndex={activeIndex}
              />
            </StickyPane>
          </div>
        </div>
      </Container>
    </>
  );
}
