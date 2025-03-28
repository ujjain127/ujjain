import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css';

function Portfolio() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: "Mr.Pulse",
      description: "A comprehensive healthcare monitoring system integrating IoT devices with a mobile application. Built using Flutter and Firebase, it enables real-time health tracking and emergency alerts for patients.",
      technologies: ["Flutter", "Firebase", "IoT", "Health Monitoring"]
    },
    {
      id: 2,
      title: "Better Wealth",
      description: "A modern financial advisory website that connects users with expert financial advisors. Features include personalized investment recommendations, portfolio tracking, and interactive financial planning tools. The platform helps users make informed decisions about their financial future.",
      technologies: ["React", "Node.js", "MongoDB", "Financial APIs"]
    },
    {
      id: 3,
      title: "Payroll Automation",
      description: "Developed an automated payroll system using UiPath to streamline employee payslip generation. The solution automatically processes salary calculations, tax deductions, and generates detailed payslips, reducing manual effort and improving accuracy. Achieved 80% reduction in processing time.",
      technologies: ["UiPath", "Excel Automation", "PDF Processing", "Email Automation"]
    },
    {
      id: 4,
      title: "Shiksha Samriddhi",
      description: "Created a standardization system for odd schools to improve educational quality and consistency. The project focuses on implementing standardized teaching methodologies, assessment systems, and resource management across different schools, helping them achieve better academic outcomes.",
      technologies: ["React", "Flask", "MongoDB", "Machine Learning"]
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <motion.div 
        className="portfolio-container"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="portfolio-header">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Here are some of the key projects I've worked on, showcasing my 
            skills in development, automation, and problem-solving.
          </p>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio; 