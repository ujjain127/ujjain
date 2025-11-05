import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ExpandableSection from './ExpandableSection'
import './Research.css'

const Research = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const papers = [
    {
      title: "Enhancing Education through Machine Learning",
      conference: "1st Int'l Conference on Frontier Technologies, St. Joseph's College of Engineering",
      status: "Published",
      points: [
        "Built an AI tool using Isolation Forests on UDISE+ data to detect structurally non-standard schools in India.",
        "Enabled data-driven, zone-wise resource allocation aligned with Samagra Shiksha framework."
      ]
    },
    {
      title: "Efficient Malware Detection Using Transfer Learning",
      conference: "AIMLA 2025, K.S.Rangasamy College of Technology",
      status: "Published",
      points: [
        "Used ResNet-50 and GAN-based image synthesis to boost malware detection performance on imbalanced datasets.",
        "Improved precision and recall, demonstrating effective learning on minimal, obfuscated samples."
      ]
    },
    {
      title: "Hybrid Privacy-Preserved Image Representation",
      conference: "ICCSP 2025, Adhiparasakthi Engineering College",
      status: "Published",
      points: [
        "Proposed DWT-based steganography with chaotic logistic encryption for secure cloud image transmission.",
        "Balanced speed, privacy, and compression — suitable for medical and cloud archive use cases."
      ]
    },
    {
      title: "Cold Chain Reserve Dashboard",
      conference: "ICCSP 2025, Adhiparasakthi Engineering College",
      status: "Published",
      points: [
        "Built a real-time dashboard using Plotly Dash to monitor agricultural cold storage and production capacity.",
        "Enabled visual alerts and data KPIs to support logistics decisions for policymakers and farmers."
      ]
    },
    {
      title: "Quantum Key Distribution in AV Security",
      conference: "Nova Publishers (Book Chapter)",
      status: "Awaiting Publication",
      points: [
        "Explored and analyzed practical applications of QKD in autonomous vehicle security.",
        "Focused on securing V2V and V2I communications against emerging cyber threats, including quantum computing."
      ]
    }
  ]

  return (
    <section id="research" className="section research-section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        RESEARCH PAPERS
      </motion.h2>

      <div className="research-content">
        {papers.map((paper, index) => (
          <ExpandableSection 
            key={index} 
            title={paper.title}
            defaultExpanded={index === 0}
          >
            <div className="paper-meta">
              <span className="conference">{paper.conference}</span>
              <span className={`status ${paper.status.toLowerCase().replace(' ', '-')}`}>
                {paper.status}
              </span>
            </div>
            <ul className="paper-points">
              {paper.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </ExpandableSection>
        ))}
      </div>
    </section>
  )
}

export default Research
