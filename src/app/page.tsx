import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Work } from '@/components/Work';
import { Pricing } from '@/components/Pricing';
import { Process } from '@/components/Process';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { Metadata } from 'next';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Syntory Media | Website Design Agency for Founder-Led Brands',
  description: 'Syntory Media designs conversion-focused websites for founder-led brands with strategy, copy, SEO, and Next.js development that improve trust and lead quality.',
  openGraph: {
    title: 'Syntory Media | Website Design Agency for Founder-Led Brands',
    description: 'Syntory Media designs conversion-focused websites for founder-led brands with strategy, copy, SEO, and Next.js development.',
    url: 'https://syntorymedia.com',
    siteName: 'Syntory Media',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Syntory Media - Website Design Agency for Founder-Led Brands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntory Media | Website Design Agency for Founder-Led Brands',
    description: 'Syntory Media designs conversion-focused websites for founder-led brands with strategy, copy, SEO, and Next.js development.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Pricing />
      <Team />
      <FAQ />
    </>
  );
}
