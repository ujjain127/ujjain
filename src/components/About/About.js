import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsProgress from '../SkillsProgress/SkillsProgress';
import './About.css';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="about" id="about">
      <motion.div 
        className="about-container"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-header">
          <span className="section-subtitle">About Me</span>
        </div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a pre-final year B.Tech student in Computer Science and Business Systems at 
              Rajalakshmi Engineering College (2022-2026), passionate about solving real-world 
              problems through technology.
            </p>
            <p>
              My journey in tech started with web development and has evolved to include 
              Robotic Process Automation and machine learning. Currently, I'm focusing on 
              full-stack development with React and exploring the possibilities of UiPath 
              automation. I'm also an active competitive programmer, constantly honing my 
              problem-solving skills through various coding platforms.
            </p>
            <p>
              Outside of academics, I work on personal projects that challenge me to learn new 
              technologies and implement innovative solutions. I'm particularly interested in 
              creating efficient automation workflows, developing responsive web applications, 
              and exploring the possibilities of machine learning.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="technical-expertise"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
            className="skills-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <SkillsProgress />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About; 