// components/projects/ProjectsGrid.tsx (Client Component)
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './project';
import ProjectCard from './ProjectCard';

interface ProjectsGridProps {
  projects: Project[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={hoveredId === project.id}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsGrid;