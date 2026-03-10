import type { Metadata } from "next";
import Link from "next/link";

import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StructuredData } from "@/components/site/StructuredData";
import { featuredProjects } from "@/content/projects";
import {
  certifications,
  experience,
  experienceSnapshot,
  proofStrip,
  services,
  siteConfig,
  waysToHelp
} from "@/content/site";
import { siteUrl } from "@/lib/site";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} (${siteConfig.shortName}) | Cloud Engineer, Terraform, AWS, GCP`
  },
  description:
    "Guru Subramaniam Shyamala, also known as Guru, is a Cloud Engineer and Forward Deployed Engineer specializing in Terraform, AWS, GCP, Azure, cloud modernization, and AI-backed internal platforms.",
  alternates: {
    canonical: "/"
  },
  keywords: [
    ...siteConfig.keywords,
    "portfolio",
    "cloud modernization",
    "forward deployed engineer portfolio",
    "Guru cloud engineer portfolio",
    "Guru Subramaniam Shyamala cloud engineer"
  ]
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  url: siteUrl,
  sameAs: [siteConfig.linkedinUrl, siteConfig.githubUrl],
  keywords: siteConfig.keywords.join(", "),
  knowsAbout: [
    "Terraform",
    "AWS",
    "GCP",
    "Azure",
    "Forward Deployed Engineering",
    "AI platform engineering"
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteUrl,
  description: siteConfig.description,
  inLanguage: "en-US"
};

const heroMetrics = [
  {
    value: "4",
    label: "cloud and IaC certifications"
  },
  {
    value: "3",
    label: "featured case studies with measurable outcomes"
  },
  {
    value: "AWS / GCP / Azure",
    label: "platform delivery across multi-cloud environments"
  },
  {
    value: "AI + Platform",
    label: "internal systems with retrieval and orchestration"
  }
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <StructuredData data={personJsonLd} />
      <StructuredData data={websiteJsonLd} />
      <SiteHeader />

      <main className={styles.main}>
        <section className={`${styles.hero} ${styles.container}`} id="top">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Cloud Engineer / Forward Deployed Engineer</p>
              <h1 className={styles.headline}>
                Building <span className={styles.headlineAccent}>cloud platforms</span> that move
                from ambiguous requirements to production delivery.
              </h1>
              <p className={styles.lead}>
                I help teams modernize infrastructure, automate delivery with Terraform, and shape
                AI-backed internal platforms that operators can actually use. The work is measured
                around speed, reliability, migration confidence, and implementation clarity.
              </p>

              <div className={styles.ctaRow}>
                <Link className={styles.primaryButton} href="/#contact">
                  Contact Me
                </Link>
                <Link className={styles.secondaryButton} href="/#case-studies">
                  View Case Studies
                </Link>
              </div>
            </div>

            <div className={styles.heroMeta}>
              <div className={styles.featurePanel}>
                <p className={styles.panelLabel}>Homepage conversion goal</p>
                <h2 className={styles.panelTitle}>Start the conversation fast.</h2>
                <p className={styles.panelText}>
                  The primary call to action is direct contact. The secondary call to action moves
                  visitors into measurable case studies before they reach out.
                </p>
              </div>

              <div className={styles.metricPanel}>
                <p className={styles.panelLabel}>Delivery snapshot</p>
                <div className={styles.metricsGrid}>
                  {heroMetrics.map((metric) => (
                    <div className={styles.metricCard} key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.container} id="proof">
          <SectionHeading
            eyebrow="Outcomes"
            title="Selected outcomes"
          />
          <div className={styles.proofStrip}>
            {proofStrip.map((item, index) => (
              <article className={styles.proofCard} key={item}>
                <span>Proof {index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.container}>
          <SectionHeading
            eyebrow="Snapshot"
            title="At a glance"
          />
          <div className={styles.snapshotGrid}>
            {experienceSnapshot.map((item) => (
              <article className={styles.snapshotCard} key={item.label}>
                <strong>{item.label}</strong>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.container} id="ways-i-help">
          <SectionHeading
            eyebrow="How I Help"
            title="Ways I can help"
          />
          <div className={styles.waysGrid}>
            {waysToHelp.map((item) => (
              <article className={styles.wayCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.container} id="services">
          <SectionHeading
            eyebrow="Services"
            title="Core services"
          />
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.container} id="case-studies">
          <div className={styles.caseStudyIntro}>
            <SectionHeading
              eyebrow="Projects"
              title="Selected case studies"
            />
            <Link className={styles.caseStudyAnchor} href="/#contact">
              Want the deeper story? Let&apos;s talk.
            </Link>
          </div>
          <div className={styles.caseStudyGrid}>
            {featuredProjects.map((project) => (
              <CaseStudyCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className={styles.container} id="experience">
          <div className={styles.experienceGrid}>
            <div>
              <SectionHeading
                eyebrow="Experience"
                title="Recent experience"
              />
              <div className={styles.timeline}>
                {experience.map((entry) => (
                  <article className={styles.timelineItem} key={`${entry.company}-${entry.role}`}>
                    <div className={styles.timelineMeta}>
                      <h3>{entry.role}</h3>
                      <span>{entry.duration}</span>
                    </div>
                    <p>
                      <strong>{entry.company}</strong> - {entry.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Certifications"
                title="Credentials"
              />
              <div className={styles.certGrid}>
                {certifications.map((cert) => (
                  <article className={styles.certCard} key={cert.title}>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                    <a href={cert.url} rel="noreferrer" target="_blank">
                      Validate credential
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.container} id="contact">
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <p className={styles.panelLabel}>Primary conversion</p>
              <h3>Contact me for platform delivery, modernization, or internal tooling work.</h3>
              <p>
                {siteConfig.emailNote} Use LinkedIn for the fastest response, or download the
                resume if you want the formal profile first.
              </p>
              <strong>Best fit conversations</strong>
              <div className={styles.contactActions}>
                <a
                  className={styles.contactButton}
                  href={siteConfig.linkedinUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Message on LinkedIn
                </a>
                <a
                  className={styles.outlineButton}
                  href={siteConfig.resumeUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <aside className={styles.contactCard}>
              <p className={styles.panelLabel}>Contact angles</p>
              <ul className={styles.contactList}>
                <li>Forward deployed engineering for ambiguous product or platform requirements</li>
                <li>Terraform-led modernization, migration planning, and cloud delivery acceleration</li>
                <li>AI-backed internal systems with retrieval, orchestration, and observability</li>
              </ul>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
