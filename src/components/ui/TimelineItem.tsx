import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  period: string;
  periodEnd: string;
  isCurrent: boolean;
  company: string;
  role: { pt: string; en: string };
  points: { pt: string[]; en: string[] };
  language: 'pt' | 'en';
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  period, periodEnd, isCurrent, company, role, points, language 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 group"
    >
      <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-purple bg-bg transition-all duration-300 ${isCurrent ? 'scale-125 shadow-[0_0_10px_rgba(192,132,252,0.5)]' : 'group-hover:scale-110'}`} />
      
      <div className="space-y-1">
        <div className="flex items-center text-xs font-medium uppercase tracking-widest text-purple/80">
          <span className="mr-2">{period} —</span>
          {isCurrent ? (
            <motion.span
              animate={{ opacity: [1, 0.25, 1], scale: [1, 0.97, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-green-400 font-bold"
            >
              ● {language === 'pt' ? 'Atual' : 'Present'}
            </motion.span>
          ) : (
            <span>{periodEnd}</span>
          )}
        </div>
        <h4 className="text-base font-bold text-text group-hover:text-purple transition-colors">{role[language]}</h4>
        <p className="text-xs text-muted font-medium mb-3">{company}</p>
        
        <ul className="space-y-2">
          {points[language].map((point, i) => (
            <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
              <span className="text-purple">—</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
