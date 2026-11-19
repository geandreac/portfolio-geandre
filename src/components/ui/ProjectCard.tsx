import React from 'react';
import { motion } from 'framer-motion';

import { ProjectItem, stageLabels } from '../../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  language: 'pt' | 'en';
  onOpen: () => void;
}

export const StageBadge: React.FC<{ project: ProjectItem; language: 'pt' | 'en' }> = ({ project, language }) =>
  project.status === 'live' ? (
    <span className="inline-flex items-center gap-2 px-2 py-1 bg-green-500/5 rounded-full border border-green-500/10 text-xs font-medium uppercase tracking-tighter text-green-500/80">
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" aria-hidden="true" />
      Online
    </span>
  ) : (
    <span className="inline-flex items-center px-2 py-1 rounded-full border border-white/10 text-xs font-medium uppercase tracking-tighter text-muted">
      {stageLabels[project.stage][language]}
    </span>
  );

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, language, onOpen }) => {
  const { name, stack, desc, note, link, linkLabel } = project;
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
      }}
      onClick={onOpen}
      className="group bg-bg2/40 backdrop-blur-sm border border-white/5 p-6 md:p-8 flex flex-col gap-6 hover:border-purple/40 transition-all duration-500 h-full relative cursor-pointer"
    >
      <div className="absolute top-0 left-0 w-[2px] h-0 group-hover:h-full bg-purple transition-all duration-500" aria-hidden="true" />

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

        <p className="text-sm text-muted leading-relaxed">
          {desc[language]}
        </p>
      </div>

      <div className="space-y-6">
        <ul className="flex flex-wrap gap-2" aria-label="Stack">
          {stack.map(item => (
            <li key={item} className="text-xs font-medium uppercase tracking-wider text-muted/80 bg-white/5 px-2.5 py-1 rounded-sm border border-white/5">
              {item}
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onOpen(); }}
              aria-haspopup="dialog"
              className="text-xs font-bold text-purple hover:brightness-125 transition-all"
            >
              {language === 'pt' ? 'Detalhes' : 'Details'} +
            </button>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-text hover:text-purple transition-all duration-300"
              >
                {linkLabel ? linkLabel[language] : 'Live <~>'}
              </a>
            ) : (
              <span className="text-xs font-medium text-muted/60">
                {linkLabel?.[language] ?? (language === 'pt' ? 'Privado >=' : 'Private >=')}
              </span>
            )}
          </div>
          <StageBadge project={project} language={language} />
        </div>
      </div>
    </motion.article>
  );
};
