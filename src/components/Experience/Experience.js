import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const experiences = [
    {
      id: 1,
      role: "Chairperson",
      company: "IEEE TEMS REC",
      duration: "Jun 2023 - Dec 2024",
      description: [
        "Leading a team of 50+ members in organizing technical events and workshops",
        "Successfully organized IEEE TEMS Inauguration with 100+ participants",
        "Coordinated with industry experts for guest lectures and technical sessions",
        "Implemented innovative strategies to increase student engagement in technical activities",
        "Managing and overseeing various technical and non-technical events throughout the year"
      ]
    },
    {
      id: 2,
      role: "Automation and Bot Developer",
      company: "UiPhoria",
      duration: "Nov 2023 - Nov 2024",
      description: [
        "Developed and implemented automated solutions using UiPath Studio",
        "Worked on process automation for document processing and data extraction",
        "Collaborated with team members to optimize automation workflows",
        "Reduced manual processing time by 60% through automation solutions"
      ]
    },
    {
      id: 3,
      role: "Technical Team",
      company: "UiPhoria",
      duration: "Dec 2024 - Present",
      description: [
        "Mentored junior students in competitive programming",
        "Organized coding contests and practice sessions",
        "Created problem-solving tutorials and resources",
        "Helped students improve their algorithmic thinking"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <motion.div 
        className="experience-container"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="experience-header">
          <span className="section-subtitle">Experience</span>
          <h2 className="section-title">My Journey</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <h3 className="role">{exp.role}</h3>
                <div className="company-info">
                  <span className="company">{exp.company}</span>
                  <span className="duration">{exp.duration}</span>
                </div>
                <ul className="responsibilities">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience; 