import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    { title: "UI/UX Design", description: "Creating intuitive user interfaces." },
    { title: "Prototyping", description: "Building clickable prototypes." },
    { title: "Design Systems", description: "Creating reusable components." },
  ];

  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
