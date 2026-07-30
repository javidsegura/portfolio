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
  title: string;
  description: string;
  to: string;
  Icon: LucideIcon;
  image: string | null;
}

export const HOME_PANELS: HomePanel[] = [
  {
    id: "research",
    title: "Research",
    description: "PASC26, the thesis, and the labs the work runs with.",
    to: ROUTES.research,
    Icon: FlaskConical,
    image: researchBg,
  },
  {
    id: "projects",
    title: "Projects",
    description: "Nine systems, filterable by stack and kind of work.",
    to: ROUTES.projects,
    Icon: LayoutGrid,
    image: projectsBg,
  },
  {
    id: "experience",
    title: "Experience",
    description: "Citi, NSF supercomputing and IE, on an interactive globe.",
    to: ROUTES.experience,
    Icon: Globe2,
    image: experienceBg,
  },
  {
    id: "about",
    title: "About Me",
    description: "Who I am beyond the repos.",
    to: ROUTES.about,
    Icon: User,
    image: portrait,
  },
];
