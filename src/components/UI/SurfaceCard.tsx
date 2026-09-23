import type { ReactNode } from 'react'

interface SurfaceCardProps {
  children: ReactNode
  className?: string
}

const SurfaceCard = ({ children, className = '' }: SurfaceCardProps) => {
  return <div className={`border-border bg-secondary rounded-lg border ${className}`}>{children}</div>
}

export default SurfaceCard
