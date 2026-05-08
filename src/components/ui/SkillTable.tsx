import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: { pt: string; en: string };
  items: string[];
}

interface SkillTableProps {
  skills: SkillCategory[];
  language: 'pt' | 'en';
}

export const SkillTable: React.FC<SkillTableProps> = ({ skills, language }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((category, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="bg-bg border border-white/5 p-6 rounded-sm group hover:border-purple/30 transition-all duration-300 shadow-lg shadow-black/20"
        >
          <h4 className="text-xs font-bold text-text mb-5 uppercase tracking-widest border-b border-white/5 pb-2 group-hover:text-purple transition-colors">
            {category.title[language]}
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item, i) => (
              <span 
                key={i}
                className="text-[11px] font-bold text-muted bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-sm group-hover:border-purple/20 hover:text-purple hover:bg-purple/5 hover:scale-105 hover:brightness-125 transition-all duration-300 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
