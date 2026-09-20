import Link from 'next/link'

interface NavbarDesktopMenuProps {
  navLinks: Array<{ label: string; href: string }>
  pathname: string
  hoverEffect: string
}

const NavbarDesktopMenu = ({ navLinks, pathname, hoverEffect }: NavbarDesktopMenuProps) => {
  return (
    <ul className="hidden h-full w-[72%] flex-row items-center md:flex lg:w-[70%]">
      {navLinks.map(({ label, href }) => (
        <li
          key={href}
          className="border-border flex items-center border-e px-4 text-base first:border-s lg:px-8"
        >
          <Link
            href={href}
            aria-current={pathname === href ? 'page' : undefined}
            className={`text-primary-content w-full cursor-pointer transition-all duration-150 ${hoverEffect} ${
              pathname === href ? 'text-accent font-semibold' : ''
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavbarDesktopMenu