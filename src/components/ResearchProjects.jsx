import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './ResearchProjects.css'

const ResearchProjects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const researchProjects = [
    {
      id: 'education-ml',
      title: "Enhancing Education through Machine Learning",
      type: "Research",
      conference: "1st Int'l Conference on Frontier Technologies, St. Joseph's College of Engineering",
      status: "Published",
      preview: "Built an AI tool using Isolation Forests on UDISE+ data to detect structurally non-standard schools in India."
    },
    {
      id: 'forensiq',
      title: "ForensiQ",
      type: "Project",
      tech: "React, Flask, ML, NLP",
      preview: "Built ForensiQ, a modular machine learning framework for automated digital forensics and cybercrime investigation."
    },
    {
      id: 'malware-detection',
      title: "Efficient Malware Detection Using Transfer Learning",
      type: "Research",
      conference: "AIMLA 2025, K.S.Rangasamy College of Technology",
      status: "Published",
      preview: "Used ResNet-50 and GAN-based image synthesis to boost malware detection performance on imbalanced datasets."
    },
    {
      id: 'shiksha-samriddhi',
      title: "Shiksha Samriddhi",
      type: "Project",
      tech: "Python, Scikit-learn, UDISE+, Streamlit",
      preview: "Developed an ML system using Isolation Forest and Decision Trees to detect and classify 'odd' schools in India."
    },
    {
      id: 'hybrid-privacy',
      title: "Hybrid Privacy-Preserved Image Representation",
      type: "Research",
      conference: "ICCSP 2025, Adhiparasakthi Engineering College",
      status: "Published",
      preview: "Proposed DWT-based steganography with chaotic logistic encryption for secure cloud image transmission."
    },
    {
      id: 'medtrace',
      title: "MedTrace",
      type: "Project",
      tech: "GPS, RFID, Blockchain, Firebase, Flask",
      preview: "Built a decentralized drug inventory and supply chain tracking system to monitor pharmaceutical logistics."
    },
    {
      id: 'cold-chain',
      title: "Cold Chain Reserve Dashboard",
      type: "Research",
      conference: "ICCSP 2025, Adhiparasakthi Engineering College",
      status: "Published",
      preview: "Built a real-time dashboard using Plotly Dash to monitor agricultural cold storage and production capacity."
    },
    {
      id: 'payslip-automation',
      title: "Annual Pay Slip Automation",
      type: "Project",
      tech: "UiPath, Excel, Gmail Integration",
      preview: "Automated generation and emailing of yearly employee pay slips using UiPath Studio."
    },
    {
      id: 'quantum-av',
      title: "Quantum Key Distribution in AV Security",
      type: "Research",
      conference: "Nova Publishers (Book Chapter)",
      status: "Awaiting Publication",
      preview: "Explored and analyzed practical applications of QKD in autonomous vehicle security."
    }
  ]

  return (
    <section id="research" className="section research-projects-section" ref={ref}>
      <motion.p
        className="section-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I am the one who moves projects forward and transforms
      </motion.p>

      <div className="research-projects-list">
        {researchProjects.map((item, index) => (
          <Link
            key={index}
            to={`/research-project/${item.id}`}
            className="research-project-item"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="item-content"
            >
              <h3>{item.title}</h3>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ResearchProjects
