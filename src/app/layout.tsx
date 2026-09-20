import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const SITE_URL = 'https://abdullah-yaseen-portfolio.vercel.app'
const SITE_NAME = 'Abdullah Yaseen | Full Stack Developer'
const SITE_DESCRIPTION =
  'Abdullah Yaseen is a Full Stack Developer building fast, SEO-friendly, conversion-focused web experiences with React, Next.js, TypeScript, and Tailwind CSS for businesses and startups.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: '%s | Abdullah Yaseen',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Abdullah Yaseen',
    'Full Stack Developer',
    'Fullstack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Tailwind CSS Developer',
    'Web Developer Pakistan',
    'Frontend Developer',
    'Backend Developer',
    'Software Developer',
    'Freelance Web Developer',
    'Web Developer Bahawalpur',
    'React Portfolio Developer',
  ],
  authors: [{ name: 'Abdullah Yaseen', url: SITE_URL }],
  creator: 'Abdullah Yaseen',
  publisher: 'Abdullah Yaseen',
  applicationName: 'Abdullah Yaseen Portfolio',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Abdullah Yaseen | Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: 'en-US',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdullah Yaseen',
  url: SITE_URL,
  jobTitle: 'Full Stack Developer',
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bahawalpur',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  email: 'mailto:abdullahyaseen1100@gmail.com',
  sameAs: ['https://www.linkedin.com/in/abdullah-shaffi', 'https://github.com/abdullahyaseen0010'],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'REST APIs',
    'Responsive UI Design',
    'SEO Web Development',
    'Database Design',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}