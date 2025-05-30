import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGraduationCap, faLaptopCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const featureItems = [
    {
      icon: faCode,
      title: "Web Development",
      description: "Building responsive and interactive web applications using modern frameworks"
    },
    {
      icon: faRobot,
      title: "UiPath Automation",
      description: "Creating efficient automation solutions to streamline business processes"
    },
    {
      icon: faLaptopCode,
      title: "Competitive Programming",
      description: "Solving complex algorithmic challenges on various coding platforms"
    },
    {
      icon: faGraduationCap,
      title: "Machine Learning",
      description: "Exploring data-driven approaches to problem solving using ML techniques"
    }
  ];

  return (    <section className="about section" id="about">
      <div className="about-backdrop"></div>
      <div className="container">
        <motion.div 
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">My Journey & Expertise</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-paragraph">
              <p>
                I'm a final year B.Tech student in Computer Science and Business Systems at 
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
            </div>
          </motion.div>

          <motion.div 
            className="about-features"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="features-grid">
              {featureItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.15)" }}
                >                  <div className="feature-icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-description">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;