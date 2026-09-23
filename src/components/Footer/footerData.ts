export interface FooterLink {
  title: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  external: boolean
}

export const footerLinks: FooterLink[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Services', href: '/services' },
  { title: 'Contact', href: '/contact' },
]

export const socialLinks: SocialLink[] = [
  { name: 'Email', href: 'mailto:abdullahyaseen1100@gmail.com', external: false },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullah-shaffi', external: true },
  { name: 'GitHub', href: 'https://github.com/abdullahyaseen0010', external: true },
]

export const contactInfo = {
  name: 'Abdullah Yaseen',
  tagline: 'Web developer building with React and Next.js.',
}
