import Link from 'next/link'

interface NavbarDesktopMenuProps {
  navLinks: Array<{ label: string; href: string }>
  pathname: string
}

const NavbarDesktopMenu = ({ navLinks, pathname }: NavbarDesktopMenuProps) => {
  return (
    <ul className="hidden items-center gap-8 md:flex">
      {navLinks.map(({ label, href }) => {
        const isActive = pathname === href
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={`py-2 text-sm transition-colors ${
                isActive
                  ? 'text-neutral decoration-accent underline decoration-2 underline-offset-8'
                  : 'text-primary-content hover:text-neutral'
              }`}
            >
              {label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarDesktopMenu
