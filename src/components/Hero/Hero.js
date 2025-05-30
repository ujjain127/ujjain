import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/hero/hero.jpg';
import './Hero.css';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-backdrop"></div>
      <motion.div 
        className="hero-container container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <div className="hero-text">
            <motion.span className="hero-greeting" variants={itemVariants}>
              Hello, I'm
            </motion.span>
            <motion.h1 className="hero-name" variants={itemVariants}>
              Ujjain S
            </motion.h1>
            <motion.div className="hero-title" variants={itemVariants}>
              <span className="hero-title-text">Final Year Student at</span>
              <span className="hero-title-highlight">Rajalakshmi Engineering College</span>
            </motion.div>
            <motion.p className="hero-description" variants={itemVariants}>
              A passionate developer focused on creating interactive web applications 
              and efficient automation solutions. Currently exploring machine learning 
              while mastering full-stack development.
            </motion.p>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <a href="#portfolio" className="button">View My Work</a>
              <a href="#contact" className="button button-outline">Contact Me</a>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-image-container">
              <img src={heroImage} alt="Ujjain S" />
            </div>
          </motion.div>
        </div>
      </motion.div>      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;

