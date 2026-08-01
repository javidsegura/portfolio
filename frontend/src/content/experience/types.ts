/**
 * Spanish overlays for experience content.
 *
 * Kept separate from the canonical English records so the source data stays
 * single-source, and a missing translation degrades to English rather than
 * rendering an empty field.
 */

/** Overlay for one `ExperienceEntry`, keyed by its `id`. */
export interface ExperienceTranslation {
  title: string;
  company: string;
  description: string;
  date: string;
}

/** Overlay for one `CareerMilestone`, keyed by its `id`. */
export interface MilestoneTranslation {
  city: string;
  country: string;
  year: string;
  label: string;
  detail: string;
}
