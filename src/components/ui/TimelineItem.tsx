import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  period: string;
  periodEnd: string;
  isCurrent?: boolean;
  company: string;
  role: string;
  points: string[];
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  period, periodEnd, isCurrent, company, role, points
}) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-12 py-8 border-t border-white/5 last:border-b group"
    >
      <div className="text-sm text-muted font-medium pt-[2px] font-outfit">
        {period} — {isCurrent ? (
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-purple font-bold"
          >
            {periodEnd}
          </motion.span>
        ) : periodEnd}
        {isCurrent && (
          <span className="relative inline-block w-2.5 h-2.5 rounded-full bg-purple ml-3 shadow-[0_0_10px_rgba(192,132,252,0.6)]">
             <span className="absolute inset-0 rounded-full bg-purple animate-ping opacity-75" />
          </span>
        )}
      </div>
      
      <div className="relative">
        <h4 className="text-purple font-bold text-lg mb-1 font-outfit group-hover:translate-x-1 transition-transform duration-300">{company}</h4>
        <p className="text-text/90 font-medium text-sm mb-4 tracking-tight uppercase">{role}</p>
        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="text-muted text-sm leading-relaxed pl-6 relative">
              <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-purple/40" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
