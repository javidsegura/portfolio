/**
 * Route paths as a single source of truth.
 *
 * Paths here are locale-agnostic and base-agnostic. The `/portfolio/` prefix
 * comes from Vite's `base` and the router basename, never from these strings,
 * so moving to a custom domain is a config change rather than a refactor.
 * The `/es` prefix is applied at link time by `useLocalePath`.
 */

export const ROUTES = {
  home: "/",
  projects: "/projects",
  project: (slug: string) => `/projects/${slug}`,
  research: "/research",
  thesis: "/research/thesis",
  experience: "/experience",
  reading: "/reading",
  about: "/about",
  cv: "/cv",
} as const;

/** Every static path, used by the prerender step and the sitemap. */
export const STATIC_ROUTES: string[] = [
  ROUTES.home,
  ROUTES.projects,
  ROUTES.research,
  ROUTES.thesis,
  ROUTES.experience,
  ROUTES.reading,
  ROUTES.about,
  ROUTES.cv,
];

export const SUPPORTED_LOCALES = ["en", "es"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** Router basename. Derives from Vite's `base` so the two cannot drift. */
export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");
