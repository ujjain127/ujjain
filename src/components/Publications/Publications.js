import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Publications.css';

function Publications() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  const toggleAbstract = (id) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const publications = [
    {
      id: 1,
      title: "Enhancing Education Infrastructure through Machine Learning: A Framework for Classifying and Prioritizing Schools",
      authors: "Ujjain S, Thilak Kumar V, Dhanush Ishwar D, Akash SV",
      //journal: "Journal of Example Studies",
      year: "2025",
      abstract: "Education is not just a standard but sets the foundation, empowering students and opportunities in the future. This project proposes the classification of the schools using the “Samagra Shiksha” framework which the Ministry of Education sets. We developed an AI-driven system to classify the schools as structured or odd using UDISE PLUS data. The study describes the methodology of Machine Learning algorithms such as Isolation Forest and Light Gradient Boosting Machine implementation on key factors like grade structure, teacher quality, teacher-student ratio, and infrastructure score. It brings the significance of zone-wise classification and aiding policymakers in prioritizing interventions. This can help the policy makers aware of the condition of the schools and gives them more clarity for allocating resources. By classifying the schools based on their quality metrics, we found that out of 10,48,575 government schools, 85.03% of schools were structured and 14.97% were odd. This highlights the robustness of both algorithms and the critical role of model selection in classifying schools.",
      //link: "https://doi.org/10.1234/example.2024"
    }
  ];

  return (
    <section className="publications" id="publications">
      <motion.div 
        className="publications-container"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="publications-header">
          <span className="section-subtitle">Research</span>
          <h2 className="section-title">Publications</h2>
        </div>

        <div className="publications-grid">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              className="publication-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="publication-content">
                <h3 className="publication-title">{pub.title}</h3>
                <p className="publication-authors">{pub.authors}</p>
                <div className="publication-meta">
                  <span className="journal">{pub.journal}</span>
                  <span className="year">{pub.year}</span>
                </div>
                
                <div className="abstract-container">
                  <AnimatePresence>
                    {expandedAbstracts[pub.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="publication-abstract"
                      >
                        {pub.abstract}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <button 
                    className="abstract-toggle"
                    onClick={() => toggleAbstract(pub.id)}
                  >
                    {expandedAbstracts[pub.id] ? 'Show Less' : 'View Abstract'}
                    <span className={`toggle-icon ${expandedAbstracts[pub.id] ? 'expanded' : ''}`}>
                      ▼
                    </span>
                  </button>
                </div>

                <div className="publication-links">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="doi-link">
                    View Publication
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Publications; 