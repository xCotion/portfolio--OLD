import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { cardVariants } from './animations';
import './Skills.css';

interface FloatingCardProps {
  skill: {
    title: string;
    subtitle: string;
    icon: string;
  };
  index: number;
  isGrid: boolean;
  custom: {
    floating: {
      x: number;
      y: number;
      rotation: number;
    };
    grid: {
      x: number;
      y: number;
      rotation: number;
    };
  };
}

const FloatingCard: React.FC<FloatingCardProps> = ({ skill, index, isGrid, custom }) => {
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth mouse movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 15
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 15
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = (event.clientX - rect.left) / rect.width - 0.5;
    const centerY = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(centerX);
    mouseY.set(centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      custom={custom}
      variants={cardVariants}
      initial="initial"
      animate={isGrid ? "grid" : "floating"}
      whileHover="hover"
      whileTap="tap"
      className="group relative"
      style={{
        position: 'absolute',
        width: '280px',
        height: '320px',
        transformStyle: "preserve-3d",
        perspective: "1000px",
        rotateX: !isGrid ? rotateX : 0,
        rotateY: !isGrid ? rotateY : 0,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient light effect */}
      <div 
        className="absolute -inset-[100px] bg-accent-primary/20 opacity-0 
                   group-hover:opacity-20 blur-3xl transition-opacity duration-500"
        style={{ transform: 'translateZ(-50px)' }}
      />

      {/* Glass background with blur effect */}
      <div 
        className="absolute inset-0 rounded-2xl bg-white/[0.03] backdrop-blur-[2px] 
                   group-hover:bg-white/[0.06] transition-colors duration-300
                   border border-white/[0.05] group-hover:border-white/[0.08]"
        style={{ transform: 'translateZ(-10px)' }}
      />
      
      {/* Card content */}
      <div 
        className="relative h-full p-6 rounded-2xl overflow-hidden
                   flex flex-col items-center justify-center gap-4
                   text-center transform-gpu preserve-3d"
        style={{ transform: 'translateZ(10px)' }}
      >
        {/* Icon */}
        <motion.div 
          className="text-4xl mb-2"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, -5, 5, 0] 
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.2
          }}
        >
          {skill.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-text-primary">
          {skill.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-text-secondary/80">
          {skill.subtitle}
        </p>

        {/* Learn More Button */}
        <motion.button
          className="mt-4 px-4 py-2 rounded-lg bg-accent-primary/10 
                     text-accent-primary text-sm font-medium
                     hover:bg-accent-primary/20 transition-colors
                     border border-accent-primary/20 hover:border-accent-primary/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>

      {/* Edge highlights */}
      <div 
        className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r 
                   from-transparent via-text-primary/10 to-transparent
                   group-hover:via-accent-primary/20 transition-colors duration-300"
      />
      <div 
        className="absolute inset-y-0 -right-px w-px bg-gradient-to-b 
                   from-transparent via-text-primary/10 to-transparent
                   group-hover:via-accent-primary/20 transition-colors duration-300"
      />
    </motion.div>
  );
};

export default FloatingCard;
