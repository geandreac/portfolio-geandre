import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple to-purple/50 z-[9999] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
