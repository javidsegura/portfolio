/**
 * Project records.
 *
 * Sections flagged `draft: true` are structural placeholders: the layout and
 * scroll-sync are real, the prose is not yet written. Everything not flagged
 * is carried over from the previous site and is factual.
 */

import {
  ProjectCategories,
  ProjectStatus,
  ProjectTier,
  ProjectTrack,
  TechStackCategories,
} from "./enums";
import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    slug: "flowgentic",
    title: "FlowGentic",
    tagline: "Running LangGraph, CrewAI and AG2 agent systems on HPC schedulers.",
    categories: [ProjectCategories.AI, ProjectCategories.HPC],
    track: ProjectTrack.Research,
    status: ProjectStatus.Active,
    tier: ProjectTier.Full,
    description:
      "Production Python library for deploying AI agents (LangGraph, CrewAI, AG2) on HPC schedulers with enterprise workflows",
    impact:
      "Used by Rutgers University RADICAL lab researchers for large-scale protein ML on the NCSA Delta supercomputer (IMPRESS project)",
    role: "Lead Developer",
    date: "2025 — present",
    techstack: [
      TechStackCategories.Python,
      TechStackCategories.LangGraph,
      TechStackCategories.Asyncio,
      TechStackCategories.Radical_Asyncflow,
      TechStackCategories.Linux,
    ],
    orgIds: ["nsf", "rutgers"],
    featured: true,
    hasPaper: false,
    links: {
      github: "https://github.com/stride-research/flowgentic",
      deepDive: "https://stride-research.github.io/flowgentic/",
      docs: "https://stride-research.github.io/flowgentic/",
    },
    narrative: [
      {
        id: "problem",
        heading: "Agent frameworks assume a laptop. Supercomputers are not that.",
        body: [
          "LangGraph, CrewAI and AG2 all assume the process that defines a workflow is the process that runs it: spawn a task, await it, collect the result. On an HPC system that assumption breaks immediately. Work is submitted to a batch scheduler, sits in a queue for an unpredictable interval, and executes on nodes the submitting process cannot reach directly.",
          "FlowGentic is the middleware layer that reconciles the two. Agent systems keep their native programming model; the execution underneath is translated into scheduler submissions, dependency graphs and asynchronous result collection.",
        ],
      },
      {
        id: "architecture",
        heading: "Architecture",
        body: [
          "The library sits between the agent framework's execution hooks and RADICAL AsyncFlow, mapping agent tasks onto scheduler-managed resources while preserving the async semantics callers already expect.",
        ],
        draft: true,
      },
      {
        id: "adoption",
        heading: "In production at RADICAL",
        body: [
          "Researchers at Rutgers' RADICAL group use FlowGentic for large-scale protein machine learning on the NCSA Delta supercomputer, as part of the NSF-funded IMPRESS project.",
          "The work was presented at PASC26 in Bern.",
        ],
      },
      {
        id: "status",
        heading: "Where it is going",
        body: [
          "Ongoing thesis work extends FlowGentic from execution middleware into a scheduling layer that treats resource selection as a portfolio-optimization problem across heterogeneous HPC resources.",
        ],
      },
    ],
  },
  {
    slug: "binderflow-thesis",
    title: "BinderFlow",
    tagline:
      "Portfolio-optimizing agentic scientific workflows across heterogeneous HPC resources.",
    categories: [ProjectCategories.AI, ProjectCategories.HPC],
    track: ProjectTrack.Research,
    status: ProjectStatus.Active,
    tier: ProjectTier.Full,
    description:
      "Thesis work extending FlowGentic into scheduling agentic scientific workflows as a portfolio-optimization problem over heterogeneous compute.",
    impact:
      "Validated on a protein-binder-design pipeline. Full treatment of the argument lives in the thesis essay.",
    role: "Author",
    date: "2026 — 2027",
    techstack: [
      TechStackCategories.Python,
      TechStackCategories.Radical_Asyncflow,
      TechStackCategories.Linux,
    ],
    orgIds: ["ie", "nsf", "rutgers"],
    featured: true,
    hasPaper: false,
    links: {},
    narrative: [
      {
        id: "premise",
        heading: "Premise",
        body: [
          "Agentic scientific workflows generate work whose cost and value are not known before it runs. Scheduling that work well is closer to allocating a portfolio under uncertainty than to filling a queue.",
        ],
        draft: true,
      },
      {
        id: "validation",
        heading: "Validation",
        body: [
          "The approach is evaluated on a protein-binder-design pipeline running across heterogeneous HPC resources.",
        ],
        draft: true,
      },
    ],
  },
  {
    slug: "efficient-classifier",
    title: "Efficient Classifier",
    tagline: "An enterprise ML framework for tabular classification, published to PyPI.",
    categories: [ProjectCategories.AI],
    track: ProjectTrack.Research,
    status: ProjectStatus.Shipped,
    tier: ProjectTier.Full,
    description:
      "Enterprise ML framework for tabular classification with automated hyperparameter tuning, LIME interpretability, and CI/CD",
    impact:
      "92% F1-score (+2% over baseline) on a 50K+ row cybersecurity dataset; published to PyPI; led the team",
    role: "Tech Lead & ML Engineer",
    date: "2024 — 2025",
    techstack: [
      TechStackCategories.Python,
      TechStackCategories.Pytorch,
      TechStackCategories.Scikit_learn,
      TechStackCategories.Keras,
      TechStackCategories.Pandas,
      TechStackCategories.Numpy,
      TechStackCategories.Linux,
    ],
    orgIds: ["ie"],
    featured: true,
    hasPaper: true,
    links: {
      github: "https://github.com/javidsegura/efficient-classifier",
      paper:
        "https://drive.google.com/drive/u/1/folders/1GksAEhtbiqzj-pGVJixrn35E6DRu44gK",
      deepDive: "https://github.com/javidsegura/efficient-classifier#documentation",
    },
    narrative: [
      {
        id: "problem",
        heading: "The same pipeline, rewritten every time",
        body: [
          "Tabular classification projects re-implement the same sequence — split, encode, tune, interpret, report — with enough small variations that results stop being comparable across runs.",
        ],
        draft: true,
      },
      {
        id: "pipeline",
        heading: "The pipeline",
        body: [
          "Automated hyperparameter tuning and LIME interpretability are wired into a single pass, with CI/CD so a model change produces a reproducible, published artifact.",
        ],
        draft: true,
      },
      {
        id: "results",
        heading: "Results",
        body: [
          "On a cybersecurity dataset of over 50,000 rows the framework reached a 92% F1-score, two points above the baseline.",
        ],
      },
    ],
  },
  {
    slug: "gpu-montecarlo-risk",
    title: "GPU-Accelerated Monte Carlo for Systemic Risk",
    tagline: "A CUDA engine estimating crash probability across correlated EU equity indices.",
    categories: [ProjectCategories.Quantitative_Finance, ProjectCategories.HPC],
    track: ProjectTrack.Research,
    status: ProjectStatus.Active,
    tier: ProjectTier.Simple,
    description:
      "Hybrid C++/CUDA Monte Carlo engine for systemic crash probability estimation across correlated EU equity indices; parallel Cholesky decomposition, cuRAND path generation, and optimized reduction kernels",
    impact:
      "192× speedup over Python (9 min → 2.8 sec for 100M simulations); throughput from 188k to 36M sims/sec on NVIDIA GPUs",
    role: "HPC & Quantitative Developer",
    date: "2025 — present",
    techstack: [
      TechStackCategories.C,
      TechStackCategories.CUDA,
      TechStackCategories.Linux,
      TechStackCategories.Nvidia_Insight,
      TechStackCategories.OpenMP,
      TechStackCategories.MPI,
    ],
    featured: false,
    hasPaper: false,
    links: { github: "https://github.com/javidsegura/gpu-montecarlo-risk" },
    narrative: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "Serial, OpenMP and CUDA implementations of the same Monte Carlo engine, benchmarked against each other with statistical confidence intervals for contagion risk analysis.",
        ],
      },
      {
        id: "results",
        heading: "Results",
        body: [
          "100 million simulations dropped from nine minutes to 2.8 seconds, a 192× speedup, raising throughput from 188,000 to 36 million simulations per second.",
        ],
      },
    ],
  },
  {
    slug: "zeffo-ticket-platform",
    title: "AI-Powered Ticket Resolution Platform",
    tagline: "Event-driven support automation at 500+ concurrent agent workflows.",
    categories: [ProjectCategories.Full_stack, ProjectCategories.AI],
    track: ProjectTrack.Production,
    status: ProjectStatus.Active,
    tier: ProjectTier.Simple,
    description:
      "Event-driven support ticket system processing 500+ concurrent agent workflows with <200ms p95 latency; FastAPI backend, MySQL, Redis caching, React observability dashboard with live metrics and A/B experiment tracking",
    impact:
      "75%+ backend test coverage with E2E tests for critical workflows; deployed via Docker Compose with automated CI/CD and infrastructure-as-code to Azure and AWS",
    role: "Full Stack + AI Engineer",
    date: "2025 — present",
    techstack: [
      TechStackCategories.FastAPI,
      TechStackCategories.RabbitMQ,
      TechStackCategories.React,
      TechStackCategories.Terraform,
      TechStackCategories.Ansible,
      TechStackCategories.SlackAPI,
      TechStackCategories.ChromaDB,
    ],
    featured: false,
    hasPaper: false,
    links: {
      deepDive:
        "https://medium.com/@jdominguez.ieu2023/building-zeffo-how-we-engineered-an-ai-powered-ticket-resolution-platform-a22c10fe255b?postPublishedType=repub",
    },
    videoURL:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7405644750604898305?compact=1",
    narrative: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "A support ticket system built around an event-driven core, sustaining more than 500 concurrent agent workflows at under 200ms p95 latency.",
        ],
      },
      {
        id: "operations",
        heading: "Running it",
        body: [
          "Backend test coverage above 75% with end-to-end tests on the critical workflows, deployed through Docker Compose with automated CI/CD and infrastructure-as-code across Azure and AWS.",
        ],
      },
    ],
  },
  {
    slug: "portfolio-optimization",
    title: "Portfolio Optimization: MPT & CAPM",
    tagline: "Efficient frontier, CAPM and PCA-based covariance denoising, proved out.",
    categories: [ProjectCategories.Quantitative_Finance],
    track: ProjectTrack.PersonalTools,
    status: ProjectStatus.Shipped,
    tier: ProjectTier.Simple,
    description:
      "Modern Portfolio Theory with efficient frontier, CAPM, PCA-based covariance denoising, and Lagrangian optimization",
    impact:
      "20+ function library; formal proofs for GMVP, tangency portfolio and Sharpe ratio optimization",
    role: "Quantitative Researcher",
    date: "2024",
    techstack: [
      TechStackCategories.Python,
      TechStackCategories.Numpy,
      TechStackCategories.Pandas,
    ],
    featured: false,
    hasPaper: true,
    links: {
      github: "https://github.com/javidsegura/portfolio-optimization",
      paper: "https://www.overleaf.com/read/vcjcrvhffkxs#8ab3e5",
      deepDive:
        "https://github.com/javidsegura/portfolio-optimization/blob/main/portfolio.ipynb",
    },
    narrative: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "A library of more than twenty functions implementing Modern Portfolio Theory end to end, with formal proofs for the global minimum variance portfolio, the tangency portfolio and Sharpe ratio optimization.",
        ],
      },
    ],
  },
  {
    slug: "url-shortener",
    title: "URL Shortener: Production Infrastructure",
    tagline: "End-to-end ownership, from Terraform provisioning to OpenTelemetry traces.",
    categories: [ProjectCategories.Full_stack],
    track: ProjectTrack.Production,
    status: ProjectStatus.Shipped,
    tier: ProjectTier.Simple,
    description:
      "Production-ready URL shortener with FastAPI backend, React frontend, automated AWS deployment via Terraform/Ansible, and comprehensive observability",
    impact:
      "IaC provisioning, async architecture with Redis caching, OpenTelemetry metrics and traces, Slack alerting, and E2E test coverage",
    role: "Full Stack Developer",
    date: "2025",
    techstack: [
      TechStackCategories.FastAPI,
      TechStackCategories.Grafana,
      TechStackCategories.Firebase,
      TechStackCategories.Terraform,
      TechStackCategories.Ansible,
      TechStackCategories.Stripe,
    ],
    featured: false,
    hasPaper: false,
    links: { github: "https://github.com/javidsegura/url-shortener" },
    narrative: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "The point of this one is the operational surface rather than the product: infrastructure provisioned as code, async request handling with Redis caching, and metrics and traces wired through OpenTelemetry to Grafana with Slack alerting on top.",
        ],
      },
    ],
  },
  {
    slug: "ddos-defense",
    title: "Real-Time DDoS Defense System",
    tagline: "A libpcap packet sniffer wired to automated firewall response.",
    categories: [ProjectCategories.Cybersecurity],
    track: ProjectTrack.PersonalTools,
    status: ProjectStatus.Shipped,
    tier: ProjectTier.Simple,
    description:
      "C-based packet sniffer (libpcap) with Flask defense server, Streamlit dashboard, and pfctl firewall automation",
    impact:
      "Low-level network analysis, live monitoring dashboard, and automated threat detection with IP blocking",
    role: "Systems & Security Engineer",
    date: "2024",
    techstack: [
      TechStackCategories.C,
      TechStackCategories.Libpcap,
      TechStackCategories.Python,
      TechStackCategories.Flask,
      TechStackCategories.Streamlit,
      TechStackCategories.Docker,
      TechStackCategories.Pandas,
      TechStackCategories.Linux,
    ],
    featured: false,
    hasPaper: false,
    links: { github: "https://github.com/javidsegura/Network-Protection-Tool" },
    narrative: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "Packet capture in C via libpcap feeds a Flask defense server, which drives pfctl firewall rules automatically while a Streamlit dashboard shows what is being blocked and why.",
        ],
      },
    ],
  },
  {
    slug: "booking-system",
    title: "Full Stack Booking System",
    tagline: "A B2B booking platform running real reservations for real clients.",
    categories: [ProjectCategories.Full_stack],
    track: ProjectTrack.Production,
    status: ProjectStatus.Archived,
    tier: ProjectTier.Simple,
    description:
      "Production B2B booking platform with Django/MySQL backend, Redis caching, Firebase auth, Stripe payments, and AWS deployment",
    impact:
      "Reduced scheduling overhead by 40%; processes 1000+ monthly reservations for multiple clients",
    role: "Full Stack Developer",
    date: "2022 — 2024",
    techstack: [
      TechStackCategories.FastAPI,
      TechStackCategories.Grafana,
      TechStackCategories.Firebase,
      TechStackCategories.AWS,
      TechStackCategories.Stripe,
    ],
    featured: false,
    hasPaper: false,
    links: {},
    narrative: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "Built and operated for paying clients over two years, handling more than a thousand reservations a month and cutting scheduling overhead by roughly 40%.",
        ],
      },
    ],
  },
  {
    slug: "casino-mines",
    title: "CasinoMines: Probabilistic Risk Modeling",
    tagline: "Hypergeometric proofs behind a constant-EV game.",
    categories: [ProjectCategories.Quantitative_Finance],
    track: ProjectTrack.PersonalTools,
    status: ProjectStatus.Shipped,
    tier: ProjectTier.Simple,
    description:
      "Quantitative gaming system with probabilistic multiplier functions, EV optimization, and real-time risk analysis",
    impact:
      "Formal proofs for hypergeometric distributions; constant EV across risk strategies; O(n log n) algorithms",
    role: "Quantitative Developer",
    date: "2024",
    techstack: [
      TechStackCategories.Python,
      TechStackCategories.Pandas,
      TechStackCategories.Numpy,
      TechStackCategories.Pyside6,
    ],
    featured: false,
    hasPaper: true,
    links: {
      github: "https://github.com/javidsegura/CasinoMines",
      paper: "https://github.com/javidsegura/CasinoMines/blob/main/docs/MathOfGame.ipynb",
    },
    narrative: [
      {
        id: "overview",
        heading: "Overview",
        body: [
          "Multiplier functions derived from the hypergeometric distribution, with proofs showing expected value stays constant across risk strategies.",
        ],
      },
    ],
  },
];
