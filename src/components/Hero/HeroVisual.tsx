'use client'

import { motion, useReducedMotion } from 'framer-motion'

/*
  A chunky pixel-art bat, drawn as a bitmap of solid square "pixels" rather
  than vector paths. It draws in once on load (the page's single animated
  moment, staggered pixel by pixel), then stays still. Two pixels near the
  center are swapped to the accent color for eyes.
*/

const PIXEL = 40
const COLS = 9
const ROWS = 6

// 1 = filled pixel, 0 = empty. Symmetric left/right.
const BAT_MAP = [
  [0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 1, 1, 0, 0, 0, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 0, 1, 1, 1, 0, 1, 1],
]

// Row/col of the two eye pixels (within BAT_MAP, both currently filled).
const EYES = new Set(['3-3', '3-5'])

const pixels = BAT_MAP.flatMap((row, r) =>
  row.map((on, c) => ({ r, c, on: on === 1, isEye: EYES.has(`${r}-${c}`) }))
).filter((p) => p.on)

const HeroVisual = () => {
  const reduceMotion = useReducedMotion()

  const pop = (delay: number) => ({
    initial: reduceMotion ? false : { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <div className="hidden justify-self-end md:block">
      <svg
        viewBox={`-4 -4 ${COLS * PIXEL + 8} ${ROWS * PIXEL + 8}`}
        aria-hidden="true"
        focusable="false"
        className="w-full max-w-[380px]"
      >
        {pixels.map(({ r, c, isEye }) => {
          // Raster order for the wings/body, eyes pop in last.
          const delay = isEye ? 1.0 : 0.1 + (r * COLS + c) * 0.015
          const cx = c * PIXEL + PIXEL / 2
          const cy = r * PIXEL + PIXEL / 2

          return (
            <motion.rect
              key={`${r}-${c}`}
              x={c * PIXEL}
              y={r * PIXEL}
              width={PIXEL}
              height={PIXEL}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
              className={isEye ? 'fill-accent' : 'fill-primary-content'}
              {...pop(delay)}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default HeroVisual
