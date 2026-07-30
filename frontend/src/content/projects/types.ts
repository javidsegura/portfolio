/** Project content model. Extends the original card shape rather than replacing it. */

import type {
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
  /** Affiliation-mark ids of organisations this work was done with. */
  orgIds?: string[];
  featured: boolean;
  hasPaper: boolean;
  links: ProjectLinks;
  videoURL?: string;
  narrative: NarrativeSection[];
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
