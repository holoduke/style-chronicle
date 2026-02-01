import { fashionEras } from '@/lib/fashionEras';
import FashionCard from '@/components/features/FashionCard';

export const metadata = {
  title: 'All Fashion Eras - Complete Fashion History Timeline',
  description: 'Explore our complete collection of 13 fashion eras from 1900 to today. From Edwardian elegance to digital age chic, discover over 120 years of fashion evolution.',
  keywords: ['fashion timeline', 'fashion history', 'all fashion eras', 'vintage fashion', 'fashion decades', 'style evolution'],
  openGraph: {
    title: 'All Fashion Eras | StyleChronicle',
    description: 'Explore our complete collection of 13 fashion eras from 1900 to today.',
    images: [
      {
        url: '/images/2020s-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Fashion Through the Ages',
      },
    ],
  },
};

export default function ErasPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#e94560 1px, transparent 1px), linear-gradient(90deg, #e94560 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#f39c12] text-sm font-medium tracking-wider uppercase">
              Complete Collection
            </span>
            <h1 className="section-heading mt-4">
              All Fashion Eras
            </h1>
            <p className="text-white/60 text-lg mt-6">
              From the Edwardian elegance of 1900 to today&apos;s digital age style.
              Explore {fashionEras.length} distinct fashion decades.
            </p>
          </div>
        </div>
      </section>

      {/* Eras Grid */}
      <section className="py-16 md:py-24 bg-[#0f0f1a]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fashionEras.map((era, index) => (
              <FashionCard key={era.id} era={era} index={index} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-[#e94560]" style={{ fontFamily: 'Playfair Display, serif' }}>
                120+
              </span>
              <p className="text-white/60 mt-2">Years of Fashion</p>
            </div>

            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-[#f39c12]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {fashionEras.length}
              </span>
              <p className="text-white/60 mt-2">Distinct Eras</p>
            </div>

            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-[#e94560]" style={{ fontFamily: 'Playfair Display, serif' }}>
                50+
              </span>
              <p className="text-white/60 mt-2">Style Icons</p>
            </div>

            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-[#f39c12]" style={{ fontFamily: 'Playfair Display, serif' }}>
                100+
              </span>
              <p className="text-white/60 mt-2">Fashion Images</p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD for collection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'All Fashion Eras - StyleChronicle',
            description: 'Complete collection of 13 fashion eras from 1900 to today.',
            url: 'https://stylechronicle.holoduke.nl/eras',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: fashionEras.map((era, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `https://stylechronicle.holoduke.nl/era/${era.id}`,
                name: `${era.decade} - ${era.title}`,
              })),
            },
          }),
        }}
      />
    </div>
  );
}
