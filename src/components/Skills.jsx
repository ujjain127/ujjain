import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["Scikit-learn", "React", "Flask", "MongoDB", "Power BI", "Firebase", "UiPath", "Git", "Matlab"]
    },
    {
      category: "Concepts",
      skills: ["Machine Learning", "RPA", "Full Stack Development", "Data Visualization"]
    },
    {
      category: "Soft Skills",
      skills: ["Leadership", "Teamwork", "Design Thinking", "Problem Solving"]
    }
  ]

  const certifications = [
    "UiPath Automation Explorer Certification (Jan 2024)",
    "UiPath Automation Developer Associate Certification (Dec 2024)"
  ]

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        TECHNICAL SKILLS
      </motion.h2>

      <div className="skills-content">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
          >
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: '#0066cc', 
                    color: '#fff',
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="certifications"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3>Certifications</h3>
        <div className="cert-list">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-item"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ x: 10, color: '#0066cc' }}
            >
              <span className="cert-icon">🏆</span>
              {cert}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
