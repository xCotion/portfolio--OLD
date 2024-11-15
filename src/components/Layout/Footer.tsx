import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-footer"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <motion.p 
            className="footer-text"
            whileHover={{ color: 'var(--accent-light)' }}
          >
            2024 Ashton.services
          </motion.p>
        </div>
        <div className="footer-section">
          <motion.a 
            href="/privacy"
            whileHover={{ 
              color: 'var(--accent-light)',
              textShadow: '0 0 8px var(--accent-glow)'
            }}
          >
            Privacy Policy
          </motion.a>
          <motion.a 
            href="/terms"
            whileHover={{ 
              color: 'var(--accent-light)',
              textShadow: '0 0 8px var(--accent-glow)'
            }}
          >
            Terms of Service
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}; 