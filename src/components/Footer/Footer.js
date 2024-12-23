import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <svg width="187" height="40" viewBox="0 0 187 40" fill="none">
            {/* SVG paths from your Figma design */}
          </svg>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About me</a>
          <a href="#contact">Contact</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#portfolio">Portfolio</a>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="#facebook" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#instagram" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#twitter" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 