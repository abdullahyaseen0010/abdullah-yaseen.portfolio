'use client'

import { useState, useEffect } from 'react'

interface Particle {
  id: number
  size: number
  left: string
  delay: number
  duration: number
  xOffset: number
}

const HeroBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
      xOffset: Math.random() * 100 - 50,
    }))

    setParticles(generatedParticles)
  }, [])

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/20 animate-fade-in" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="bg-accent particle-float absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            bottom: 0,
            ['--particle-x' as string]: `${particle.xOffset}px`,
            ['--particle-duration' as string]: `${particle.duration}s`,
            ['--particle-delay' as string]: `${particle.delay}s`,
          }}
        />
      ))}
    </>
  )
}

export default HeroBackground
