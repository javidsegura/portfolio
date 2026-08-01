/**
 * Merges the Spanish overlay onto a project record.
 *
 * English stays the canonical source: a missing translation falls back to it
 * field by field, so a half-translated project renders rather than breaking.
 */

import { useMemo } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { PROJECT_TRANSLATIONS_ES } from "./translations.es";
import type { Project } from "./types";

function localize(project: Project): Project {
  const translation = PROJECT_TRANSLATIONS_ES[project.slug];
  if (!translation) return project;

  return {
    ...project,
    tagline: translation.tagline || project.tagline,
    description: translation.description || project.description,
    impact: translation.impact || project.impact,
    role: translation.role || project.role,
    narrative: project.narrative.map((section) => {
      const translated = translation.narrative?.[section.id];
      if (!translated) return section;
      return {
        ...section,
        heading: translated.heading || section.heading,
        body: translated.body?.length ? translated.body : section.body,
      };
    }),
  };
}

/** Localises a single project, or returns undefined for an unknown slug. */
export function useLocalizedProject(
  project: Project | undefined,
): Project | undefined {
  const { locale } = useLanguage();
  return useMemo(() => {
    if (!project || locale !== "es") return project;
    return localize(project);
  }, [project, locale]);
}

/** Localises a list, for the index and card grids. */
export function useLocalizedProjects(projects: Project[]): Project[] {
  const { locale } = useLanguage();
  return useMemo(
    () => (locale === "es" ? projects.map(localize) : projects),
    [projects, locale],
  );
}
