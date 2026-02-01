'use client';

import dynamic from 'next/dynamic';

// Dynamic import for MasonryGrid to avoid SSR issues with masonry-layout
const MasonryGrid = dynamic(() => import('@/components/features/MasonryGrid'), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="aspect-[3/4] bg-white/5 rounded-xl animate-pulse" />
      ))}
    </div>
  ),
});

export default function GallerySection({ eraId, decade }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            {decade} Fashion Gallery
          </h3>
          <p className="text-white/60 mt-4">
            Explore the defining looks of the era
          </p>
        </div>

        <MasonryGrid eraId={eraId} />
      </div>
    </section>
  );
}
