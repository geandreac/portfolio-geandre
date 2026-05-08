import React from 'react';
import { motion } from 'framer-motion';

import { ProjectItem } from '../../data/projects';

interface ProjectCardProps extends ProjectItem {
  language: 'pt' | 'en';
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, stack, desc, note, status, link, linkLabel, language, onClick }) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      onClick={onClick}
      className="group bg-bg2/40 backdrop-blur-sm border border-white/5 p-8 flex flex-col gap-6 hover:border-purple/40 transition-all duration-500 h-full relative cursor-pointer"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-[2px] h-0 group-hover:h-full bg-purple transition-all duration-500" />
      
      <div className="flex-1 space-y-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-text group-hover:text-purple transition-colors duration-300">
            {name}
          </h3>
          {note && (
            <p className="text-xs font-medium text-purple/70 uppercase tracking-[0.2em]">
              {note[language]}
            </p>
          )}
        </div>
        
        <p className="text-sm text-muted leading-relaxed min-h-[3em]">
          {desc[language]}
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {stack.map((item, i) => (
            <span key={i} className="text-xs font-medium uppercase tracking-wider text-muted/80 bg-white/5 px-2.5 py-1 rounded-sm border border-white/5">
              {item}
            </span>
          ))}
        </div>

        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-6">
            {link ? (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-text hover:text-purple transition-all duration-300 flex items-center gap-2 group/link"
              >
                {linkLabel || 'Live <~>'}
                <span className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all">→</span>
              </a>
            ) : (
              <span className="text-xs font-medium text-muted/40 cursor-not-allowed flex items-center gap-2">
                {linkLabel || 'Privado >='}
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current opacity-50"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
              </span>
            )}
          </div>
          
          {status === 'live' && (
            <div className="flex items-center gap-2 px-2 py-1 bg-green-500/5 rounded-full border border-green-500/10">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <span className="text-xs font-medium uppercase tracking-tighter text-green-500/80">Online</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
