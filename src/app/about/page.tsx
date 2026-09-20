import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Layers3, Sparkles } from 'lucide-react'
import Navbar from '@/src/components/Navbar/Navbar'
import Footer from '@/src/components/Footer/Footer'
import SkillsSection from '@/src/components/Marquee/SkillsSection'
import PageShell from '@/src/components/UI/PageShell'
import PageContainer from '@/src/components/UI/PageContainer'
import SurfaceCard from '@/src/components/UI/SurfaceCard'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Abdullah Yaseen, a Full Stack Developer building high-performance web experiences with React, Next.js, TypeScript, and Tailwind CSS.',
}

const stats = [
  { label: 'Years of experience', value: '2+' },
  { label: 'Core stack', value: 'React / Next.js' },
  { label: 'Strength', value: 'SEO & UX' },
]

export default function AboutPage() {
  return (
    <PageShell>
      <Navbar />

      <PageContainer className="pb-20 pt-28">
        <SurfaceCard className="p-6 shadow-2xl shadow-slate-950/20 md:p-10 lg:p-14">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Sparkles className="h-4 w-4" />
            About Abdullah Yaseen
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <h1 className="mb-5 text-4xl font-black leading-tight md:text-5xl">
                I build clean, conversion-focused web experiences that help brands look stronger online.
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-tertiary-content">
                I’m Abdullah Yaseen, a Full Stack Developer with hands-on experience building responsive websites and web apps
                using React, Next.js, TypeScript, and Tailwind CSS. I focus on performance, accessibility, clean code, and user
                experience so digital products are not only beautiful, but also easier to scale, maintain, and grow.
              </p>
            </div>

            <div className="grid gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-primary/50 p-4">
                  <div className="text-2xl font-bold text-neutral">{stat.value}</div>
                  <div className="mt-2 text-sm text-tertiary-content">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </SurfaceCard>
      </PageContainer>

      <PageContainer className="pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <SurfaceCard className="p-8">
            <div className="mb-5 flex items-center gap-3 text-accent">
              <Layers3 className="h-5 w-5" />
              <span className="text-lg font-semibold">How I work</span>
            </div>
            <p className="text-base leading-7 text-tertiary-content">
              My process blends product thinking, clean architecture, and thoughtful UI implementation. I care about business
              goals, usability, and maintainability so every project stays polished without becoming bloated or over-engineered.
            </p>
          </SurfaceCard>

          <SurfaceCard className="p-8">
            <div className="mb-5 flex items-center gap-3 text-accent">
              <Sparkles className="h-5 w-5" />
              <span className="text-lg font-semibold">What I build</span>
            </div>
            <p className="text-base leading-7 text-tertiary-content">
              I build landing pages, business websites, dashboards, and portfolio experiences that are responsive, conversion-ready,
              and built to scale with real-world product needs in mind.
            </p>
          </SurfaceCard>
        </div>
      </PageContainer>

      <SkillsSection />

      <PageContainer className="pb-24 pt-24">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-secondary/30 p-8 text-center md:flex-row md:text-left">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-tertiary-content">Let’s build</p>
            <h2 className="text-3xl font-bold text-neutral">A stronger digital presence for your brand.</h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageContainer>

      <Footer />
    </PageShell>
  )
}
