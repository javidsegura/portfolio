import type { ProjectCardProps } from "@/components/homepage/projects/cards";
import { ProjectCategories, TechStackCategories, } from "@/components/homepage/projects/cards";

export const PROJECTS: Array<ProjectCardProps> = [
      {
            title: "Secure Authentication System",
            category: ProjectCategories.Cybersecurity,
            description: "A comprehensive authentication system with multi-factor authentication, OAuth2 integration, and advanced security features.",
            impact: "Improved security by 95% and reduced authentication-related incidents to zero",
            role: "Lead Developer",
            date: "2023-2024",
            techstack: [TechStackCategories.AWS],
            hasPaper: true,
            paperLink: "https://example.com/paper1",
            deepDiveLink: "https://example.com/deepdive1",
            githubLink: "https://github.com/example/auth-system"
      },
      {
            title: "E-commerce Platform",
            category: ProjectCategories.Full_stack,
            description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.",
            impact: "Processed $2M+ in transactions and served 50,000+ customers",
            role: "Full Stack Developer",
            date: "2022-2023",
            techstack: [TechStackCategories.MySQL],
            hasPaper: false,
            paperLink: "",
            deepDiveLink: "https://example.com/deepdive2",
            githubLink: "https://github.com/example/ecommerce"
      },
      {
            title: "Quantum Computing Simulation",
            category: ProjectCategories.Hardware,
            description: "A quantum circuit simulator for educational purposes, implementing various quantum algorithms and gate operations.",
            impact: "Used by 500+ students in quantum computing courses",
            role: "Research Assistant",
            date: "2023",
            techstack: [TechStackCategories.MySQL],
            hasPaper: true,
            paperLink: "https://example.com/paper2",
            deepDiveLink: "https://example.com/deepdive3",
            githubLink: "https://github.com/example/quantum-sim"
      },
      {
            title: "111Quantum Computing Simulation",
            category: ProjectCategories.Hardware,
            description: "A quantum circuit simulator for educational purposes, implementing various quantum algorithms and gate operations.",
            impact: "Used by 500+ students in quantum computing courses",
            role: "Research Assistant",
            date: "2023",
            techstack: [TechStackCategories.MySQL],
            hasPaper: true,
            paperLink: "https://example.com/paper2",
            deepDiveLink: "https://example.com/deepdive3",
            githubLink: "https://github.com/example/quantum-sim"
      },
      {
            title: "2222Quantum Computing Simulation",
            category: ProjectCategories.Hardware,
            description: "A quantum circuit simulator for educational purposes, implementing various quantum algorithms and gate operations.",
            impact: "Used by 500+ students in quantum computing courses",
            role: "Research Assistant",
            date: "2023",
            techstack: [TechStackCategories.Python],
            hasPaper: true,
            paperLink: "https://example.com/paper2",
            deepDiveLink: "https://example.com/deepdive3",
            githubLink: "https://github.com/example/quantum-sim"
      },
      {
            title: "33333Quantum Computing Simulation",
            category: ProjectCategories.Hardware,
            description: "A quantum circuit simulator for educational purposes, implementing various quantum algorithms and gate operations.",
            impact: "Used by 500+ students in quantum computing courses",
            role: "Research Assistant",
            date: "2023",
            techstack: [TechStackCategories.MySQL],
            hasPaper: true,
            paperLink: "https://example.com/paper2",
            deepDiveLink: "https://example.com/deepdive3",
            githubLink: "https://github.com/example/quantum-sim"
      },
]