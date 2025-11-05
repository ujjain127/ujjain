import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-name-background"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          UJJAIN<br />SRIGANESH
        </motion.div>
        
        <motion.div
          className="hero-photo-container"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 150
          }}
        >
          <div className="hero-photo"></div>
        </motion.div>
      </div>
      
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Computer Science Student • ML Researcher • Developer
      </motion.p>
    </section>
  )
}

export default Hero
