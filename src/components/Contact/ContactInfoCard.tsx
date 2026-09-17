// app/components/contact/ContactInfoCard.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { contactConfig, contactInfoTitle } from './contactData';

const ContactInfoCard = () => {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      label: 'Email',
      value: contactConfig.email,
      href: `mailto:${contactConfig.email}`,
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: contactConfig.phone.display,
      href: contactConfig.phone.href,
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: contactConfig.location.full,
      href: null,
    },
  ];

  return (
    <div className="p-8 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border">
      <h3 
        className="text-2xl font-bold mb-6"
        style={{ color: 'var(--color-neutral)' }}
      >
        {contactInfoTitle}
      </h3>
      <div className="space-y-5">
        {contactItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4"
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-tertiary-content)' }}>
                {item.label}
              </p>
              {item.href ? (
                <a 
                  href={item.href}
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--color-primary-content)' }}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium" style={{ color: 'var(--color-primary-content)' }}>
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCard;