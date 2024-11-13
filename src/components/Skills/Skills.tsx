import React from 'react';
import { SkillCard } from './SkillCard';
import { PhoneIcon, AIIcon, ArchitectureIcon } from '../Icons';

const skillsData = [
  {
    title: 'iOS Development',
    description: 'Native applications and custom frameworks',
    icon: PhoneIcon
  },
  {
    title: 'AI Integration',
    description: 'Machine learning and smart automation',
    icon: AIIcon
  },
  {
    title: 'Architecture Design',
    description: 'Scalable systems and optimized databases',
    icon: ArchitectureIcon
  }
];

export const Skills = () => {
  return (
    <section className="skills-section">
      <div className="glass-panel">
        <h2 className="heading-primary">Core Specialties</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};