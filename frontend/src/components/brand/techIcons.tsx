/**
 * Recognisable tech marks, so the stack is scannable as logos rather than as
 * another list of words.
 */

import type { IconType } from "react-icons";
import {
  SiDocker,
  SiFastapi,
  SiKubernetes,
  SiLinux,
  SiPython,
  SiPytorch,
  SiReact,
  SiSpringboot,
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
  { name: "Java / Spring Boot", Icon: SiSpringboot },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Linux", Icon: SiLinux },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Terraform", Icon: SiTerraform },
  { name: "Docker", Icon: SiDocker },
];
