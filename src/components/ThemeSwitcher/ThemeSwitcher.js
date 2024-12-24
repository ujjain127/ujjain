import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || 'dark';
    setIsDark(theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <motion.button
      className="theme-switcher"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </motion.button>
  );
}

export default ThemeSwitcher; 