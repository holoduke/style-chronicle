import Link from 'next/link';
import { fashionEras } from '@/lib/fashionEras';
import FashionCard from '@/components/features/FashionCard';
import DidYouKnow from '@/components/features/DidYouKnow';
import HeroSection from '@/components/features/HeroSection';

export default function HomePage() {
  // Get random "Did You Know" facts for SSR
  const randomFacts = [...fashionEras]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Client Component for animations */}
      <HeroSection />

      {/* Modern Era Highlight */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#f39c12] text-sm font-medium tracking-wider uppercase">
              Present Day
            </span>
            <h2 className="section-heading mt-4">
              The 2020s
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4">
              Where comfort meets couture in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <FashionCard era={fashionEras[0]} index={0} />
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {fashionEras[0].subtitle}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {fashionEras[0].description}
                </p>
              </div>

              <DidYouKnow fact={fashionEras[0].didYouKnow} color={fashionEras[0].colors[0]} />

              <div>
                <h4 className="text-lg font-semibold mb-3 text-[#e94560]">Key Styles</h4>
                <ul className="space-y-2">
                  {fashionEras[0].keyStyles.map((style, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <span className="w-2 h-2 rounded-full bg-[#f39c12]" />
                      {style}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Through Time */}
      <section className="py-20 md:py-32 bg-[#0f0f1a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#f39c12] text-sm font-medium tracking-wider uppercase">
              Travel Back
            </span>
            <h2 className="section-heading mt-4">
              Journey Through Time
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4">
              Scroll through decades of fashion evolution
            </p>
          </div>

          {/* Era Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {fashionEras.slice(1).map((era, index) => (
              <FashionCard key={era.id} era={era} index={index} variant="compact" />
            ))}
          </div>

          {/* Random Did You Know Facts */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {randomFacts.map((era, index) => (
              <div key={era.id}>
                <DidYouKnow fact={era.didYouKnow} color={era.colors[index % era.colors.length]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #e94560 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">
              Ready to Explore?
            </h2>
            <p className="text-white/60 text-lg mt-6 mb-10">
              Dive deep into each decade and discover the stories, icons, and styles that shaped fashion history.
            </p>
            <Link href="/eras" className="btn-primary inline-flex items-center gap-2">
              View All Eras
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
