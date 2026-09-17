import { Variants } from 'framer-motion'

// Server-safe data for Hero section
export const roles = ['FULLSTACK DEVELOPER', 'INDIE HACKER', 'SOLOPRENEUR']

// Animation variants (can be imported by client components)
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const roleVariants: Variants = {
  enter: {
    y: 20,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
}

export const floatingIconsData = [
  { delay: 0, position: { top: '10%', left: '15%' } },
  { delay: 0.5, position: { top: '60%', left: '10%' } },
  { delay: 1, position: { top: '30%', right: '15%' } },
  { delay: 1.5, position: { top: '70%', right: '20%' } },
]