import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="footer"
    >
      <div className="footer-content">
        <div className="footer-section">
          <motion.p 
            className="footer-text"
            whileHover={{ 
              color: 'var(--accent-light)',
              transition: { duration: 0.2 }
            }}
          >
            2024 ashton.services
          </motion.p>
        </div>
        <div className="footer-section">
          <motion.a 
            href="/privacy"
            whileHover={{ 
              color: 'var(--accent-light)',
              transition: { duration: 0.2 }
            }}
          >
            Privacy Policy
          </motion.a>
          <motion.a 
            href="/terms"
            whileHover={{ 
              color: 'var(--accent-light)',
              transition: { duration: 0.2 }
            }}
          >
            Terms of Service
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};