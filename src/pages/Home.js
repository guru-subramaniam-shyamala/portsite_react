import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
import WorkExperience from "../components/WorkExperience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Herosection />
      <Services />
      <WorkExperience />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
