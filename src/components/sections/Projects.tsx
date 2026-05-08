import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import { completeApps, smallProjects, ProjectItem } from '../../data/projects';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = React.useState<ProjectItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="works" className="py-24 px-5 md:px-10 lg:px-16 mx-auto max-w-[1100px]">
      <div className="mb-16">
        <SectionHeading id="works" title={t('projects.title')} />
        <p className="text-muted text-sm max-w-2xl mt-4 leading-relaxed">
          {t('projects.subtitle')}
        </p>
      </div>

      <div className="space-y-32">
        {/* Complete Apps Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-text whitespace-nowrap">
              <span className="text-purple">#</span>complete-apps
            </h3>
            <div className="h-[1px] flex-1 bg-purple/20 max-w-[300px]" />
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {completeApps.map((project, idx) => (
              <ProjectCard key={idx} {...project} language={language} onClick={() => setSelectedProject(project)} />
            ))}
          </motion.div>
        </div>

        {/* Small Projects Section */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4 flex-1">
              <h3 className="text-2xl font-bold text-text whitespace-nowrap">
                <span className="text-purple">#</span>small-projects
              </h3>
              <div className="h-[1px] flex-1 bg-purple/20 max-w-[200px]" />
            </div>
            <a 
              href="https://github.com/geandreac" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-bold text-muted hover:text-purple transition-all duration-300 uppercase tracking-widest border-b border-transparent hover:border-purple pb-1 ml-4"
            >
              {t('projects.all')} ~~{'>'}
            </a>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {smallProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} language={language} onClick={() => setSelectedProject(project)} />
            ))}
          </motion.div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} language={language} />
    </section>
  );
};
