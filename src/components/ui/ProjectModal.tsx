import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  language: 'pt' | 'en';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, language }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-bg2 border border-purple/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none relative flex flex-col cursor-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-purple text-white flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>

            <div className="w-full aspect-video bg-black relative flex items-center justify-center border-b border-white/5">
              {project.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1&color=white`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title={project.name}
                />
              ) : (
                <div className="flex flex-col items-center gap-4 opacity-50">
                   <svg viewBox="0 0 24 24" className="w-12 h-12 fill-purple"><path d="M8 5v14l11-7z"/></svg>
                   <span className="text-sm font-medium uppercase tracking-widest">{language === 'pt' ? 'Demonstração em vídeo em breve' : 'Video demo coming soon'}</span>
                </div>
              )}
            </div>

            <div className="p-6 md:p-10 space-y-6">
               <div>
                 <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">{project.name}</h2>
                 {project.note && (
                   <p className="text-xs font-medium text-purple/70 uppercase tracking-widest">
                     {project.note[language]}
                   </p>
                 )}
               </div>

               <div className="flex flex-wrap gap-2">
                 {project.stack.map((item, i) => (
                   <span key={i} className="text-xs font-medium uppercase tracking-wider text-muted/80 bg-white/5 px-2.5 py-1 rounded-sm border border-white/5">
                     {item}
                   </span>
                 ))}
               </div>

               <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
                 {project.descLong?.[language] || project.desc[language]}
               </p>

               {(project.link || project.status === 'live') && (
                 <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-6">
                   {project.link ? (
                     <a 
                       href={project.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="px-6 py-3 bg-purple text-bg text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 group cursor-pointer"
                     >
                       {project.linkLabel || 'Acessar'}
                       <span className="group-hover:translate-x-1 transition-transform">→</span>
                     </a>
                   ) : null}
                   
                   {project.status === 'live' && (
                     <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/5 rounded-full border border-green-500/10">
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                       <span className="text-xs font-medium uppercase tracking-tighter text-green-500/80">Online</span>
                     </div>
                   )}
                 </div>
               )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
