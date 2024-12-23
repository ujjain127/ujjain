import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', to: 'hero' },
    { title: 'Portfolio', to: 'portfolio' },
    { title: 'About', to: 'about' },
    { title: 'Testimonials', to: 'testimonials' },
    { title: 'Contact', to: 'contact' }
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ScrollLink 
            to="hero"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            {/* Your logo */}
          </ScrollLink>
        </motion.div>

        <div className="nav-links">
          {navLinks.map(({ title, to }) => (
            <motion.div
              key={to}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link"
              >
                {title}
              </ScrollLink>
            </motion.div>
          ))}
        </div>

        <motion.button 
          className="contact-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Scroll to contact section
            const scroller = new ScrollLink().scrollTo('contact');
            scroller({ smooth: true, duration: 500, offset: -70 });
          }}
        >
          Contact Me
        </motion.button>

        {/* Mobile Menu Button */}
        <div 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map(({ title, to }) => (
              <ScrollLink
                key={to}
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {title}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar; 