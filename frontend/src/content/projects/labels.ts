/**
 * Display labels for the project enums.
 *
 * The enum values double as English labels, so anything that renders them
 * directly leaks English on the Spanish mirror. These maps give each value a
 * translation; `useEnumLabels` picks the right set for the active locale.
 */

import { useMemo } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import {
  Organizations,
  ProjectCategories,
  ProjectStatus,
  ProjectTrack,
} from "./enums";

const CATEGORY_ES: Record<ProjectCategories, string> = {
  [ProjectCategories.All]: "Todos",
  [ProjectCategories.Full_stack]: "Full Stack",
  [ProjectCategories.AI]: "IA",
  [ProjectCategories.Quantitative_Finance]: "Finanzas cuantitativas",
  [ProjectCategories.HPC]: "HPC",
  [ProjectCategories.Cybersecurity]: "Ciberseguridad",
  [ProjectCategories.Data_Analysis]: "Análisis de datos",
};

const TRACK_ES: Record<ProjectTrack, string> = {
  [ProjectTrack.All]: "Todos",
  [ProjectTrack.Research]: "Investigación",
  [ProjectTrack.Production]: "Producción",
  [ProjectTrack.PersonalTools]: "Herramientas propias",
};

const STATUS_ES: Record<ProjectStatus, string> = {
  [ProjectStatus.Active]: "Activo",
  [ProjectStatus.Shipped]: "Publicado",
  [ProjectStatus.Archived]: "Archivado",
};

export interface EnumLabels {
  category: (value: ProjectCategories) => string;
  track: (value: ProjectTrack) => string;
  status: (value: ProjectStatus) => string;
  /** Only the `All` sentinel needs translating; the rest are logo names. */
  org: (value: Organizations) => string;
}

export function useEnumLabels(): EnumLabels {
  const { locale } = useLanguage();

  return useMemo(() => {
    const isEs = locale === "es";
    return {
      category: (value) => (isEs ? (CATEGORY_ES[value] ?? value) : value),
      track: (value) => (isEs ? (TRACK_ES[value] ?? value) : value),
      status: (value) => (isEs ? (STATUS_ES[value] ?? value) : value),
      org: (value) =>
        value === Organizations.All && isEs ? "Todas" : String(value),
    };
  }, [locale]);
}
