import React from 'react';
import { motion } from 'framer-motion';

const kpsLogo = new URL('../../assets/KPSLOGO.PNG', import.meta.url).href;
const donsLogo = new URL('../../assets/dons.png', import.meta.url).href;

export const Brands = () => {
  const brands = [
    { 
      name: 'KPS Jewellery', 
      logo: kpsLogo, 
      delay: 0, 
      color: '#D4AF37',
      baseSize: '156px'
    },
    { 
      name: 'Dons Meals', 
      logo: donsLogo, 
      delay: 0.2, 
      color: '#FFFFFF',
      baseSize: '84px'
    }
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
            >
              <motion.img 
                src={brand.logo} 
                alt={brand.name} 
                className="brand-logo"
                style={{ 
                  width: brand.baseSize,
                  filter: 'drop-shadow(0 0 0 transparent)'
                }}
                initial={{ filter: 'drop-shadow(0 0 0 transparent)' }}
                whileHover={{ 
                  scale: 1.05,
                  filter: `drop-shadow(0 0 8px ${brand.color})`
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                  scale: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  },
                  filter: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              />
              <span className="brand-name">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};