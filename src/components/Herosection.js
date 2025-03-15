import React from "react";
import "./Herosection.css";
import pic01 from '../assets/pic01.png'; // Profile image
import pic04 from '../assets/pic04.png'; // Decorative doodle

const Herosection = () => {
  return (
    <section className="hero">
      <div className="hover-container">
        <div className="top-content">
          <div className="greeting">Hello!</div>
          <h1>
            I'm <span>Guru</span>, <br /> Cloud Architect
          </h1>
        </div>
        <div className="main-content">
          <div className="testimonial">
            "Guru's exceptional product design ensured our website's success. Highly recommended."
          </div> 
          <div className="image-container">
            <div className="background-shape"></div>
            <img className="profile-picture" src={pic01} alt="Guru Cloud Engineer" />
            <img className="decorative-image" src={pic04} alt="Decorative Doodles" />
          </div>
          <div className="rating">
            <div className="stars">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
            <p>4+ Years Experience</p>
          </div>
        </div>
      </div>
      <div className="cta-buttons">
        <a href="#portfolio" className="btn-primary">Portfolio</a>
        <a href="#Footer" className="btn-secondary">Hire Me</a>
      </div>
    </section>
  );
};

export default Herosection;
