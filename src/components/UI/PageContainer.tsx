import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return <div className={`mx-auto w-full max-w-6xl px-4 lg:px-12 ${className}`}>{children}</div>
}

export default PageContainer
