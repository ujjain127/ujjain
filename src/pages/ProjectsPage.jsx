import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Projects from '../components/Projects'
import './Page.css'

const ProjectsPage = () => {
  return (
    <div className="page-container">
      <Navigation />
      
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="back-link">
          ← BACK TO HOME
        </Link>
        <h1>PROJECTS</h1>
      </motion.div>

      <Projects />
    </div>
  )
}

export default ProjectsPage
