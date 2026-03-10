"use client";

import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/content/site";

import styles from "./SiteHeader.module.css";

const navItems = [
  { label: "Outcomes", href: "/#proof" },
  { label: "Ways I Help", href: "/#ways-i-help" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" }
];

export const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" onClick={closeMenu}>
          <span className={styles.brandMark}>GS</span>
          <span className={styles.brandText}>
            <strong>{siteConfig.shortName}</strong>
            <span>{siteConfig.role}</span>
          </span>
        </Link>

        <button
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className={styles.menuButton}
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
        </button>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          id="site-navigation"
        >
          <div className={styles.links}>
            {navItems.map((item) => (
              <Link
                className={styles.navLink}
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <a
              className={styles.resumeLink}
              href={siteConfig.resumeUrl}
              rel="noreferrer"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
