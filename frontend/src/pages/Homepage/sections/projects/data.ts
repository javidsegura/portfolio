import type { ProjectCardProps } from "@/components/homepage/projects/cards";
import { ProjectCategories, TechStackCategories, } from "@/components/homepage/projects/cards";

export const PROJECTS: Array<ProjectCardProps> = [
      {
            title: "AI Agent Framework for HPC Schedulers",
            categories: [ProjectCategories.AI, ProjectCategories.HPC],
            description: "Production Python library for deploying AI agents (LangGraph, CrewAI, AG2) on HPC schedulers with enterprise workflows",
            impact: "Used by Rutger Univesities RADICAL lab researchers for large-scale protein ML on NCSA Delta supercomputers (IMPRESS project)",
            role: "Lead Developer",
            date: "2025-current",
            techstack: [TechStackCategories.Python, TechStackCategories.LangGraph, TechStackCategories.Asyncio, TechStackCategories.Radical_Asyncflow, TechStackCategories.Linux],
            hasPaper: false,
            paperLink: "",
            deepDiveLink: "https://stride-research.github.io/flowgentic/",
            githubLink: "https://github.com/stride-research/flowgentic"
      },
      {
            title: "AI-Powered Ticket Resolution Platform",
            categories: [ProjectCategories.Full_stack, ProjectCategories.AI],
            description: "Event-driven support ticket system processing 500+ concurrent agent workflows with <200ms p95 latency; FastAPI backend, MySQL, Redis caching, React observability dashboard with live metrics and A/B experiment tracking",
            impact: "75%+ backend test coverage with E2E tests for critical workflows; deployed via Docker Compose with automated CI/CD and infrastructure-as-code to multi-cloud environment (Azure and AWS)",
            role: "Full Stack + AI Engineer",
            date: "2025-Present",
            techstack: [TechStackCategories.FastAPI, TechStackCategories.RabbitMQ, TechStackCategories.React, TechStackCategories.Terraform, TechStackCategories.Ansible, TechStackCategories.SlackAPI, TechStackCategories.ChromaDB],
            hasPaper: false,
            paperLink: "",
            deepDiveLink: "https://medium.com/@jdominguez.ieu2023/building-zeffo-how-we-engineered-an-ai-powered-ticket-resolution-platform-a22c10fe255b?postPublishedType=repub",
            githubLink: ""
      },
      {
            title: "GPU-Accelerated Monte Carlo for Systemic Risk",
            categories: [ProjectCategories.Quantitative_Finance, ProjectCategories.HPC],
            description: "Hybrid C++/CUDA Monte Carlo engine for systemic crash probability estimation across correlated EU equity indices; parallel Cholesky decomposition, cuRAND path generation, and optimized reduction kernels",
            impact: "192× speedup over Python (9 min → 2.8 sec for 100M simulations); increased throughput from 188k to 36M sims/sec on NVIDIA GPUs; benchmarked Serial/OpenMP/CUDA implementations with statistical confidence intervals for contagion risk analysis",
            role: "HPC & Quantitative Developer",
            date: "2025-Present",
            techstack: [TechStackCategories.C, TechStackCategories.CUDA, TechStackCategories.Linux, TechStackCategories.Nvidia_Insight, TechStackCategories.OpenMP, TechStackCategories.MPI],
            hasPaper: false,
            paperLink: "",
            deepDiveLink: "",
            githubLink: "https://github.com/javidsegura/gpu-montecarlo-risk"
      },
      {
            title: "Portfolio Optimization: MPT & CAPM",
            categories: [ProjectCategories.Quantitative_Finance],
            description: "Modern Portfolio Theory with efficient frontier, CAPM, PCA-based covariance denoising, and Lagrangian optimization",
            impact: "20+ function library; formal proofs for GMVP, tangency portfolio, Sharpe ratio optimization",
            role: "Quantitative Researcher",
            date: "2024",
            techstack: [TechStackCategories.Python, TechStackCategories.Numpy, TechStackCategories.Pandas],
            hasPaper: true,
            paperLink: "https://www.overleaf.com/read/vcjcrvhffkxs#8ab3e5",
            deepDiveLink: "https://github.com/javidsegura/portfolio-optimization/blob/main/portfolio.ipynb",
            githubLink: "https://github.com/javidsegura/portfolio-optimization"
      },
      {
            title: "Full Stack Booking System",
            categories: [ProjectCategories.Full_stack],
            description: "Production B2B booking platform with Django/MySQL backend, Redis caching, Firebase auth, Stripe payments, and AWS deployment",
            impact: "Reduced scheduling overhead by 40%; processes 1000+ monthly reservations for multiple clients",
            role: "Full Stack Developer",
            date: "2022-2024",
            techstack: [TechStackCategories.FastAPI, TechStackCategories.Grafana, TechStackCategories.Firebase, TechStackCategories.AWS, TechStackCategories.Stripe],
            hasPaper: false,
            paperLink: "",
            deepDiveLink: "",
            githubLink: ""
      },
      {
            title: "Real-Time DDoS Defense System",
            categories: [ProjectCategories.Cybersecurity],
            description: "C-based packet sniffer (libpcap) with Flask defense server, Streamlit dashboard; pfctl firewall automation",
            impact: "Low-level network analysis; monitoring dashboard; automated threat detection and IP blocking",
            role: "Systems & Security Engineer",
            date: "2024",
            techstack: [TechStackCategories.C, TechStackCategories.Libpcap, TechStackCategories.Python, TechStackCategories.Flask, TechStackCategories.Streamlit, TechStackCategories.Docker, TechStackCategories.Pandas, TechStackCategories.Linux],
            hasPaper: false,
            paperLink: "",
            deepDiveLink: "",
            githubLink: "https://github.com/javidsegura/Network-Protection-Tool"
      },
      {
            title: "Efficient Classifier: ML Framework",
            categories: [ProjectCategories.AI],
            description: "Enterprise ML framework for tabular classification with automated hyperparameter tuning, LIME interpretability, and CI/CD",
            impact: "92% F1-score (+2% over baseline) on 50K+ cybersecurity dataset; PyPI-published; led team",
            role: "Tech Lead & ML Engineer",
            date: "2024-2025",
            techstack: [TechStackCategories.Python,  TechStackCategories.Pytorch, TechStackCategories.Scikit_learn, TechStackCategories.Keras,TechStackCategories.Pandas, TechStackCategories.Numpy, TechStackCategories.Linux],
            hasPaper: true,
            paperLink: "https://drive.google.com/drive/u/1/folders/1GksAEhtbiqzj-pGVJixrn35E6DRu44gK",
            deepDiveLink: "https://github.com/javidsegura/efficient-classifier#documentation",
            githubLink: "https://github.com/javidsegura/efficient-classifier"
      },
      {
            title: "URL Shortener: Production Infrastructure",
            categories: [ProjectCategories.Full_stack],
            description: "Production-ready URL shortener with FastAPI backend, React frontend, automated AWS deployment via Terraform/Ansible, and comprehensive observability",
            impact: "Demonstrates end-to-end ownership: IaC provisioning, async architecture with Redis caching, OpenTelemetry metrics/traces, Slack alerting, and E2E test coverage",
            role: "Full Stack Developer",
            date: "2025",
            techstack: [TechStackCategories.FastAPI, TechStackCategories.Grafana, TechStackCategories.Firebase, TechStackCategories.Terraform, TechStackCategories.Ansible, TechStackCategories.Stripe],
            hasPaper: false,
            paperLink: "",
            deepDiveLink: "",
            githubLink: "https://github.com/javidsegura/url-shortener"
      },
      {
            title: "CasinoMines: Probabilistic Risk Modeling",
            categories: [ProjectCategories.Quantitative_Finance],
            description: "Quantitative gaming system with probabilistic multiplier functions, EV optimization, and real-time risk analysis",
            impact: "Formal proofs for hypergeometric distributions; constant EV across risk strategies; O(n log n) algos",
            role: "Quantitative Developer",
            date: "2024",
            techstack: [TechStackCategories.Python, TechStackCategories.Pandas, TechStackCategories.Numpy, TechStackCategories.Pyside6],
            hasPaper: true,
            paperLink: "https://github.com/javidsegura/CasinoMines/blob/main/docs/MathOfGame.ipynb",
            deepDiveLink: "",
            githubLink: "https://github.com/javidsegura/CasinoMines"
      },
]

