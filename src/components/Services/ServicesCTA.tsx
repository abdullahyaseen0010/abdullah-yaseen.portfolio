// app/components/services/ServicesCTA.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { servicesCTA } from './servicesData';

const ServicesCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="mt-14 text-center relative z-10"
    >
      <p 
        className="text-lg mb-4"
        style={{ color: 'var(--color-tertiary-content)' }}
      >
        {servicesCTA.text}
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-full font-semibold text-black transition-all"
        style={{
          background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        }}
      >
        {servicesCTA.buttonText}
      </motion.button>
    </motion.div>
  );
};

export default ServicesCTA;