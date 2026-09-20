import type { ReactNode } from 'react'

interface PageShellProps {
  children: ReactNode
  className?: string
}

const PageShell = ({ children, className = '' }: PageShellProps) => {
  return <main className={`min-h-screen bg-primary text-primary-content ${className}`}>{children}</main>
}

export default PageShell
