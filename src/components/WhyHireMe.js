import React from "react";
import "./WhyHireMe.css";
import pic17 from "../assets/pic17.png"; // Import profile picture
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
            className="profile"
            src={pic17}
            alt="Profile"/>
        </div>

        {/* Content Section */}
        <div className="why-hire-me-content">
          <h2>
            Why <span>Hire me?</span>
          </h2>
          <p className="description">
          I'm an exceptional Cloud Engineer, certified in AWS, GCP, and Terraform, with a proven track record of delivering scalable, secure, and cost-effective cloud solutions that stand out in the industry.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>10</h3>
              <p>Platforms Deployed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
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