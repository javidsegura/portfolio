/**
 * Organisation marks, shared by the hero strip and the experience globe.
 *
 * A mark renders its `logo` image when the file exists in assets, and falls
 * back to a styled `wordmark` until it does. Drop the PNG in
 * `src/assets/experience-events/` and point `logo` at it to upgrade one.
 */

import { Organizations } from "@/content/projects/enums";
import citi from "@/assets/experience-events/citi.png";
import nsf from "@/assets/experience-events/nsf.png";
import ie from "@/assets/experience-events/ie.png";
import rutgers from "@/assets/experience-events/rutgers.png";
import umich from "@/assets/experience-events/umich.png";
import laCaixa from "@/assets/experience-events/laCaixa.png";

export interface AffiliationMark {
  id: Organizations;
  name: string;
  logo?: string;
  wordmark?: string;
}

export const AFFILIATION_MARKS: AffiliationMark[] = [
  { id: Organizations.Citi, name: "Citi", logo: citi },
  { id: Organizations.NSF, name: "NSF / STRIDE Research Labs", logo: nsf },
  { id: Organizations.IE, name: "IE University", logo: ie },
  {
    id: Organizations.Rutgers,
    name: "Rutgers University, RADICAL lab",
    logo: rutgers,
  },
  { id: Organizations.Michigan, name: "University of Michigan", logo: umich },
  { id: Organizations.EduCaixa, name: "EduCaixa", logo: laCaixa },
];

const BY_ID = new Map(AFFILIATION_MARKS.map((mark) => [mark.id, mark]));

export function getAffiliationMark(
  id: Organizations,
): AffiliationMark | undefined {
  return BY_ID.get(id);
}
