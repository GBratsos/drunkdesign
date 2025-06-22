import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserat',
  subsets: ['latin'],
})

export const metadata = {
  alternates: {
    canonical: 'https://drunkdesign.gr',
  },
  title: 'Drunk Design | Creative studio',
  description:
    'We are a creative studio formed by a visual communication designer and a developer. We specialize in visual identity, product and packaging design, websites, social media content, and video production delivering integrated branding and digital presence solutions.',
  keywords: [
    'creative studio Greece',
    'branding agency',
    'visual identity design',
    'product design',
    'packaging design',
    'website design Greece',
    'social media content design',
    'video production studio',
    'digital branding solutions',
    'drunk design',
    'graphic design studio',
    'web design agency',
    'brand identity experts',
  ],
  openGraph: {
    title: 'Drunk Design | Creative studio',
    description:
      'We are a creative studio formed by a visual communication designer and a developer. We specialize in visual identity, product and packaging design, websites, social media content, and video production delivering integrated branding and digital presence solutions.',
    url: 'https://www.drunkdesign.gr/',
    sitename: 'Drunk Design | Creative studio',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-96x96.png',
    apple: '/favicons/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicons//apple-icon-precomposed.png',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  )
}
