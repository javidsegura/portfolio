/** Primary navigation model, shared by the desktop bar, mobile menu and ⌘K. */

import { ROUTES } from "./routes.config";

export interface NavItem {
  /** i18n key resolved against the active locale dictionary. */
  key: string;
  path: string;
}

export const PRIMARY_NAV: NavItem[] = [
  { key: "nav.projects", path: ROUTES.projects },
  { key: "nav.research", path: ROUTES.research },
  { key: "nav.experience", path: ROUTES.experience },
  { key: "nav.reading", path: ROUTES.reading },
  { key: "nav.about", path: ROUTES.about },
];

export const UTILITY_NAV: NavItem[] = [{ key: "nav.cv", path: ROUTES.cv }];
