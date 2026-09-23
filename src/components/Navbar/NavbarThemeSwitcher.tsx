'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

interface NavbarThemeSwitcherProps {
  className?: string
}

// A light/dark toggle switch. The thumb position and icon come from CSS
// (data-theme on <html>), so there is no flash on load. The state below
// only keeps aria-checked accurate for screen readers.
const NavbarThemeSwitcher = ({ className = '' }: NavbarThemeSwitcherProps) => {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    setIsLight(document.documentElement.getAttribute('data-theme') === 'light')
  }, [])

  const toggle = () => {
    const root = document.documentElement
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    root.setAttribute('data-theme', next)
    setIsLight(next === 'light')
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked; the theme still changes for this visit.
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Light theme"
      onClick={toggle}
      className={`flex h-11 items-center ${className}`}
    >
      <span className="border-border bg-secondary relative block h-6 w-11 rounded-full border">
        <span className="bg-accent text-primary absolute top-0.5 left-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full transition-transform duration-200 [[data-theme=light]_&]:translate-x-5">
          <Moon className="h-3 w-3 [[data-theme=light]_&]:hidden" aria-hidden="true" />
          <Sun className="hidden h-3 w-3 [[data-theme=light]_&]:block" aria-hidden="true" />
        </span>
      </span>
    </button>
  )
}

export default NavbarThemeSwitcher
