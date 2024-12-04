import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Let's have a look at my Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="/assets/portfolio1.png" alt="Portfolio 1" />
          <p>Food Delivery Solution</p>
        </div>
        <div className="portfolio-item">
          <img src="/assets/portfolio2.png" alt="Portfolio 2" />
          <p>Landing Page Design</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
