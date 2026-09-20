import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default PageContainer
