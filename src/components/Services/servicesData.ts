// app/data/servicesData.ts
import { 
  Code2, 
  Palette, 
  Server, 
  Smartphone,
  Layers,
  Sparkles
} from 'lucide-react';

export interface Service {
  id: number;
  icon: typeof Code2;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

export const servicesHeader = {
  title: 'What I Do',
  description: 'Specialized skills and technologies I work with to build exceptional web experiences',
}

export const services: Service[] = [
  {
    id: 1,
    icon: Code2,
    title: 'React & Next.js Development',
    description: 'Crafting lightning-fast, SEO-optimized web applications with modern React ecosystem and Next.js framework.',
    features: ['Server Components', 'App Router', 'React Hooks', 'State Management'],
    color: '#61DAFB',
    gradient: 'linear-gradient(135deg, #61DAFB 0%, #0088CC 100%)',
  },
  {
    id: 2,
    icon: Palette,
    title: 'TailwindCSS Styling',
    description: 'Building beautiful, responsive interfaces with utility-first CSS framework for rapid UI development.',
    features: ['Custom Themes', 'Dark Mode', 'Animations', 'Component Libraries'],
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)',
  },
  {
    id: 3,
    icon: Server,
    title: 'Node.js & REST APIs',
    description: 'Developing robust backend services with Node.js, creating RESTful APIs for seamless data management.',
    features: ['Express.js', 'API Design', 'Database Integration', 'Authentication'],
    color: '#68A063',
    gradient: 'linear-gradient(135deg, #68A063 0%, #3C873A 100%)',
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Creating pixel-perfect, mobile-first designs that work flawlessly across all devices and screen sizes.',
    features: ['Mobile-First', 'Breakpoints', 'Flexbox & Grid', 'Touch Optimization'],
    color: '#FF6B6B',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A6F 100%)',
  },
  {
    id: 5,
    icon: Layers,
    title: 'Modern JavaScript (ES6+)',
    description: 'Writing clean, maintainable code using the latest JavaScript features and best practices.',
    features: ['Arrow Functions', 'Async/Await', 'Modules', 'Destructuring'],
    color: '#F7DF1E',
    gradient: 'linear-gradient(135deg, #F7DF1E 0%, #F0DB4F 100%)',
  },
  {
    id: 6,
    icon: Sparkles,
    title: 'UI/UX Implementation',
    description: 'Transforming Figma designs into interactive, accessible web experiences with attention to detail.',
    features: ['Figma to Code', 'Accessibility', 'User Flow', 'Micro-interactions'],
    color: '#A259FF',
    gradient: 'linear-gradient(135deg, #A259FF 0%, #7B3FF2 100%)',
  },
];

export const servicesCTA = {
  text: 'Ready to bring your ideas to life?',
  buttonText: "Let's Work Together",
}

export const particleConfig = {
  count: 25,
  sizeRange: { min: 2, max: 7 },
  durationRange: { min: 4, max: 7 },
  offsetRange: { min: -40, max: 40 },
}