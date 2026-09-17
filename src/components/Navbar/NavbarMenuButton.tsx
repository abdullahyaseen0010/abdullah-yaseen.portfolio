'use client'

import { motion } from 'framer-motion'
import { hamburgerTopVariants, hamburgerMiddleVariants, hamburgerBottomVariants } from './animationVariants'

interface NavbarMenuButtonProps {
  isMenuOpen: boolean
  onClick: () => void
}

const NavbarMenuButton = ({ isMenuOpen, onClick }: NavbarMenuButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative z-50 flex h-6 w-6 flex-col justify-center md:hidden"
      animate={isMenuOpen ? 'open' : 'closed'}
    >
      <motion.span
        variants={hamburgerTopVariants}
        className="bg-primary-content mb-1.5 h-0.5 w-full origin-center"
      />
      <motion.span
        variants={hamburgerMiddleVariants}
        className="bg-primary-content mb-1.5 h-0.5 w-full"
      />
      <motion.span
        variants={hamburgerBottomVariants}
        className="bg-primary-content h-0.5 w-full origin-center"
      />
    </motion.button>
  )
}

export default NavbarMenuButton