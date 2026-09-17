// app/components/contact/QuoteCard.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { inspirationalQuote } from './contactData';

const QuoteCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="p-8 rounded-xl border-l-4"
      style={{
        borderColor: 'var(--gradient-start)',
        background: 'linear-gradient(135deg, var(--gradient-start)10, transparent)',
      }}
    >
      <p 
        className="text-lg italic mb-4"
        style={{ color: 'var(--color-primary-content)' }}
      >
        &quot;{inspirationalQuote.text}&quot;
      </p>
    </motion.div>
  );
};

export default QuoteCard;