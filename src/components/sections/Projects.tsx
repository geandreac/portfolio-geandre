import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { completeApps, smallProjects } from '../../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="works" className="py-20 px-6 lg:px-12 mx-auto max-w-[960px]">
      <div className="flex items-center justify-between mb-8">
        <SectionHeading id="projects" className="mb-0 flex-1" />
        <a href="https://github.com/geandreac" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-purple text-xs flex items-center gap-2 transition-colors">
          Ver todos ~~&gt;
        </a>
      </div>
      
      <p className="text-xs text-muted mt-[-2rem] mb-10">
        Soluções desenvolvidas com foco em performance, segurança e escalabilidade.
      </p>

      <div className="mb-12">
        <h3 className="text-[13px] text-text mb-4">
          <span className="text-purple">#</span>complete-apps
        </h3>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border"
        >
          {completeApps.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </motion.div>
      </div>

      <div>
        <h3 className="text-[13px] text-text mb-4">
          <span className="text-purple">#</span>small-projects
        </h3>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border"
        >
          {smallProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
