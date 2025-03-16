import React from "react";
import styles from "./Portfolio.module.css";
import pic09 from "../assets/pic09.png";
import pic18 from "../assets/pic18.png";
import pic19 from "../assets/pic19.png";

const Portfolio = () => {
  const projects = [
    {
      image: pic09,
      title: "Project 01",
      link: "https://github.com/guru-subramaniam-shyamala/portsite_react",
      description: "A cloud migration project using AWS Lambda and Terraform.",
    },
    {
      image: pic19,
      title: "Project 02",
      link: "https://github.com/guru-subramaniam-shyamala/LI_automation",
      description: "LinkedIn Job Automation using Selenium and Python.",
    },
    {
      image: pic18,
      title: "Project 03",
      link: "https://github.com/guru-subramaniam-shyamala/Cloud-Migration-of-Luxury-Hotel-Chain-Operations",
      description: "Developing scalable applications with GCP tools.",
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.portfolioHeader}>
        <h2>
          <span>Let's have a look at my</span> Portfolio
        </h2>
        <p>My Latest Work</p>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <a href={project.link}>
              <img src={project.image} alt={project.title} />
              <div className={styles.overlay}>
                <h3>{project.title}</h3>
                <p className={styles.tooltip}>{project.description}</p>
              </div>
            </a>
            <p className={styles.projectTitle}>{project.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.cta}>
        {/* <a href="#" className={styles.ctaButton}>
          View All Projects
        </a> */}
      </div>
    </section>
  );
};

export default Portfolio;
