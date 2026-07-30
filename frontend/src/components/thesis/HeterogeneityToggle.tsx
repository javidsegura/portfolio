/**
 * The four heterogeneity dimensions, as a toggle.
 *
 * Enabling a dimension multiplies the visible decision space, which is the
 * argument the section is making: the space is large because uncertainty
 * compounds, not because there are many machines.
 */

import { useState } from "react";
import { cn } from "@/lib/utils";
import { HETEROGENEITY_DIMENSIONS } from "@/content/research";

const MAX_CELLS = 180;

export function HeterogeneityToggle() {
  const [enabled, setEnabled] = useState<string[]>([
    HETEROGENEITY_DIMENSIONS[0]!.id,
  ]);

  const toggle = (id: string) =>
    setEnabled((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );

  const space = HETEROGENEITY_DIMENSIONS.filter((dimension) =>
    enabled.includes(dimension.id),
  ).reduce((total, dimension) => total * dimension.factor, 1);

  const cells = Math.min(space, MAX_CELLS);

  return (
    <div className="mt-6 rounded-2xl border border-line bg-paper-raised p-6 shadow-[var(--shadow-rest)]">
      <div className="flex flex-wrap gap-2">
        {HETEROGENEITY_DIMENSIONS.map((dimension) => {
          const isOn = enabled.includes(dimension.id);
          return (
            <button
              key={dimension.id}
              type="button"
              onClick={() => toggle(dimension.id)}
              aria-pressed={isOn}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-200",
                isOn
                  ? "border-amber/45 bg-amber-soft text-ink"
                  : "border-line bg-paper-sunken text-ink-muted hover:text-ink",
              )}
            >
              {dimension.name}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(0.55rem,1fr))] gap-1">
        {Array.from({ length: cells }, (_, index) => (
          <span
            key={index}
            className="aspect-square rounded-[2px] bg-amber/70 transition-opacity duration-500"
            style={{ opacity: 0.25 + (index / cells) * 0.75 }}
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-ink-muted">
        <span className="font-medium text-ink">
          {space.toLocaleString()} placements
        </span>{" "}
        to reason about
        {space > MAX_CELLS && (
          <span className="text-ink-faint"> (showing {MAX_CELLS})</span>
        )}
        .
      </p>

      <ul className="mt-4 space-y-2 border-t border-line pt-4">
        {HETEROGENEITY_DIMENSIONS.filter((dimension) =>
          enabled.includes(dimension.id),
        ).map((dimension) => (
          <li key={dimension.id} className="text-sm">
            <span className="font-medium text-ink">{dimension.name}</span>
            <span className="text-ink-faint"> — {dimension.short}. </span>
            <span className="text-ink-muted">{dimension.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
