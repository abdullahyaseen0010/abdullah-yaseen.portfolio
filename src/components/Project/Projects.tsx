// components/sections/Projects.tsx (Server Component)
import React from 'react';
import ProjectsGrid from './ProjectsGrid';
import SectionHeader from './SectionHeader';
import FloatingParticles from './FloatingParticles';
import { projects } from './projectss';

const Projects = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader 
        iconName="Code2"
        label="Portfolio"
        title="Projects"
        description="Building solutions that matter"
      />
      
      <ProjectsGrid projects={projects} />
      
      <FloatingParticles count={5} />
    </section>
  );
};

export default Projects;