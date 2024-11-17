import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Brands.css';

const kpsLogo = new URL('../../assets/KPSLOGO.PNG', import.meta.url).href;
const donsLogo = new URL('../../assets/dons.png', import.meta.url).href;

const Brands = () => {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  const getGlowStyle = (brand: string) => {
    if (brand === 'KPS Jewellery') {
      return {
        color: 'rgba(212, 175, 55, 0.5)',  // Gold
        glow: 'rgba(212, 175, 55, 0.3)'    // Softer gold
      };
    }
    return {
      color: 'rgba(255, 255, 255, 0.5)',   // White
      glow: 'rgba(255, 255, 255, 0.3)'     // Soft white
    };
  };

  const brands = [
    { 
      name: 'KPS Jewellery', 
      logo: kpsLogo, 
      delay: 0,
      baseSize: '156px'
    },
    { 
      name: 'Dons Meals', 
      logo: donsLogo, 
      delay: 0.2,
      baseSize: '84px'
    }
  ];

  return (
    <section className="brands-section">
      <motion.div 
        className="brands-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-primary">Brands Worked With</h2>
        <div className="brands-grid">
          <AnimatePresence mode="wait">
            {brands.map((brand) => {
              const glowStyle = getGlowStyle(brand.name);
              return (
                <motion.div
                  key={brand.name}
                  className="brand-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: brand.delay,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  onMouseEnter={() => setHoveredBrand(brand.name)}
                  onMouseLeave={() => setHoveredBrand(null)}
                >
                  <motion.div
                    className="brand-logo-container"
                    animate={{
                      scale: hoveredBrand === brand.name ? 1.05 : 1,
                      filter: hoveredBrand === brand.name 
                        ? `drop-shadow(0 0 5px ${glowStyle.color}) drop-shadow(0 0 15px ${glowStyle.glow}) drop-shadow(0 0 25px ${glowStyle.glow})`
                        : 'drop-shadow(0 0 0 transparent)',
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <motion.img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="brand-logo"
                      style={{ width: brand.baseSize }}
                      layoutId={`brand-${brand.name}`}
                    />
                  </motion.div>
                  <span className="brand-name">{brand.name}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;