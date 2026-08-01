/**
 * Timeline plus interactive globe, linked by clicks in both directions:
 * clicking a located role travels the globe there, and clicking a globe dot
 * highlights and scrolls to the matching role. Without WebGL or on mobile the
 * timeline stands alone and geography degrades to a plain list.
 */

import { useCallback, useState } from "react";
import { usePageView } from "@/hooks/useAnalytics";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { useT } from "@/providers/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { FadeLift } from "@/components/motion/FadeLift";
import { Eyebrow } from "@/components/primitives";
import { Timeline, MilestoneList } from "@/components/experience/Timeline";
import { CareerGlobe } from "@/components/experience/globe/CareerGlobe";
import {
  CAREER_MILESTONES,
  EXPERIENCE_ENTRIES,
  useLocalizedMilestones,
  type ExperienceEntry,
} from "@/content/experience";

export default function ExperiencePage() {
  usePageView("experience");
  const t = useT();
  const showGlobe = useWebGLSupport();
  const milestones = useLocalizedMilestones();

  const [activeMilestoneId, setActiveMilestoneId] = useState("segovia-madrid");
  const activeIndex = Math.max(
    0,
    CAREER_MILESTONES.findIndex((m) => m.id === activeMilestoneId),
  );

  const selectFromTimeline = useCallback((entry: ExperienceEntry) => {
    if (entry.milestoneId) setActiveMilestoneId(entry.milestoneId);
  }, []);

  const selectFromGlobe = useCallback((index: number) => {
    const milestone = CAREER_MILESTONES[index];
    if (!milestone) return;
    setActiveMilestoneId(milestone.id);
    // "Here I am": bring the matching role into view.
    const entry = EXPERIENCE_ENTRIES.find(
      (item) => item.milestoneId === milestone.id,
    );
    if (entry) {
      document
        .getElementById(`role-${entry.id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <>
      <AmbientBackdrop />
      <Container>
        <PageHeader
          title={t("experience.title")}
          description={t("experience.description")}
        />

        <div className="grid grid-cols-1 gap-12 pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,29rem)] lg:gap-14">
          <Timeline
            activeMilestoneId={activeMilestoneId}
            onEntrySelect={selectFromTimeline}
          />

          <aside>
            {showGlobe ? (
              <CareerGlobe
                activeIndex={activeIndex}
                onSelect={selectFromGlobe}
              />
            ) : (
              <FadeLift>
                <Eyebrow className="mb-4">{t("experience.geography")}</Eyebrow>
                <MilestoneList milestones={milestones} />
              </FadeLift>
            )}
          </aside>
        </div>
      </Container>
    </>
  );
}
