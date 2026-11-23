// Single source of truth for all portfolio copy.
// Edit this file to update the site — components render from it.

export const profile = {
  name: "Vijesh Reddy Golamari",
  title: "AI/ML Engineer · Generative AI & Agentic AI",
  tagline:
    "I build LLM systems, agentic AI, and RAG platforms that turn frontier models into reliable, production-grade products.",
  location: "Farmington, MI",
  // Canonical origin — drives metadataBase, canonical URL, sitemap and robots.
  // Change this here if the site moves to a custom domain.
  siteUrl: "https://vijesh-portfolio-seven.vercel.app",
  email: "golamarivijesh@gmail.com",
  // Phone deliberately omitted — this file lives in a public repo, so anything
  // here is trivially scrapeable. Reach-out goes through email or the form.
  // Drives the GitHub stats dashboard + links.
  githubUsername: "golamarivijesh-glitch",
  // Optional: create a free form at https://formspree.io and paste the form ID
  // (the part after /f/). Leave empty to fall back to opening the user's email client.
  formspreeId: "",
  // Update these with your real URLs.
  links: {
    linkedin: "https://www.linkedin.com/in/vijesh-reddy-golamari/",
    github: "https://github.com/golamarivijesh-glitch",
    resume: "/resume.pdf",
  },
  summary:
    "AI/ML and Generative AI Engineer with senior-level experience building production-ready LLM applications, RAG pipelines, and agentic workflows. Hands-on across Python, Java, Spring Boot, microservices, cloud platforms, data engineering, and MLOps/LLMOps. Delivered an enterprise AI assistant that cut ticket-resolution time by 40%, built a benchmarking framework that expanded foundation-model coverage by 45%, and shipped distributed transformer systems across e-commerce, technology, financial services, and agriculture.",
  availability: "Open to new opportunities",
};

// Roles I'm open to (all derived from the résumé). Cycled in the hero and
// listed in the contact section.
export const jobTitles: string[] = [
  "AI/ML Engineer",
  "Generative AI Engineer",
  "Machine Learning Engineer",
  "Applied AI Engineer",
  "Agentic AI Engineer",
  "AI Software Engineer",
  "LLM Engineer",
  "Forward Deployed Engineer — AI/ML",
  "LLMOps Engineer",
  "GenAI Evaluation Specialist",
  "Java / Spring Boot AI Platform Engineer",
];

export type Metric = { value: string; label: string };

export const metrics: Metric[] = [
  { value: "40%", label: "Faster ticket resolution with a production AI assistant" },
  { value: "45%", label: "Increase in LLM benchmarking coverage across foundation models" },
  { value: "5TB+", label: "Daily interaction data processed for ML systems" },
  { value: "28%", label: "Reduction in harmful model outputs via red-teaming" },
];

export type SkillGroup = { category: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Generative AI & Agentic AI",
    skills: [
      "LLM Engineering",
      "Prompt Engineering",
      "ReAct",
      "Function / Tool Calling",
      "Autonomous Agents",
      "Multi-Agent Orchestration",
      "Memory Management",
      "Retrieval-Augmented Generation (RAG)",
      "Guardrails",
      "Hallucination Mitigation",
      "RLHF",
      "DPO",
    ],
  },
  {
    category: "Models & Frameworks",
    skills: [
      "LLaMA 3",
      "GPT-4",
      "Claude",
      "Mistral",
      "BERT",
      "CLIP",
      "LangChain",
      "LangGraph",
      "Hugging Face Transformers",
      "OpenAI APIs",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
  {
    category: "LLMOps, MLOps & Evaluation",
    skills: [
      "LLM Evaluation & Benchmarking",
      "Adversarial Testing",
      "Bias Detection",
      "SHAP",
      "Distributed Training",
      "FSDP",
      "FlashAttention",
      "MLX",
      "Weights & Biases",
      "Model Monitoring",
      "CI/CD",
    ],
  },
  {
    category: "Data, Search & Platforms",
    skills: [
      "Python",
      "SQL",
      "R",
      "Apache Spark",
      "Kafka",
      "Airflow",
      "Hive",
      "Elasticsearch",
      "BM25",
      "Pinecone",
      "Milvus",
      "PostgreSQL",
      "MySQL",
      "Snowflake",
      "BigQuery",
      "Dataflow",
    ],
  },
  {
    category: "Cloud & Engineering",
    skills: [
      "AWS (SageMaker, Lambda, Redshift, Glue, Athena)",
      "GCP (Vertex AI)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Jenkins",
      "Java",
      "Spring Boot",
      "REST APIs",
      "ReactJS",
      "Django REST Framework",
      "Redis",
      "Jira",
      "Confluence",
    ],
  },
];

// Tech-stack logos (devicon SVGs saved under /public/tech). Shown as a colorful
// marquee in the Skills section.
export type Tech = { name: string; label: string };

export const techStack: Tech[] = [
  { name: "python", label: "Python" },
  { name: "pytorch", label: "PyTorch" },
  { name: "tensorflow", label: "TensorFlow" },
  { name: "pandas", label: "pandas" },
  { name: "fastapi", label: "FastAPI" },
  { name: "django", label: "Django" },
  { name: "react", label: "React" },
  { name: "docker", label: "Docker" },
  { name: "kubernetes", label: "Kubernetes" },
  { name: "aws", label: "AWS" },
  { name: "gcp", label: "GCP" },
  { name: "kafka", label: "Kafka" },
  { name: "spark", label: "Spark" },
  { name: "airflow", label: "Airflow" },
  { name: "elasticsearch", label: "Elasticsearch" },
  { name: "postgresql", label: "PostgreSQL" },
  { name: "mysql", label: "MySQL" },
  { name: "git", label: "Git" },
];

// My company + products. Rendered in the Ventures section with animated visuals.
export type Venture = {
  name: string;
  company?: string;
  tagline: string;
  description: string;
  status: "Live" | "Building";
  visual: "farming" | "ecommerce" | "security" | "agency";
  accent: string;
  features: string[];
  tags: string[];
  link?: string; // optional live URL — renders a "Visit" button
};

export const ventures: Venture[] = [
  {
    name: "YieldAI Global",
    company: "Agrivision AI",
    tagline: "AI-powered agriculture intelligence platform",
    description:
      "My venture as Founder & AI Architect at Agrivision AI — an end-to-end platform that helps farmers make data-driven decisions. It pairs predictive analytics with a multilingual AI assistant so growers get expert guidance in their own language.",
    status: "Live",
    visual: "farming",
    accent: "#34d399",
    features: [
      "Crop advisory & yield forecasting",
      "Irrigation planning & automated schedules",
      "Plant disease detection from images",
      "Weather intelligence & predictive analytics",
      "Multilingual conversational AI assistant",
      "Multi-region, multi-language support",
    ],
    tags: ["ReactJS", "Django REST", "Python", "MySQL", "AI/ML"],
    link: "https://yieldaiglobal.com",
  },
  {
    name: "BuildVaillant",
    company: "Agrivision AI",
    tagline: "We build it, then keep watch.",
    description:
      "A web development and digital product studio, and a venture of Agrivision AI. It ships websites, web apps, SaaS products, storefronts and dashboards — then stays on for a full year of maintenance, uptime monitoring, backups and security patches, instead of disappearing at launch.",
    status: "Live",
    visual: "agency",
    accent: "#f0b429",
    features: [
      "Websites, web apps, SaaS products & dashboards",
      "365 days of maintenance and monitoring included",
      "Monthly updates, backups & security patches",
      "AI assistants and SEO built in",
      "Three tiers — Starter Site, Business Pro, Product Build",
    ],
    tags: ["Next.js", "TypeScript", "FastAPI", "AWS", "Vercel"],
    link: "https://buildvaillant.com",
  },
  {
    name: "Hundo Deals",
    tagline: "Everything under $100 — a curated deals marketplace",
    description:
      "An e-commerce platform I'm building where every product is priced below $100. A discovery-first shopping experience with AI-assisted recommendations, curated daily deals, and a fast, modern checkout.",
    status: "Building",
    visual: "ecommerce",
    accent: "#fb7185",
    features: [
      "Every product under $100 — guaranteed",
      "Curated daily deals & discovery feed",
      "AI-assisted product recommendations",
      "Fast, modern, mobile-first checkout",
    ],
    tags: ["E-commerce", "Next.js", "Payments", "AI Recommendations"],
    link: "",
  },
  {
    name: "CyberShields AI",
    tagline: "AI-driven cybersecurity threat detection platform",
    description:
      "A threat-detection platform for security operations centres. It reduces a torrent of raw telemetry into a small number of well-evidenced, prioritised narratives about what an adversary appears to be doing — fast enough that a human can still intervene. Detection works on behaviour and metadata rather than blocklists, so it holds up against encrypted traffic.",
    status: "Building",
    visual: "security",
    accent: "#38bdf8",
    features: [
      "Behavioural detection from metadata — effective on encrypted traffic",
      "C2 beaconing, brute-force, impossible-travel & ransomware detectors",
      "Telemetry normalisation (ECS/OCSF) across network, endpoint, log & identity",
      "Correlation engine scoring findings into prioritised incidents",
      "Analyst triage, case management & feedback loop",
      "Live dashboard with threat-hunting workspace",
    ],
    tags: ["Python", "FastAPI", "Kafka", "Flink", "Elasticsearch"],
    link: "",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  blurb?: string;
  highlights: string[];
  accent: string; // brand-ish color for the animated monogram badge
  logo?: string; // optional: drop a logo at /public/... and reference it here
  url?: string; // optional — links the company name out
};

export const experience: Experience[] = [
  {
    company: "StockX",
    role: "AI Software Engineer",
    period: "May 2026 – Present",
    location: "Detroit, MI",
    accent: "#00a046",
    highlights: [
      "Develop and maintain automated regression tests for backend services and REST APIs — covering business rules, request validation, response schemas, and expected error behavior.",
      "Design integration and end-to-end tests for service-to-service workflows, checking API contracts, downstream responses, and data consistency across service boundaries.",
      "Support CI/CD by running smoke and regression suites in build and release workflows, reviewing failed checks to flag regressions and integration risks before deployment.",
      "Reproduce backend and integration defects from API requests, logs, and test output; document reproduction steps and work with developers to isolate root causes and verify fixes.",
      "Cover reliability and security-sensitive cases in API tests — timeouts, dependency failures, malformed inputs, and requests with missing credentials or insufficient permissions.",
      "Partner with engineering, QA, and product teams to turn acceptance criteria into test scenarios, prioritize coverage by release risk, and communicate defects and validation status.",
    ],
  },
  {
    company: "Agrivision AI",
    role: "Founder & AI Architect",
    period: "Mar 2026 – Present",
    location: "Michigan",
    accent: "#34d399",
    logo: "/logos/agrivision.png",
    url: "https://agrivisionai.org",
    blurb:
      "Built and launched YieldAI Global, an AI-powered agriculture intelligence platform — predictive analytics, crop recommendations, weather intelligence, disease detection, and multilingual digital assistance.",
    highlights: [
      "Owned product development from concept through launch and designed the architecture across ReactJS, Django REST Framework, Python, MySQL, APIs, and cloud infrastructure.",
      "Developed crop advisory, yield forecasting, irrigation planning, and conversational AI modules, while scaling the platform to support multiple regions and languages.",
      "Implemented RAG-style retrieval using embeddings, structured prompts, and domain-specific context; integrated Anthropic Claude and OpenAI APIs for grounded, multilingual farmer guidance.",
      "Evaluated Claude- and OpenAI-generated responses against agriculture-specific prompts using bias detection and monitoring to improve accuracy, safety, tone, and practical usefulness.",
      "Designed AI-driven decision-support workflows that combine structured agricultural information with predictive model outputs, helping users interpret complex data and make informed decisions.",
      "Coordinated development and testing of AI-powered application features — focusing on data quality, backend integration, and consistent delivery of model-generated insights.",
    ],
  },
  {
    company: "Wipro",
    role: "GenAI & LLM Evaluation Specialist · Client: Google",
    period: "Nov 2025 – Apr 2026",
    location: "Dallas, TX",
    accent: "#60a5fa",
    highlights: [
      "Architected scalable LLM evaluation frameworks with Python, Apache Hive, and MLX — +45% benchmarking coverage across multiple foundation models.",
      "Designed adversarial and prompt-engineering evaluations with Hugging Face Transformers — +35% detection of jailbreak, hallucination, and multi-hop reasoning failures.",
      "Built automated Python and SQL evaluation pipelines that reduced manual validation effort by 60% and accelerated model-release cycles.",
      "Led AI safety and red-team testing using bias detection and adversarial prompting — −28% harmful outputs, in collaboration with alignment teams.",
      "Developed ELK-based monitoring dashboards for latency and hallucination trends — −25% model-degradation incidents; integrated evaluation into Git and Jenkins CI/CD workflows.",
      "Applied human-in-the-loop annotation and R-based analysis to assess grounding, instruction following, safety, retrieval quality, reasoning accuracy, latency, and response consistency.",
      "Documented model failure patterns and evaluation findings to support systematic troubleshooting, quality improvements, and more reliable AI-generated outputs.",
      "Developed Python-based AI applications integrating Google Cloud Platform services and BigQuery for enterprise data analysis.",
    ],
  },
  {
    company: "Meta",
    role: "AI/ML Engineer",
    period: "Aug 2024 – Oct 2025",
    location: "Menlo Park, CA",
    accent: "#3b82f6",
    logo: "/logos/meta.svg",
    highlights: [
      "Fine-tuned LLaMA 3 models with PyTorch FSDP on Meta RSC — +25% harmful-content detection, −15% false positives.",
      "Developed diffusion and transformer-based generative models — +12% ad engagement, +8% click-through rate.",
      "Optimized distributed training with FlashAttention and GPU scheduling — −30% training cost and improved experimentation throughput.",
      "Implemented SHAP and Fairness Indicators pipelines that reduced demographic performance gaps by 22%.",
      "Engineered Spark and Kafka pipelines processing more than 5TB of daily interaction data; deployed high-throughput models with Docker and Kubernetes.",
      "Analyzed model behavior across varied inputs and edge cases to identify prediction inconsistencies, reasoning failures, and opportunities to improve AI system performance.",
      "Applied Python-based testing and analytical techniques to assess model outputs, investigate unexpected behavior, and support iterative refinement of AI workflows.",
    ],
  },
  {
    company: "Citigroup",
    role: "Applied AI Engineer",
    period: "Sep 2023 – Aug 2024",
    location: "San Francisco, CA",
    accent: "#2dd4bf",
    logo: "/logos/citi.svg",
    highlights: [
      "Delivered a Generative AI assistant using GCP Vertex AI and LangChain — −40% HR and IT ticket-resolution time.",
      "Built RAG pipelines with embeddings, transformer models, and Elasticsearch — −30% hallucinated responses.",
      "Engineered agentic workflows with API integrations for autonomous task execution across enterprise applications; optimized hybrid BM25/vector retrieval — +25% response accuracy.",
      "Implemented GitHub Actions-based LLMOps pipelines with monitoring and observability — −35% release errors.",
      "Developed Python and R predictive models that improved credit-risk accuracy by 18%, using statistical analysis and SHAP to identify degradation and guide retraining.",
      "Improved the reliability of enterprise AI applications through response validation, retrieval-quality assessment, and troubleshooting of data-access and integration issues.",
    ],
  },
  {
    company: "Flipkart",
    role: "Machine Learning Engineer",
    period: "Aug 2021 – Nov 2022",
    location: "India",
    accent: "#fbbf24",
    logo: "/logos/flipkart.svg",
    highlights: [
      "Built NLP and embedding models with TensorFlow and Scikit-learn — +15–20% catalog-prediction accuracy.",
      "Designed recommendation systems using collaborative filtering and feature engineering — +12% uplift in personalized interactions.",
      "Built scalable ML and data pipelines with AWS SageMaker, Redshift, Athena, Spark, Airflow, and AWS Glue, reducing data-preparation time and accelerating large-scale training.",
      "Developed transformer-based conversational systems and optimized inference with batching to improve response accuracy and latency for high-traffic applications.",
      "Implemented Jenkins and GitHub Actions MLOps pipelines — −40% deployment timelines; partnered with product and engineering teams to productionize API-integrated ML systems.",
      "Conducted exploratory data analysis and feature-level investigations to surface data anomalies, inconsistent patterns, and the factors driving model performance.",
      "Performed iterative model testing and error analysis to evaluate prediction quality, identify performance limits, and guide improvements to ML workflows.",
    ],
  },
];

// `visual` selects the generated animated artwork (see components/ProjectVisual.tsx).
// Set `image` to a screenshot path under /public to use a real image instead.
export type ProjectVisualKind = "orchestrator" | "multimodal" | "rag" | "qa";

export type Project = {
  name: string;
  tags: string[];
  highlights: string[];
  visual: ProjectVisualKind;
  image?: string;
  demo?: string; // optional live-demo URL — renders a "Live Demo" button
  repo?: string; // optional source URL — renders a "Code" button
};

export const projects: Project[] = [
  {
    name: "Autonomous Multi-Agent Enterprise Orchestrator",
    visual: "orchestrator",
    repo: "https://github.com/golamarivijesh-glitch/agentic-ai-orchestrator",
    tags: ["LangChain", "LangGraph", "Agentic AI", "Airflow"],
    highlights: [
      "Multi-agent orchestration coordinating task planning and execution across complex enterprise workflows.",
      "Tool-calling and API-integrated agents (Python, SQL) for real-time interaction with external systems.",
      "Stateful agent memory + Airflow orchestration for long-running, parallel processes.",
    ],
  },
  {
    name: "Distributed Multimodal Intelligence Platform",
    visual: "multimodal",
    tags: ["PyTorch", "CLIP", "FSDP", "Spark"],
    highlights: [
      "Multimodal pipeline (PyTorch + CLIP) jointly processing image and text for improved recognition.",
      "Distributed training with FSDP and FlashAttention to scale across large datasets efficiently.",
      "Spark-based ingestion enabling reliable feature generation for training and evaluation.",
    ],
  },
  {
    name: "Enterprise RAG & LLMOps Platform",
    visual: "rag",
    tags: ["RAG", "Elasticsearch", "Hugging Face", "W&B"],
    highlights: [
      "RAG knowledge retrieval with LangChain, Elasticsearch, and embedding models for enterprise docs.",
      "Prompt-engineered LLM pipelines (Hugging Face, OpenAI) for context-aware responses.",
      "LLMOps with CI/CD and monitoring (GitHub Actions, Weights & Biases) for stable production deploys.",
    ],
  },
  {
    name: "AI-Powered Jira QA Copilot",
    visual: "qa",
    tags: ["OpenAI", "Streamlit", "Selenium", "Jira API"],
    highlights: [
      "Transforms Jira user stories and BRDs into structured test cases for faster test design.",
      "End-to-end system: Jira REST APIs, NLP parsing, and a Streamlit UI for interactive validation.",
      "Generates automation-ready Selenium/Java frameworks with Maven for scalable test pipelines.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
};

export const education: Education[] = [
  {
    school: "Sacred Heart University",
    degree: "Master's Degree",
    period: "Jan 2023 – Mar 2024",
    location: "Fairfield, CT",
  },
  {
    school: "Loyola Academy",
    degree: "Bachelor of Commerce, Business Studies",
    period: "May 2019 – May 2022",
    location: "Hyderabad, India",
  },
];

export const certifications: string[] = [
  "Generative AI with Large Language Models — Coursera",
  "Generative AI for Data Scientists Specialization — Coursera",
  "Deep Learning Specialization — Coursera",
  "Google AI Essentials — Coursera",
];

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "ventures", label: "Ventures" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
