import React from 'react';
import { motion } from 'framer-motion';
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
              Hi, I am John
            </motion.h1>
            <motion.h2 variants={itemVariants}>
              I create product design and brand experience
            </motion.h2>
            <motion.p variants={itemVariants}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse varius enim in eros elementum tristique.
            </motion.p>
            <motion.button 
              className="get-in-touch"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/path-to-your-image.jpg" alt="Hero" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero; 