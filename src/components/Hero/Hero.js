import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/hero/hero.png';
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
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1 variants={itemVariants}>
              Hi, I am Ujjain
            </motion.h1>
            <motion.h2 variants={itemVariants}>
              Pre-Final Year Student at Rajalakshmi Engineering College
            </motion.h2>
            <motion.p variants={itemVariants}>
              A passionate developer focused on creating interactive web applications 
              and efficient automation solutions. Currently exploring machine learning 
              while mastering full-stack development.
            </motion.p>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={heroImage} alt="Hero" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero; 