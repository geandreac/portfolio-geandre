import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillTable } from '../ui/SkillTable';
import { skills } from '../../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12 mx-auto max-w-[960px]">
      <SectionHeading id="skills" />
      <SkillTable skills={skills} />
    </section>
  );
};
