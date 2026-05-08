import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  id: string;
  title?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ id, title, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex items-center gap-6 mb-12 ${className}`}
    >
      <h3 className="text-2xl font-bold text-text whitespace-nowrap">
        <span className="text-purple">#</span>{title || id}
      </h3>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-border2 via-border2 to-transparent max-w-[300px]" />
    </motion.div>
  );
};
