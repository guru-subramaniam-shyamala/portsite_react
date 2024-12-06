import React from "react";
import "./Testimonials.css";
import background from "../assets/pic11.png";

const testimonials = [
  {
    name: "Jayesh Patil",
    role: "Owner, Aura",
    rating: 5.0,
    review:
      "Guru delivered a transformative cloud strategy for our organization, migrating our legacy systems to a robust multi-cloud setup. His expertise in designing scalable infrastructure and automating our processes with Terraform reduced our operational costs by 30%. Guru's approach is seamless, professional, and aligned with business objectives. Highly recommend his services!",
  },
  {
    name: "Andrew",
    role: "Manager, Care & Cure",
    rating: 4.8,
    review:
      "Working with Guru was a game-changer for our cloud operations. He designed a fault-tolerant architecture that improved our system uptime by 99.9%. His implementation of Kubernetes-based CI/CD pipelines streamlined our deployments, saving us countless hours. His attention to detail and ability to deliver under tight deadlines is unparalleled. A true cloud expert!",
  },
];

const Testimonials = () => {
  return (
    <section
      className="testimonials"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="header">
        <h2>
          Testimonials That <span>Speak to My Results</span>
        </h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card">
            <div className="quote-icon">“</div>
            <div className="content">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span>
                {testimonial.rating}
              </div>
              <p className="review">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
