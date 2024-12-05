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
      company: "Vosyn",
      duration: "Sep 2024 - Present",
      role: "Cloud Engineer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    },
    {
      company: "Free Lancer",
      duration: "March 2024 - Presnt",
      role: "Cloud Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
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
