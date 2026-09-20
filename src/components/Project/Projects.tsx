// components/sections/Projects.tsx (Server Component)
import React from 'react';
import ProjectsGrid from './ProjectsGrid';
import SectionHeader from './SectionHeader';
import { projects } from './projectss';
import ServicesBackground from '../Services/ServicesBackground';

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <SectionHeader 
        iconName="Code2"
        label="Portfolio"
        title="Projects"
        description="Building solutions that matter"
      />
      
      <ProjectsGrid projects={projects} />

      <ServicesBackground />
      
    </section>
  );
};

export default Projects;
