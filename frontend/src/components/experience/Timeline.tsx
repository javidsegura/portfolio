import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeLift } from "@/components/motion/FadeLift";
import { ArrowLink, Chip } from "@/components/primitives";
import { ROUTES } from "@/config";
import { useT } from "@/providers/LanguageProvider";
import {
  useLocalizedExperience,
  type ExperienceEntry,
} from "@/content/experience";
import { getProject, useLocalizedProject } from "@/content/projects";

/** Own component so the localisation hook is not called inside a loop. */
function RelatedProjectLink({ slug }: { slug: string }) {
  const project = useLocalizedProject(getProject(slug));
  if (!project) return null;
  return <ArrowLink to={ROUTES.project(slug)}>{project.title}</ArrowLink>;
}

interface TimelineProps {
  /** Milestone currently focused on the globe; matching entries highlight. */
  activeMilestoneId?: string;
  /** Fired when a role with a location is clicked, to move the globe. */
  onEntrySelect?: (entry: ExperienceEntry) => void;
}

/**
 * Full timeline, at LinkedIn parity because for some readers this site is the
 * only version they see. Clicking a located role travels the globe to it, and
 * globe clicks highlight the role back — the "here I am" handshake.
 */
export function Timeline({ activeMilestoneId, onEntrySelect }: TimelineProps) {
  const t = useT();
  const entries = useLocalizedExperience();

  return (
    <ol className="relative border-l border-line">
      {entries.map((entry) => {
        const isActive =
          Boolean(entry.milestoneId) && entry.milestoneId === activeMilestoneId;
        const isLocatable = Boolean(entry.milestoneId && onEntrySelect);

        return (
          <li
            key={entry.id}
            id={`role-${entry.id}`}
            className="scroll-mt-[calc(var(--nav-height)+4rem)] pb-8 pl-5 last:pb-0 sm:pl-7"
          >
            <span
              className={cn(
                "absolute -left-[5px] mt-5 h-2.5 w-2.5 rounded-full border-2 border-paper transition-colors duration-300",
                isActive ? "bg-amber" : "bg-line-strong",
              )}
            />

            <FadeLift>
              <div
                onClick={isLocatable ? () => onEntrySelect?.(entry) : undefined}
                className={cn(
                  "-my-1 flex items-start gap-4 rounded-xl p-4 transition-all duration-300",
                  isLocatable && "cursor-pointer hover:bg-paper-sunken/60",
                  isActive &&
                    "bg-amber-soft/45 ring-1 ring-amber/35 hover:bg-amber-soft/45",
                )}
              >
                <img
                  src={entry.imageUrl}
                  alt=""
                  className="mt-0.5 h-9 w-9 shrink-0 rounded-lg border border-line bg-paper-raised object-contain p-1"
                />
                <div className="min-w-0">
                  <p className="text-xs text-ink-faint">{entry.date}</p>
                  <h3 className="type-title mt-1 text-lg text-ink">
                    {entry.title}
                  </h3>
                  <p className="text-sm font-medium text-ink-muted">
                    {entry.company}
                  </p>
                  <p className="type-body measure mt-2 text-sm text-ink-muted">
                    {entry.description}
                  </p>

                  {entry.projectSlugs && entry.projectSlugs.length > 0 && (
                    <div className="mt-4">
                      <p className="type-eyebrow mb-2 text-ink-faint">
                        {t("experience.related")}
                      </p>
                      <div className="flex flex-wrap gap-x-5 gap-y-2">
                        {entry.projectSlugs.map((slug) => (
                          <RelatedProjectLink key={slug} slug={slug} />
                        ))}
                      </div>
                    </div>
                  )}

                  {entry.contentLink && (
                    <a
                      href={entry.contentLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(event) => event.stopPropagation()}
                      className="group mt-3 inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {t("experience.reference")}
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </div>
            </FadeLift>
          </li>
        );
      })}
    </ol>
  );
}

/** Compact geography list, shown where the globe is not rendered. */
export function MilestoneList({
  milestones,
}: {
  milestones: { id: string; city: string; year: string; label: string }[];
}) {
  return (
    <ul className="space-y-3">
      {milestones.map((milestone) => (
        <li key={milestone.id} className="border-t border-line pt-3">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-sm font-medium text-ink">
              {milestone.city}
            </span>
            <Chip>{milestone.year}</Chip>
          </div>
          <p className="mt-1 text-sm text-ink-muted">{milestone.label}</p>
        </li>
      ))}
    </ul>
  );
}
