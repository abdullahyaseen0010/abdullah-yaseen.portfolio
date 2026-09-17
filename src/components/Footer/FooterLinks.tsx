'use client'

import { motion } from 'framer-motion'
import { footerLinks } from './footerData'

const FooterLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-wrap gap-8"
    >
      {footerLinks.map((link, index) => (
        <motion.a
          key={link.href}
          href={link.href}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 * index }}
          whileHover={{ x: 4 }}
          className="transition-colors duration-300 hover:underline"
          style={{ color: 'var(--color-tertiary-content)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-neutral)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-tertiary-content)'
          }}
        >
          {link.title}.
        </motion.a>
      ))}
    </motion.div>
  )
}

export default FooterLinks
