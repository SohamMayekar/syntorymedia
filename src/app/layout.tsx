import type { Metadata } from 'next';
import { Manrope, Bricolage_Grotesque, Fragment_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollManager } from '@/components/ScrollManager';
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from '@/components/JsonLd';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const fragmentMono = Fragment_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fragment',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://syntorymedia.com'),
  title: {
    default: 'Syntory Media | Premium Web Design Agency in Mumbai',
    template: '%s | Syntory Media',
  },
  description: 'Stop building on rented land. We build premium digital homes and high-performance websites that turn visitors into customers. Premium web design agency in Mumbai, India.',
  keywords: [
    'web design agency',
    'web development',
    'premium websites',
    'conversion optimization',
    'SEO',
    'Mumbai web design',
    'high-end web design',
    'startup websites',
    'SaaS website design',
    'landing page design',
    'website development India',
  ],
  authors: [{ name: 'Syntory Media', url: 'https://syntorymedia.com' }],
  creator: 'Syntory Media',
  publisher: 'Syntory Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://syntorymedia.com',
    siteName: 'Syntory Media',
    title: 'Syntory Media | Premium Web Design Agency',
    description: 'Stop building on rented land. We build authority-generating digital homes that turn traffic into high-ticket clients.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Syntory Media - Premium Web Design Agency in Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntory Media | Premium Web Design Agency',
    description: 'Stop building on rented land. We build premium digital homes that turn traffic into high-ticket clients.',
    images: ['/og-image.png'],
    creator: '@syntorymedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${bricolage.variable} ${fragmentMono.variable} scroll-smooth`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-cream selection:bg-primary selection:text-white min-h-screen relative overflow-x-hidden">
        <ScrollManager>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ScrollManager>
      </body>
    </html>
  );
}
