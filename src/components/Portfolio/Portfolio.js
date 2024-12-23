import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css';

function Portfolio() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Project Management Dashboard",
      description: "This is a sample project description. Lorem ipsum dolor sit amet.",
      image: "/project1.jpg",
      category: "Web Design",
      link: "#"
    },
    // Add more projects
  ];

  return (
    <section className="portfolio" id="portfolio">
      <motion.div 
        className="portfolio-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div 
          className="portfolio-header"
          variants={projectVariants}
        >
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            I help companies and organizations build modern, 
            responsive websites and applications.
          </p>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <motion.a 
                  href={project.link} 
                  className="view-project"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg className="arrow-icon" viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio; 