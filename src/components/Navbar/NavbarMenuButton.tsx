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
      type="button"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className="relative z-[80] flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-secondary/50 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-200 hover:bg-secondary md:hidden"
      animate={isMenuOpen ? 'open' : 'closed'}
    >
      <span className="flex h-5 w-5 flex-col justify-center gap-1.5">
        <motion.span
          variants={hamburgerTopVariants}
          className="h-0.5 w-full origin-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
        <motion.span
          variants={hamburgerMiddleVariants}
          className="h-0.5 w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
        <motion.span
          variants={hamburgerBottomVariants}
          className="h-0.5 w-full origin-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </span>
    </motion.button>
  )
}

export default NavbarMenuButton