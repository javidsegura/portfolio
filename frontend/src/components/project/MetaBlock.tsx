import { ExternalLink, FileText, Github, Globe } from "lucide-react";
import { Chip } from "@/components/primitives";
import { useT } from "@/providers/LanguageProvider";
import { getAffiliationMark } from "@/components/brand/affiliationMarks";
import type { Project } from "@/content/projects";

/** Stack, role, dates, status and outbound links. Scannable in one pass. */
export function MetaBlock({ project }: { project: Project }) {
  const t = useT();

  const links = [
    { href: project.links.github, label: t("project.repo"), Icon: Github },
    { href: project.links.demo, label: t("project.demo"), Icon: Globe },
    { href: project.links.docs, label: t("project.docs"), Icon: ExternalLink },
    { href: project.links.paper, label: t("project.paper"), Icon: FileText },
    {
      href: project.links.deepDive,
      label: t("project.deepDive"),
      Icon: ExternalLink,
    },
  ].filter((link) => Boolean(link.href));

  return (
    <div className="rounded-2xl border border-line bg-paper-raised p-6 shadow-[var(--shadow-rest)]">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
        <div>
          <dt className="type-eyebrow text-ink-faint">{t("project.role")}</dt>
          <dd className="mt-1 text-sm text-ink">{project.role}</dd>
        </div>
        <div>
          <dt className="type-eyebrow text-ink-faint">{t("project.dates")}</dt>
          <dd className="mt-1 text-sm text-ink">{project.date}</dd>
        </div>
        <div>
          <dt className="type-eyebrow text-ink-faint">{t("project.status")}</dt>
          <dd className="mt-1 text-sm text-ink">{project.status}</dd>
        </div>
        <div>
          <dt className="type-eyebrow text-ink-faint">Type</dt>
          <dd className="mt-1 text-sm text-ink">{project.track}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <p className="type-eyebrow mb-2 text-ink-faint">{t("project.stack")}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techstack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </div>

      {project.orgIds && project.orgIds.length > 0 && (
        <div className="mt-6">
          <p className="type-eyebrow mb-2 text-ink-faint">With</p>
          <div className="flex flex-wrap items-center gap-4">
            {project.orgIds.map((orgId) => {
              const mark = getAffiliationMark(orgId);
              if (!mark?.logo) return null;
              return (
                <img
                  key={orgId}
                  src={mark.logo}
                  alt={mark.name}
                  title={mark.name}
                  className="h-6 w-auto max-w-[5rem] object-contain opacity-75"
                />
              );
            })}
          </div>
        </div>
      )}

      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-ink-muted"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
