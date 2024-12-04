import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Guru Portfolio</div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;