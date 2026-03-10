import {
  CertificationEntry,
  ExperienceEntry,
  ExperienceSnapshot,
  ServiceOffer
} from "@/types/content";

export const siteConfig = {
  name: "Guru Subramaniam Shyamala",
  shortName: "Guru",
  role: "Cloud Engineer + Forward Deployed Engineer",
  description:
    "Guru Subramaniam Shyamala, also known as Guru, is a Cloud Engineer and Forward Deployed Engineer building Terraform-driven platforms, AI-backed internal systems, and modernization programs across AWS, GCP, and Azure.",
  linkedinUrl: "https://www.linkedin.com/in/guruss/",
  githubUrl: "https://github.com/guru-subramaniam-shyamala",
  resumeUrl:
    "https://resume-buc.s3.ca-central-1.amazonaws.com/Guru_Subramaniam_Shyamala_Resume.pdf",
  emailNote:
    "LinkedIn is the fastest way to reach me while this site is being refreshed with a dedicated contact channel.",
  keywords: [
    "Guru Subramaniam Shyamala",
    "Guru",
    "Guru Subramaniam",
    "Cloud Engineer",
    "Forward Deployed Engineer",
    "Terraform Engineer",
    "AWS Engineer",
    "GCP Engineer",
    "AI Platform Engineer",
    "Guru cloud engineer",
    "Guru Terraform engineer",
    "Guru Subramaniam Shyamala portfolio",
    "cloudife"
  ]
};

export const proofStrip = [
  "Terraform-driven platform delivery across AWS, GCP, and Azure",
  "AI platform work involving RAG, orchestration, and vector retrieval",
  "Migration and modernization across cloud and enterprise systems",
  "Certified in AWS and Terraform"
];

export const experienceSnapshot: ExperienceSnapshot[] = [
  {
    label: "Experience",
    value: "3+ years across software, cloud, and platform delivery"
  },
  {
    label: "Cloud platforms",
    value: "AWS, GCP, and Azure-aligned delivery patterns"
  },
  {
    label: "Certifications",
    value: "4 cloud and infrastructure certifications"
  },
  {
    label: "Major domains",
    value: "Healthcare, enterprise collaboration, migration, AI platforms"
  },
  {
    label: "Current / recent role",
    value: "GCP Cloud Engineer focused on secure data and ML pipelines"
  }
];

export const waysToHelp = [
  {
    title: "Translate ambiguity into production systems",
    description:
      "Work directly with operators, product leads, and platform teams to turn fuzzy requirements into secure, supportable cloud delivery plans."
  },
  {
    title: "Modernize cloud platforms without delivery drag",
    description:
      "Untangle legacy workflows, rationalize infrastructure, and move teams toward repeatable platform patterns with low-risk rollout paths."
  },
  {
    title: "Accelerate delivery with Terraform and automation",
    description:
      "Reduce manual provisioning, standardize environments, and ship changes faster with tested infrastructure-as-code and deployment workflows."
  },
  {
    title: "Build AI-backed internal platforms",
    description:
      "Design internal tools that combine retrieval, orchestration, observability, and governance without leaking sensitive implementation details."
  }
];

export const services: ServiceOffer[] = [
  {
    id: "fde",
    title: "Forward Deployed Engineering",
    summary:
      "Bridge product, operations, and platform teams by turning real business workflows into production-ready systems.",
    bullets: [
      "Translate ambiguous stakeholder requirements into implementation-ready technical plans",
      "Work across architecture, delivery, and rollout details to reduce handoff gaps",
      "Ship pragmatic solutions that are secure, supportable, and measurable"
    ]
  },
  {
    id: "platform-modernization",
    title: "Cloud Platform Modernization",
    summary:
      "Modernize fragmented infrastructure and enterprise workloads into resilient cloud platforms that teams can operate confidently.",
    bullets: [
      "Refactor brittle environments into standardized cloud foundations",
      "Design migration paths that minimize downtime and operational risk",
      "Improve platform reliability, governance, and operating clarity"
    ]
  },
  {
    id: "terraform-automation",
    title: "Terraform and Delivery Automation",
    summary:
      "Codify infrastructure and release workflows so teams can move from manual effort to consistent, repeatable delivery.",
    bullets: [
      "Build reusable Terraform modules and environment patterns",
      "Automate deployment workflows across cloud accounts and environments",
      "Shorten release cycles and reduce configuration drift"
    ]
  },
  {
    id: "ai-platforms",
    title: "AI-Backed Internal Platforms",
    summary:
      "Design internal platforms that combine orchestration, retrieval, and observability to support engineering teams and operators.",
    bullets: [
      "Integrate retrieval and vector-backed workflows into internal systems",
      "Create high-level architectures that protect sensitive platform internals",
      "Pair platform capability with operator feedback and monitoring loops"
    ]
  }
];

export const experience: ExperienceEntry[] = [
  {
    company: "Elevance Health",
    duration: "Sep 2025 - Present",
    role: "GCP Cloud Engineer",
    description:
      "Built secure, event-driven GCP pipelines connecting Workday, Cloud SQL, BigQuery, and Vertex AI while codifying infrastructure with Terraform."
  },
  {
    company: "Vosyn",
    duration: "Apr 2024 - Aug 2025",
    role: "Cloud Engineer",
    description:
      "Designed AWS and GCP infrastructure, automated delivery with Terraform and GitHub Actions, and improved deployment repeatability for cloud-native workloads."
  },
  {
    company: "Cprime Technologies",
    duration: "Jan 2018 - Nov 2018",
    role: "Junior Software Engineer",
    description:
      "Delivered enterprise web features with React and MySQL, building the foundation for later platform and cloud engineering work."
  }
];

export const certifications: CertificationEntry[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    url: "https://www.credly.com/badges/96476ed5-a1d2-453a-96cb-0be749271079/public_url"
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "AWS",
    url: "https://www.credly.com/badges/af545d1d-6af0-4f1d-b9e6-7715c4c0ee1e/public_url"
  },
  {
    title: "AWS Certified DevOps Engineer - Professional",
    issuer: "AWS",
    url: "https://www.credly.com/badges/8c129d37-8932-4eee-ba66-9613fd2b60a8/public_url"
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    url: "https://www.credly.com/badges/3372ec6d-5ff3-4241-9498-a670b0c42fa5/public_url"
  }
];
