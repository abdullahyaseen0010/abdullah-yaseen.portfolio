// app/components/contact/WhyWorkCard.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { whyWorkWithMe } from './contactData';

const WhyWorkCard = () => {
  return (
    <div className="p-8 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border">
      <h3 
        className="text-2xl font-bold mb-4"
        style={{ color: 'var(--color-neutral)' }}
      >
        {whyWorkWithMe.title}
      </h3>
      <ul className="space-y-4">
        {whyWorkWithMe.benefits.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-3"
          >
            <div 
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}
            >
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span style={{ color: 'var(--color-primary-content)' }}>
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default WhyWorkCard;