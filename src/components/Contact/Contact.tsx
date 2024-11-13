import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section className="contact-section">
      <motion.div 
        className="glass-card cta-card"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="heading-primary">Ready to Create Something Amazing?</h2>
        <button className="cta-button glow-accent">Let's Connect</button>
      </motion.div>
    </section>
  );
};