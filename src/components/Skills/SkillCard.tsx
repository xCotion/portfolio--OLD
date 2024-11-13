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
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      whileHover={{ 
        y: -4,
        background: 'var(--glass-light)',
        borderColor: 'var(--glass-strong)'
      }}
      transition={{ 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        opacity: {
          delay: index * 0.2,
          duration: 0.5
        }
      }}
    >
      <div className="skill-icon-wrapper">
        <Icon />
      </div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </motion.div>
  );
};