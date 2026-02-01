'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FashionCard({ era, index, variant = 'default' }) {
  const colors = era.colors || ['#ff6b81', '#ffb84d', '#1a1a2e'];

  if (variant === 'compact') {
    return (
      <div
        style={{ animationDelay: `${index * 100}ms` }}
        className="opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
      >
        <Link href={`/era/${era.id}`} className="group block">
          <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-gradient-to-br"
            style={{
              background: `linear-gradient(135deg, ${colors[0]}40, ${colors[1]}40, ${colors[2]}80)`
            }}
          >
            {/* Image area */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={`/images/${era.id}-female-1.jpg`}
                alt={`${era.decade} fashion`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-xs font-medium text-[#ffb84d] tracking-wider uppercase">
                {era.years}
              </span>
              <h3 className="text-lg font-bold text-white mt-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                {era.title}
              </h3>
              <p className="text-[#b3b3c3] text-sm mt-1 line-clamp-2">
                {era.subtitle}
              </p>
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{ animationDelay: `${index * 150}ms` }}
      className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
    >
      <Link href={`/era/${era.id}`} className="group block">
        <div
          className="relative overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-[3/4]"
          style={{
            background: `linear-gradient(135deg, ${colors[0]}30, ${colors[1]}30, ${colors[2]}60)`
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, ${colors[0]} 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Image */}
          <div className="absolute inset-0">
            <Image
              src={`/images/${era.id}-female-1.jpg`}
              alt={`${era.decade} fashion`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Decade Badge */}
          <div className="absolute top-4 left-4">
            <span
              className="px-4 py-2 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: colors[0] }}
            >
              {era.decade}
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="text-xs font-medium tracking-wider uppercase" style={{ color: colors[1] }}>
              {era.years}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              {era.title}
            </h3>
            <p className="text-[#ccccdb] text-base mt-2">
              {era.subtitle}
            </p>

            {/* Key Styles Preview */}
            <div className="mt-4 flex flex-wrap gap-2">
              {era.keyStyles.slice(0, 2).map((style, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#b3b3c3]">
                  {style}
                </span>
              ))}
            </div>

            {/* Explore Link */}
            <div className="mt-4 flex items-center gap-2 text-[#a5a5b8] group-hover:text-[#ff6b81] transition-colors">
              <span className="text-sm font-medium">Explore Era</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
