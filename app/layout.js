import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  metadataBase: new URL('https://stylechronicle.holoduke.nl'),
  title: {
    default: 'StyleChronicle - A Visual Journey Through Fashion History | 1900s to Today',
    template: '%s | StyleChronicle'
  },
  description: 'Explore 120+ years of fashion evolution from Edwardian elegance to digital age chic. Discover iconic styles, fashion icons, and trends from every decade.',
  keywords: ['fashion history', 'vintage fashion', 'fashion timeline', 'style evolution', '1920s fashion', '1950s fashion', '1980s fashion', 'fashion decades', 'historical fashion', 'fashion trends'],
  authors: [{ name: 'StyleChronicle' }],
  creator: 'StyleChronicle',
  publisher: 'StyleChronicle',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stylechronicle.holoduke.nl',
    siteName: 'StyleChronicle',
    title: 'StyleChronicle - A Visual Journey Through Fashion History',
    description: 'Explore 120+ years of fashion evolution from Edwardian elegance to digital age chic.',
    images: [
      {
        url: '/images/2020s-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'StyleChronicle - Fashion Through the Ages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StyleChronicle - Fashion History Timeline',
    description: 'Explore 120+ years of fashion evolution from 1900 to today.',
    images: ['/images/2020s-hero.jpg'],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://stylechronicle.holoduke.nl" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'StyleChronicle',
              description: 'A visual journey through fashion history from 1900 to today',
              url: 'https://stylechronicle.holoduke.nl',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://stylechronicle.holoduke.nl/era/{search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
