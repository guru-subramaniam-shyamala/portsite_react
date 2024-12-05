import React from "react";
import "./Services.css";
import pic05 from "../assets/pic05.png";
import pic06 from "../assets/pic06.png";
import pic07 from "../assets/pic07.png";
import pic08 from "../assets/pic08.png";

const Services = () => {
  const services = [
    {
      icon: pic05,
      title: "Cloud Strategy and Consulting",
      description:
        "Developing a cloud strategy aligned with your business goals. Selecting the best cloud platform(s) based on requirements.",
    },
    {
      icon: pic06,
      title: "Cloud Infrastructure Design",
      description:
        "Implementing multi-cloud or hybrid cloud solutions. Designing scalable and fault-tolerant cloud architectures.",
    },
    {
      icon: pic07,
      title: "Cloud Migration",
      description:
        "Refactoring or rearchitecting applications for cloud-native solutions. Ensuring data integrity and minimal downtime during migration.",
    },
    {
      icon: pic08,
      title: "DevOps and Automation",
      description:
        "Setting up CI/CD pipelines using tools like GitHub Actions, Jenkins, and Terraform. Enabling container orchestration using Kubernetes or Docker Swarm.",
    },
  ];

  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service">
            <img src={service.icon} alt={`${service.title} Icon`} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
