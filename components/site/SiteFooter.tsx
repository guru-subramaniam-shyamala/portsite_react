import { siteConfig } from "@/content/site";

import { VisitorCounter } from "./VisitorCounter";
import styles from "./SiteFooter.module.css";

export const SiteFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div>
        <p className={styles.kicker}>Built for recruiters, operators, and teams shipping real platforms.</p>
        <p className={styles.copy}>
          {siteConfig.name} - {new Date().getFullYear()}
        </p>
        <p className={styles.counter}>
          Website views: <VisitorCounter />
        </p>
      </div>

      <div className={styles.links}>
        <a href={siteConfig.linkedinUrl} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <a href={siteConfig.githubUrl} rel="noreferrer" target="_blank">
          GitHub
        </a>
        <a href={siteConfig.resumeUrl} rel="noreferrer" target="_blank">
          Resume
        </a>
      </div>
    </div>
  </footer>
);
