'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Generate particles only on client side
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
      xOffset: Math.random() * 100 - 50,
    }))
    
    setParticles(generatedParticles)
    setMounted(true)
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/20"
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -100],
            x: particle.xOffset,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          className="bg-accent absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            bottom: 0,
          }}
        />
      ))}
    </>
  )
}

export default HeroBackground