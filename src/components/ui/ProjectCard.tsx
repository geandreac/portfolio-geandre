import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  name: string;
  stack: string[];
  desc: string;
  link?: string;
  linkLabel?: string;
  status?: string;
  note?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  name, stack, desc, link, linkLabel, status, note 
}) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
      className="group bg-bg border border-border p-6 flex flex-col gap-4 transition-all duration-300 hover:bg-card hover:border-purple/30 hover:-translate-y-1 h-full relative overflow-hidden"
    >
      {/* Subtle corner glow on hover */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex flex-wrap gap-2 pb-4 border-b border-border/50">
        {stack.map((item, i) => (
          <span 
            key={i} 
            className="text-[10px] uppercase tracking-wider bg-bg3 border border-border2 px-2 py-0.5 rounded-sm text-muted font-mono"
          >
            {item}
          </span>
        ))}
      </div>
      
      <div className="flex-1">
        <h3 className="font-bold text-lg text-text mb-1 group-hover:text-purple transition-colors duration-300">{name}</h3>
        {note && <p className="text-xs text-purple/80 italic mb-3">{note}</p>}
        <p className="text-sm text-muted leading-relaxed line-clamp-4">{desc}</p>
      </div>
      
      <div className="flex flex-wrap gap-3 mt-2">
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 border border-border2 transition-all duration-300 hover:bg-purple hover:text-white hover:border-purple ${status === 'live' ? 'border-purple/40 text-purple' : 'text-muted'}`}
          >
            {linkLabel || 'Link'}
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 border border-border2 text-muted/50 cursor-default bg-bg3/50">
            {linkLabel || 'Privado'}
          </span>
        )}
      </div>
    </motion.div>
  );
};
