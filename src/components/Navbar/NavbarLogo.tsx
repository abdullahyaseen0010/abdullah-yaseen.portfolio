'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from './Logo'

interface NavbarLogoProps {
  isMenuOpen: boolean
}

const NavbarLogo = ({ isMenuOpen }: NavbarLogoProps) => {
  if (isMenuOpen) {
    return <div className="text-primary-content md:hidden">Menu</div>
  }

  return (
    <Link href="/">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-primary-content relative flex items-center gap-3 transition-all duration-300 md:static"
      >
        <Logo />
        <span className="text-primary-content font-semibold">Abdullah Yaseen</span>
      </motion.div>
    </Link>
  )
}

export default NavbarLogo