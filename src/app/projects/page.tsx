import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar/Navbar'
import Projects from '@/src/components/Project/Projects'
import Footer from '@/src/components/Footer/Footer'
import PageShell from '@/src/components/UI/PageShell'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "A selection of work Abdullah Yaseen has built with React, Next.js, TypeScript and Tailwind CSS.",
}

export default function ProjectsPage() {
  return (
    <PageShell>
      <Navbar />
      <Projects />
      <Footer />
    </PageShell>
  )
}
