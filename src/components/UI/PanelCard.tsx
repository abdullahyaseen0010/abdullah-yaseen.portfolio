import type { ReactNode } from 'react'

interface PanelCardProps {
  title?: string
  children: ReactNode
  className?: string
  titleClassName?: string
  contentClassName?: string
}

// A plain bordered panel: solid background, small radius, no blur or shadow.
const PanelCard = ({
  title,
  children,
  className = '',
  titleClassName = '',
  contentClassName = '',
}: PanelCardProps) => {
  return (
    <div className={`border-border bg-secondary rounded-md border p-6 md:p-8 ${className}`}>
      {title ? (
        <h3 className={`text-neutral mb-6 text-2xl ${titleClassName}`}>{title}</h3>
      ) : null}

      <div className={contentClassName}>{children}</div>
    </div>
  )
}

export default PanelCard
