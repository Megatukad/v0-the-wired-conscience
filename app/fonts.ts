import localFont from 'next/font/local'

// Newsreader: variable (opsz + wght), roman and italic.
export const serif = localFont({
  src: [
    { path: '../public/fonts/newsreader-latin-opsz-normal.woff2', style: 'normal', weight: '200 800' },
    { path: '../public/fonts/newsreader-latin-opsz-italic.woff2', style: 'italic', weight: '200 800' },
  ],
  variable: '--font-serif',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

export const mono = localFont({
  src: [
    { path: '../public/fonts/ibm-plex-mono-latin-400-normal.woff2', style: 'normal', weight: '400' },
    { path: '../public/fonts/ibm-plex-mono-latin-500-normal.woff2', style: 'normal', weight: '500' },
  ],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'Menlo', 'monospace'],
})

export const hand = localFont({
  src: [{ path: '../public/fonts/reenie-beanie-latin-400-normal.woff2', style: 'normal', weight: '400' }],
  variable: '--font-hand',
  display: 'swap',
  fallback: ['Bradley Hand', 'Segoe Print', 'cursive'],
})
