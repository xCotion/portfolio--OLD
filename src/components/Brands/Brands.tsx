import React from 'react';
import { motion } from 'framer-motion';

export const Brands = () => {
  const brands = [
    { name: 'KPS Jewellery', delay: 0 },
    { name: 'Dons Meals', delay: 0.2 }
  ];

  return (
    <section className="brands-section">
      <motion.div 
        className="glass-panel brands-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-primary">Brands Worked With</h2>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="brand-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: brand.delay,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: 'rgba(255, 255, 255, 0.04)'
              }}
            >
              {brand.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};