import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  description: string;
  details: string;
  icon: React.FC;
  index: number;
}

export const SkillCard = ({ title, description, details, icon: Icon, index }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="skill-card-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.2,
      }}
    >
      <motion.div 
        className="skill-card"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        }}
      >
        <motion.div 
          className="skill-card-front"
          animate={{ opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="skill-icon-wrapper">
            <Icon />
          </div>
          <h3 className="skill-title">{title}</h3>
          <p className="skill-description">{description}</p>
          <span className="flip-hint">Click to learn more</span>
        </motion.div>

        <motion.div 
          className="skill-card-back"
          animate={{ opacity: isFlipped ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="skill-title">{title}</h3>
          <p className="skill-details">{details}</p>
          <span className="flip-hint">Click to flip back</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};