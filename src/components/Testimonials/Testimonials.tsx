// components/sections/Testimonials.tsx
'use client'

import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import ServicesBackground from '../Services/ServicesBackground';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    role: 'Project Manager',
    company: 'AL Hafeez Tech Company',
    rating: 5,
    text: "Abdullah was an exceptional intern at our company. His dedication to learning React and Next.js was impressive. He consistently delivered clean, maintainable code and showed great attention to detail in implementing responsive designs.",
    project: 'Company Website Redesign',
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'Senior Developer',
    company: 'Tech Solutions Ltd',
    rating: 5,
    text: "Working with Abdullah on our e-commerce platform was a pleasure. His expertise in TailwindCSS and responsive design helped us create a beautiful, user-friendly interface. He's quick to understand requirements.",
    project: 'E-commerce Platform',
  },
  {
    id: 3,
    name: 'Muhammad Ali',
    role: 'CTO',
    company: 'Digital Innovations',
    rating: 5,
    text: "Abdullah's skills in React and Next.js are outstanding. He built our dashboard application with excellent performance optimization and clean architecture. His ability to integrate REST APIs seamlessly made our backend integration smooth.",
    project: 'Analytics Dashboard',
  },
  {
    id: 4,
    name: 'Fatima Malik',
    role: 'UI/UX Designer',
    company: 'Creative Studios',
    rating: 5,
    text: "Abdullah has an excellent eye for design implementation. He translated our Figma designs into pixel-perfect, responsive websites. His understanding of modern CSS and TailwindCSS made the collaboration seamless. Highly recommend!",
    project: 'Portfolio Website',
  },
  {
    id: 5,
    name: 'Omar Siddiqui',
    role: 'Product Owner',
    company: 'StartUp Hub',
    rating: 5,
    text: "Abdullah delivered our landing page ahead of schedule with outstanding quality. His knowledge of Next.js and modern web practices ensured excellent SEO and performance. Communication was clear throughout the project.",
    project: 'SaaS Landing Page',
  },
  {
    id: 6,
    name: 'Ayesha Raza',
    role: 'Marketing Director',
    company: 'Growth Agency',
    rating: 5,
    text: "We needed a fast, responsive website for our marketing campaigns, and Abdullah delivered perfectly. His expertise in React and TailwindCSS resulted in a beautiful, high-performing site that converted visitors effectively.",
    project: 'Marketing Website',
  },
];

interface TestimonialMarqueeProps {
  speed?: number;
  pauseOnHover?: boolean;
}

const TestimonialMarquee = ({ speed = 30, pauseOnHover = true }: TestimonialMarqueeProps) => {
  const [isPaused, setIsPaused] = React.useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const xPos = useRef(0);

  useAnimationFrame((_, delta) => {
    if (!contentRef.current || isPaused) return;

    xPos.current -= (speed * delta) / 1000;

    const contentWidth = contentRef.current.offsetWidth / 2;

    if (xPos.current <= -contentWidth) {
      xPos.current = 0;
    }

    contentRef.current.style.transform = `translateX(${xPos.current}px)`;
  });

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div ref={contentRef} className="flex w-max gap-6">
        {/* Original content */}
        <div className="flex shrink-0 items-stretch gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={`testimonial-${testimonial.id}`}
              className="w-[350px] lg:w-[400px] border-border bg-secondary/50 flex flex-col rounded-xl border p-6 backdrop-blur-sm transition-all hover:bg-secondary"
            >
              {/* Quote Icon */}
              <div className="mb-4 flex justify-between items-start">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <Quote className="w-8 h-8 opacity-20" style={{ color: 'var(--gradient-start)' }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-current"
                    style={{ color: '#FFC107' }}
                  />
                ))}
              </div>

              {/* Text */}
              <p 
                className="text-sm leading-relaxed mb-4 flex-grow"
                style={{ color: 'var(--color-primary-content)' }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <h4 
                  className="font-semibold text-sm mb-1"
                  style={{ color: 'var(--color-neutral)' }}
                >
                  {testimonial.name}
                </h4>
                <p 
                  className="text-xs mb-2"
                  style={{ color: 'var(--color-tertiary-content)' }}
                >
                  {testimonial.role} at {testimonial.company}
                </p>
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--gradient-start)20, var(--gradient-end)20)',
                    color: 'var(--color-primary-content)',
                  }}
                >
                  {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 items-stretch gap-6 lg:gap-8" aria-hidden="true">
          {testimonials.map((testimonial) => (
            <div
              key={`testimonial-duplicate-${testimonial.id}`}
              className="w-[350px] lg:w-[400px] border-border bg-secondary/50 flex flex-col rounded-xl border p-6 backdrop-blur-sm transition-all hover:bg-secondary"
            >
              {/* Quote Icon */}
              <div className="mb-4 flex justify-between items-start">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <Quote className="w-8 h-8 opacity-20" style={{ color: 'var(--gradient-start)' }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-current"
                    style={{ color: '#FFC107' }}
                  />
                ))}
              </div>

              {/* Text */}
              <p 
                className="text-sm leading-relaxed mb-4 flex-grow"
                style={{ color: 'var(--color-primary-content)' }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <h4 
                  className="font-semibold text-sm mb-1"
                  style={{ color: 'var(--color-neutral)' }}
                >
                  {testimonial.name}
                </h4>
                <p 
                  className="text-xs mb-2"
                  style={{ color: 'var(--color-tertiary-content)' }}
                >
                  {testimonial.role} at {testimonial.company}
                </p>
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--gradient-start)20, var(--gradient-end)20)',
                    color: 'var(--color-primary-content)',
                  }}
                >
                  {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <ServicesBackground />
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.03) 1px, transparent 0)',
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 100%)',
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center relative z-10 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border"
        >
          <Sparkles className="w-4 h-4" style={{ color: 'var(--gradient-start)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--color-primary-content)' }}>
            Client Testimonials
          </span>
        </motion.div>

        <h2 
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))'
          }}
        >
          What Clients Say
        </h2>
        
        <p 
          className="max-w-2xl mx-auto text-lg" 
          style={{ color: 'var(--color-tertiary-content)' }}
        >
          Trusted by clients and colleagues for delivering high-quality web solutions
        </p>
      </motion.div>

      {/* Testimonial Marquee */}
      <div className="relative z-10 mb-16">
        <TestimonialMarquee speed={30} pauseOnHover={true} />
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto relative z-10"
      >
        {[
          { label: 'Happy Clients', value: '15+' },
          { label: 'Projects Completed', value: '25+' },
          { label: 'Years Experience', value: '2+' },
          { label: 'Client Satisfaction', value: '100%' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border text-center"
          >
            <h3 
              className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
              }}
            >
              {stat.value}
            </h3>
            <p 
              className="text-sm font-medium"
              style={{ color: 'var(--color-tertiary-content)' }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
