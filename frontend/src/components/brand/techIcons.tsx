/**
 * Recognisable tech marks, so the stack is scannable as logos rather than as
 * another list of words.
 */

import type { IconType } from "react-icons";
import {
  SiC,
  SiDocker,
  SiFastapi,
  SiLinux,
  SiNvidia,
  SiPython,
  SiPytorch,
  SiReact,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

export interface TechMark {
  name: string;
  Icon: IconType;
}

/** Ordered by how much of my time each one actually takes. */
export const CORE_TECH_MARKS: TechMark[] = [
  { name: "Python", Icon: SiPython },
  { name: "C / CUDA", Icon: SiC },
  { name: "NVIDIA", Icon: SiNvidia },
  { name: "Linux", Icon: SiLinux },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Terraform", Icon: SiTerraform },
  { name: "Docker", Icon: SiDocker },
];
