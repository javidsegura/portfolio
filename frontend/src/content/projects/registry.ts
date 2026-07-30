/** Lookups over the project list. Keeps components free of array plumbing. */

import { PROJECTS } from "./data";
import { ProjectCategories, ProjectTrack, TechStackCategories } from "./enums";
import type { Project } from "./types";

const BY_SLUG = new Map(PROJECTS.map((p) => [p.slug, p]));

export function getProject(slug: string | undefined): Project | undefined {
  return slug ? BY_SLUG.get(slug) : undefined;
}

export function getFeatured(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getAllSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export interface ProjectFilters {
  category: ProjectCategories;
  track: ProjectTrack;
  tech: TechStackCategories;
  papersOnly: boolean;
}

export const EMPTY_FILTERS: ProjectFilters = {
  category: ProjectCategories.All,
  track: ProjectTrack.All,
  tech: TechStackCategories.All,
  papersOnly: false,
};

export function filterProjects(filters: ProjectFilters): Project[] {
  return PROJECTS.filter((project) => {
    const categoryMatch =
      filters.category === ProjectCategories.All ||
      project.categories.includes(filters.category);
    const trackMatch =
      filters.track === ProjectTrack.All || project.track === filters.track;
    const techMatch =
      filters.tech === TechStackCategories.All ||
      project.techstack.includes(filters.tech);
    const paperMatch = !filters.papersOnly || project.hasPaper;
    return categoryMatch && trackMatch && techMatch && paperMatch;
  });
}

/** Tech tags actually in use, so the filter never offers an empty result. */
export function getUsedTech(): string[] {
  const used = new Set<string>();
  PROJECTS.forEach((p) => p.techstack.forEach((t) => used.add(t)));
  return [...used].sort();
}

export interface AdjacentProjects {
  prev: Project | null;
  next: Project | null;
}

/** Wraps around, so prev/next navigation never dead-ends. */
export function getAdjacent(slug: string): AdjacentProjects {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length] ?? null,
    next: PROJECTS[(index + 1) % PROJECTS.length] ?? null,
  };
}
