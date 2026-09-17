// components/projects/FeaturedBadge.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface FeaturedBadgeProps {
  featured?: boolean;
}

const FeaturedBadge = ({ featured }: FeaturedBadgeProps) => {
  if (!featured) return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute -top-2 -right-2 z-10"
    >
      <div 
        className="text-xs px-2 py-1 mt-3 mr-3 rounded-full flex items-center gap-1" 
        style={{
          background: 'linear-gradient(to right, var(--gradient-start), var(--gradient-end))',
          color: 'var(--color-primary)'
        }}
      >
        <Sparkles className="w-3 h-3" />
        <span>Featured</span>
      </div>
    </motion.div>
  );
};

export default FeaturedBadge;