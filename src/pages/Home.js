import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
import WorkExperience from "../components/WorkExperience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import WhyHireMe from "../components/WhyHireMe";
import Testimonials from "../components/Testimonials";
import Certification from "../components/certification";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Herosection />
      <Services />
      <WorkExperience />
      <Certification />
      <WhyHireMe/>
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
