'use client'

import { useState, useEffect } from 'react'
import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'
import HeroBackground from './HeroBackground'
import { roles, containerVariants, itemVariants, roleVariants } from './heroData'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-primary relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-4 pt-22 pb-10 md:grid-cols-2 lg:gap-12 lg:p-12">
        <HeroContent
          currentRole={currentRole}
          roles={roles}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          roleVariants={roleVariants}
        />

        <HeroVisual />
      </div>
    </section>
  )
}

export default Hero