'use client'

import { motion, useReducedMotion } from 'framer-motion'

/*
  A 3x3 block of eight-pointed-star tiles, the kind of geometry found in
  tilework across Bahawalpur and Multan. Each star is two overlapping squares.
  It draws in once on load (the page's single animated moment), then stays still.
  The centre tile is the accent; everything else is quiet.
*/

const TILE = 100
const CENTER = TILE / 2
const RADIUS = 36
const HALF = RADIUS / Math.SQRT2

const f = (n: number) => n.toFixed(2)

const square = `M${f(CENTER - HALF)} ${f(CENTER - HALF)}H${f(CENTER + HALF)}V${f(CENTER + HALF)}H${f(CENTER - HALF)}Z`
const diamond = `M${CENTER} ${CENTER - RADIUS}L${CENTER + RADIUS} ${CENTER}L${CENTER} ${CENTER + RADIUS}L${CENTER - RADIUS} ${CENTER}Z`

const tiles = Array.from({ length: 9 }, (_, i) => ({
  i,
  x: (i % 3) * TILE,
  y: Math.floor(i / 3) * TILE,
  isCenter: i === 4,
  shaded: (Math.floor(i / 3) + (i % 3)) % 2 === 0,
}))

const HeroVisual = () => {
  const reduceMotion = useReducedMotion()

  const draw = (delay: number) => ({
    initial: reduceMotion ? false : { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <div className="hidden justify-self-end md:block">
      <svg
        viewBox="-4 -4 308 308"
        aria-hidden="true"
        focusable="false"
        className="w-full max-w-[420px]"
      >
        {tiles.map(({ i, x, y, isCenter, shaded }) => {
          // Centre tile draws last so the eye lands on it.
          const delay = isCenter ? 1.3 : 0.15 + i * 0.1
          const strokeClass = isCenter ? 'stroke-accent' : 'stroke-primary-content'
          const strokeWidth = isCenter ? 2.5 : 1.25

          return (
            <g key={i} transform={`translate(${x} ${y})`}>
              <rect
                width={TILE}
                height={TILE}
                strokeWidth={1}
                className={`stroke-border ${shaded ? 'fill-secondary' : 'fill-none'}`}
              />
              <motion.path
                d={square}
                fill="none"
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                className={strokeClass}
                {...draw(delay)}
              />
              <motion.path
                d={diamond}
                fill="none"
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                className={strokeClass}
                {...draw(delay + 0.1)}
              />
              <circle
                cx={CENTER}
                cy={CENTER}
                r={isCenter ? 9 : 6}
                className={isCenter ? 'fill-accent' : 'fill-primary-content'}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default HeroVisual
