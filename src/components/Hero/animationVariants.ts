import { Variants } from 'framer-motion'

// Reusable animation variants for all components
export const menuVariants = {
  closed: {
    opacity: 0,
    x: '-100%',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const

export const itemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
} as const

export const hamburgerTopVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 6 },
}

export const hamburgerMiddleVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
}

export const hamburgerBottomVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -6 },
}