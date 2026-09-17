import Link from 'next/link'
import NavbarThemeSwitcher from './NavbarThemeSwitcher'

interface NavbarDesktopMenuProps {
  navLinks: Array<{ label: string; href: string }>
  pathname: string
  hoverEffect: string
  currentTheme: string
  isThemeMenuOpen: boolean
  toggleThemeMenu: () => void
  changeTheme: (theme: string) => void
}

const NavbarDesktopMenu = ({
  navLinks,
  pathname,
  hoverEffect,
  currentTheme,
  isThemeMenuOpen,
  toggleThemeMenu,
  changeTheme,
}: NavbarDesktopMenuProps) => {
  return (
    <ul className="hidden h-full w-[72%] flex-row items-center md:flex lg:w-[70%]">
      {navLinks.map(({ label, href }) => (
        <li
          key={href}
          className="border-border flex items-center border-e px-4 text-base first:border-s lg:px-8"
        >
          <Link
            href={href}
            className={`text-primary-content w-full transition-all duration-150 ${hoverEffect} ${
              pathname === href ? 'text-accent cursor-text font-semibold' : ''
            }`}
          >
            {label}
          </Link>
        </li>
      ))}

      <NavbarThemeSwitcher
        currentTheme={currentTheme}
        isThemeMenuOpen={isThemeMenuOpen}
        toggleThemeMenu={toggleThemeMenu}
        changeTheme={changeTheme}
        hoverEffect={hoverEffect}
      />
    </ul>
  )
}

export default NavbarDesktopMenu