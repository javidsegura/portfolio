/**
 * Spanish overlay for the experience timeline and globe milestones.
 *
 * Mirrors the ids in `data.ts` and `milestones.ts` so the renderer can swap in
 * castellano copy without duplicating the canonical English records. Any id
 * missing here simply falls back to its English source.
 */

import type { ExperienceTranslation, MilestoneTranslation } from "./types";

/** Keyed by `ExperienceEntry.id`. */
export const EXPERIENCE_TRANSLATIONS_ES: Record<string, ExperienceTranslation> =
  {
    citi: {
      title: "Analista de Ingeniería de Software, Prácticas",
      company: "Citi",
      description:
        "Prácticas de verano en ingeniería de software dentro del equipo de Infraestructura del European Command Center de Citi.",
      date: "2026",
    },
    stride: {
      title: "Investigador en prácticas, HPC, Asignación de Supercomputación NSF",
      company: "STRIDE Research Labs",
      description:
        "Diseño de middleware de HPC para flujos de trabajo basados en agentes en el supercomputador NCSA Delta, a través del programa ACCESS de la NSF. Colaboración con el laboratorio de investigación RADICAL de Rutgers University en el proyecto Integrated Machine-learning for Protein Structures at Scale (IMPRESS).",
      date: "Verano 2025 - Primavera 2026",
    },
    ie: {
      title: "Grado en Ciencias de la Computación e IA, Top 5%",
      company: "IE University",
      description:
        "Nota media de 93,3/100 en Ciencias de la Computación e IA, con mención en el Dean's List y reconocimiento como mejor expediente de la School of Science & Technology en varios semestres.",
      date: "2023 - actualidad",
    },
    educaixa: {
      title: "Selección para Silicon Valley, EduCaixa The Challenge",
      company: "EduCaixa",
      description:
        "Seleccionado entre equipos internacionales (menos del 0,02% de admisión) para llevar a cabo una investigación de big data sobre las tasas de abandono escolar. Presentación de los resultados en Silicon Valley, con talleres de Google y Apple y visitas a Stanford y Berkeley.",
      date: "2023",
    },
  };

/** Keyed by `CareerMilestone.id`. */
export const MILESTONE_TRANSLATIONS_ES: Record<string, MilestoneTranslation> = {
  "gran-canaria": {
    city: "Gran Canaria",
    country: "España",
    year: "Origen",
    label: "De dónde soy",
    detail: "Las Palmas de Gran Canaria, Islas Canarias.",
  },
  "silicon-valley": {
    city: "Silicon Valley",
    country: "Estados Unidos",
    year: "2023",
    label: "EduCaixa The Challenge",
    detail:
      "Seleccionado entre equipos internacionales para presentar una investigación de big data, con talleres de Google, Apple y Stanford.",
  },
  "segovia-madrid": {
    city: "Segovia · Madrid",
    country: "España",
    year: "2023 - 2027",
    label: "IE University",
    detail: "Grado en Ciencias de la Computación e IA, Dean's List.",
  },
  warsaw: {
    city: "Varsovia",
    country: "Polonia",
    year: "2026",
    label: "Citi, Prácticas en Ingeniería de Software",
    detail:
      "Prácticas de ingeniería de software en el equipo de infraestructura de Citi, en el hub tecnológico de Varsovia.",
  },
  bern: {
    city: "Berna",
    country: "Suiza",
    year: "2026",
    label: "PASC26",
    detail:
      "Presentación de FlowGentic, el middleware de HPC desarrollado con STRIDE Research Labs y el laboratorio RADICAL de Rutgers dentro del programa ACCESS de la NSF.",
  },
  "ann-arbor": {
    city: "Ann Arbor",
    country: "Estados Unidos",
    year: "Otoño 2026",
    label: "University of Michigan",
    detail: "Semestre de intercambio.",
  },
};
