import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { fashionEras, getEraById, getAdjacentEras } from '@/lib/fashionEras';
import DidYouKnow from '@/components/features/DidYouKnow';
import GallerySection from '@/components/features/GallerySection';

// Generate static params for all eras
export async function generateStaticParams() {
  return fashionEras.map((era) => ({
    eraId: era.id,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { eraId } = await params;
  const era = getEraById(eraId);

  if (!era) {
    return {
      title: 'Era Not Found',
    };
  }

  return {
    title: `${era.decade} Fashion - ${era.title}`,
    description: `${era.description} Discover the key styles, fashion icons, and trends of the ${era.decade}.`,
    keywords: [
      `${era.decade} fashion`,
      `${era.decade} style`,
      era.title,
      ...era.keyStyles.slice(0, 3),
      ...era.femaleIcons,
      ...era.maleIcons,
    ],
    openGraph: {
      title: `${era.decade} Fashion - ${era.title} | StyleChronicle`,
      description: era.description,
      images: [
        {
          url: `/images/${era.id}-hero.jpg`,
          width: 1200,
          height: 630,
          alt: `${era.decade} fashion`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${era.decade} Fashion - ${era.title}`,
      description: era.description,
      images: [`/images/${era.id}-hero.jpg`],
    },
  };
}

export default async function EraPage({ params }) {
  const { eraId } = await params;
  const era = getEraById(eraId);

  if (!era) {
    notFound();
  }

  const { prev, next } = getAdjacentEras(eraId);
  const colors = era.colors || ['#e94560', '#f39c12', '#1a1a2e'];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-36 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={`/images/${eraId}-hero.jpg`}
            alt={`${era.decade} fashion`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Blur and darken overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/60" />
        </div>

        {/* Gradient Overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors[2]}cc 0%, ${colors[0]}40 50%, ${colors[1]}30 100%)`
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(${colors[0]} 1px, transparent 1px), linear-gradient(90deg, ${colors[0]} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
              style={{ backgroundColor: `${colors[0]}50`, color: 'white' }}
            >
              {era.years}
            </span>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white drop-shadow-lg"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The {era.decade}
            </h1>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-md"
              style={{ color: colors[1], fontFamily: 'Playfair Display, serif' }}
            >
              {era.title}
            </h2>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed drop-shadow">
              {era.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Styles Section */}
      <section className="py-16 md:py-24 bg-[#0f0f1a]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Key Styles */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Defining Styles
              </h3>
              <ul className="space-y-4">
                {era.keyStyles.map((style, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: `${colors[0]}30`, color: colors[0] }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-white/80 text-lg pt-1">{style}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icons */}
            <div>
              <div className="space-y-8">
                {/* Style Icons combined */}
                <div>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: colors[1] }}>
                    Style Icons of the Era
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[...era.femaleIcons, ...era.maleIcons].map((icon, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-white/5 text-white/70 text-sm border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Did You Know */}
                <DidYouKnow fact={era.didYouKnow} color={colors[0]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection eraId={eraId} decade={era.decade} />

      {/* Navigation */}
      <section className="py-16 bg-[#0f0f1a] border-t border-white/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {prev ? (
              <Link
                href={`/era/${prev.id}`}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors w-full md:w-auto"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                  <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
                <div>
                  <span className="text-white/50 text-sm">Previous Era</span>
                  <p className="text-white font-semibold">{prev.decade} - {prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/eras"
              className="px-6 py-3 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
            >
              View All Eras
            </Link>

            {next ? (
              <Link
                href={`/era/${next.id}`}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors w-full md:w-auto"
              >
                <div className="text-right">
                  <span className="text-white/50 text-sm">Next Era</span>
                  <p className="text-white font-semibold">{next.decade} - {next.title}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* JSON-LD for this era */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${era.decade} Fashion - ${era.title}`,
            description: era.description,
            image: `https://stylechronicle.holoduke.nl/images/${era.id}-hero.jpg`,
            datePublished: '2024-01-01',
            author: {
              '@type': 'Organization',
              name: 'StyleChronicle',
            },
            publisher: {
              '@type': 'Organization',
              name: 'StyleChronicle',
              logo: {
                '@type': 'ImageObject',
                url: 'https://stylechronicle.holoduke.nl/images/2020s-hero.jpg',
              },
            },
          }),
        }}
      />
    </>
  );
}
