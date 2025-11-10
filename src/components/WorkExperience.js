import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Cprime Technologies",
      duration: "Jan 2018 - Nov 2018",
      role: "Junior Software Engineer",
      description: "Developed and optimized enterprise web applications using ReactJS, CSS, and MySQL, improving performance and stability by 15%. Collaborated in Agile sprints to automate testing and streamline deployments, reducing QA time by 25%.",
    },
    {
      company: "Vosyn",
      duration: "April 2024 - Present",
      role: "Cloud Engineer",
      description: "Designed and implemented scalable cloud infrastructure across AWS and GCP. Automated deployments using Terraform and GitHub Actions, migrated services to GKE, and configured load balancers for high availability. Enhanced security with IAM policies and integrated monitoring with Cloud Monitoring and Grafana.",
    }
  ];

  return (
    <section id="work" className="work-experience">
      <h2>
        My <span>Work Experience</span>
      </h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-left">
              <h3>{exp.company}</h3>
              <p className="duration">{exp.duration}</p>
            </div>
            <div className="timeline-center">
              <div className={`circle ${index % 2 === 0 ? "orange" : "blue"}`}></div>
              {index < experiences.length - 1 && <div className="line"></div>}
            </div>
            <div className="timeline-right">
              <h3>{exp.role}</h3>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
