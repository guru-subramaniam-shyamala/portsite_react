import React from "react";
import "./WhyHireMe.css";
import pic01 from "../assets/pic01.png"; // Import profile picture
import pic03 from "../assets/pic03.png"; // Import concentric circles

const WhyHireMe = () => {
  return (
    <section className="why-hire-me">
      <div className="why-hire-me-container">
        {/* Profile Image Section */}
        <div className="profile-image-container">
          <img
            className="concentric-circle"
            src={pic03}
            alt="Concentric Circle"
          />
          <img
            className="profile-picture"
            src={pic01}
            alt="Profile Picture"/>
        </div>

        {/* Content Section */}
        <div className="why-hire-me-content">
          <h2>
            Why <span>Hire me?</span>
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo
            vulputate, bibendum sodales.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Project Completed</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Project Completed</p>
            </div>
          </div>
          <button className="hire-me-button">Hire me</button>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;