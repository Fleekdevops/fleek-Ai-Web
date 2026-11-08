import type { Metadata } from 'next'
import { IBM_Plex_Sans, Sora } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import '@/styles/globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fleektech | IT Solutions, Websites, Apps & Software in Nairobi',
  description: 'Fleektech builds websites, mobile apps, custom software, portals, and provides IT support and maintenance. Based at Moi Avenue, Stanbank Building, 3rd Floor Room 10, Nairobi. Affordable, skilled, fast, and reliable.',
  keywords: [
    'Fleektech',
    'IT support Nairobi',
    'website development Nairobi',
    'mobile app development Kenya',
    'custom software Nairobi',
    'business portals',
    'IT maintenance and support',
    'software company Nairobi',
  ],
  authors: [{ name: 'Fleektech' }],
  openGraph: {
    title: 'Fleektech | Your Complete IT Partner in Nairobi',
    description: 'Websites, apps, software, portals, IT support and maintenance — affordable, custom solutions delivered on time.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleektech | IT Solutions in Nairobi',
    description: 'Affordable websites, apps, software, portals, and IT support for businesses in Nairobi and beyond.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${sora.variable} ${plex.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#101922',
              color: '#EEF6FB',
              border: '1px solid rgba(255, 122, 69, 0.28)',
            },
          }}
        />
      </body>
    </html>
  )
}
