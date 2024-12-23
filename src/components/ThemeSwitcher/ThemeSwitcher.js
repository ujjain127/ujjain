import React from 'react';
import { motion } from 'framer-motion';
import './ThemeSwitcher.css';

function ThemeSwitcher({ isDark, toggleTheme }) {
  return (
    <motion.button
      className="theme-switcher"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
          <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.6859L4.8999 19.1001M17.6859 17.6859L19.1001 19.1001M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </motion.button>
  );
}

export default ThemeSwitcher; 