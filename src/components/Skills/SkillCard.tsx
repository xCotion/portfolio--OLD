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
      whileHover={{ 
        scale: 1.02,
        backgroundColor: 'rgba(255, 255, 255, 0.04)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut"
        }}
      >
        <Icon />
      </motion.div>
      <h3 className="heading-secondary">{title}</h3>
      <p className="body-text">{description}</p>
    </motion.div>
  );
};