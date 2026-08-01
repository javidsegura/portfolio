/**
 * The four homepage panels.
 *
 * `image` is the panel's background photo. Drop the real shots in
 * `src/assets/home-panels/` and point `image` at them; `null` renders a
 * patterned placeholder with the panel's icon until then.
 */

import { FlaskConical, Globe2, LayoutGrid, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ROUTES } from "@/config";
import portrait from "@/assets/profile/javier.jpg";
import researchBg from "@/assets/home-panels/research.png";
import experienceBg from "@/assets/home-panels/experience.png";
import projectsBg from "@/assets/home-panels/projects.png";

export interface HomePanel {
  id: string;
  /** i18n keys, resolved at render time so the panels follow the locale. */
  titleKey: string;
  descKey: string;
  to: string;
  Icon: LucideIcon;
  image: string | null;
}

export const HOME_PANELS: HomePanel[] = [
  {
    id: "research",
    titleKey: "panel.research.title",
    descKey: "panel.research.desc",
    to: ROUTES.research,
    Icon: FlaskConical,
    image: researchBg,
  },
  {
    id: "projects",
    titleKey: "panel.projects.title",
    descKey: "panel.projects.desc",
    to: ROUTES.projects,
    Icon: LayoutGrid,
    image: projectsBg,
  },
  {
    id: "experience",
    titleKey: "panel.experience.title",
    descKey: "panel.experience.desc",
    to: ROUTES.experience,
    Icon: Globe2,
    image: experienceBg,
  },
  {
    id: "about",
    titleKey: "panel.about.title",
    descKey: "panel.about.desc",
    to: ROUTES.about,
    Icon: User,
    image: portrait,
  },
];
