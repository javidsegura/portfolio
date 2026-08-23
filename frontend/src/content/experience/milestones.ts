/**
 * Career milestones as geography, for the globe on /experience.
 *
 * Ordered chronologically: arcs are drawn in this order and the globe rotates
 * through them as the reader moves down the timeline.
 */

import { Organizations } from "@/content/projects/enums";

export interface CareerMilestone {
  id: string;
  city: string;
  country: string;
  /** ISO 3166-1 alpha-2, used for the flag glyph. */
  countryCode: string;
  year: string;
  label: string;
  detail: string;
  /** Organisations whose logos mark this point on the globe. */
  orgIds: Organizations[];
  lat: number;
  lon: number;
  /** True while the copy is a placeholder awaiting real text. */
  draft?: boolean;
}

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: "gran-canaria",
    city: "Gran Canaria",
    country: "Spain",
    countryCode: "ES",
    year: "Origin",
    label: "Where I am from",
    detail: "Las Palmas de Gran Canaria, Canary Islands.",
    orgIds: [],
    lat: 28.1235,
    lon: -15.4363,
  },
  {
    id: "silicon-valley",
    city: "Silicon Valley",
    country: "United States",
    countryCode: "US",
    year: "2023",
    label: "EduCaixa The Challenge",
    detail:
      "Selected among international teams to present big data research, with workshops by Google, Apple and Stanford.",
    orgIds: [Organizations.EduCaixa],
    lat: 37.4419,
    lon: -122.143,
  },
  {
    id: "segovia-madrid",
    city: "Segovia · Madrid",
    country: "Spain",
    countryCode: "ES",
    year: "2023 — 2027",
    label: "IE University",
    detail: "BSc Computer Science & AI, Dean's List.",
    orgIds: [Organizations.IE],
    lat: 40.9429,
    lon: -4.1088,
  },
  {
    id: "warsaw",
    city: "Warsaw",
    country: "Poland",
    countryCode: "PL",
    year: "2026",
    label: "Citi, Software Engineering Intern",
    detail:
      "Software engineering internship on Citi's infrastructure team, at the bank's European Command",
    orgIds: [Organizations.Citi],
    lat: 52.2297,
    lon: 21.0122,
  },
  {
    id: "bern",
    city: "Bern",
    country: "Switzerland",
    countryCode: "CH",
    year: "2026",
    label: "PASC26",
    detail:
      "Presented FlowGentic, the HPC middleware built with STRIDE Research Labs and Rutgers' RADICAL lab under NSF's ACCESS programme.",
    orgIds: [Organizations.NSF, Organizations.Rutgers],
    lat: 46.948,
    lon: 7.4474,
  },
  {
    id: "ann-arbor",
    city: "Ann Arbor",
    country: "United States",
    countryCode: "US",
    year: "Fall 2026",
    label: "University of Michigan",
    detail: "Exchange semester.",
    orgIds: [Organizations.Michigan],
    lat: 42.2808,
    lon: -83.743,
  },
];
