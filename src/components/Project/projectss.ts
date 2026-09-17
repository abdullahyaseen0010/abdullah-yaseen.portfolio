// data/projects.ts
import { Project } from './project';

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Task Manager",
    description: "Smart task management with AI-driven prioritization and natural language processing.",
    tech: ["Next.js", "OpenAI", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Chat",
    description: "Scalable chat platform with live messaging and end-to-end encryption.",
    tech: ["React", "Socket.io", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Analytics",
    description: "Comprehensive dashboard for real-time sales tracking and inventory management.",
    tech: ["Vue.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet with multi-chain support.",
    tech: ["React Native", "Web3.js", "Ethereum"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Weather Forecast",
    description: "Beautiful weather app with interactive maps and alerts.",
    tech: ["Next.js", "Mapbox", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Code Snippets",
    description: "Developer tool for organizing and sharing code snippets.",
    tech: ["TypeScript", "Supabase", "Tailwind"],
    github: "https://github.com",
  },
];