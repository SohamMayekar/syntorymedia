'use client'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import ScrollToTop from './components/scroll-to-top'
import SEO from '../components/SEO'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <SEO
          title='Syntory Media - Web & Content Agency'
          description='Syntory Media is a leading web and content agency offering innovative solutions for your online presence.'
          url='https://www.syntorymedia.com/'
          image='/images/og-image.jpg'
          keywords='web design Mumbai, Instagram content for creators, digital growth for small businesses'
        />
        <link rel="preload" href="/images/og-image.jpg" as="image" />
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <style>
          {`/* Critical CSS */
          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
          }
          `}
        </style>
      </head>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute='class'
            enableSystem={false}
            defaultTheme='light'>
            {/* ---------------------Header Starts-----------------  */}
            <Header />
            {/* ---------------------Header Ends-------------------  */}
            {children}
            {/* ---------------------Footer Starts-----------------  */}
            <Footer />
            {/* ---------------------Footer Ends-----------------  */}
            <ScrollToTop />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
