import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ activeSection }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navItems = [
    { id: 'hero', label: 'HOME', path: '/', isSection: true },
    { id: 'about', label: 'ABOUT', path: '/', isSection: true },
    { id: 'research', label: 'RESEARCH', path: '/research', isSection: false },
    { id: 'projects', label: 'PROJECTS', path: '/projects', isSection: false },
    { id: 'experience', label: 'EXPERIENCE', path: '/', isSection: true },
    { id: 'skills', label: 'SKILLS', path: '/', isSection: true },
    { id: 'contact', label: 'CONTACT', path: '/', isSection: true }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      className="navigation"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {navItems.map((item, index) => {
        const isActive = isHomePage && item.isSection 
          ? activeSection === item.id 
          : location.pathname === item.path && !item.isSection

        if (item.isSection) {
          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                if (location.pathname !== '/') {
                  window.location.href = '/#' + item.id
                } else {
                  scrollToSection(item.id)
                }
              }}
              className={isActive ? 'active' : ''}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              whileHover={{ x: -5 }}
            >
              {item.label}
            </motion.a>
          )
        } else {
          return (
            <Link
              key={item.id}
              to={item.path}
              className={isActive ? 'active' : ''}
            >
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ x: -5 }}
              >
                {item.label}
              </motion.span>
            </Link>
          )
        }
      })}
    </motion.nav>
  )
}

export default Navigation
