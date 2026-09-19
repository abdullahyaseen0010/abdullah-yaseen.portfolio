'use client'

import { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface MarqueeItem {
  name: string
  icon: LucideIcon
}

interface MarqueeProps {
  items: MarqueeItem[]
  speed?: number
  direction?: 'left' | 'right'
}

const Marquee = ({
  items,
  speed = 40,
  direction = 'left',
}: MarqueeProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const xPos = useRef(0)

  useAnimationFrame((_, delta) => {
    if (!contentRef.current) return

    const velocity = direction === 'left' ? -speed : speed
    xPos.current += (velocity * delta) / 1000

    const contentWidth = contentRef.current.offsetWidth / 2

    if (direction === 'left' && xPos.current <= -contentWidth) {
      xPos.current = 0
    } else if (direction === 'right' && xPos.current >= 0) {
      xPos.current = -contentWidth
    }

    contentRef.current.style.transform = `translateX(${xPos.current}px)`
  })

  return (
    <div className="relative overflow-hidden">
      <div ref={contentRef} className="flex w-max">
        {/* Original content */}
        <div className="flex shrink-0 items-center gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={`${item.name}-${index}`}
                className="border-border bg-secondary/50 flex items-center gap-3 rounded-xl border px-6 py-3 backdrop-blur-sm transition-all hover:bg-secondary lg:px-8 lg:py-4"
              >
                <Icon className="text-accent h-5 w-5 lg:h-6 lg:w-6" />
                <span className="text-primary-content whitespace-nowrap text-sm font-medium lg:text-base">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 items-center gap-6 lg:gap-8" aria-hidden="true">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={`${item.name}-duplicate-${index}`}
                className="border-border bg-secondary/50 flex items-center gap-3 rounded-xl border px-6 py-3 backdrop-blur-sm transition-all hover:bg-secondary lg:px-8 lg:py-4"
              >
                <Icon className="text-accent h-5 w-5 lg:h-6 lg:w-6" />
                <span className="text-primary-content whitespace-nowrap text-sm font-medium lg:text-base">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Marquee
