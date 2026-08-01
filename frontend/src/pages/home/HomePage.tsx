import { usePageView } from "@/hooks/useAnalytics";
import { useResponsive } from "@/hooks/useResponsive";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { Container } from "@/components/layout/Container";
import { FadeLift } from "@/components/motion/FadeLift";
import { OrgCloud } from "@/components/depth/OrgCloud";
import { SectionPanels } from "@/components/home/SectionPanels";
import { Hero } from "./sections/Hero";

/**
 * Desktop: one viewport — hero with the organisation cloud beside it, then the
 * four section panels filling the remaining height.
 *
 * Mobile: the cloud moves below the panels, so the vertical read is hero →
 * panels → animation. The cloud is mounted in exactly one place rather than
 * rendered twice and hidden with CSS, which would run two animation loops.
 */
export default function HomePage() {
  usePageView("home");
  const { isMobile } = useResponsive();

  return (
    <>
      <AmbientBackdrop variant="home" />
      <div className="flex flex-col lg:min-h-[calc(100vh-var(--nav-height))]">
        <Hero showCloud={!isMobile} />

        <Container
          width="wide"
          className="flex flex-1 flex-col border-t border-line pt-5"
        >
          <SectionPanels />

          {isMobile && (
            <FadeLift className="border-t border-line pb-4 pt-8">
              <OrgCloud className="mx-auto w-64 sm:w-80" />
            </FadeLift>
          )}
        </Container>
      </div>
    </>
  );
}
