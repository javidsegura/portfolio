import { Container } from "@/components/layout/Container";
import { FadeLift } from "@/components/motion/FadeLift";
import { ArrowLink, Eyebrow, StatusDot } from "@/components/primitives";
import { OrgCloud } from "@/components/depth/OrgCloud";
import { CURRENT_STATUS, EXTERNAL_LINKS, ROUTES } from "@/config";
import { useSiteIdentity } from "@/hooks/useSiteIdentity";

interface HeroProps {
  /**
   * Whether the organisation cloud sits beside the text. False on mobile,
   * where the page renders it below the section panels instead.
   */
  showCloud?: boolean;
}

/**
 * Hero band: name on one line, one plain sentence, the availability badge and
 * links. On desktop the organisations I have worked with orbit as the cloud on
 * the right, doubling as the page's credentials strip.
 */
export function Hero({ showCloud = true }: HeroProps) {
  const identity = useSiteIdentity();

  return (
    <Container width="wide" className="pb-10 pt-10 sm:pt-14">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="min-w-0">
          <FadeLift>
            <Eyebrow className="mb-4">
              {identity.role} · {identity.location}
            </Eyebrow>
          </FadeLift>

          <FadeLift delay={60}>
            <h1 className="type-display text-[clamp(2.2rem,5vw,4.3rem)] text-ink sm:whitespace-nowrap">
              {identity.name}
            </h1>
          </FadeLift>

          <FadeLift delay={120}>
            <p className="type-body measure mt-5 text-lg text-ink-muted sm:text-xl">
              I build middleware that runs agentic AI workflows on
              supercomputers.
            </p>
            {/* LinkedIn-style compressed facts, one per audience. */}
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-faint">
              CS &amp; AI @ IE University / University of Michigan, Dean's List · SWE Intern @ Citi ·
              ML & HPC research  · Open source running on NCSA
              Delta 
            </p>
          </FadeLift>

          <FadeLift delay={180}>
            <p
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-amber/40
                         bg-amber-soft px-4 py-2 text-sm font-medium text-ink"
            >
              <StatusDot live />
              {CURRENT_STATUS.seeking}
            </p>
          </FadeLift>

          <FadeLift delay={240}>
            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
              <ArrowLink to={ROUTES.projects}>See the work</ArrowLink>
              <ArrowLink to={ROUTES.cv}>CV</ArrowLink>
              <ArrowLink to={EXTERNAL_LINKS.github} external>
                GitHub
              </ArrowLink>
              <ArrowLink to={EXTERNAL_LINKS.linkedin} external>
                LinkedIn
              </ArrowLink>
            </div>
          </FadeLift>
        </div>

        {showCloud && (
          <FadeLift delay={100} className="mx-auto shrink-0 lg:mx-0">
            <OrgCloud className="w-64 sm:w-80 lg:w-[22rem]" />
          </FadeLift>
        )}
      </div>
    </Container>
  );
}
