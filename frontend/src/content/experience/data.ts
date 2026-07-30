/**
 * Timeline entries for /experience, deliberately at LinkedIn parity.
 *
 * `projectSlugs` wires a role into the project pages it produced, which is the
 * link the previous site was missing.
 */

import citi_logo from "@/assets/experience-events/citi.png";
import nsf_logo from "@/assets/experience-events/nsf.png";
import ie_logo from "@/assets/experience-events/ie.png";
import laCaixa_logo from "@/assets/experience-events/laCaixa.png";

export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  description: string;
  date: string;
  imageUrl: string;
  contentLink?: string;
  /** Project slugs this role produced. */
  projectSlugs?: string[];
  /** Milestone id, linking a role to a point on the globe. */
  milestoneId?: string;
}

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: "citi",
    title: "Software Engineering Analyst, Intern",
    company: "Citi",
    description:
      "Software Engineering Summer Intern on the Infrastructure team.",
    date: "2026",
    imageUrl: citi_logo,
    contentLink:
      "https://www.linkedin.com/posts/javids_citi-technology-infrastructure-activity-7426737096662642688-yihv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfIqEoBFtUKckKQ5o7kE560SjkWBk8svGE",
    milestoneId: "warsaw",
  },
  {
    id: "stride",
    title: "HPC Research Intern, NSF Supercomputing",
    company: "STRIDE Research Labs",
    description:
      "Designing HPC middleware for agent-based workflows on the NCSA Delta supercomputer through NSF's ACCESS program. Partnering with the RADICAL research lab at Rutgers University on the Integrated Machine-learning for Protein Structures at Scale (IMPRESS) project.",
    date: "Summer 2025 — Spring 2026",
    imageUrl: nsf_logo,
    contentLink: "https://github.com/stride-research/flowgentic",
    projectSlugs: ["flowgentic", "binderflow-thesis"],
    milestoneId: "bern",
  },
  {
    id: "ie",
    title: "Top of Class, Dean's List Recognition",
    company: "IE University",
    description:
      "96.3/100 GPA in Computer Science & AI, earning Dean's List honours and recognition as top performer in the School of Science & Technology across multiple semesters.",
    date: "2023 — present",
    imageUrl: ie_logo,
    contentLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7352648632849838080/",
    projectSlugs: ["efficient-classifier"],
    milestoneId: "segovia-madrid",
  },
  {
    id: "educaixa",
    title: "Silicon Valley Selection, EduCaixa The Challenge",
    company: "EduCaixa",
    description:
      "Selected among international teams (under 0.02% acceptance) to conduct big data research on high-school dropout rates. Presented findings in Silicon Valley with workshops by Google, Apple and Stanford.",
    date: "2023",
    imageUrl: laCaixa_logo,
    contentLink:
      "https://sites.google.com/heidelbergschule.com/soloscientialiberabitnos-en/intro?authuser=0",
    milestoneId: "silicon-valley",
  },
];
