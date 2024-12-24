import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faLaptopCode, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import './SkillsProgress.css';

function SkillsProgress() {
  const skills = [
    {
      title: "Fullstack Development",
      description: "Building responsive and interactive user interfaces",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Flask"],
      icon: faCode
    },
    {
      title: "UiPath Automation",
      description: "Automating repetitive tasks using UiPath Studio",
      technologies: ["UiPath Integrations", "UiPath Studio", "UiPath Orchestrator"],
      icon: faServer
    },
    {
      title: "Competitive Programming",
      description: "Solving complex problems using algorithms and data structures",
      technologies: ["C++", "Python", "Java"],
      icon: faLaptopCode
    },
    {
      title: "Machine Learning",
      description: "Using machine learning to automate tasks",
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
      icon: faMicrochip
    }
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon">
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <h3 className="skill-name">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="tech-stack">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsProgress; 