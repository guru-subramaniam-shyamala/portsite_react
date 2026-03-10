import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StructuredData } from "@/components/site/StructuredData";
import { getProjectBySlug, projectCaseStudies } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { siteUrl } from "@/lib/site";

import styles from "./page.module.css";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () =>
  projectCaseStudies.map((project) => ({
    slug: project.slug
  }));

export const dynamicParams = false;

export const generateMetadata = ({ params }: ProjectPageProps): Metadata => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: {
      absolute: project.seo.title
    },
    description: project.seo.description,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    keywords: [...siteConfig.keywords, ...project.seo.keywords],
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: `/projects/${project.slug}`,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: project.seo.title,
      description: project.seo.description
    }
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seo.description,
    author: {
      "@type": "Person",
      name: siteConfig.name
    },
    url: `${siteUrl}/projects/${project.slug}`,
    keywords: project.seo.keywords.join(", "),
    about: project.tech,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${siteUrl}/#case-studies`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: `${siteUrl}/projects/${project.slug}`
        }
      ]
    }
  };

  return (
    <div className={styles.page}>
      <StructuredData data={jsonLd} />
      <SiteHeader />

      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.crumbs}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#case-studies">Projects</Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>
        </section>

        <section className={styles.container}>
          <div className={styles.hero}>
            <div>
              <p className={styles.eyebrow}>{project.category}</p>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.summary}>{project.summary}</p>
              {project.disclosure ? <p className={styles.disclosure}>{project.disclosure}</p> : null}
            </div>

            <aside className={styles.heroPanel}>
              <span className={styles.panelLabel}>Role</span>
              <p>{project.role}</p>
              <span className={styles.panelLabel}>Tech stack</span>
              <p>{project.tech.join(" / ")}</p>
            </aside>
          </div>
        </section>

        <section className={styles.container}>
          <div className={styles.overviewGrid}>
            {project.outcomes.map((outcome) => (
              <article className={styles.metricCard} key={outcome.label}>
                <strong>{outcome.value}</strong>
                <span>
                  {outcome.label}
                  {outcome.qualifier ? ` - ${outcome.qualifier}` : ""}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.container}>
          <div className={styles.sectionGrid}>
            <article className={styles.sectionCard}>
              <h2>Challenge</h2>
              <p className={styles.challenge}>{project.challenge}</p>
            </article>

            <article className={styles.sectionCard}>
              <h2>Architecture snapshot</h2>
              <ul className={styles.architectureList}>
                {project.architecture.map((item) => (
                  <li className={styles.bodyText} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.container}>
          <div className={styles.sectionGrid}>
            <article className={styles.sectionCard}>
              <h2>Implementation approach</h2>
              <ul className={styles.approachList}>
                {project.approach.map((item) => (
                  <li className={styles.bodyText} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.sectionCard}>
              <h2>Tech stack</h2>
              <ul className={styles.stackList}>
                {project.tech.map((item) => (
                  <li className={styles.bodyText} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.container}>
          <div className={styles.ctaPanel}>
            <div>
              <h2>Want the implementation detail behind the public summary?</h2>
              <p className={styles.bodyText}>
                I can walk through the architecture choices, rollout tradeoffs, and the delivery
                outcomes that matter most for your team.
              </p>
            </div>

            <div className={styles.actions}>
              <a
                className={styles.primaryButton}
                href={siteConfig.linkedinUrl}
                rel="noreferrer"
                target="_blank"
              >
                Contact Me
              </a>
              <Link className={styles.secondaryButton} href="/#case-studies">
                Back to Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
