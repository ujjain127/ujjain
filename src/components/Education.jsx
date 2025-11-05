import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Education.css'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="education" className="section education-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        EDUCATION
      </motion.h2>

      <motion.div
        className="education-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="education-item" variants={itemVariants}>
          <div className="education-header">
            <h3>Rajalakshmi Engineering College, Chennai</h3>
            <span className="year">2022 – 2026</span>
          </div>
          <p className="degree">B.Tech in Computer Science and Business Systems</p>
          <p className="grade">CGPA: 8.23/10</p>
        </motion.div>

        <motion.div className="education-item" variants={itemVariants}>
          <div className="education-header">
            <h3>Jaya Matriculation Hr. Sec. School, Chennai</h3>
            <span className="year">2020 & 2022</span>
          </div>
          <p className="degree">Secondary School Certificate (89.6%)</p>
          <p className="degree">Higher Secondary Certificate (82.6%)</p>
        </motion.div>

        <motion.div className="coursework" variants={itemVariants}>
          <h3>Relevant Coursework</h3>
          <div className="coursework-grid">
            {[
              'Probability and Statistics',
              'Machine Learning',
              'Data Structures and Algorithms',
              'Artificial Intelligence',
              'Software Engineering',
              'Database Management Systems',
              'Business Analytics',
              'Automation using RPA',
              'Finance, HR and Accounting'
            ].map((course, index) => (
              <motion.div
                key={course}
                className="course-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: '#111', color: '#fff' }}
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Education
