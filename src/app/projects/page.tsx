import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar/Navbar'
import Projects from '@/src/components/Project/Projects'
import Footer from '@/src/components/Footer/Footer'
import PageShell from '@/src/components/UI/PageShell'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore recent portfolio projects built with React, Next.js, TypeScript, and modern web technologies by Abdullah Yaseen.',
}

export default function ProjectsPage() {
  return (
    <PageShell>
      <Navbar />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </PageShell>
  )
}
