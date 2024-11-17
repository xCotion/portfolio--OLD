import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loading.css';

export interface LoadingProps {
  onComplete?: () => void;
  minimumDisplayTime?: number;
}

export const Loading: React.FC<LoadingProps> = ({ 
  onComplete, 
  minimumDisplayTime = 1000 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, minimumDisplayTime);

    return () => clearTimeout(timer);
  }, [onComplete, minimumDisplayTime]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loading-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="loading-spinner"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <motion.div
            className="loading-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Loading...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
