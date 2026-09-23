import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar/Navbar'
import Services from '@/src/components/Services/Services'
import Footer from '@/src/components/Footer/Footer'
import PageShell from '@/src/components/UI/PageShell'

export const metadata: Metadata = {
  title: 'Work with me',
  description:
    'What Abdullah Yaseen can build: websites and landing pages, web apps, and Figma-to-code implementation.',
}

export default function ServicesPage() {
  return (
    <PageShell>
      <Navbar />
      <Services />
      <Footer />
    </PageShell>
  )
}
