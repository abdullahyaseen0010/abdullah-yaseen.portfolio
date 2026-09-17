// app/components/services/ServicesGrid.tsx (Client Component)
'use client'

import React, { useState } from 'react';
import { services } from './servicesData';
import ServiceCard from './ServiceCard';

const ServicesGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          isHovered={hoveredId === service.id}
          onHoverStart={() => setHoveredId(service.id)}
          onHoverEnd={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;