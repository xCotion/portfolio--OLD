import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-header"
    >
      <nav className="header-nav">
        <motion.div 
          className="logo"
          whileHover={{ 
            scale: 1.05,
            textShadow: '0 0 15px var(--accent-glow)'
          }}
        >
          ashton.services
        </motion.div>
        <div className="nav-links">
          {['Services', 'Projects', 'About', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase()}`}
              whileHover={{ 
                scale: 1.05,
                color: 'var(--accent-light)',
                textShadow: '0 0 8px var(--accent-glow)'
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}; 