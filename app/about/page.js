import Link from 'next/link';

export const metadata = {
  title: 'About StyleChronicle - Fashion History Visual Journey',
  description: 'Learn about StyleChronicle, a visual journey through over a century of fashion history. Discover our mission to make fashion history accessible and engaging.',
  keywords: ['about StyleChronicle', 'fashion history website', 'fashion education', 'style history'],
  openGraph: {
    title: 'About StyleChronicle',
    description: 'A visual journey through fashion history from 1900 to today.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #e94560 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#f39c12] text-sm font-medium tracking-wider uppercase">
              About This Project
            </span>
            <h1 className="section-heading mt-4">
              <span className="text-[#e94560]">Style</span>Chronicle
            </h1>
            <p className="text-white/70 text-xl mt-6 leading-relaxed">
              A visual journey through over a century of fashion history, exploring how style
              has reflected society&apos;s evolution, cultural shifts, and the eternal human desire
              for self-expression.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24 bg-[#0f0f1a]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#e94560]/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#e94560]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Mission
              </h2>
              <p className="text-white/70 leading-relaxed">
                StyleChronicle aims to make fashion history accessible and engaging for everyone.
                We believe that understanding how we dressed in the past helps us appreciate
                the present and imagine the future of fashion.
              </p>
              <p className="text-white/70 leading-relaxed">
                Each era tells a story - of social change, technological advancement, cultural
                revolution, and individual expression. Through curated images and historical
                context, we bring these stories to life.
              </p>
            </div>

            {/* Curated Content */}
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#f39c12]/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#f39c12]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Curated Imagery
              </h2>
              <p className="text-white/70 leading-relaxed">
                Every image on StyleChronicle is carefully selected to represent the authentic
                spirit of each fashion era. We focus on capturing the essence of each decade&apos;s
                style - from silhouettes and fabrics to attitudes and aesthetics.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our visual collection spans from the opulent Edwardian era to contemporary
                streetwear, showcasing both haute couture influences and everyday fashion
                that real people wore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              What We Cover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
                <span className="text-pink-400 text-lg">W</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Women&apos;s Fashion</h3>
              <p className="text-white/60">
                From corsets to crop tops, explore how women&apos;s fashion has evolved
                as a reflection of changing social roles and freedoms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <span className="text-blue-400 text-lg">M</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Men&apos;s Fashion</h3>
              <p className="text-white/60">
                From three-piece suits to streetwear, discover how men&apos;s style
                has transformed through rebellion, conformity, and creativity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <span className="text-purple-400 text-lg">+</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Day-to-Day Style</h3>
              <p className="text-white/60">
                Beyond haute couture, we focus on everyday fashion - the clothes
                real people wore on the streets, at work, and at play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0f0f1a]">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Start Your Journey
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Explore over a century of fashion history, from the elegant Edwardian era
              to today&apos;s digital age style revolution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/era/2020s" className="btn-primary">
                Start with 2020s
              </Link>
              <Link href="/era/1920s" className="btn-outline">
                Jump to 1920s
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About StyleChronicle',
            description: 'A visual journey through fashion history from 1900 to today.',
            url: 'https://stylechronicle.holoduke.nl/about',
            mainEntity: {
              '@type': 'Organization',
              name: 'StyleChronicle',
              description: 'A visual journey through fashion history',
              url: 'https://stylechronicle.holoduke.nl',
            },
          }),
        }}
      />
    </div>
  );
}
