/**
 * The flagship template: scrolling narrative on the left, sticky visual pane
 * on the right whose state advances with reading position.
 *
 * Both project tiers share this skeleton. The only difference is what fills
 * the pane, which `ProjectVisual` / `MediaPane` decide.
 */

import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { usePageView } from "@/hooks/useAnalytics";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useT } from "@/providers/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { FadeLift } from "@/components/motion/FadeLift";
import { LocaleLink, Eyebrow } from "@/components/primitives";
import { MetaBlock } from "@/components/project/MetaBlock";
import { StickyPane } from "@/components/project/StickyPane";
import { NarrativeColumn } from "@/components/project/NarrativeColumn";
import { PrevNextNav } from "@/components/project/PrevNextNav";
import { ProjectVisual } from "@/components/project/visuals/ProjectVisual";
import { MediaPane } from "@/components/project/visuals/MediaPane";
import { ROUTES } from "@/config";
import { ProjectTier, getProject } from "@/content/projects";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug);
  const t = useT();

  const sectionIds = useMemo(
    () => project?.narrative.map((section) => section.id) ?? [],
    [project],
  );
  const activeId = useScrollSpy(sectionIds);

  usePageView(`project_${slug ?? "unknown"}`);

  if (!project) return <Navigate to={ROUTES.projects} replace />;

  const activeIndex = Math.max(0, sectionIds.indexOf(activeId));
  const layers = project.narrative.map((section) => section.heading);

  return (
    <>
      <AmbientBackdrop />
      <Container width="wide">
        <FadeLift as="header" className="pb-10 pt-14 sm:pt-20">
          <LocaleLink
            to={ROUTES.projects}
            className="group mb-6 inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            {t("project.back")}
          </LocaleLink>

          <Eyebrow className="mb-3">{project.track}</Eyebrow>
          <h1 className="type-display max-w-3xl text-4xl text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="type-body measure mt-4 text-lg text-ink-muted">
            {project.tagline}
          </p>
        </FadeLift>

        <FadeLift delay={80}>
          <MetaBlock project={project} />
        </FadeLift>

        <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <NarrativeColumn sections={project.narrative} />

          <div className="order-first lg:order-none">
            <StickyPane>
              {project.tier === ProjectTier.Full ? (
                <ProjectVisual
                  layers={layers}
                  activeIndex={activeIndex}
                  caption={project.title}
                />
              ) : (
                <MediaPane videoURL={project.videoURL} title={project.title} />
              )}
            </StickyPane>
          </div>
        </div>

        <PrevNextNav slug={project.slug} />
        <div className="h-16" />
      </Container>
    </>
  );
}
