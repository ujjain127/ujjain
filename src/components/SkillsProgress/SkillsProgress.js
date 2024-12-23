import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SkillsProgress.css';

function SkillsProgress() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skills = [
    {
      domain: "Frontend Development",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description: "Building responsive and interactive user interfaces with modern frameworks and tools.",
      icon: "💻"
    },
    {
      domain: "Backend Development",
      technologies: ["Node.js", "Express", "Python", "PostgreSQL"],
      description: "Developing robust server-side applications and RESTful APIs.",
      icon: "⚙️"
    },
    {
      domain: "UI/UX Design",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      description: "Creating intuitive and engaging user experiences through thoughtful design.",
      icon: "🎨"
    },
    {
      domain: "Mobile Development",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      description: "Building cross-platform mobile applications with native performance.",
      icon: "📱"
    },
    {
      domain: "DevOps",
      technologies: ["Docker", "AWS", "CI/CD", "Git"],
      description: "Implementing efficient deployment and development workflows.",
      icon: "🚀"
    },
    {
      domain: "Testing & Quality",
      technologies: ["Jest", "Cypress", "TDD", "E2E Testing"],
      description: "Ensuring code quality through comprehensive testing strategies.",
      icon: "🔍"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Skills</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-description">
            Specialized in full-stack development with a focus on modern technologies
          </p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.domain}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-domain">{skill.domain}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-technologies">
                {skill.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsProgress; 