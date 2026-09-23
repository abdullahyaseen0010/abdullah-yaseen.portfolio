'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import NavbarLogo from './NavbarLogo'
import NavbarMenuButton from './NavbarMenuButton'
import NavbarDesktopMenu from './NavbarDesktopMenu'
import NavbarThemeSwitcher from './NavbarThemeSwitcher'
import NavbarMobileMenu from './NavbarMobileMenu'
import { navLinks } from './navbarData'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Slightly compact the bar after the page has scrolled a little,
  // rather than on the very first pixel (avoids jitter at the top).
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Close the mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav
      className={`bg-primary border-border fixed inset-x-0 top-0 z-50 border-b transition-[height] duration-200 ${
        isScrolled ? 'h-14' : 'h-16'
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-6 px-4 lg:px-12">
        <NavbarLogo onNavigate={closeMenu} />

        <div className="hidden items-center gap-8 md:flex">
          <NavbarDesktopMenu navLinks={navLinks} pathname={pathname} />
          <NavbarThemeSwitcher />
        </div>

        <NavbarMenuButton isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} />
      </div>

      <NavbarMobileMenu
        isMenuOpen={isMenuOpen}
        navLinks={navLinks}
        pathname={pathname}
        onNavigate={closeMenu}
      />
    </nav>
  )
}

export default Navbar
