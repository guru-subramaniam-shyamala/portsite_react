import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const experiences = [
    // {
    //   company: "Cognizant, Chennai",
    //   duration: "Sep 2016 - July 2020",
    //   role: "Experience Designer",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    // },
    {
      company: "Verisk",
      duration: "Mar 2024 - Present",
      role: "Cloud/DevOps Engineer",
      description: " I manage AWS infrastructure using CloudFormation, Lambda, and Fargate, automate security and compliance with Wiz, GuardDuty, and AWS Security Hub, and optimize CI/CD pipelines with Jenkins and Kubernetes.",
    },
    {
      company: "Nike",
      duration: "Jan 2023 – Feb 2024",
      role: "AWS/DevOps Engineer",
      description: "I automated cloud infrastructure using AWS, Terraform, Ansible, and Jenkins, optimized security and CI/CD pipelines, and managed Kubernetes deployments for efficient cloud operations.",
    },
    {
      company: "TCS",
      duration: "May 2022  – Nov 2022",
      role: " DevOps Engineer  ",
      description: "I automated CI/CD pipelines using Jenkins, Git, Terraform, and Puppet, managed AWS infrastructure, and optimized deployment processes for seamless cloud operations.",
    },
    {
      company: "Syntel",
      duration: "Mar 2021 – Apr 2022",
      role: "Build and Release Engineer",
      description: "I managed CI/CD pipelines using Jenkins, Maven, SVN, and Git, ensuring smooth software releases while automating deployment processes across Windows and Linux environments.",
    },
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
