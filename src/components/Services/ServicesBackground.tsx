// app/components/services/ServicesBackground.tsx (Client Component)
'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { particleConfig } from './servicesData';

interface Particle {
  id: number;
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  xOffset: number;
  yOffset: number;
}

const ServicesBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generatedParticles = Array.from({ length: particleConfig.count }, (_, i) => ({
      id: i,
      size: Math.random() * (particleConfig.sizeRange.max - particleConfig.sizeRange.min) + particleConfig.sizeRange.min,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: particleConfig.durationRange.min + Math.random() * (particleConfig.durationRange.max - particleConfig.durationRange.min),
      xOffset: Math.random() * (particleConfig.offsetRange.max - particleConfig.offsetRange.min) + particleConfig.offsetRange.min,
      yOffset: Math.random() * (particleConfig.offsetRange.max - particleConfig.offsetRange.min) + particleConfig.offsetRange.min,
    }));
    
    setParticles(generatedParticles);
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Diagonal grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 50%, transparent 100%)',
        }}
      />
      
      {/* Floating particles with circular motion */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            x: [0, particle.xOffset, 0],
            y: [0, particle.yOffset, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 15px var(--gradient-start)',
          }}
        />
      ))}
    </div>
  );
};

export default ServicesBackground;