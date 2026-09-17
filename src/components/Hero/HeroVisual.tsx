'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Rocket, 
  TrendingUp, 
  Sparkles
} from 'lucide-react'
import { floatingIconsData } from './heroData'

const icons = [Code2, Rocket, TrendingUp, Sparkles]

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative flex min-h-[400px] items-center justify-center lg:min-h-[600px]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="from-accent/30 via-secondary/20 to-accent/30 h-[300px] w-[300px] rounded-full bg-gradient-to-br lg:h-[450px] lg:w-[450px]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <div className="relative h-full w-full">
          {floatingIconsData.map((iconData, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: iconData.delay + 1, duration: 0.5 }}
                style={iconData.position}
                className="absolute"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="bg-secondary border-border text-accent rounded-xl border p-3 shadow-lg backdrop-blur-sm"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
        className="from-accent to-secondary relative z-10 flex h-[200px] w-[200px] items-center justify-center rounded-full bg-gradient-to-br shadow-2xl lg:h-[280px] lg:w-[280px]"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="from-accent to-secondary absolute inset-0 rounded-full bg-gradient-to-br opacity-50 blur-xl"
        />

        <div className="bg-primary relative flex h-[180px] w-[180px] items-center justify-center rounded-full lg:h-[260px] lg:w-[260px]">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="text-accent"
          >
            <Code2 className="h-20 w-20 lg:h-28 lg:w-28" />
          </motion.div>
        </div>
      </motion.div>

      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ delay: 1 + i * 0.2 }}
          className="border-accent absolute rounded-full border-2"
          style={{
            width: `${200 + i * 80}px`,
            height: `${200 + i * 80}px`,
          }}
        />
      ))}
    </motion.div>
  )
}

export default HeroVisual