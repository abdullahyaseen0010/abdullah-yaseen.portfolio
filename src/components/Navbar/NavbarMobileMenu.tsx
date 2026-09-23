import Link from 'next/link'
import NavbarThemeSwitcher from './NavbarThemeSwitcher'

interface NavbarMobileMenuProps {
  isMenuOpen: boolean
  navLinks: Array<{ label: string; href: string }>
  pathname: string
  onNavigate: () => void
}

const NavbarMobileMenu = ({ isMenuOpen, navLinks, pathname, onNavigate }: NavbarMobileMenuProps) => {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!isMenuOpen}
      className={`bg-primary fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto transition-opacity duration-200 md:hidden ${
        isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <ul className="flex flex-col px-4">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href
          return (
            <li key={href} className="border-border border-b">
              <Link
                href={href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={onNavigate}
                aria-current={isActive ? 'page' : undefined}
                className={`font-heading block py-6 text-2xl ${
                  isActive ? 'text-accent font-semibold' : 'text-neutral'
                }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="flex items-center justify-between px-4 py-4">
        <span className="text-primary-content text-lg">Theme</span>
        <NavbarThemeSwitcher />
      </div>
    </div>
  )
}

export default NavbarMobileMenu
