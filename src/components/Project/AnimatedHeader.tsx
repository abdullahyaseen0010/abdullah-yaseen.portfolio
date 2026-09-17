// components/projects/AnimatedHeader.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeaderProps {
  iconName: string;
  label: string;
  title: string;
  description: string;
}

const AnimatedHeader = ({title, description }: AnimatedHeaderProps) => {
  // Dynamically get the icon component from lucide-react
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      
      
      <h2 
        className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))'
        }}
      >
        {title}
      </h2>
      
      <p 
        className="max-w-2xl mx-auto mb-8" 
        style={{ color: 'var(--color-tertiary-content)' }}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default AnimatedHeader;