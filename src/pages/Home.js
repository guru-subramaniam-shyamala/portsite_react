import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
import WorkExperience from "../components/WorkExperience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import WhyHireMe from "../components/WhyHireMe";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Herosection />
      <Services />
      <WorkExperience />
      <WhyHireMe/>
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
