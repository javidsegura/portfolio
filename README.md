# Portfolio

Personal site: React 19 + Vite 7 + TypeScript + Tailwind v4, deployed to GitHub
Pages via the workflow in `.github/workflows/build-page.yml` (pushes to `main`).
The app lives in `frontend/`.

```bash
make run-local        # dev server at http://localhost:5173/portfolio/
```

## Updating content

Everything the site shows lives in typed data files. Editing them is the whole
workflow — no component changes needed. All paths below are under
`frontend/src/`.

| What | Where |
| --- | --- |
| Projects (cards + project pages) | `content/projects/data.ts` |
| Thesis essay (sections, TL;DR, dimensions) | `content/research/thesis.ts` |
| Talks + affiliations on /research | `content/research/publications.ts` |
| Experience timeline | `content/experience/data.ts` |
| Globe locations | `content/experience/milestones.ts` |
| Reading list | `content/reading/data.ts` |
| Name, links, email, status badge | `config/site.config.ts` |
| Organisation logos (hero cloud, globe card) | `components/brand/affiliationMarks.ts` + `assets/experience-events/` |
| Homepage panel backgrounds | `components/home/panels.config.tsx` + drop images in `assets/home-panels/` |
| Profile photo (About panel) | `assets/profile/javier.jpg` |
| CV PDF | `frontend/public/Javier-Dominguez-CV.pdf` (replace the file, keep the name) |
| Spanish UI strings | `content/i18n/locales/es.ts` (`en.ts` is the key list) |

### Common tasks

**Add or edit a project.** Append to `PROJECTS` in `content/projects/data.ts`.
The `slug` becomes the URL (`/projects/<slug>`). `featured: true` surfaces it on
the homepage-linked lists; `tier: Full` gives it the 3D visual pane,
`tier: Simple` the media pane (screenshots/`videoURL`). `narrative` sections are
the scrolling page content; mark unfinished prose with `draft: true` and it
shows a draft badge.

**Add an experience entry.** Add to `EXPERIENCE_ENTRIES` in
`content/experience/data.ts`. Link the projects it produced via `projectSlugs`,
and set `milestoneId` to a location so clicking the entry travels the globe.
New location: add lat/lon + `orgIds` to `content/experience/milestones.ts`.

**Add an organisation logo.** Drop the PNG in `assets/experience-events/`,
register it in `components/brand/affiliationMarks.ts`. Marks without a `logo`
render their `wordmark` text as a fallback. Tag projects with an organisation
via `orgIds` in `content/projects/data.ts` — the logos then show on the project
card and page, and clicking that logo in the hero cloud opens `/projects`
filtered to that organisation (`?org=<id>`).

**Swap the homepage panel placeholders.** Put photos in `assets/home-panels/`,
import them in `components/home/panels.config.tsx` and set each panel's
`image`. Panels with `image: null` show the patterned placeholder.

**Gated sections.** `/reading` and `/research/thesis` sit behind a cosmetic
password gate (`components/access/MaintenanceGate.tsx`, password and copy at
the top of the file). It is not security — content still ships in the bundle —
it only keeps casual visitors out of drafts. Remove the `<MaintenanceGate>`
wrappers in `routes/routeTree.tsx` when a section is ready.

## Design references

- Figma: https://www.figma.com/design/eSxkqAPozDFbXGB33LBWfi/portfolio
- Design tokens live in `frontend/src/styles/` (colour, motion, utilities);
  the palette is warm paper + near-black ink + one amber accent.
