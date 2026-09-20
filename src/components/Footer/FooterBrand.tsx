'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { contactInfo } from './footerData'

const FooterBrand = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h5 className="mb-8 flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
          }}
        >
          <Code2 className="h-5 w-5 text-white" />
        </motion.div>
        <span className="text-lg font-semibold" style={{ color: 'var(--color-neutral)' }}>
          {contactInfo.name}
        </span>
      </h5>

      <p className="leading-relaxed" style={{ color: 'var(--color-tertiary-content)' }}>
        {contactInfo.description}
      </p>

      <motion.div whileHover={{ x: 4 }}>
        <Link
          href="/about"
          className="mt-4 inline-flex items-center text-xs hover:underline"
          style={{ color: 'var(--color-neutral)' }}
        >
          More about me
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default FooterBrand