import React from 'react';
import { motion } from 'framer-motion';
// Use dynamic import for images
const kpsLogo = new URL('../../assets/KPSLOGO.PNG', import.meta.url).href;
const donsLogo = new URL('../../assets/dons.png', import.meta.url).href;

export const Brands = () => {
  const brands = [
    { name: 'KPS Jewellery', logo: kpsLogo, delay: 0 },
    { name: 'Dons Meals', logo: donsLogo, delay: 0.2 }
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
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
              <span className="brand-name">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};