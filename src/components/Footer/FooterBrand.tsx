'use client'

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
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
          }}
        >
          <Code2 className="w-5 h-5 text-white" />
        </motion.div>
        <span 
          className="text-lg font-semibold"
          style={{ color: 'var(--color-neutral)' }}
        >
          {contactInfo.name}
        </span>
      </h5>
      <p 
        className="leading-relaxed"
        style={{ color: 'var(--color-tertiary-content)' }}
      >
        {contactInfo.description}
      </p>
      <motion.a
        href="#home"
        whileHover={{ x: 4 }}
        className="mt-4 inline-flex items-center gap-2 text-xs hover:underline"
        style={{ color: 'var(--color-neutral)' }}
      >
        More about me 
        <span 
          className="inline-block h-[10px] w-[10px] rounded-full"
          style={{ backgroundColor: 'var(--color-neutral)' }}
        />
      </motion.a>
    </motion.div>
  )
}

export default FooterBrand