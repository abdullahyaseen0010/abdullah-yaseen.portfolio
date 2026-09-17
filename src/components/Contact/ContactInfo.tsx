// app/components/contact/ContactInfo.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import ContactInfoCard from './ContactInfoCard';
import WhyWorkCard from './WhyWorkCard';
import QuoteCard from './QuoteCard';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:sticky lg:top-24 space-y-8"
    >
      {/* Contact Information Card */}
      <ContactInfoCard />

      {/* Why Work With Me Card */}
      <WhyWorkCard />

      {/* Quote */}
      <QuoteCard />
    </motion.div>
  );
};

export default ContactInfo;