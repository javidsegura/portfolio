/** Project content model. Extends the original card shape rather than replacing it. */

import type {
  Organizations,
  ProjectCategories,
  ProjectStatus,
  ProjectTier,
  ProjectTrack,
} from "./enums";

/**
 * One scroll step of a project page. The left column renders `body`; the
 * sticky right pane switches its state on `id` as the section enters view.
 */
export interface NarrativeSection {
  id: string;
  heading: string;
  body: string[];
  /** True while the copy is structural placeholder awaiting real writing. */
  draft?: boolean;
}

export interface ProjectLinks {
  github?: string;
  paper?: string;
  deepDive?: string;
  demo?: string;
  docs?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One line, used on cards and as the page subtitle. */
  tagline: string;
  categories: ProjectCategories[];
  track: ProjectTrack;
  status: ProjectStatus;
  tier: ProjectTier;
  description: string;
  impact: string;
  role: string;
  date: string;
  techstack: string[];
  /** Organisations this work was done with. */
  orgIds?: Organizations[];
  featured: boolean;
  hasPaper: boolean;
  links: ProjectLinks;
  /** Video for the media pane. Takes precedence over `imageURL`. */
  videoURL?: string;
  /**
   * Still image for the media pane: an imported asset from
   * `src/assets/projects/` or a plain URL. Shown when there is no video;
   * without either the pane reads "No image available".
   */
  imageURL?: string;
  narrative: NarrativeSection[];
}

/** One narrative section's translated copy. */
export interface NarrativeTranslation {
  heading: string;
  body: string[];
}

/**
 * Spanish overlay for a project, merged over the English record at render
 * time. Kept separate from `Project` so the canonical data stays single-source
 * and a missing translation degrades to English rather than breaking.
 */
export interface ProjectTranslation {
  tagline: string;
  description: string;
  impact: string;
  role: string;
  /** Keyed by the English section's `id`. */
  narrative: Record<string, NarrativeTranslation>;
}

/** Props for the grid card, derived from the full record. */
export type ProjectCardData = Pick<
  Project,
  | "slug"
  | "title"
  | "tagline"
  | "categories"
  | "track"
  | "date"
  | "techstack"
  | "orgIds"
  | "hasPaper"
  | "impact"
  | "status"
>;
