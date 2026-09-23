import type { ReactNode } from 'react'

interface PageShellProps {
  children: ReactNode
  className?: string
}

const PageShell = ({ children, className = '' }: PageShellProps) => {
  return <main className={`bg-primary text-neutral min-h-screen ${className}`}>{children}</main>
}

export default PageShell
