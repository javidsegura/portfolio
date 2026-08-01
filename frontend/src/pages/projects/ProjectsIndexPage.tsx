/**
 * Project index. Filter state lives in the URL query string so a filtered view
 * is itself a shareable link, consistent with the rest of the site.
 */

import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { usePageView } from "@/hooks/useAnalytics";
import { useT } from "@/providers/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FilterBar } from "@/components/projects/FilterBar";
import {
  Organizations,
  EMPTY_FILTERS,
  ProjectCategories,
  ProjectTrack,
  TechStackCategories,
  filterProjects,
  useLocalizedProjects,
  type ProjectFilters,
} from "@/content/projects";

const PARAM_KEYS = ["track", "domain", "tech", "papers", "org"] as const;

export default function ProjectsIndexPage() {
  usePageView("projects_index");
  const t = useT();
  const [params, setParams] = useSearchParams();

  const filters = useMemo<ProjectFilters>(
    () => ({
      track: (params.get("track") as ProjectTrack) ?? ProjectTrack.All,
      category:
        (params.get("domain") as ProjectCategories) ?? ProjectCategories.All,
      tech: (params.get("tech") as TechStackCategories) ?? TechStackCategories.All,
      // Also set by clicking an organisation logo in the homepage cloud.
      org: (params.get("org") as Organizations) ?? Organizations.All,
      papersOnly: params.get("papers") === "1",
    }),
    [params],
  );

  const matches = useMemo(() => filterProjects(filters), [filters]);
  const results = useLocalizedProjects(matches);
  const isDirty = PARAM_KEYS.some((key) => params.has(key));

  const handleChange = (next: ProjectFilters) => {
    const updated = new URLSearchParams();
    if (next.track !== ProjectTrack.All) updated.set("track", next.track);
    if (next.category !== ProjectCategories.All)
      updated.set("domain", next.category);
    if (next.tech !== TechStackCategories.All) updated.set("tech", next.tech);
    if (next.org !== Organizations.All) updated.set("org", next.org);
    if (next.papersOnly) updated.set("papers", "1");
    setParams(updated, { replace: true });
  };

  return (
    <>
      <AmbientBackdrop />
      <Container>
        <PageHeader
          title={t("projects.title")}
          description={t("projects.description")}
        />

        <FilterBar
          filters={filters}
          onChange={handleChange}
          resultCount={results.length}
          isDirty={isDirty}
          onClear={() => handleChange(EMPTY_FILTERS)}
        />

        {results.length === 0 ? (
          <p className="py-20 text-center text-sm text-ink-muted">
            {t("projects.empty")}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-3">
            {results
              .map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                delay={Math.min(index, 5) * 50}
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
