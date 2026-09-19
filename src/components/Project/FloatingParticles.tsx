// components/projects/FloatingParticles.tsx (Client Component)
'use client'

import React, { useState, useEffect } from 'react';

interface Particle {
  id: number;
  size: number;
  left: string;
  delay: number;
  duration: number;
  xOffset: number;
}

interface FloatingParticlesProps {
  count?: number;
}

const FloatingParticles = ({ count = 14 }: FloatingParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
      xOffset: Math.random() * 100 - 50,
    }));

    setParticles(generatedParticles);
  }, [count]);

  return (
    <>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/20 pointer-events-none max-w-[1200px] mx-auto animate-fade-in" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 100%)',
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle-float absolute rounded-full pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            bottom: 0,
            background: 'linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
            boxShadow: '0 0 10px var(--a)',
            ['--particle-x' as string]: `${particle.xOffset}px`,
            ['--particle-duration' as string]: `${particle.duration}s`,
            ['--particle-delay' as string]: `${particle.delay}s`,
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;
