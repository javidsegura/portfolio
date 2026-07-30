import { usePageView } from "@/hooks/useAnalytics";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { Container } from "@/components/layout/Container";
import { SectionPanels } from "@/components/home/SectionPanels";
import { Hero } from "./sections/Hero";

/**
 * One viewport: the hero on top, a dividing rule, and the four section panels
 * stretching from the rule to the bottom. Scrolling past reveals only the
 * footer.
 */
export default function HomePage() {
  usePageView("home");

  return (
    <>
      <AmbientBackdrop variant="home" />
      <div className="flex flex-col lg:min-h-[calc(100vh-var(--nav-height))]">
        <Hero />
        <Container
          width="wide"
          className="flex flex-1 flex-col border-t border-line pt-5"
        >
          <SectionPanels />
        </Container>
      </div>
    </>
  );
}
