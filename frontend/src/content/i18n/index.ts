import type { Locale } from "@/config/routes.config";
import { en, type Dictionary, type TranslationKey } from "./locales/en";
import { es } from "./locales/es";

export const DICTIONARIES: Record<Locale, Dictionary> = { en, es };

export type { Dictionary, TranslationKey };
