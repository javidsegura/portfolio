import { ArrowLeft, ArrowRight } from "lucide-react";
import { LocaleLink } from "@/components/primitives";
import { ROUTES } from "@/config";
import { useT } from "@/providers/LanguageProvider";
import { getAdjacent } from "@/content/projects";

/** Wrapping prev/next, so a reader who keeps clicking never dead-ends. */
export function PrevNextNav({ slug }: { slug: string }) {
  const t = useT();
  const { prev, next } = getAdjacent(slug);

  return (
    <nav className="mt-20 grid grid-cols-1 gap-3 border-t border-line pt-8 sm:grid-cols-2">
      {prev && (
        <LocaleLink
          to={ROUTES.project(prev.slug)}
          className="group rounded-xl border border-line bg-paper-raised p-5 transition-colors hover:border-line-strong"
        >
          <span className="type-eyebrow flex items-center gap-1.5 text-ink-faint">
            <ArrowLeft
              size={12}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            {t("project.prev")}
          </span>
          <span className="mt-1.5 block text-sm font-medium text-ink">
            {prev.title}
          </span>
        </LocaleLink>
      )}

      {next && (
        <LocaleLink
          to={ROUTES.project(next.slug)}
          className="group rounded-xl border border-line bg-paper-raised p-5 text-right transition-colors hover:border-line-strong sm:col-start-2"
        >
          <span className="type-eyebrow flex items-center justify-end gap-1.5 text-ink-faint">
            {t("project.next")}
            <ArrowRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
          <span className="mt-1.5 block text-sm font-medium text-ink">
            {next.title}
          </span>
        </LocaleLink>
      )}
    </nav>
  );
}
