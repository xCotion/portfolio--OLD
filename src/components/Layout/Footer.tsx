import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-footer"
    >
      <div className="footer-content">
        <div className="footer-section">
          <motion.p 
            className="footer-text"
            whileHover={{ color: 'var(--accent-light)' }}
          >
            © 2024 Ashton.io
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