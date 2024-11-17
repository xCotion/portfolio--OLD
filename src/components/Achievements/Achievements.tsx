import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements-section">
      <motion.div 
        className="achievements-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-primary">Notable Achievements</h2>
        <div className="achievements-grid">
          <motion.div 
            className="achievement-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="achievement-header">
              <h3 className="heading-secondary">KPS Jewelry Case Study</h3>
              <span className="glow-accent achievement-metric">1.6M+ Views</span>
            </div>
            <p className="body-text">
              Grew social media presence from 3,000 to 11,000+ followers through organic engagement
              and viral content creation, achieving multiple high-impact posts without any advertising budget.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;