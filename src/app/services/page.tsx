import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar/Navbar'
import Services from '@/src/components/Services/Services'
import Footer from '@/src/components/Footer/Footer'
import PageShell from '@/src/components/UI/PageShell'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web development services including React development, Next.js app design, Tailwind CSS interfaces, and scalable product frontend solutions.',
}

export default function ServicesPage() {
  return (
    <PageShell>
      <Navbar />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
    </PageShell>
  )
}
