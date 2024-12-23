import React from 'react';
import { motion } from 'framer-motion';
import SkillsProgress from '../SkillsProgress/SkillsProgress';
import './About.css';

function About() {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Responsive Design", level: 90 }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text">
            <span className="section-subtitle">About</span>
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I'm a passionate developer and designer with over 5 years of 
              experience creating beautiful, functional websites and applications.
            </p>
            
            <SkillsProgress skills={skills} />
            
            <motion.button 
              className="download-cv"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </div>
          <div className="about-image">
            <img src="/about-image.jpg" alt="About me" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About; 