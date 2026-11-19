import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../../data/projects';
import { StageBadge } from './ProjectCard';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  language: 'pt' | 'en';
}

const LABELS = {
  pt: { overview: 'Visão geral', role: 'Minha contribuição', features: 'Funcionalidades', architecture: 'Arquitetura e implementação', highlights: 'Diferenciais técnicos', stack: 'Tecnologias', close: 'Fechar', open: 'Acessar' },
  en: { overview: 'Overview', role: 'My contribution', features: 'Features', architecture: 'Architecture & implementation', highlights: 'Technical highlights', stack: 'Technologies', close: 'Close', open: 'Open' },
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-3">
    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-purple">{title}</h3>
    {children}
  </section>
);

const Bullets: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2">
    {items.map(item => (
      <li key={item} className="text-sm text-muted leading-relaxed pl-5 relative before:content-['>'] before:absolute before:left-0 before:text-purple/60">
        {item}
      </li>
    ))}
  </ul>
);

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, language }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const L = LABELS[language];

  useEffect(() => {
    if (!project) return;
    const previous = document.activeElement as HTMLElement | null;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      previous?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] flex items-center justify-center p-3 md:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="bg-bg2 border border-purple/30 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative flex flex-col cursor-auto"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={L.close}
              className="absolute top-3 right-3 z-10 w-10 h-10 bg-black/50 hover:bg-purple text-white flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>

            {project.youtubeId && (
              <div className="w-full aspect-video bg-black border-b border-white/5">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1&color=white`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title={project.name}
                />
              </div>
            )}

            <div className="p-6 md:p-10 space-y-8">
              <header className="space-y-3 pr-10">
                <h2 id="project-modal-title" className="text-2xl md:text-3xl font-bold text-text">{project.name}</h2>
                <div className="flex flex-wrap items-center gap-3">
                  {project.note && (
                    <p className="text-xs font-medium text-purple/70 uppercase tracking-widest">{project.note[language]}</p>
                  )}
                  <StageBadge project={project} language={language} />
                </div>
                <p className="text-sm text-text/90 leading-relaxed">{project.desc[language]}</p>
              </header>

              {project.overview && (
                <Section title={L.overview}>
                  <p className="text-sm text-muted leading-relaxed">{project.overview[language]}</p>
                </Section>
              )}
              {project.role && (
                <Section title={L.role}>
                  <p className="text-sm text-muted leading-relaxed">{project.role[language]}</p>
                </Section>
              )}
              {project.features && (
                <Section title={L.features}><Bullets items={project.features[language]} /></Section>
              )}
              {project.architecture && (
                <Section title={L.architecture}>
                  <p className="text-sm text-muted leading-relaxed">{project.architecture[language]}</p>
                </Section>
              )}
              {project.highlights && (
                <Section title={L.highlights}><Bullets items={project.highlights[language]} /></Section>
              )}

              <Section title={L.stack}>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map(item => (
                    <li key={item} className="text-xs font-medium uppercase tracking-wider text-muted/80 bg-white/5 px-2.5 py-1 rounded-sm border border-white/5">
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              {project.link && (
                <div className="pt-6 border-t border-white/10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-6 py-3 bg-purple text-bg text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all items-center gap-2 group"
                  >
                    {project.linkLabel ? project.linkLabel[language] : L.open}
                    <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
