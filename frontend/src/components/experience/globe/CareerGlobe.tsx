/**
 * Globe wrapper: the scene plus the info card for whichever milestone is
 * currently in focus. On mobile and without WebGL this renders nothing and the
 * page falls back to a plain geography list.
 */

import { Suspense, lazy, useState } from "react";
import { Loader2, Minus, Plus } from "lucide-react";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { CAREER_MILESTONES } from "@/content/experience/milestones";
import { getAffiliationMark } from "@/components/brand/affiliationMarks";
import { COUNTRY_FLAGS } from "@/components/brand/FlagIcon";
import { Chip } from "@/components/primitives";

const GlobeScene = lazy(() => import("./GlobeScene"));

interface CareerGlobeProps {
  activeIndex: number;
  /** Selecting a marker scrolls the timeline to the matching role. */
  onSelect: (index: number) => void;
}

const MIN_DISTANCE = 1.8;
const MAX_DISTANCE = 5.2;
const STEP = 0.6;

export function CareerGlobe({ activeIndex, onSelect }: CareerGlobeProps) {
  const canRender3D = useWebGLSupport();
  const [distance, setDistance] = useState(3.3);
  const milestone = CAREER_MILESTONES[activeIndex];

  const zoom = (delta: number) =>
    setDistance((current) =>
      Math.min(MAX_DISTANCE, Math.max(MIN_DISTANCE, current + delta)),
    );

  if (!canRender3D) return null;

  return (
    <div className="lg:sticky lg:top-[calc(var(--nav-height)+2rem)]">
      <div className="relative aspect-square w-full">
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center">
              <Loader2 className="h-5 w-5 animate-spin text-ink-faint" />
            </div>
          }
        >
          <GlobeScene
            activeIndex={activeIndex}
            onSelect={onSelect}
            distance={distance}
          />
        </Suspense>

        <div className="absolute bottom-3 right-3 flex flex-col gap-1.5">
          <button
            type="button"
            onClick={() => zoom(-STEP)}
            aria-label="Zoom in"
            disabled={distance <= MIN_DISTANCE}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line
                       bg-paper-raised text-ink-muted shadow-[var(--shadow-rest)] transition
                       hover:text-ink disabled:opacity-35"
          >
            <Plus size={14} />
          </button>
          <button
            type="button"
            onClick={() => zoom(STEP)}
            aria-label="Zoom out"
            disabled={distance >= MAX_DISTANCE}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line
                       bg-paper-raised text-ink-muted shadow-[var(--shadow-rest)] transition
                       hover:text-ink disabled:opacity-35"
          >
            <Minus size={14} />
          </button>
        </div>
      </div>

      {milestone && (
        <div className="rounded-2xl border border-line bg-paper-raised p-5 shadow-[var(--shadow-rest)]">
          <div className="mb-1 flex items-baseline justify-between gap-3">
            <p className="type-title text-base text-ink">{milestone.city}</p>
            <Chip accent>{milestone.year}</Chip>
          </div>

          {(() => {
            const Flag = COUNTRY_FLAGS[milestone.countryCode];
            return (
              <p className="mb-2 flex items-center gap-1.5 text-xs text-ink-faint">
                {Flag && <Flag className="h-3 w-[1.05rem] rounded-[2px]" />}
                {milestone.country}
              </p>
            );
          })()}

          <p className="text-sm font-medium text-ink-muted">{milestone.label}</p>
          <p className="type-body mt-1.5 text-sm text-ink-faint">
            {milestone.detail}
          </p>

          {milestone.orgIds.length > 0 && (
            <div className="mt-4 flex items-center gap-4 border-t border-line pt-4">
              {milestone.orgIds.map((orgId) => {
                const mark = getAffiliationMark(orgId);
                if (!mark) return null;
                return mark.logo ? (
                  <img
                    key={orgId}
                    src={mark.logo}
                    alt={mark.name}
                    title={mark.name}
                    className="h-6 w-auto max-w-[5rem] object-contain opacity-70"
                  />
                ) : (
                  <span
                    key={orgId}
                    title={mark.name}
                    className="text-xs font-bold uppercase tracking-[0.18em] text-ink-muted"
                  >
                    {mark.wordmark}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}

      <p className="mt-3 text-center text-xs text-ink-faint">
        Drag to spin · click a dot, or a timeline entry, to travel
      </p>
    </div>
  );
}
