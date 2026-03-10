import { ProjectCaseStudy } from "@/types/content";

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "acb-platform",
    category: "AI Platform / Internal Tooling",
    title: "ACB Platform",
    summary:
      "A sanitized case study of a multi-service internal platform that turns natural-language infrastructure requests into plans, Terraform artifacts, and operator-visible delivery workflows.",
    role: "Platform engineer shaping architecture, workflow orchestration, and delivery experience.",
    disclosure:
      "This public summary is intentionally sanitized. It excludes secrets, internal contracts, prompt details, RAG schemas, and protected operational workflows.",
    challenge:
      "The platform needed to connect prompt intake, planning, Terraform generation, observability, and feedback inside one operator-friendly workflow without exposing sensitive implementation internals.",
    architecture: [
      "Dashboard surface for prompt intake, plan review, and artifact visibility",
      "API layer coordinating requests, persistence, and workflow state",
      "Planning service converting intent into infrastructure plan structures",
      "Executor service rendering Terraform artifacts and local run paths",
      "Observability loop capturing health and issue signals across services",
      "Postgres plus vector-backed retrieval supporting history and feedback"
    ],
    approach: [
      "Defined a platform flow that moved from prompt intake to Terraform output through a single orchestrated control path.",
      "Used containerized local workflows so the dashboard, API, planner, executor, and observability services could be started together for delivery and testing.",
      "Separated public-safe architecture framing from internal schemas and retrieval logic so the product could be discussed externally without leaking protected details."
    ],
    outcomes: [
      {
        label: "Platform services unified",
        value: "6",
        qualifier: "dashboard, API, planner, executor, observability, persistence"
      },
      {
        label: "Core workflow coverage",
        value: "~80%",
        qualifier: "sanitized estimate of prompt-to-artifact automation"
      },
      {
        label: "Local setup path",
        value: "<30 min",
        qualifier: "to stand up the primary stack through Docker-based workflows"
      },
      {
        label: "Workflow span",
        value: "1 end-to-end path",
        qualifier: "from prompt intake to Terraform artifact generation"
      }
    ],
    tech: [
      "FastAPI",
      "Next.js dashboard",
      "Docker Compose",
      "Terraform",
      "Postgres",
      "pgvector",
      "Observability workflows"
    ],
    cardHighlights: ["6 services", "~80% workflow automation", "<30 min local setup"],
    seo: {
      title: "ACB Platform Case Study | Guru Subramaniam Shyamala",
      description:
        "Sanitized case study covering an AI-backed internal platform for infrastructure planning, Terraform generation, and observability-aware delivery workflows.",
      keywords: [
        "ACB platform case study",
        "AI platform engineering",
        "Terraform automation",
        "RAG orchestration platform"
      ]
    }
  },
  {
    slug: "terraform-multi-cloud-migration",
    category: "Cloud Modernization",
    title: "Terraform Multi-Cloud Migration",
    summary:
      "A modernization program focused on standardizing environment delivery across AWS and GCP with reusable Terraform patterns and automated rollout workflows.",
    role: "Cloud engineer leading infrastructure codification, deployment workflow design, and migration coordination.",
    challenge:
      "The migration needed to reduce manual environment setup while keeping multi-cloud delivery consistent, reviewable, and low risk for the operating team.",
    architecture: [
      "Reusable Terraform modules for shared platform primitives",
      "Environment-specific configuration for AWS and GCP workloads",
      "Versioned deployment workflow with review checkpoints",
      "Automated rollout path replacing one-off manual provisioning"
    ],
    approach: [
      "Consolidated infrastructure decisions into reusable Terraform building blocks rather than environment-by-environment manual setup.",
      "Aligned deployment automation with reviewable plans so teams could ship infrastructure changes with clearer rollback and approval paths.",
      "Used repeatable migration sequencing to move workloads without creating cloud-specific drift."
    ],
    outcomes: [
      {
        label: "Clouds standardized",
        value: "2",
        qualifier: "AWS and GCP delivered through one IaC approach"
      },
      {
        label: "Manual provisioning reduced",
        value: "~70%",
        qualifier: "sanitized estimate after Terraform adoption"
      },
      {
        label: "Deployment prep time",
        value: "days to hours",
        qualifier: "for repeat environment creation"
      },
      {
        label: "Reusable module coverage",
        value: "50+ resources",
        qualifier: "managed through versioned Terraform patterns"
      }
    ],
    tech: [
      "Terraform",
      "AWS",
      "GCP",
      "CI/CD automation",
      "Infrastructure review workflows"
    ],
    cardHighlights: ["2 clouds", "~70% less manual setup", "days to hours"],
    seo: {
      title: "Terraform Multi-Cloud Migration Case Study | Guru Subramaniam Shyamala",
      description:
        "Case study covering Terraform-led multi-cloud migration work spanning AWS, GCP, deployment automation, and modernization outcomes.",
      keywords: [
        "Terraform migration case study",
        "multi-cloud modernization",
        "AWS GCP Terraform engineer"
      ]
    }
  },
  {
    slug: "sharepoint-data-migration",
    category: "Enterprise Migration",
    title: "SharePoint Data Migration",
    summary:
      "An enterprise collaboration migration that aligned SharePoint, OneDrive, and Microsoft Teams into a structured rollout with validation and user adoption support.",
    role: "Engineer coordinating migration execution, validation, and collaboration-platform transition planning.",
    challenge:
      "The migration required moving business-critical collaboration content into a cleaner Microsoft 365 operating model without overwhelming users or creating cutover risk.",
    architecture: [
      "Phased migration plan across SharePoint, OneDrive, and Teams",
      "Validation checkpoints for content structure and permissions",
      "Cutover sequencing designed to reduce business disruption",
      "Adoption support focused on collaboration continuity"
    ],
    approach: [
      "Structured the migration into stages so teams could validate content, permissions, and collaboration patterns before final cutover.",
      "Aligned data movement with user-facing collaboration workflows instead of treating the migration as a one-time file transfer.",
      "Used repeatable validation steps to lower cutover-day risk and reduce manual rework."
    ],
    outcomes: [
      {
        label: "Collaboration surfaces aligned",
        value: "3",
        qualifier: "SharePoint, OneDrive, and Teams"
      },
      {
        label: "Migration rework reduced",
        value: "~40%",
        qualifier: "sanitized estimate from staged validation"
      },
      {
        label: "Cutover model",
        value: "2-phase",
        qualifier: "pilot and production rollout path"
      },
      {
        label: "User disruption window",
        value: "<1 business day",
        qualifier: "for final production transition"
      }
    ],
    tech: [
      "SharePoint",
      "Microsoft 365",
      "OneDrive",
      "Microsoft Teams",
      "Migration validation workflows"
    ],
    cardHighlights: ["3 collaboration surfaces", "~40% less rework", "2-phase cutover"],
    seo: {
      title: "SharePoint Data Migration Case Study | Guru Subramaniam Shyamala",
      description:
        "Enterprise migration case study covering SharePoint, OneDrive, and Microsoft Teams modernization with structured validation and low-risk cutover planning.",
      keywords: [
        "SharePoint migration case study",
        "Microsoft 365 modernization",
        "enterprise collaboration migration"
      ]
    }
  }
];

export const featuredProjects = projectCaseStudies;

export const getProjectBySlug = (slug: string) =>
  projectCaseStudies.find((project) => project.slug === slug);
