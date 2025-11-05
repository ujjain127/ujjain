import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      name: "ForensiQ",
      tech: "React, Flask, ML, NLP",
      description: [
        "Built ForensiQ, a modular machine learning framework for automated digital forensics and cybercrime investigation, handling diverse evidence formats.",
        "Implemented multi-format data ingestion, NLP-based entity extraction (BERT, SpaCy), automated file classification, and timeline reconstruction using Python and Kaggle workflows.",
        "Achieved 94.6% accuracy in digital evidence classification, significantly reducing manual triage time and enabling scalable, explainable forensic analysis."
      ]
    },
    {
      name: "Shiksha Samriddhi",
      tech: "Python, Scikit-learn, UDISE+, Streamlit",
      description: [
        "Developed an ML system using Isolation Forest and Decision Trees to detect and classify 'odd' schools in India.",
        "Integrated a dynamic resource allocation module based on severity zones and automated UC verification system.",
        "Enabled real-time tracking, donation portal for NGOs, and AI-driven best practices for infrastructure reconfig."
      ]
    },
    {
      name: "MedTrace",
      tech: "GPS, RFID, Blockchain, Firebase, Flask",
      description: [
        "Built a decentralized drug inventory and supply chain tracking system to monitor pharmaceutical logistics.",
        "Integrated GPS and RFID for real-time tracking and alerting, ensuring temperature compliance and delivery accuracy.",
        "Used blockchain for audit trails and tamper-proof medicine movement records across suppliers."
      ]
    },
    {
      name: "Annual Pay Slip Automation",
      tech: "UiPath, Excel, Gmail Integration",
      description: [
        "Automated generation and emailing of yearly employee pay slips using UiPath Studio.",
        "Reduced manual HR workload by 90% and ensured accuracy across 100+ records using RPA workflows."
      ]
    }
  ]

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        PROJECTS
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <h3>{project.name}</h3>
            <p className="tech-stack">{project.tech}</p>
            <ul className="project-description">
              {project.description.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="github-link"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <a href="https://github.com/ujjain127" target="_blank" rel="noopener noreferrer">
          View More Projects on GitHub →
        </a>
      </motion.div>
    </section>
  )
}

export default Projects
