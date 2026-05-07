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
      <h2 className="text-3xl lg:text-4xl font-bold text-text font-outfit tracking-tight">
        <span className="text-purple">#</span>{title || id}
      </h2>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-border2 via-border2 to-transparent max-w-[300px]" />
    </motion.div>
  );
};
