import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Fonts: one characterful display face, one clean body face, one mono for code.
// Use these CSS variables in globals.css / tailwind config:
//   --font-display, --font-body, --font-mono
const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
})

const body = Instrument_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = 'https://abdullah-yaseen-portfolio.vercel.app'
const SITE_NAME = 'Abdullah Yaseen | Full Stack Developer'
const SITE_DESCRIPTION =
  'Abdullah Yaseen is a full stack developer from Bahawalpur, Pakistan. He builds web apps with React, Next.js, TypeScript and Node.js.'

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
    'Next.js Developer',
    'React Developer Pakistan',
    'Frontend Developer Bahawalpur',
  ],
  authors: [{ name: 'Abdullah Yaseen', url: SITE_URL }],
  creator: 'Abdullah Yaseen',
  applicationName: 'Abdullah Yaseen Portfolio',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
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
        // Use a PNG or JPG. LinkedIn, WhatsApp and X do not render SVG previews.
        url: '/og-image.png',
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
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: 'en',
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
  email: 'abdullahyaseen1100@gmail.com',
  sameAs: ['https://www.linkedin.com/in/abdullah-shaffi', 'https://github.com/abdullahyaseen0010'],
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
}

// Escape "<" so JSON-LD can never break out of its <script> tag.
const toJsonLd = (data: object) => JSON.stringify(data).replace(/</g, '\\u003c')

// Runs before paint so the saved theme is applied with no flash. Defaults to light.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(personJsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}