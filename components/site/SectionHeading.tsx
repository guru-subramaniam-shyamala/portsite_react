import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description
}: SectionHeadingProps) => (
  <div className={styles.wrap}>
    <p className={styles.eyebrow}>{eyebrow}</p>
    <h2 className={styles.title}>{title}</h2>
    {description ? <p className={styles.description}>{description}</p> : null}
  </div>
);
