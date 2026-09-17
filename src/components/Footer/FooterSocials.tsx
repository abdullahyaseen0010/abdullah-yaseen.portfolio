'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { socialLinks } from './footerData'

const FooterSocials = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  return (
    <ul className="flex flex-col gap-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        const isHovered = hoveredSocial === social.name
        
        return (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
          >
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              onHoverStart={() => setHoveredSocial(social.name)}
              onHoverEnd={() => setHoveredSocial(null)}
              className="flex items-center gap-2 transition-all duration-300"
              style={{ 
                color: isHovered ? social.color : 'var(--color-neutral)'
              }}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{social.name}</span>
            </motion.a>
          </motion.li>
        )
      })}
    </ul>
  )
}

export default FooterSocials