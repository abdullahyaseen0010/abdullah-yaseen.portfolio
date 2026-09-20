'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { themeConfig } from './navbarData'
import { itemVariants, menuVariants } from './animationVariants'

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
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-sm md:hidden"
          aria-modal="true"
          role="dialog"
        >
          <motion.ul
            className="flex h-full w-full flex-col overflow-y-auto pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map(({ label, href }) => (
              <motion.li
                key={href}
                variants={itemVariants}
                onClick={() => setIsMenuOpen(false)}
                className="border-border flex cursor-pointer items-center border-b px-4 text-2xl"
              >
                <Link
                  href={href}
                  aria-current={pathname === href ? 'page' : undefined}
                  className={`text-primary-content w-full cursor-pointer py-7 transition-all duration-150 ${hoverEffect} ${
                    pathname === href ? 'text-accent font-semibold' : ''
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
                    type="button"
                    onClick={() => changeTheme(key)}
                    className={`border-border cursor-pointer rounded-md border px-3 py-2 text-sm transition-all duration-150 ${hoverEffect} ${
                      currentTheme === key ? 'bg-accent text-white font-semibold' : 'text-primary-content'
                    }`}
                  >
                    {value.name}
                  </button>
                ))}
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NavbarMobileMenu