import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import './ScrollProgress.css';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`progress-bar ${isVisible ? 'visible' : ''}`}
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress; 