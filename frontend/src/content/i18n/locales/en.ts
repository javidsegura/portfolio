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

  "site.role": "CS & AI, IE University",
  "site.location": "Madrid, Spain",

  "home.eyebrow": "Currently",
  "home.viewAll": "All projects",
  "home.featured": "Featured work",
  "home.explore": "Explore",

  "panel.research.title": "Research",
  "panel.research.desc": "PASC26, the thesis, and the labs the work runs with.",
  "panel.projects.title": "Projects",
  "panel.projects.desc": "Personal projects filterable by stack and kind of work.",
  "panel.experience.title": "Experience",
  "panel.experience.desc": "Citi, NSF supercomputing and IE, on an interactive globe.",
  "panel.about.title": "About Me",
  "panel.about.desc": "A bit more about who I am",

  "projects.title": "Projects",
  "projects.description":
    "Systems I have built, filtered by what they are made of and what kind of work they are.",
  "projects.filterCategory": "Domain",
  "projects.filterTrack": "Type",
  "projects.filterTech": "Stack",
  "projects.filterOrg": "With",
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
  "project.with": "With",
  "project.type": "Type",

  "research.title": "Research",
  "research.description":
    "HPC middleware for agentic scientific workflows, and the writing around it.",
  "research.thesis": "Thesis",
  "research.notebook": "Lab notebook",
  "research.affiliations": "Affiliations",
  "research.publications": "Talks and publications",
  "research.thesisTitle":
    "Portfolio-optimizing agentic scientific workflows across heterogeneous HPC resources",
  "research.thesisBlurb":
    "A visual essay in six sections, with the maths available but not mandatory.",
  "research.readEssay": "Read the essay",
  "research.relatedProjects": "Related project pages",

  "thesis.tldr": "In three sentences",
  "thesis.formal": "The formal version",
  "thesis.contents": "Contents",

  "experience.title": "Experience",
  "experience.description": "The full record, at parity with LinkedIn.",
  "experience.related": "Related work",
  "experience.globeHint":
    "Drag to spin · click a dot, or a timeline entry, to travel",
  "experience.geography": "Geography",
  "experience.reference": "Reference",

  "reading.title": "Reading",
  "reading.description": "Papers, books and the ideas behind the work.",
  "reading.placeholder": "Placeholder",

  "about.title": "About",
  "about.bio1":
    "I work on the infrastructure layer between agentic AI and the machines big enough to run it. Most of my time goes to FlowGentic, an open-source framework that lets agent systems built with LangGraph, CrewAI and AG2 run on HPC schedulers. It is used by researchers at the RADICAL group at Rutgers, on the NCSA Delta supercomputer.",
  "about.bio2":
    "I am in the final year of Computer Science and Artificial Intelligence at IE University in Madrid, graduating in 2027. Right now I am a software engineering intern on Citi's infrastructure team, and in autumn 2026 I leave for the University of Michigan on exchange.",
  "about.bio3":
    "My thesis takes FlowGentic further and treats the scheduling of agentic scientific workflows as a portfolio-optimization problem across heterogeneous HPC resources, where every allocation is a bet placed under uncertainty about cost, availability and runtime. I presented the work at PASC26 in Bern.",
  "about.coreStack": "Core stack",
  "about.elsewhere": "Elsewhere",

  "cv.title": "CV",
  "cv.download": "Download PDF",
  "cv.noGate": "No email required.",
  "cv.now": "Now",
  "cv.experience": "Experience",
  "cv.selectedWork": "Selected work",
  "cv.contact": "Contact",
  "cv.fullTimeline": "Full timeline",
  "cv.allProjects": "All projects",

  "gate.eyebrow": "Under construction",
  "gate.title": "This section is not ready yet",
  "gate.body": "If Javier gave you the password, enter it below.",
  "gate.placeholder": "Password",
  "gate.submit": "Open",
  "gate.rejected": "That is not it.",

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
