import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let currentSection = null
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section
        }
      })

      if (currentSection) {
        const bgColor = window.getComputedStyle(currentSection).backgroundColor
        // Check if background is dark (research/contact sections)
        const isDarkBg = currentSection.id === 'research' || currentSection.id === 'contact'
        setIsDark(isDarkBg)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isDark ? 'dark' : 'light'}`}>
      <a href="#hero" className="navbar-logo">
        UJJAIN S
      </a>
    </nav>
  )
}

export default Navbar
