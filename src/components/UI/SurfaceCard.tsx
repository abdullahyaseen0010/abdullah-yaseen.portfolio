import type { ReactNode } from 'react'

interface SurfaceCardProps {
  children: ReactNode
  className?: string
}

const SurfaceCard = ({ children, className = '' }: SurfaceCardProps) => {
  return (
    <div className={`rounded-3xl border border-border bg-secondary/30 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  )
}

export default SurfaceCard
