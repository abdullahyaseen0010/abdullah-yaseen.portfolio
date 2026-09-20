import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar/Navbar'
import Hero from '@/src/components/Hero/Hero'
import SkillsSection from '@/src/components/Marquee/SkillsSection'
import Projects from '@/src/components/Project/Projects'
import Services from '@/src/components/Services/Services'
import Contact from '@/src/components/Contact/Contact'
import Testimonials from '@/src/components/Testimonials/Testimonials'
import Footer from '@/src/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description:
    'Full Stack Developer portfolio for Abdullah Yaseen, specializing in React, Next.js, TypeScript, Tailwind CSS, and modern web application development.',
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SkillsSection />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}