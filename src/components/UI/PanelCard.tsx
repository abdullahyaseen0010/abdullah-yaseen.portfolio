import type { ReactNode } from 'react'

interface PanelCardProps {
  title?: string
  children: ReactNode
  className?: string
  titleClassName?: string
  contentClassName?: string
}

const PanelCard = ({
  title,
  children,
  className = '',
  titleClassName = '',
  contentClassName = '',
}: PanelCardProps) => {
  return (
    <div
      className={`rounded-xl border border-border bg-secondary/50 p-8 backdrop-blur-sm ${className}`}
    >
      {title ? (
        <h3
          className={`mb-6 text-2xl font-bold ${titleClassName}`}
          style={{ color: 'var(--color-neutral)' }}
        >
          {title}
        </h3>
      ) : null}

      <div className={contentClassName}>{children}</div>
    </div>
  )
}

export default PanelCard
