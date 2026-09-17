// app/components/contact/ContactHeader.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { contactHeader } from './contactData';

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center relative z-10"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border"
      >
        <Sparkles className="w-4 h-4" style={{ color: 'var(--gradient-start)' }} />
        <span className="text-sm font-medium" style={{ color: 'var(--color-primary-content)' }}>
          {contactHeader.badge.text}
        </span>
      </motion.div>

      <h2 
        className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))'
        }}
      >
        {contactHeader.title}
      </h2>
      
      <p 
        className="max-w-2xl mx-auto text-lg" 
        style={{ color: 'var(--color-tertiary-content)' }}
      >
        {contactHeader.description}
      </p>
    </motion.div>
  );
};

export default ContactHeader;