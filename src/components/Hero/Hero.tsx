import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card hero-content"
      >
        <h1 className="heading-primary">Crafting Digital Excellence</h1>
        <p className="heading-secondary">iOS Development • AI Integration • Technical Architecture</p>
      </motion.div>
    </section>
  );
};