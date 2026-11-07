import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import '@/styles/globals.css'

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
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'icon', url: '/favicon.svg' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0a0a18',
              color: '#f8f9ff',
              border: '1px solid rgba(0, 102, 255, 0.2)',
            },
          }}
        />
      </body>
    </html>
  )
}
