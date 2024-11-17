import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      when: "beforeChildren",
      staggerChildren: 0.2,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
      when: "afterChildren",
    }
  }
};

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  isLoading = false,
}) => {
  // Restore scroll position when component mounts
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-container"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        className="page-container"
      >
        {!isLoading && (
          <motion.div
            key="page-content"
            className="page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
