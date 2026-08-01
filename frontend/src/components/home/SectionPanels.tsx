/**
 * The homepage body: four panels stretching from the hero's dividing rule to
 * the bottom of the viewport, each a doorway to a section.
 *
 * The first panel sits pre-lit so the row does not read as empty before the
 * first hover, and every background breathes slowly so the row has ambient
 * life. Hover lifts a card toward the viewer with a bounced ease and brings
 * its image fully alive.
 */

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LocaleLink } from "@/components/primitives";
import { FadeLift } from "@/components/motion/FadeLift";
import { useT } from "@/providers/LanguageProvider";
import type { TranslationKey } from "@/content/i18n";
import { HOME_PANELS, type HomePanel } from "./panels.config";

function PanelBackground({ panel, lit }: { panel: HomePanel; lit: boolean }) {
  if (panel.image) {
    return (
      <>
        <img
          src={panel.image}
          alt=""
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-[opacity,filter,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-60 group-hover:saturate-100",
            lit ? "opacity-55 saturate-100" : "opacity-20 saturate-0",
          )}
        />
        {/* Keeps the type legible once the photo comes to life. */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-paper-raised via-paper-raised/70 to-transparent" />
      </>
    );
  }

  const { Icon } = panel;
  return (
    <>
      <div
        className={cn(
          "grid-plane-fine anim-breathe absolute inset-0 transition-opacity duration-700 group-hover:opacity-70",
          lit ? "opacity-70" : "opacity-40",
        )}
      />
      <Icon
        aria-hidden
        className={cn(
          "absolute -right-4 top-6 h-32 w-32 text-ink transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:opacity-[0.11]",
          lit ? "opacity-[0.10]" : "opacity-[0.05]",
        )}
        strokeWidth={1.2}
      />
    </>
  );
}

function SectionPanel({
  panel,
  delay,
  lit,
}: {
  panel: HomePanel;
  delay: number;
  lit: boolean;
}) {
  const t = useT();

  return (
    <FadeLift delay={delay} className="h-full min-w-0">
      <LocaleLink
        to={panel.to}
        className={cn(
          "group relative flex h-full min-h-[9rem] flex-col justify-end overflow-hidden rounded-2xl border bg-paper-raised p-5 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-line-strong hover:shadow-[var(--shadow-iso)] hover:[transform:perspective(1100px)_rotateX(3deg)_translateY(-8px)] motion-reduce:hover:transform-none",
          lit
            ? "border-line-strong shadow-[var(--shadow-lift)]"
            : "border-line shadow-[var(--shadow-rest)]",
        )}
      >
        <PanelBackground panel={panel} lit={lit} />

        <ArrowRight
          size={16}
          className="absolute right-4 top-4 z-10 -translate-x-1 text-ink opacity-0
                     transition-[opacity,transform] duration-400
                     ease-[cubic-bezier(0.34,1.56,0.64,1)]
                     group-hover:translate-x-0 group-hover:opacity-100"
        />

        <div className="relative z-10">
          <h2
            className="type-title text-xl text-ink transition-transform duration-500
                       ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-0.5 sm:text-2xl"
          >
            {t(panel.titleKey as TranslationKey)}
          </h2>
          <p
            className={cn(
              "type-body mt-1.5 text-sm text-ink-muted transition-opacity duration-400 group-hover:opacity-100",
              lit ? "opacity-100" : "opacity-70",
            )}
          >
            {t(panel.descKey as TranslationKey)}
          </p>
        </div>
      </LocaleLink>
    </FadeLift>
  );
}

export function SectionPanels() {
  return (
    <div className="grid flex-1 grid-cols-1 gap-3 pb-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      {HOME_PANELS.map((panel, index) => (
        <SectionPanel
          key={panel.id}
          panel={panel}
          delay={index * 70}
          lit={index === 0}
        />
      ))}
    </div>
  );
}
