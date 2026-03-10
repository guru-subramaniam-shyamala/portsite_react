import Link from "next/link";

import { ProjectCaseStudy } from "@/types/content";

import styles from "./CaseStudyCard.module.css";

type CaseStudyCardProps = {
  project: ProjectCaseStudy;
};

export const CaseStudyCard = ({ project }: CaseStudyCardProps) => (
  <article className={styles.card}>
    <p className={styles.category}>{project.category}</p>
    <h3 className={styles.title}>
      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
    </h3>
    <p className={styles.summary}>{project.summary}</p>

    <div className={styles.metrics}>
      {project.cardHighlights.map((highlight) => (
        <span className={styles.metric} key={highlight}>
          {highlight}
        </span>
      ))}
    </div>

    <Link className={styles.link} href={`/projects/${project.slug}`}>
      View case study
    </Link>
  </article>
);
