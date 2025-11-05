import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const topSkills = [
    { name: "Python", font: "Inter" },
    { name: "Machine Learning", font: "Playfair Display" },
    { name: "React", font: "Arial" },
    { name: "TensorFlow", font: "Georgia" },
    { name: "Node.js", font: "Helvetica" }
  ]

  const bottomSkills = [
    { name: "MongoDB", font: "Verdana" },
    { name: "Git", font: "Courier New" },
    { name: "Docker", font: "Times New Roman" },
    { name: "AWS", font: "Impact" },
    { name: "UiPath", font: "Trebuchet MS" }
  ]

  return (
    <motion.section
      id="about"
      className="section about-section"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="section-content"
        ref={ref}
        initial={{ y: 50 }}
        animate={isInView ? { y: 0 } : { y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="intro-text">
          I am a Computer Science student with a deep passion for Machine Learning, 
          Software Development, and Automation. I transform complex problems into intelligent 
          solutions through research and innovation.
        </p>
        
        <div className="skills-scroll-container">
          <motion.div 
            className="skills-row skills-row-top"
            style={{ 
              x: useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]) 
            }}
          >
            {topSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-circle"
                style={{ fontFamily: skill.font }}
              >
                {skill.name}
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="skills-row skills-row-bottom"
            style={{ 
              x: useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]) 
            }}
          >
            {bottomSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-circle"
                style={{ fontFamily: skill.font }}
              >
                {skill.name}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default About
