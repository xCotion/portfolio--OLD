import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loading } from '../Loading/Loading';

interface LoadingTransitionProps {
  children: React.ReactNode;
  isLoading: boolean;
}

const overlayVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    }
  }
};

export const LoadingTransition: React.FC<LoadingTransitionProps> = ({
  children,
  isLoading
}) => {
  // Prevent body scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <div className="relative w-full h-full">
      {children}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate={isLoading ? "visible" : "hidden"}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-bg-primary ${isLoading ? 'loading-container active' : 'loading-container'}`}
      >
        {isLoading && <Loading minimumDisplayTime={600} />}
      </motion.div>
    </div>
  );
};
