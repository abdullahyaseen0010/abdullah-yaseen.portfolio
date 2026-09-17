// components/projects/ProjectCard.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { Project } from './project';
import FeaturedBadge from './FeaturedBadge';
import TechStack from './TechStack';
import ProjectLinks from './ProjectLinks';

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const ProjectCard = ({ project, isHovered, onHoverStart, onHoverEnd }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="relative group cursor-pointer"
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="h-full rounded-xl p-6 relative overflow-hidden"
        style={{ 
          backgroundColor: 'var(--color-secondary)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'var(--color-border)'
        }}
      >
        {/* Animated gradient background overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))'
          }}
        />

        {/* Glow effect on hover */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0.8,
            opacity: isHovered ? 0.2 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-xl blur-xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, var(--a), transparent 70%)'
          }}
        />

        <FeaturedBadge featured={project.featured} />

        {/* Project Icon with accent glow */}
        <div className="mb-4 relative z-10">
          <motion.div
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 rounded-lg flex items-center justify-center relative"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--color-border)'
            }}
          >
            {/* Icon glow effect */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.3, 0.6, 0.3] : 0,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-lg blur-md"
              style={{ backgroundColor: 'var(--a)' }}
            />
            <Code2 className="w-6 h-6 relative z-10" style={{ color: 'var(--a)' }} />
          </motion.div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold mb-2 relative z-10" style={{ color: 'var(--color-neutral)' }}>
          {project.title}
        </h3>
        
        <p className="text-sm mb-4 line-clamp-2 relative z-10" style={{ color: 'var(--color-tertiary-content)' }}>
          {project.description}
        </p>

        <div className="relative z-10">
          <TechStack tech={project.tech} />
        </div>
        
        <div className="relative z-10">
          <ProjectLinks github={project.github} demo={project.demo} />
        </div>

        {/* Animated border glow on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, var(--a) 0%, transparent 50%, var(--a) 100%)`,
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;