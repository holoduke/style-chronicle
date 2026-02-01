'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fashionEras } from '@/lib/fashionEras';

export default function EraTimeline({ currentEraId }) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const router = useRouter();

  // Scroll to center the active item
  useEffect(() => {
    if (!scrollRef.current || !currentEraId) return;

    const container = scrollRef.current;
    const activeIndex = fashionEras.findIndex(era => era.id === currentEraId);
    const items = container.querySelectorAll('.era-item');

    if (items[activeIndex]) {
      const item = items[activeIndex];
      const containerWidth = container.offsetWidth;
      const itemLeft = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const scrollTo = itemLeft - (containerWidth / 2) + (itemWidth / 2);

      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  }, [currentEraId]);

  // Drag to scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleEraClick = (eraId) => {
    router.push(`/era/${eraId}`);
  };

  return (
    <div className="py-6">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-3 px-4 -mx-4 cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Spacer for centering first item */}
        <div className="flex-shrink-0 w-[calc(50vw-100px)]" />

        {fashionEras.map((era, index) => {
          const isActive = era.id === currentEraId;
          const colors = era.colors || ['#e94560', '#f39c12'];

          return (
            <div
              key={era.id}
              className="era-item flex-shrink-0"
              style={{
                opacity: 0,
                animation: `fadeIn 0.3s ease-out ${index * 30}ms forwards`
              }}
            >
              <button
                onClick={() => handleEraClick(era.id)}
                className={`block p-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-white/15 ring-2 ring-[#e94560] scale-110'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                style={{ minWidth: '110px' }}
              >
                <div className="text-center">
                  <span
                    className={`text-xl font-bold block ${isActive ? '' : 'text-white/70'}`}
                    style={{
                      color: isActive ? colors[0] : undefined,
                      fontFamily: 'Playfair Display, serif'
                    }}
                  >
                    {era.decade}
                  </span>
                  <span className="text-xs text-white/50 mt-1 block">
                    {era.years.split('-')[0]}
                  </span>
                </div>
              </button>
            </div>
          );
        })}

        {/* Spacer for centering last item */}
        <div className="flex-shrink-0 w-[calc(50vw-100px)]" />
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-3 gap-2 text-white/30 text-xs">
        <span>← drag to scroll →</span>
      </div>
    </div>
  );
}
