'use client'

import { motion, useReducedMotion } from 'framer-motion'

/*
  A pixel-art bat drawn from the same eight-pointed-star tile used
  elsewhere on the site (the Bahawalpur/Multan tilework motif) — each
  "pixel" of the bat is a full star tile, empty cells are just skipped.
  It draws in once on load (the page's single animated moment), then
  stays still.
*/

const TILE = 60
const CENTER = TILE / 2
const RADIUS = 22
const HALF = RADIUS / Math.SQRT2

const f = (n: number) => n.toFixed(2)

const square = `M${f(CENTER - HALF)} ${f(CENTER - HALF)}H${f(CENTER + HALF)}V${f(CENTER + HALF)}H${f(CENTER - HALF)}Z`
const diamond = `M${CENTER} ${CENTER - RADIUS}L${CENTER + RADIUS} ${CENTER}L${CENTER} ${CENTER + RADIUS}L${CENTER - RADIUS} ${CENTER}Z`

// 1 = star tile (bat pixel), 0 = empty. 7 cols x 5 rows.
const BAT_MASK = [
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 1, 0, 0],
]

const CENTER_CELL = { row: 2, col: 3 }

const tiles = BAT_MASK.flatMap((cols, row) =>
  cols
    .map((on, col) => ({ row, col, on }))
    .filter((t) => t.on === 1)
).map((t, i) => ({
  i,
  x: t.col * TILE,
  y: t.row * TILE,
  isCenter: t.row === CENTER_CELL.row && t.col === CENTER_CELL.col,
  shaded: (t.row + t.col) % 2 === 0,
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
        viewBox={`-4 -4 ${7 * TILE + 8} ${5 * TILE + 8}`}
        aria-hidden="true"
        focusable="false"
        className="w-full max-w-[420px]"
      >
        {tiles.map(({ i, x, y, isCenter, shaded }) => {
          // Centre tile draws last so the eye lands on it.
          const delay = isCenter ? 1.3 : 0.15 + i * 0.08
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
                r={isCenter ? 6 : 4}
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
