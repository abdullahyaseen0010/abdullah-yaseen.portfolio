'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { themeConfig } from './navbarData'

interface NavbarThemeSwitcherProps {
  currentTheme: string
  isThemeMenuOpen: boolean
  toggleThemeMenu: () => void
  changeTheme: (theme: string) => void
  hoverEffect: string
}

const NavbarThemeSwitcher = ({
  currentTheme,
  isThemeMenuOpen,
  toggleThemeMenu,
  changeTheme,
  hoverEffect,
}: NavbarThemeSwitcherProps) => {
  return (
    <li className="relative ml-auto theme-dropdown">
      <button
        onClick={toggleThemeMenu}
        className={`text-primary-content flex items-center gap-2 rounded-md px-4 py-2 transition-all duration-150 ${hoverEffect}`}
      >
        <span>{themeConfig[currentTheme as keyof typeof themeConfig]?.name || '🌙 Dark'}</span>
        <motion.span
          animate={{ rotate: isThemeMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xs"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {isThemeMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="border-border bg-secondary absolute right-0 top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-lg border shadow-xl"
          >
            {Object.entries(themeConfig).map(([key, value]) => (
              <button
                key={key}
                onClick={() => changeTheme(key)}
                className={`text-primary-content block w-full px-4 py-3 text-left transition-all duration-150 ${hoverEffect} ${
                  currentTheme === key ? 'bg-accent/20 font-semibold' : ''
                }`}
              >
                {value.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default NavbarThemeSwitcher