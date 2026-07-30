/** English UI chrome. Keys are dotted namespaces, resolved by `useT`. */

export const en = {
  "nav.projects": "Projects",
  "nav.research": "Research",
  "nav.experience": "Experience",
  "nav.reading": "Reading",
  "nav.about": "About",
  "nav.cv": "CV",
  "nav.menu": "Menu",
  "nav.close": "Close",
  "nav.search": "Search",

  "home.eyebrow": "Currently",
  "home.viewAll": "All projects",
  "home.featured": "Featured work",
  "home.explore": "Explore",

  "projects.title": "Projects",
  "projects.description":
    "Systems I have built, filtered by what they are made of and what kind of work they are.",
  "projects.filterCategory": "Domain",
  "projects.filterTrack": "Type",
  "projects.filterTech": "Stack",
  "projects.papersOnly": "Has paper",
  "projects.clear": "Clear filters",
  "projects.count": "projects",
  "projects.empty": "No projects match these filters.",

  "project.role": "Role",
  "project.stack": "Stack",
  "project.dates": "Dates",
  "project.status": "Status",
  "project.repo": "View code",
  "project.demo": "Live demo",
  "project.paper": "Read paper",
  "project.deepDive": "Deep dive",
  "project.docs": "Documentation",
  "project.prev": "Previous",
  "project.next": "Next",
  "project.back": "All projects",
  "project.draft": "Draft section",

  "research.title": "Research",
  "research.description":
    "HPC middleware for agentic scientific workflows, and the writing around it.",
  "research.thesis": "Thesis",
  "research.notebook": "Lab notebook",
  "research.affiliations": "Affiliations",
  "research.publications": "Talks and publications",

  "thesis.tldr": "In three sentences",
  "thesis.formal": "The formal version",
  "thesis.contents": "Contents",

  "experience.title": "Experience",
  "experience.description": "The full record, at parity with LinkedIn.",
  "experience.related": "Related work",

  "reading.title": "Reading",
  "reading.description": "Papers, books and the ideas behind the work.",

  "about.title": "About",
  "cv.title": "CV",
  "cv.download": "Download PDF",
  "cv.noGate": "No email required.",

  "cmd.placeholder": "Search projects, pages and notes",
  "cmd.pages": "Pages",
  "cmd.projects": "Projects",
  "cmd.actions": "Actions",
  "cmd.copyEmail": "Copy email address",
  "cmd.copied": "Copied",
  "cmd.downloadCv": "Download CV",
  "cmd.openGithub": "Open GitHub",
  "cmd.openLinkedin": "Open LinkedIn",
  "cmd.toggleLang": "Switch to Spanish",
  "cmd.empty": "Nothing found.",

  "common.status.Active": "Active",
  "common.status.Shipped": "Shipped",
  "common.status.Archived": "Archived",
  "common.notFound": "This page does not exist.",
  "common.backHome": "Back home",
  "common.language": "Language",
} as const;

export type TranslationKey = keyof typeof en;
export type Dictionary = Record<TranslationKey, string>;
