import React from "react";

const WorkExperience = () => {
  const experiences = [
    { company: "Capgemini, Mumbai", role: "Product Designer" },
    { company: "Sagetech IT, Hyderabad", role: "UX Designer" },
    { company: "Chartered IT, Mumbai", role: "UI/UX Designer" },
  ];

  return (
    <section id="work" className="work-experience">
      <h2>My Work Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <strong>{exp.company}</strong> - {exp.role}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
