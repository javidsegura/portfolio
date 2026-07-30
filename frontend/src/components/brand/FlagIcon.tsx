/**
 * Tiny inline SVG flags — hand-drawn simplifications, no emoji, no external
 * asset, crisp at 16px. `COUNTRY_FLAGS` maps ISO 3166-1 alpha-2 codes to the
 * component, for data-driven use (globe summary card, language toggle).
 */

import type { ComponentType } from "react";

interface FlagProps {
  className?: string;
}

export function FlagUS({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true" role="img">
      <rect width="20" height="14" fill="#f5f0ec" rx="2" />
      {[1, 3, 5, 7, 9, 11].map((y) => (
        <rect key={y} y={y} width="20" height="1.1" fill="#c8452f" />
      ))}
      <rect width="9" height="7" fill="#33456e" rx="1.4" />
    </svg>
  );
}

export function FlagES({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true" role="img">
      <rect width="20" height="14" fill="#c8452f" rx="2" />
      <rect y="3.5" width="20" height="7" fill="#e6b422" />
    </svg>
  );
}

export function FlagPL({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true" role="img">
      <rect width="20" height="14" fill="#f5f0ec" rx="2" />
      <path d="M0 7h20v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" fill="#c8452f" />
    </svg>
  );
}

export function FlagCH({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true" role="img">
      <rect width="20" height="14" fill="#c8452f" rx="2" />
      <rect x="8.75" y="3" width="2.5" height="8" fill="#f5f0ec" />
      <rect x="6" y="5.75" width="8" height="2.5" fill="#f5f0ec" />
    </svg>
  );
}

/** ISO country code → flag component. Extend as milestones add countries. */
export const COUNTRY_FLAGS: Record<string, ComponentType<FlagProps>> = {
  US: FlagUS,
  ES: FlagES,
  PL: FlagPL,
  CH: FlagCH,
};
