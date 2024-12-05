import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item active"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#services">Service</a></li>
      </ul>
      <div className="logo">
        <span className="logo-icon">GS</span>
        <span className="logo-text">Guru Subramaniam Shyamala</span>
      </div>
      <ul className="nav-links">
        <li className="nav-item"><a href="#resume">Resume</a></li>
        <li className="nav-item"><a href="#projects">Project</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
