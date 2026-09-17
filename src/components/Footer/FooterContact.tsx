'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { contactInfo } from './footerData'

const FooterContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-10 md:self-end"
    >
      {/* Contact */}
      <div className="flex flex-col">
        <h5 
          className="mb-4 text-lg font-medium flex items-center gap-2"
          style={{ color: 'var(--color-neutral)' }}
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </h5>
        <motion.a
          href={`mailto:${contactInfo.email}`}
          whileHover={{ x: 4 }}
          className="text-sm font-light transition-colors duration-300 flex items-center gap-2"
          style={{ color: 'var(--color-tertiary-content)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-neutral)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-tertiary-content)'
          }}
        >
          <ExternalLink className="w-3 h-3" />
          {contactInfo.email}
        </motion.a>
        <motion.a
          href={`tel:${contactInfo.phone}`}
          whileHover={{ x: 4 }}
          className="text-sm font-light transition-colors duration-300 flex items-center gap-2 mt-1"
          style={{ color: 'var(--color-tertiary-content)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-neutral)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-tertiary-content)'
          }}
        >
          <Phone className="w-3 h-3" />
          {contactInfo.phoneDisplay}
        </motion.a>
      </div>

      {/* Location */}
      <div>
        <h5 
          className="mb-4 text-lg font-medium flex items-center gap-2"
          style={{ color: 'var(--color-neutral)' }}
        >
          <MapPin className="w-5 h-5" />
          Location
        </h5>
        <address 
          className="flex flex-col text-sm font-light not-italic"
          style={{ color: 'var(--color-tertiary-content)' }}
        >
          <span>{contactInfo.location.city}, {contactInfo.location.state}</span>
          <span>{contactInfo.location.country}</span>
        </address>
      </div>
    </motion.div>
  )
}

export default FooterContact