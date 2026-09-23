'use client'

interface NavbarMenuButtonProps {
  isMenuOpen: boolean
  onClick: () => void
}

const NavbarMenuButton = ({ isMenuOpen, onClick }: NavbarMenuButtonProps) => {
  const bar = 'bg-neutral block h-0.5 w-5 transition-transform duration-200'

  return (
    <button
      type="button"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center md:hidden"
    >
      <span className="flex flex-col gap-1.5">
        <span className={`${bar} ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`${bar} ${isMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`${bar} ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
      </span>
    </button>
  )
}

export default NavbarMenuButton
