import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({ children, delay = 0, className = '' }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        delay,
      }}
      className={`animated-section ${className}`}
    >
      {children}
    </motion.div>
  );
};
