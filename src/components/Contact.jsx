import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { icon: "📧", label: "Email", href: "mailto:ujjainsriganesh@gmail.com", text: "ujjainsriganesh@gmail.com" },
    { icon: "💼", label: "LinkedIn", href: "https://linkedin.com/in/ujjain-s-41b577242", text: "linkedin.com/in/ujjain-s" },
    { icon: "💻", label: "GitHub", href: "https://github.com/ujjain127", text: "github.com/ujjain127" }
  ]

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.p
          className="contact-intro"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </motion.p>

        <motion.a
          href="mailto:ujjainsriganesh@gmail.com"
          className="lets-talk-button"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>
      </motion.div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="footer-links">
          <a href="https://github.com/ujjain127" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <span className="separator">•</span>
          <a href="mailto:ujjainsriganesh@gmail.com">EMAIL</a>
          <span className="separator">•</span>
          <a href="https://linkedin.com/in/ujjain-s-41b577242" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>
        <p>© 2025 Ujjain Sriganesh. Crafted with React & Framer Motion.</p>
      </motion.footer>
    </section>
  )
}

export default Contact
