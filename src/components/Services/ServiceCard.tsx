// app/components/services/ServiceCard.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Service } from './servicesData';

interface ServiceCardProps {
  service: Service;
  index: number;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  isHovered,
  onHoverStart,
  onHoverEnd,
}) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="h-full rounded-xl p-6 relative overflow-hidden bg-secondary/50 backdrop-blur-sm border border-border transition-all cursor-pointer"
        style={{ 
          borderColor: isHovered ? service.color : undefined,
        }}
      >
        {/* Top accent bar */}
        <div 
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: service.gradient }}
        />

        {/* Floating icon background */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, 5, -5, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
          className="mb-6 relative inline-block"
        >
          <motion.div
            animate={{
              opacity: isHovered ? 0.2 : 0.1,
              scale: isHovered ? [1, 1.3, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
            }}
            className="absolute inset-0 rounded-2xl blur-2xl"
            style={{ background: service.gradient }}
          />
          
          <div 
            className="relative w-16 h-16 rounded-xl flex items-center justify-center"
            style={{ 
              background: service.gradient,
              boxShadow: isHovered ? `0 10px 40px ${service.color}40` : 'none',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Content */}
        <h3 
          className="text-xl font-bold mb-3"
          style={{ color: 'var(--color-neutral)' }}
        >
          {service.title}
        </h3>
        
        <p 
          className="text-sm leading-relaxed mb-5" 
          style={{ color: 'var(--color-tertiary-content)' }}
        >
          {service.description}
        </p>

        {/* Features list */}
        <div className="space-y-2">
          {service.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="flex items-center gap-2"
            >
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: service.color }}
              />
              <span 
                className="text-sm font-medium"
                style={{ color: 'var(--color-primary-content)' }}
              >
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Corner decoration */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          className="absolute bottom-4 right-4 w-20 h-20 rounded-full blur-3xl"
          style={{ background: service.gradient }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;