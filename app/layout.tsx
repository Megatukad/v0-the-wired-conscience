import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { hand, mono, serif } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://thewiredconscience.com'),
  title: 'Mega Setiawati · Product Manager',
  icons: {
    icon: [{ url: '/favicon/favicon.ico' }, { url: '/favicon/icon-32.png', sizes: '32x32' }],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F3EEE6',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable} ${hand.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
