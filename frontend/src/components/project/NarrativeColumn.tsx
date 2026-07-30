import { FadeLift } from "@/components/motion/FadeLift";
import { Prose } from "@/components/primitives";
import { useT } from "@/providers/LanguageProvider";
import type { NarrativeSection } from "@/content/projects";

/**
 * Scrolling long-form column. Each section is an anchor target, which is what
 * lets the sticky pane track reading position and what makes sections
 * individually linkable.
 */
export function NarrativeColumn({ sections }: { sections: NarrativeSection[] }) {
  const t = useT();

  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-[calc(var(--nav-height)+2rem)]"
        >
          <FadeLift>
            <h2 className="type-title text-xl text-ink sm:text-2xl">
              {section.heading}
            </h2>
            {section.draft && (
              <p className="mt-2 inline-block rounded-full bg-paper-sunken px-2.5 py-1 text-[0.7rem] text-ink-faint">
                {t("project.draft")}
              </p>
            )}
            <Prose className="mt-4">
              {section.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </Prose>
          </FadeLift>
        </section>
      ))}
    </div>
  );
}
