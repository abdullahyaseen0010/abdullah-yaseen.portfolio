// components/projects/ProjectLinks.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectLinksProps {
  github?: string;
  demo?: string;
}

const ProjectLinks = ({ github, demo }: ProjectLinksProps) => {
  if (!github && !demo) return null;

  return (
    <div 
      className="flex gap-3 pt-3" 
      style={{ 
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'var(--color-border)'
      }}
    >
      {github && (
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="transition-colors"
          style={{ color: 'var(--color-tertiary-content)' }}
          aria-label="View on GitHub"
        >
          <Github className="w-4 h-4" />
        </motion.a>
      )}
      {demo && (
        <motion.a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="transition-colors"
          style={{ color: 'var(--color-tertiary-content)' }}
          aria-label="View live demo"
        >
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      )}
    </div>
  );
};

export default ProjectLinks;