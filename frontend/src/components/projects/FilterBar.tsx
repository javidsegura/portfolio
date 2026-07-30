/**
 * Filter controls for the project index.
 *
 * Track (research / production / personal tools) is a separate axis from the
 * tech tags on purpose: recruiters filter by stack, reviewers filter by kind
 * of work, and collapsing the two loses one of those readings.
 */

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/providers/LanguageProvider";
import {
  ProjectCategories,
  ProjectTrack,
  TechStackCategories,
  getUsedTech,
  type ProjectFilters,
} from "@/content/projects";

interface FilterBarProps {
  filters: ProjectFilters;
  onChange: (filters: ProjectFilters) => void;
  resultCount: number;
  isDirty: boolean;
  onClear: () => void;
}

function SegmentedControl<T extends string>({
  options,
  value,
  onSelect,
}: {
  options: T[];
  value: T;
  onSelect: (next: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          aria-pressed={value === option}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200",
            value === option
              ? "bg-ink text-paper-raised"
              : "bg-paper-sunken text-ink-muted hover:text-ink",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function FilterBar({
  filters,
  onChange,
  resultCount,
  isDirty,
  onClear,
}: FilterBarProps) {
  const t = useT();
  const tech = getUsedTech();

  return (
    <div className="space-y-5 border-y border-line py-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
        <p className="type-eyebrow w-20 shrink-0 text-ink-faint">
          {t("projects.filterTrack")}
        </p>
        <SegmentedControl
          options={Object.values(ProjectTrack)}
          value={filters.track}
          onSelect={(track) => onChange({ ...filters, track })}
        />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
        <p className="type-eyebrow w-20 shrink-0 text-ink-faint">
          {t("projects.filterCategory")}
        </p>
        <SegmentedControl
          options={Object.values(ProjectCategories)}
          value={filters.category}
          onSelect={(category) => onChange({ ...filters, category })}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <p className="type-eyebrow w-20 shrink-0 text-ink-faint">
          {t("projects.filterTech")}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={filters.tech}
            onChange={(event) =>
              onChange({
                ...filters,
                tech: event.target.value as TechStackCategories,
              })
            }
            className="rounded-full border border-line bg-paper-raised px-3 py-1.5 text-xs
                       font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <option value={TechStackCategories.All}>
              {TechStackCategories.All}
            </option>
            {tech.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-ink-muted">
            <input
              type="checkbox"
              checked={filters.papersOnly}
              onChange={(event) =>
                onChange({ ...filters, papersOnly: event.target.checked })
              }
              className="h-3.5 w-3.5 accent-[var(--amber)]"
            />
            {t("projects.papersOnly")}
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 pt-1">
        <p className="text-xs text-ink-faint">
          {resultCount} {t("projects.count")}
        </p>
        {isDirty && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-xs font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <X size={12} />
            {t("projects.clear")}
          </button>
        )}
      </div>
    </div>
  );
}
