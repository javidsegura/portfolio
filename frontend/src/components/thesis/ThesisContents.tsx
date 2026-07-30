import { cn } from "@/lib/utils";
import { useT } from "@/providers/LanguageProvider";
import type { ThesisSection } from "@/content/research";

/**
 * Anchor rail. The numbering is real reading order, which is the only case
 * where numbered sections earn their keep.
 */
export function ThesisContents({
  sections,
  activeId,
}: {
  sections: ThesisSection[];
  activeId: string;
}) {
  const t = useT();

  return (
    <nav aria-label={t("thesis.contents")} className="hidden lg:block">
      <p className="type-eyebrow mb-4 text-ink-faint">{t("thesis.contents")}</p>
      <ol className="space-y-2.5 border-l border-line">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "-ml-px flex gap-2.5 border-l-2 py-0.5 pl-4 text-sm transition-colors duration-200",
                  isActive
                    ? "border-amber font-medium text-ink"
                    : "border-transparent text-ink-faint hover:text-ink-muted",
                )}
              >
                <span className="tabular-nums">{section.index}</span>
                <span>{section.heading}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
