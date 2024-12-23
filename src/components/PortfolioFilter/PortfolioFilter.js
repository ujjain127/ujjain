import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PortfolioFilter.css';

function PortfolioFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="portfolio-filter">
      {categories.map((category) => (
        <motion.button
          key={category}
          className={`filter-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              className="active-indicator"
              layoutId="activeIndicator"
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

export default PortfolioFilter; 