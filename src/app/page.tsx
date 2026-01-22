import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Work } from '@/components/Work';
import { Comparison } from '@/components/Comparison';
import { Pricing } from '@/components/Pricing';
import { Process } from '@/components/Process';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { Metadata } from 'next';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Syntory Media | Premium Web Design Agency',
  description: 'Stop building on rented land. We build authority-generating digital homes that turn traffic into high-ticket clients.',
  openGraph: {
    title: 'Syntory Media | Premium Web Design Agency',
    description: 'Stop building on rented land. We build premium digital homes that turn traffic into high-ticket clients.',
    url: 'https://syntorymedia.com',
    siteName: 'Syntory Media',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Syntory Media - Premium Web Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntory Media | Premium Web Design Agency',
    description: 'Stop building on rented land. We build premium digital homes.',
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
      <Comparison />
      <Pricing />
      <Process />
      <Team />
      <Testimonials />
      <FAQ />
    </>
  );
}
