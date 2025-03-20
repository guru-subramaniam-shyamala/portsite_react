import React from 'react';
import './Footer.css';
import CounterNumber from './counter-number.js';

const Footer = () => {
  return (
    <footer id="Footer" className="footer">
      <div className="footer-content">
        <p>Copyright © 2024 Guru Subramaniam Shyamala</p>
        <p>Website Views: <CounterNumber/></p>
        <div className="footer-icons">
          <a href="https://github.com/guru-subramaniam-shyamala" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/guruss/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


