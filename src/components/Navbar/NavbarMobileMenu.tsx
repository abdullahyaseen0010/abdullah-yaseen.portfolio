'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { themeConfig } from './navbarData'
import { menuVariants, itemVariants } from './animationVariants'

interface NavbarMobileMenuProps {
  isMenuOpen: boolean
  navLinks: Array<{ label: string; href: string }>
  pathname: string
  hoverEffect: string
  currentTheme: string
  changeTheme: (theme: string) => void
  setIsMenuOpen: (value: boolean) => void
}

const NavbarMobileMenu = ({
  isMenuOpen,
  navLinks,
  pathname,
  hoverEffect,
  currentTheme,
  changeTheme,
  setIsMenuOpen,
}: NavbarMobileMenuProps) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.ul
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="absolute left-0 top-16 z-40 flex h-[calc(100vh-4rem)] w-full flex-col overflow-y-auto bg-primary md:hidden"
        >
          {navLinks.map(({ label, href }) => (
            <motion.li
              key={href}
              variants={itemVariants}
              onClick={() => setIsMenuOpen(false)}
              className="border-border flex items-center border-b px-4 text-2xl"
            >
              <Link
                href={href}
                className={`text-primary-content w-full py-7 transition-all duration-150 ${hoverEffect} ${
                  pathname === href ? 'text-accent cursor-text font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            </motion.li>
          ))}

          <motion.li variants={itemVariants} className="border-border border-b px-4 py-4">
            <div className="text-primary-content mb-3 text-sm font-semibold opacity-60">
              Choose Theme
            </div>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(themeConfig).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => changeTheme(key)}
                  className={`border-border rounded-md border px-3 py-2 text-sm transition-all duration-150 ${hoverEffect} ${
                    currentTheme === key
                      ? 'bg-accent text-white font-semibold'
                      : 'text-primary-content'
                  }`}
                >
                  {value.name}
                </button>
              ))}
            </div>
          </motion.li>
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default NavbarMobileMenu