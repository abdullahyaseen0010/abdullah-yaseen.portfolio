// app/components/contact/Contact.tsx (Server Component)
import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactHeader from './ContactHeader';

const Contact = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
          }}
        />
      </div>

      {/* Header */}
      <ContactHeader />

      <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* Contact Form */}
        <ContactForm />

        {/* Info Section */}
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;