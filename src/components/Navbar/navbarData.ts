// Server-safe data for Navbar
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export const themeConfig = {
  light: {
    name: '☀️ Light',
    navStyle: 'border-b-2 border-indigo-200',
    hoverEffect: 'hover:text-indigo-600 hover:bg-indigo-50',
  },
  dark: {
    name: '🌙 Dark',
    navStyle: 'border-b-2 border-cyan-500/30',
    hoverEffect: 'hover:text-cyan-400 hover:bg-slate-800/50',
  },
  ocean: {
    name: '🌊 Ocean',
    navStyle: 'border-b-2 border-cyan-400/40 shadow-lg shadow-cyan-500/20',
    hoverEffect: 'hover:text-cyan-300 hover:bg-blue-900/30',
  },
  sunset: {
    name: '🌅 Sunset',
    navStyle: 'border-b-2 border-pink-400/40 shadow-lg shadow-pink-500/20',
    hoverEffect: 'hover:text-orange-300 hover:bg-purple-900/30',
  },
  forest: {
    name: '🌲 Forest',
    navStyle: 'border-b-2 border-green-500/40 shadow-lg shadow-green-500/20',
    hoverEffect: 'hover:text-green-300 hover:bg-green-900/30',
  },
  cyberpunk: {
    name: '🤖 Cyber',
    navStyle: 'border-b-2 border-[#00ffff]/30 shadow-lg shadow-[#00ffff]/20 bg-gradient-to-r from-[#0d0221] via-[#1a0933] to-[#0d0221]',
    hoverEffect: 'hover:text-[#00ff41] hover:bg-[#1a0933]/60',
  },
}

export type ThemeKey = keyof typeof themeConfig