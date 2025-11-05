import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Research from '../components/Research'
import './Page.css'

const ResearchPage = () => {
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
        <h1>RESEARCH PAPERS</h1>
      </motion.div>

      <Research />
    </div>
  )
}

export default ResearchPage
