import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import './AchievementsCounter.css';

function AchievementsCounter() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const achievements = [
    { number: 100, suffix: '+', title: 'Projects Completed' },
    { number: 50, suffix: '+', title: 'Happy Clients' },
    { number: 5, suffix: '+', title: 'Years Experience' },
    { number: 15, suffix: '+', title: 'Awards Won' }
  ];

  return (
    <section className="achievements" ref={ref}>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="achievement-number">
              {inView && (
                <CountUp
                  end={achievement.number}
                  duration={2.5}
                  suffix={achievement.suffix}
                />
              )}
            </div>
            <div className="achievement-title">{achievement.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AchievementsCounter; 