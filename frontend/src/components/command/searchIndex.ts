/**
 * Build-time search index for the command palette.
 *
 * Everything indexed here is already bundled, so search is a pure in-memory
 * lookup with no backend and no runtime fetch.
 */

import Fuse from "fuse.js";
import { ROUTES } from "@/config";
import { PROJECTS } from "@/content/projects";

export type SearchKind = "page" | "project";

export interface SearchDoc {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  kind: SearchKind;
  path: string;
}

const PAGE_DOCS: SearchDoc[] = [
  { id: "page-home", title: "Home", subtitle: "", body: "", kind: "page", path: ROUTES.home },
  { id: "page-projects", title: "Projects", subtitle: "All work", body: "", kind: "page", path: ROUTES.projects },
  { id: "page-research", title: "Research", subtitle: "PASC26 and thesis", body: "", kind: "page", path: ROUTES.research },
  { id: "page-thesis", title: "Thesis", subtitle: "Visual essay", body: "", kind: "page", path: ROUTES.thesis },
  { id: "page-experience", title: "Experience", subtitle: "Timeline and globe", body: "", kind: "page", path: ROUTES.experience },
  { id: "page-reading", title: "Reading", subtitle: "Papers and books", body: "", kind: "page", path: ROUTES.reading },
  { id: "page-about", title: "About", subtitle: "", body: "", kind: "page", path: ROUTES.about },
  { id: "page-cv", title: "CV", subtitle: "Download", body: "", kind: "page", path: ROUTES.cv },
];

const PROJECT_DOCS: SearchDoc[] = PROJECTS.map((project) => ({
  id: `project-${project.slug}`,
  title: project.title,
  subtitle: project.tagline,
  body: [
    project.description,
    project.impact,
    project.role,
    project.track,
    ...project.techstack,
    ...project.narrative.flatMap((section) => [section.heading, ...section.body]),
  ].join(" "),
  kind: "project",
  path: ROUTES.project(project.slug),
}));

export const SEARCH_DOCS: SearchDoc[] = [...PAGE_DOCS, ...PROJECT_DOCS];

const fuse = new Fuse(SEARCH_DOCS, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "subtitle", weight: 0.3 },
    { name: "body", weight: 0.2 },
  ],
  threshold: 0.38,
  ignoreLocation: true,
  minMatchCharLength: 2,
});

/**
 * Search the bundled index.
 *
 * Args:
 *   query: Raw user input. Empty input returns everything, unranked.
 *
 * Returns:
 *   Matching documents, best first.
 */
export function searchDocs(query: string): SearchDoc[] {
  const trimmed = query.trim();
  if (trimmed.length === 0) return SEARCH_DOCS;
  return fuse.search(trimmed).map((result) => result.item);
}
