'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NavbarLogo from './NavbarLogo'
import NavbarMenuButton from './NavbarMenuButton'
import NavbarDesktopMenu from './NavbarDesktopMenu'
import NavbarMobileMenu from './NavbarMobileMenu'
import { navLinks, themeConfig, ThemeKey } from './navbarData'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('dark')
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const pathname = usePathname()

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as ThemeKey) || 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
    setCurrentTheme(savedTheme)
  }, [])

  // Watch for theme changes
  useEffect(() => {
    const theme = (document.documentElement.getAttribute('data-theme') as ThemeKey) || 'dark'
    setCurrentTheme(theme)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = (document.documentElement.getAttribute('data-theme') as ThemeKey) || 'dark'
          setCurrentTheme(newTheme)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isThemeMenuOpen) return
      
      const target = event.target as HTMLElement
      const dropdown = target.closest('.theme-dropdown')
      
      if (!dropdown) {
        setIsThemeMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isThemeMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleThemeMenu = () => setIsThemeMenuOpen(!isThemeMenuOpen)

  const changeTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    setIsThemeMenuOpen(false)
    setIsMenuOpen(false)
  }

  const config = themeConfig[currentTheme] || themeConfig.dark

  return (
    <nav className={`border-border fixed top-0 left-0 right-0 z-50 h-16 bg-primary transition-all duration-500 ${config.navStyle}`}>
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 py-1">
        <NavbarLogo isMenuOpen={isMenuOpen} />

        <NavbarMenuButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />

        <NavbarDesktopMenu
          navLinks={navLinks}
          pathname={pathname}
          hoverEffect={config.hoverEffect}
          currentTheme={currentTheme}
          isThemeMenuOpen={isThemeMenuOpen}
          toggleThemeMenu={toggleThemeMenu}
          changeTheme={changeTheme}
        />

        <NavbarMobileMenu
          isMenuOpen={isMenuOpen}
          navLinks={navLinks}
          pathname={pathname}
          hoverEffect={config.hoverEffect}
          currentTheme={currentTheme}
          changeTheme={changeTheme}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </nav>
  )
}

export default Navbar