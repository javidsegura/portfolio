
import type { TimelineEvent } from "@/components/homepage/experience/timeline";
import citi_logo from "../../../../assets/experience-events/citi.png"
import nsf_logo from "../../../../assets/experience-events/nsf.png"
import ie_logo from "../../../../assets/experience-events/ie.png"
import nova_logo from "../../../../assets/experience-events/nova.png"
import laCaixa_logo from "../../../../assets/experience-events/laCaixa.png"



export const EXPERIENCE_EVENTS: TimelineEvent[] = [
  {
    title: "Software Engineering Analyst, Intern",
    description: "Software Engineering Summer Intern in the Infrastructure Team",
    date: "2026",
    company: "Citi",
    image_url: citi_logo, 
    content_link: "https://www.linkedin.com/posts/javids_citi-technology-infrastructure-activity-7426737096662642688-yihv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfIqEoBFtUKckKQ5o7kE560SjkWBk8svGE"
  },
  {
    title: "HPC Research Intern - NSF Supercomputing",
    description: "Designing HPC middleware for agent-based workflows on NCSA Delta supercomputer through NSF's ACCESS program. Partnering with the RADICAL research lab at Rutgers University on the Integrated Machine-learning for Protein Structures at Scale (IMPRESS) project.",
    date: "Summer 2025 - Spring 2026",
    company: "STRIDE Research Labs",
    image_url: nsf_logo, // Supercomputer/HPC visualization
    content_link: "https://github.com/stride-research/flowgentic"
  },
  {
    title: "Nova Talent 111 Student List Nomination",
    description: "Nominated by Nova Talent CEO for Spain's 111 Student List, recognizing exceptional potential and achievements among Spanish students.",
    date: "2025",
    company: "Nova Talent",
    image_url: nova_logo, // Award/recognition icon
    content_link: "https://www.novatalent.com/"
  },
  {
    title: "Top of Class - Dean's List Recognition",
    description: "Achieved 96.3/100 GPA in Computer Science & AI at IE University, earning Dean's List honors and recognition as top performer in the School of Science & Technology across multiple semesters.",
    date: "2023-Present",
    company: "IE University",
    image_url: ie_logo,  // Academic achievement icon/IE logo
    content_link: "https://www.linkedin.com/feed/update/urn:li:activity:7352648632849838080/",
  },
  {
    title: "Silicon Valley Selection - EduCaixa The Challenge",
    description: "Selected among international teams (<0.02% acceptance rate) to conduct big data research on high-school dropout rates. Presented findings in Silicon Valley with workshops by Google, Apple, and Stanford.",
    date: "2023",
    company: "EduCaixa",
    image_url: laCaixa_logo , // Silicon Valley/innovation icon
    content_link: "https://sites.google.com/heidelbergschule.com/soloscientialiberabitnos-en/intro?authuser=0"
  }
];