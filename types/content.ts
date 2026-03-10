export type OutcomeMetric = {
  label: string;
  value: string;
  qualifier?: string;
};

export type ProjectCaseStudy = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  disclosure?: string;
  challenge: string;
  architecture: string[];
  approach: string[];
  outcomes: OutcomeMetric[];
  tech: string[];
  cardHighlights: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export type ServiceOffer = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

export type ExperienceSnapshot = {
  label: string;
  value: string;
};

export type ExperienceEntry = {
  company: string;
  duration: string;
  role: string;
  description: string;
};

export type CertificationEntry = {
  title: string;
  issuer: string;
  url: string;
};
