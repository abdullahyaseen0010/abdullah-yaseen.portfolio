export const servicesIntro = {
  title: 'Work with me',
  text: 'I take on small websites and web apps for individuals and small businesses.',
}

export interface Service {
  title: string
  description: string
}

export const services: Service[] = [
  {
    title: 'Websites and landing pages',
    description: 'Fast, responsive sites built with Next.js and Tailwind CSS.',
  },
  {
    title: 'Web apps',
    description: 'React frontends with Node.js and REST APIs behind them.',
  },
  {
    title: 'Figma to code',
    description: 'Turning finished designs into accessible, responsive pages.',
  },
]

export const servicesCTA = {
  text: 'Tell me about your project',
  href: '/contact',
}
