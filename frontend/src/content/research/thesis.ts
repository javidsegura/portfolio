/**
 * Thesis essay content.
 *
 * Six sections, each an anchor target and each a state of the sticky visual
 * pane. Prose marked `draft` is scaffolding: the argument shape is right, the
 * writing is not final.
 */

export interface FormalBlock {
  /** Summary line on the collapsed disclosure. */
  title: string;
  body: string[];
}

export interface ThesisSection {
  id: string;
  /** Number shown in the contents rail. Encodes real reading order. */
  index: number;
  heading: string;
  body: string[];
  formal?: FormalBlock;
  draft?: boolean;
}

export const THESIS_TLDR = [
  "Agentic scientific workflows decide what to compute while they are running, so the work they generate cannot be planned in advance the way a traditional HPC job can.",
  "Scheduling that work across heterogeneous resources is better modelled as allocating a portfolio under uncertainty than as filling a queue.",
  "The approach is built on FlowGentic and validated on a protein-binder-design pipeline.",
];

/** The four axes along which the decision space expands. */
export interface HeterogeneityDimension {
  id: string;
  name: string;
  short: string;
  description: string;
  /** Multiplicative effect on the decision space, for the toggle visual. */
  factor: number;
}

export const HETEROGENEITY_DIMENSIONS: HeterogeneityDimension[] = [
  {
    id: "temporal",
    name: "Temporal",
    short: "When work arrives",
    description:
      "Tasks are generated during execution rather than declared up front, so the workload is not known when the first scheduling decision is made.",
    factor: 3,
  },
  {
    id: "epistemic",
    name: "Epistemic",
    short: "What the agent knows",
    description:
      "The value of a task depends on what earlier tasks returned. Two runs of the same workflow do not produce the same work.",
    factor: 4,
  },
  {
    id: "stochasticity",
    name: "Stochasticity",
    short: "How long it takes",
    description:
      "Runtimes and queue waits are distributions, not point estimates, and the tails matter more than the means.",
    factor: 3,
  },
  {
    id: "resource",
    name: "Resource",
    short: "Where it can run",
    description:
      "Heterogeneous compute means the same task has different cost, latency and availability depending on where it lands.",
    factor: 5,
  },
];

export const THESIS_SECTIONS: ThesisSection[] = [
  {
    id: "problem",
    index: 1,
    heading: "The problem",
    body: [
      "A traditional HPC job declares its shape before it runs: this many nodes, for this long, executing this binary. The scheduler can plan against that declaration because the declaration is complete.",
      "An agentic scientific workflow does not work this way. It decides what to compute next based on what it has already computed, which means the total work is only known once the workflow has finished producing it.",
    ],
    draft: true,
  },
  {
    id: "naive-scheduling",
    index: 2,
    heading: "Why naive scheduling fails",
    body: [
      "The obvious approach is to schedule each task as it appears, greedily, on whatever resource is free. This is cheap to implement and it is what most systems do.",
      "It fails because the cost of a placement is not paid at placement time. A task sent to the wrong resource does not just run slowly, it delays every task that depends on it, and in an agentic workflow the dependent tasks have not been generated yet.",
    ],
    draft: true,
  },
  {
    id: "heterogeneity",
    index: 3,
    heading: "Four dimensions of heterogeneity",
    body: [
      "The decision space is not large because there are many resources. It is large because uncertainty compounds across four independent axes, each multiplying the space the scheduler has to reason about.",
    ],
    draft: true,
  },
  {
    id: "portfolio",
    index: 4,
    heading: "Scheduling as portfolio optimization",
    body: [
      "Once placement decisions are made under uncertainty, with correlated outcomes and a budget constraint, the problem stops looking like queueing and starts looking like allocation.",
      "The framing is deliberate: it brings a body of existing theory about allocating under uncertainty to bear on a scheduling problem that has been treated as a heuristics exercise.",
    ],
    formal: {
      title: "The formal version",
      body: [
        "Formal statement of the objective, constraints and solution method to be written here.",
      ],
    },
    draft: true,
  },
  {
    id: "validation",
    index: 5,
    heading: "Validation: protein binder design",
    body: [
      "The evaluation pipeline is protein-binder design, run across heterogeneous HPC resources. It is a good test case because the workflow genuinely branches on intermediate results rather than following a fixed plan.",
    ],
    draft: true,
  },
  {
    id: "status",
    index: 6,
    heading: "Status and links",
    body: [
      "The work builds on FlowGentic, which is open source and already in production use. The thesis itself is in progress toward 2027.",
    ],
  },
];
