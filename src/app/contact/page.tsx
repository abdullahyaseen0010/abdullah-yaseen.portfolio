import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar/Navbar'
import Contact from '@/src/components/Contact/Contact'
import Footer from '@/src/components/Footer/Footer'
import PageShell from '@/src/components/UI/PageShell'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Abdullah Yaseen for React, Next.js, and full-stack web development projects in Pakistan and remote collaborations.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <Navbar />
      <Contact />
      <Footer />
    </PageShell>
  )
}
