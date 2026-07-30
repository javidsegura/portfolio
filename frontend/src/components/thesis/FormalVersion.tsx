import { ChevronRight } from "lucide-react";
import type { FormalBlock } from "@/content/research";
import { useT } from "@/providers/LanguageProvider";

/**
 * Collapsible maths. Native `details` so it is keyboard accessible, findable
 * by in-page search, and open by default when printed.
 */
export function FormalVersion({ block }: { block: FormalBlock }) {
  const t = useT();

  return (
    <details className="group mt-6 rounded-xl border border-line bg-paper-sunken/60 print:open">
      <summary
        className="flex cursor-pointer list-none items-center gap-2 px-5 py-3.5
                   text-sm font-medium text-ink-muted transition-colors hover:text-ink
                   [&::-webkit-details-marker]:hidden"
      >
        <ChevronRight
          size={14}
          className="transition-transform duration-200 group-open:rotate-90"
        />
        {block.title || t("thesis.formal")}
      </summary>
      <div className="type-body border-t border-line px-5 py-4 text-sm text-ink-muted">
        {block.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </details>
  );
}
