import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import { projects, categories, ProjectItem, ProjectCategory } from '../../data/projects';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = React.useState<ProjectItem | null>(null);
  const [filter, setFilter] = React.useState<ProjectCategory | 'all'>('all');

  const featured = projects.filter(p => p.featured);
  const visible = filter === 'all' ? projects.filter(p => !p.featured) : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const grid = (items: ProjectItem[], key: string) => (
    <motion.div
      key={key}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {items.map(project => (
        <ProjectCard key={project.name} project={project} language={language} onOpen={() => setSelectedProject(project)} />
      ))}
    </motion.div>
  );

  return (
    <section id="works" className="py-24 px-5 md:px-10 lg:px-16 mx-auto max-w-[1100px]">
      <div className="mb-16">
        <SectionHeading id="works" title={t('projects.title')} />
        <p className="text-muted text-sm max-w-2xl mt-4 leading-relaxed">
          {t('projects.subtitle')}
        </p>
      </div>

      <div className="space-y-24">
        {filter === 'all' && (
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-bold text-text whitespace-nowrap">
                <span className="text-purple">#</span>{t('projects.featured')}
              </h3>
              <div className="h-[1px] flex-1 bg-purple/20 max-w-[300px]" />
            </div>
            {grid(featured, 'featured')}
          </div>
        )}

        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-text whitespace-nowrap">
                <span className="text-purple">#</span>{filter === 'all' ? t('projects.more') : t('projects.category')}
              </h3>
              <div className="h-[1px] flex-1 bg-purple/20 max-w-[200px]" />
            </div>
            <a
              href="https://github.com/geandreac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-muted hover:text-purple transition-all duration-300 uppercase tracking-widest border-b border-transparent hover:border-purple pb-1"
            >
              {t('projects.all')} ~~{'>'}
            </a>
          </div>

          <div role="group" aria-label={t('projects.filter')} className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => {
              const active = filter === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(c.id)}
                  className={`text-xs font-medium px-3 py-2 min-h-[36px] border transition-colors duration-300 ${
                    active ? 'border-purple bg-purple/10 text-purple' : 'border-white/10 text-muted hover:text-text hover:border-white/30'
                  }`}
                >
                  {c.label[language]}
                </button>
              );
            })}
          </div>

          {grid(visible, filter)}
        </div>

        <div className="border border-purple/30 bg-bg2/40 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-base md:text-lg font-bold text-text max-w-xl">{t('projects.cta.text')}</p>
          <a
            href="#contacts"
            className="shrink-0 text-center px-8 py-3 bg-purple text-bg font-bold uppercase tracking-widest hover:brightness-110 transition-all duration-300 text-xs"
          >
            {t('projects.cta.button')}
          </a>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} language={language} />
    </section>
  );
};
