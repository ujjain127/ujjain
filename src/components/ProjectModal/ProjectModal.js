import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.css';

function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            <button className="close-button" onClick={onClose}>×</button>
            
            <div className="modal-content">
              <img src={project.image} alt={project.title} className="modal-image" />
              
              <div className="modal-info">
                <span className="project-category">{project.category}</span>
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <h3>Technologies Used</h3>
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <h3>Project Links</h3>
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal; 