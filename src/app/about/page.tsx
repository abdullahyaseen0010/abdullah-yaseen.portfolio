import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/src/components/Navbar/Navbar'
import Footer from '@/src/components/Footer/Footer'
import PageShell from '@/src/components/UI/PageShell'
import PageContainer from '@/src/components/UI/PageContainer'
import SkillsSection from '@/src/components/Marquee/SkillsSection'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Abdullah Yaseen, a web developer in Bahawalpur, Pakistan who builds with React, Next.js, TypeScript and Tailwind CSS.',
}

const bio = [
  "I'm Abdullah Yaseen, a web developer based in Bahawalpur, Punjab. I build websites and web apps with React, Next.js, TypeScript and Tailwind CSS, and I write the Node.js APIs behind them when a project needs one.",
  "I've been building for the web for two years, mostly with React and Next.js. I care about pages that load quickly, work on a phone, and can be used with a keyboard.",
]

const info = [
  { label: 'Based in', value: 'Bahawalpur, Pakistan' },
  { label: 'Focus', value: 'React · Next.js · TypeScript' },
  { label: 'Available for', value: 'Junior roles · Freelance' },
]

export default function AboutPage() {
  return (
    <PageShell>
      <Navbar />

      <PageContainer className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <div>
            <h1 className="text-neutral max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
              I&apos;m a web developer from Bahawalpur.
            </h1>

            {/* Optional: add a real photo of yourself here with next/image.
                A photo is the fastest way to make this page feel personal. */}

            <div className="mt-10 flex max-w-2xl flex-col gap-6 text-lg lg:mt-14">
              {bio.map((paragraph) => (
                <p key={paragraph} className="text-tertiary-content">
                  {paragraph}
                </p>
              ))}

              <p className="text-tertiary-content">
                I&apos;m open to junior roles and freelance projects. Email is the best way to reach me.
              </p>

              <Link
                href="/contact"
                className="text-neutral decoration-accent w-fit py-1 underline decoration-2 underline-offset-4"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <dl className="border-border flex flex-col gap-6 border-t pt-8 lg:mt-2 lg:pt-10">
            {info.map((item) => (
              <div key={item.label}>
                <dt className="text-tertiary-content text-sm">{item.label}</dt>
                <dd className="text-neutral mt-1 text-lg">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </PageContainer>

      <SkillsSection />

      <Footer />
    </PageShell>
  )
}