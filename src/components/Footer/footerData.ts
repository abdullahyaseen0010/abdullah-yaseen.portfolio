import {Linkedin, Mail} from 'lucide-react'

export interface FooterLink {
  title: string
  href: string
}

export interface SocialLink {
  name: string
  icon: React.ElementType
  href: string
  color: string
}

export const footerLinks: FooterLink[] = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' }
]

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/abdullah-yaseen-shaffi',
    color: '#0077B5'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:abdullahyaseen1100@gmail.com',
    color: '#EA4335'
  }
]

export const contactInfo = {
  name: 'Abdullah Yaseen',
  description: 'Web Developer specializing in React, Next.js, and TailwindCSS. Building modern, performant web applications with clean code and exceptional user experiences.',
  email: 'abdullahyaseen1100@gmail.com',
  phone: '+92 311 6652399',
  phoneDisplay: '+92 311 6652399',
  location: {
    city: 'Bahawalpur',
    state: 'Punjab',
    country: 'Pakistan'
  }
}