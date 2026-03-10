import Link from "next/link";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.contactCard}>
            <p className={styles.panelLabel}>404</p>
            <h3>This page does not exist.</h3>
            <p>Return to the homepage to review services, case studies, and contact options.</p>
            <div className={styles.contactActions}>
              <Link className={styles.primaryButton} href="/">
                Back Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
