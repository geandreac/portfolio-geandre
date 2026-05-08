import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillTable } from '../ui/SkillTable';
import { skills } from '../../data/skills';

export const Skills: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-24 px-5 md:px-10 lg:px-16 mx-auto max-w-[1100px]">
      <div className="mb-16">
        <SectionHeading id="skills" title={t('skills.title')} />
      </div>
      <SkillTable skills={skills} language={language} />
    </section>
  );
};
