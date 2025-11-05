import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Achievements.css'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: "🏆",
      title: "Winner – Smart India Internal Hackathon",
      year: "2024"
    },
    {
      icon: "🥇",
      title: "1st Place – Project and Poster Presentation at Veltech University",
      year: "2025"
    },
    {
      icon: "🥇",
      title: "1st Place – Paper Presentation at Adhiyamaan College of Engineering",
      year: "2025"
    },
    {
      icon: "👨‍🏫",
      title: "Student Peer Evaluator for Star Tech Summit at Saveetha University",
      year: "2024"
    },
    {
      icon: "👔",
      title: "Selected Chairperson, IEEE TEMS – Led 26+ member team for 1.5 years",
      year: "2023-2024"
    }
  ]

  return (
    <section id="achievements" className="section achievements-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        ACHIEVEMENTS
      </motion.h2>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, y: 50, rotateY: -90 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -90 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="achievement-icon"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {achievement.icon}
            </motion.div>
            <h3>{achievement.title}</h3>
            <span className="achievement-year">{achievement.year}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="supplementary-materials"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3>Supplementary Materials</h3>
        <div className="materials-links">
          <motion.a
            href="#"
            className="material-link"
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Career Timeline PDF
          </motion.a>
          <motion.a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="material-link"
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            🎓 Google Scholar
          </motion.a>
          <motion.a
            href="#"
            className="material-link"
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            📜 View Proofs and Certificates
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Achievements
