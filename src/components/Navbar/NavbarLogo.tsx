import Link from 'next/link'
import Logo from './Logo'

interface NavbarLogoProps {
  onNavigate?: () => void
}

const NavbarLogo = ({ onNavigate }: NavbarLogoProps) => {
  return (
    <Link href="/" onClick={onNavigate} className="text-neutral flex items-center gap-2.5 py-2">
      <Logo className="text-accent" />
      <span className="font-heading text-base font-semibold tracking-tight">Abdullah Yaseen</span>
    </Link>
  )
}

export default NavbarLogo
