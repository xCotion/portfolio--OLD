import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.FC;
  index: number;
}

export const SkillCard = ({ title, description, icon: Icon, index }: SkillCardProps) => {
  return (
    <motion.div
      className="glass-card skill-card"
      initial={{ 
        opacity: 0, 
        y: 20,
        filter: 'drop-shadow(0 0 0 transparent)'
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        filter: 'drop-shadow(0 0 0 transparent)'
      }}
      whileHover={{ 
        scale: 1.02,
        filter: 'drop-shadow(0 0 12px var(--accent-glow))',
        y: -5
      }}
      transition={{ 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        opacity: {
          delay: index * 0.2,
          duration: 0.5
        },
        scale: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        },
        filter: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        },
        y: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }
      }}
    >
      <div className="skill-icon-wrapper">
        <Icon />
      </div>
      <h3 className="heading-secondary">{title}</h3>
      <p className="body-text">{description}</p>
    </motion.div>
  );
};