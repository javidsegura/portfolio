/** Talks, papers and affiliations shown on /research. */

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  kind: "talk" | "paper" | "preprint";
  link?: string;
  draft?: boolean;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: "pasc26",
    title: "FlowGentic: running agent systems on HPC schedulers",
    venue: "PASC26, Bern",
    year: "2026",
    kind: "talk",
  },
];

export interface Affiliation {
  id: string;
  name: string;
  detail: string;
  link?: string;
}

export const AFFILIATIONS: Affiliation[] = [
  {
    id: "stride",
    name: "STRIDE Research Labs",
    detail: "HPC research intern, NSF ACCESS programme",
  },
  {
    id: "radical",
    name: "RADICAL, Rutgers University",
    detail: "FlowGentic in production use on the IMPRESS project",
  },
  {
    id: "ncsa",
    name: "NCSA Delta",
    detail: "Target system for protein ML workloads",
  },
  {
    id: "ie",
    name: "IE University",
    detail: "BSc Computer Science & AI, graduating 2027",
  },
];
