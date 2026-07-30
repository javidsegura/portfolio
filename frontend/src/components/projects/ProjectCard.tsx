/**
 * Grid card on /projects. A router link, not a modal trigger: the whole point
 * of the rebuild is that every project has a URL you can send someone.
 */

import { ArrowRight, FileText } from "lucide-react";
import { LocaleLink, Chip } from "@/components/primitives";
import { FadeLift } from "@/components/motion/FadeLift";
import { ROUTES } from "@/config";
import { getAffiliationMark } from "@/components/brand/affiliationMarks";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <FadeLift delay={delay} className="min-w-0">
      <LocaleLink
        to={ROUTES.project(project.slug)}
        className="group flex h-full flex-col rounded-2xl border border-line bg-paper-raised p-6
                   shadow-[var(--shadow-rest)] transition-[transform,box-shadow,border-color]
                   duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                   hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[var(--shadow-lift)]
                   motion-reduce:hover:translate-y-0"
      >
        <div className="mb-2 flex items-start justify-between gap-3">
          <p className="type-eyebrow text-ink-faint">{project.track}</p>
          {project.hasPaper && (
            <FileText size={15} className="shrink-0 text-ink-faint" />
          )}
        </div>

        <h3 className="type-title text-lg text-ink">{project.title}</h3>
        <p className="type-body mt-1.5 text-sm text-ink-muted">{project.tagline}</p>

        <p className="mt-4 border-l-2 border-amber/50 pl-3 text-sm text-ink-muted">
          {project.impact}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techstack.slice(0, 4).map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
          {project.techstack.length > 4 && (
            <Chip>+{project.techstack.length - 4}</Chip>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-ink-faint">
          <span className="flex items-center gap-3">
            {project.date}
            {project.orgIds && project.orgIds.length > 0 && (
              <span className="flex items-center gap-2 border-l border-line pl-3">
                {project.orgIds.map((orgId) => {
                  const mark = getAffiliationMark(orgId);
                  if (!mark?.logo) return null;
                  return (
                    <img
                      key={orgId}
                      src={mark.logo}
                      alt={mark.name}
                      title={mark.name}
                      className="h-4 w-auto max-w-[3.5rem] object-contain opacity-70"
                      loading="lazy"
                    />
                  );
                })}
              </span>
            )}
          </span>
          <ArrowRight
            size={15}
            className="text-ink transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </LocaleLink>
    </FadeLift>
  );
}
