/**
 * Route configuration.
 *
 * The localised children are declared once and mounted twice, at `/` and at
 * `/es`, so the Spanish mirror cannot drift out of sync with the English tree.
 * The `/portfolio` prefix lives in the router basename, not here.
 */

import type { RouteObject } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import { MaintenanceGate } from "@/components/access/MaintenanceGate";
import HomePage from "@/pages/home/HomePage";
import ProjectsIndexPage from "@/pages/projects/ProjectsIndexPage";
import ProjectPage from "@/pages/projects/ProjectPage";
import ResearchPage from "@/pages/research/ResearchPage";
import ThesisPage from "@/pages/research/ThesisPage";
import ExperiencePage from "@/pages/experience/ExperiencePage";
import ReadingPage from "@/pages/reading/ReadingPage";
import AboutPage from "@/pages/about/AboutPage";
import CVPage from "@/pages/cv/CVPage";
import NotFoundPage from "@/pages/NotFoundPage";

const LOCALISED_CHILDREN: RouteObject[] = [
  { index: true, element: <HomePage /> },
  { path: "projects", element: <ProjectsIndexPage /> },
  { path: "projects/:slug", element: <ProjectPage /> },
  { path: "research", element: <ResearchPage /> },
  {
    path: "research/thesis",
    element: (
      <MaintenanceGate>
        <ThesisPage />
      </MaintenanceGate>
    ),
  },
  { path: "experience", element: <ExperiencePage /> },
  {
    path: "reading",
    element: (
      <MaintenanceGate>
        <ReadingPage />
      </MaintenanceGate>
    ),
  },
  { path: "about", element: <AboutPage /> },
  { path: "cv", element: <CVPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export const ROUTE_TREE: RouteObject[] = [
  { path: "/", element: <AppLayout />, children: LOCALISED_CHILDREN },
  { path: "/es", element: <AppLayout />, children: LOCALISED_CHILDREN },
];
