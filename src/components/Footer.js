import React from 'react';
import './Footer.css';
import CounterNumber from './counter-number.js';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright © 2024 Guru Subramaniam Shyamala</p>
        <p>Website Views: <CounterNumber/></p>
        <div className="footer-icons">
          <a href="https://github.com/guru-subramaniam-shyamala" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/guru-subramaniam-shyamala/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

