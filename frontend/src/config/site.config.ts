/** Identity, external links and static profile facts used across the site. */

export const SITE = {
  name: "Javier Dominguez Segura",
  /** Spanish spelling, used on the /es mirror. */
  nameEs: "Javier Domínguez Segura",
  shortName: "Javier Dominguez Segura",
  shortNameEs: "Javier Domínguez Segura",
  role: "CS & AI, IE University",
  tagline:
    "Middleware that lets agentic AI workflows run on HPC schedulers.",
  location: "Madrid, Spain",
  graduation: "2027",
  email: "jdominguez.ieu2023@student.ie.edu",
  cvFile: "Javier-Dominguez-CV.pdf",
  origin: "https://javidsegura.github.io",
} as const;

export const EXTERNAL_LINKS = {
  github: "https://github.com/javidsegura",
  linkedin: "https://www.linkedin.com/in/javids/",
  blog: "https://medium.com/@jdominguez.ieu2023",
  flowgentic: "https://github.com/stride-research/flowgentic",
  flowgenticDocs: "https://stride-research.github.io/flowgentic/",
} as const;

/** The line that speaks directly to the primary audience. */
export const CURRENT_STATUS = {
  seeking: "Open to new-graduate roles as early as Summer '27",
  label: "Software Engineering Intern, Citi Infrastructure",
  detail: "Michigan exchange, fall 2026. Graduating 2027.",
} as const;
