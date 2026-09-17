// app/components/services/Services.tsx (Server Component)
import React from 'react';
import ServicesHeader from './ServicesHeader';
import ServicesGrid from './ServicesGrid';
import ServicesCTA from './ServicesCTA';
import ServicesBackground from './ServicesBackground';

const Services = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated Background */}
      <ServicesBackground />

      {/* Header */}
      <ServicesHeader />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Bottom CTA */}
      <ServicesCTA />
    </section>
  );
};

export default Services;