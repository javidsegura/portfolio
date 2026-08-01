/**
 * Merges the Spanish overlays onto experience entries and globe milestones.
 *
 * English stays canonical; a missing translation falls back field by field.
 */

import { useMemo } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { EXPERIENCE_ENTRIES, type ExperienceEntry } from "./data";
import { CAREER_MILESTONES, type CareerMilestone } from "./milestones";
import {
  EXPERIENCE_TRANSLATIONS_ES,
  MILESTONE_TRANSLATIONS_ES,
} from "./translations.es";

/** Timeline entries in the active locale. */
export function useLocalizedExperience(): ExperienceEntry[] {
  const { locale } = useLanguage();
  return useMemo(() => {
    if (locale !== "es") return EXPERIENCE_ENTRIES;
    return EXPERIENCE_ENTRIES.map((entry) => {
      const translation = EXPERIENCE_TRANSLATIONS_ES[entry.id];
      if (!translation) return entry;
      return {
        ...entry,
        title: translation.title || entry.title,
        company: translation.company || entry.company,
        description: translation.description || entry.description,
        date: translation.date || entry.date,
      };
    });
  }, [locale]);
}

/** Globe milestones in the active locale. */
export function useLocalizedMilestones(): CareerMilestone[] {
  const { locale } = useLanguage();
  return useMemo(() => {
    if (locale !== "es") return CAREER_MILESTONES;
    return CAREER_MILESTONES.map((milestone) => {
      const translation = MILESTONE_TRANSLATIONS_ES[milestone.id];
      if (!translation) return milestone;
      return {
        ...milestone,
        city: translation.city || milestone.city,
        country: translation.country || milestone.country,
        year: translation.year || milestone.year,
        label: translation.label || milestone.label,
        detail: translation.detail || milestone.detail,
      };
    });
  }, [locale]);
}
