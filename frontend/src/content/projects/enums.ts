/** Filter axes for the project index. */

export enum ProjectCategories {
  All = "All",
  Full_stack = "Full Stack",
  AI = "AI",
  Quantitative_Finance = "Quantitative Finance",
  HPC = "HPC",
  Cybersecurity = "Cybersecurity",
  Data_Analysis = "Data Analysis",
}

/**
 * Second filter axis, orthogonal to the tech tags: what kind of work this is,
 * not what it is built with.
 */
export enum ProjectTrack {
  All = "All",
  Research = "Research",
  Production = "Production",
  PersonalTools = "Personal Tools",
}

export enum ProjectStatus {
  Active = "Active",
  Shipped = "Shipped",
  Archived = "Archived",
}

/**
 * Organisations a piece of work was done with. Values are the ids used in URLs
 * (`/projects?org=nsf`) and as the keys of the affiliation-logo registry, so
 * they must stay lowercase and stable.
 */
export enum Organizations {
  All = "All",
  Citi = "citi",
  NSF = "nsf",
  IE = "ie",
  Rutgers = "rutgers",
  Michigan = "umich",
  EduCaixa = "laCaixa",
}

/**
 * Presentation tier. `Full` earns a bespoke lazy-loaded WebGL visual pane;
 * `Simple` uses the same layout skeleton with screenshots or video. A CRUD app
 * does not get a 3D scene.
 */
export enum ProjectTier {
  Full = "full",
  Simple = "simple",
}

export enum TechStackCategories {
  All = "All",
  Python = "Python",
  C = "C",
  MySQL = "MySQL",
  Linux = "Linux",
  AWS = "AWS",
  Azure = "Azure",
  LangGraph = "LangGraph",
  Asyncio = "Asyncio",
  Radical_Asyncflow = "Radical Asyncflow",
  Keras = "Keras",
  Scikit_learn = "Scikit-learn",
  Pytorch = "Pytorch",
  Numpy = "Numpy",
  Pandas = "Pandas",
  React = "React",
  Redis = "Redis",
  Firebase = "Firebase",
  Terraform = "Terraform",
  Ansible = "Ansible",
  FastAPI = "FastAPI",
  Grafana = "Grafana",
  Stripe = "Stripe",
  RabbitMQ = "RabbitMQ",
  SlackAPI = "SlackAPI",
  ChromaDB = "ChromaDB",
  Pyside6 = "Pyside6",
  OpenMP = "OpenMP",
  MPI = "MPI",
  CUDA = "CUDA",
  Nvidia_Insight = "Nvidia Insight",
  Flask = "Flask",
  Streamlit = "Streamlit",
  Docker = "Docker",
  Libpcap = "libpcap",
  Infogram = "Infogram",
  Google_Sites = "Google Sites",
  Open_Data = "Open Data",
}
