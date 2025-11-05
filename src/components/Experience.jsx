import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import './Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [scrollProgress, setScrollProgress] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const experiences = [
    {
      title: "Remote Internship",
      company: "Altruisty Innovation Pvt Ltd, Chennai",
      period: "June 2025 – August 2025",
      domain: "Generative AI",
      points: [
        "Collaborating with AI professionals on real-world GenAI projects under industry mentorship.",
        "Contributing to research, development, or fine-tuning of LLM-based tools or GenAI workflows.",
        "Gaining hands-on experience in prompt engineering, model optimization, and AI integration."
      ]
    },
    {
      title: "Secretary, UiPhoria Club",
      company: "Rajalakshmi Engineering College, Chennai",
      period: "Mar 2025 – Present",
      domain: "Leadership",
      points: [
        "Managed club operations and communications for over 120 members.",
        "Led weekly RPA workshops, organized UiPath challenges, and mentored juniors."
      ]
    },
    {
      title: "Automation Developer, UiPhoria Club",
      company: "Rajalakshmi Engineering College, Chennai",
      period: "Nov 2023 – Feb 2025",
      domain: "RPA Development",
      points: [
        "Designed and implemented automated workflows using UiPath Studio.",
        "Automated document processing and data extraction, reducing manual effort by 80%."
      ]
    },
    {
      title: "Chairperson, IEEE TEMS REC",
      company: "Rajalakshmi Engineering College, Chennai",
      period: "May 2023 – Dec 2024",
      domain: "Leadership & Event Management",
      points: [
        "Led a team of 26 members to plan and execute technical events and workshops.",
        "Coordinated guest lectures with industry professionals, improving student-industry engagement.",
        "Successfully hosted IEEE TEMS Inauguration with 150+ participants."
      ]
    }
  ]

  return (
    <section id="experience" className="section experience-section" ref={containerRef}>
      <div className="experience-sticky-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          EXPERIENCE & LEADERSHIP
        </motion.h2>

        <div className="timeline-wrapper">
          <div className="timeline-line-container">
            <div className="timeline-line-full"></div>
            <motion.div 
              className="timeline-line-progress"
              style={{ scaleX: scrollProgress }}
            ></motion.div>
          </div>
          
          <motion.div 
            className="timeline-horizontal"
            style={{ 
              x: useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]) 
            }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item-horizontal"
              >
                <div className="experience-card">
                  <div className="exp-header">
                    <div>
                      <h3>{exp.title}</h3>
                      <p className="company">{exp.company}</p>
                      <span className="domain">{exp.domain}</span>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <ul className="exp-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
