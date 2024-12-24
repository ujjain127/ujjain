import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ujjain S</h3>
            <p>Pre-Final Year Student at Rajalakshmi Engineering College</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#about">About</a>
              <a href="#portfolio">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/ujjain127" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/ujjain-s-41b577242/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://instagram.com/ujjainsriganesh" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Ujjain S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 