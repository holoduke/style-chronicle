'use client';

import { useEffect, useRef, useState } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import Image from 'next/image';

export default function MasonryGrid({ images, eraId }) {
  const gridRef = useRef(null);
  const [loadedItems, setLoadedItems] = useState(new Set());
  const [masonryInstance, setMasonryInstance] = useState(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const grid = gridRef.current;
    const masonry = new Masonry(grid, {
      itemSelector: '.masonry-item',
      columnWidth: '.masonry-sizer',
      percentPosition: true,
      gutter: 16,
      transitionDuration: '0.4s'
    });

    setMasonryInstance(masonry);

    // Handle image loading with animation
    const imgLoad = imagesLoaded(grid);
    imgLoad.on('progress', (instance, image) => {
      if (image.isLoaded) {
        const item = image.img.closest('.masonry-item');
        if (item) {
          item.classList.add('loaded');
          masonry.layout();
        }
      }
    });

    return () => {
      masonry.destroy();
    };
  }, [images, eraId]);

  const handleItemLoad = (index) => {
    setLoadedItems(prev => new Set([...prev, index]));
    if (masonryInstance) {
      masonryInstance.layout();
    }
  };

  // Generate images array with varied heights - show both male and female
  const demoImages = images || [
    { id: 1, src: `/images/${eraId}-female-1.jpg`, alt: `${eraId} fashion`, height: 'tall' },
    { id: 2, src: `/images/${eraId}-male-1.jpg`, alt: `${eraId} fashion`, height: 'medium' },
    { id: 3, src: `/images/${eraId}-female-2.jpg`, alt: `${eraId} fashion`, height: 'medium' },
    { id: 4, src: `/images/${eraId}-mixed-1.jpg`, alt: `${eraId} fashion`, height: 'tall' },
    { id: 5, src: `/images/${eraId}-male-2.jpg`, alt: `${eraId} fashion`, height: 'short' },
    { id: 6, src: `/images/${eraId}-female-3.jpg`, alt: `${eraId} fashion`, height: 'medium' },
    { id: 7, src: `/images/${eraId}-male-3.jpg`, alt: `${eraId} fashion`, height: 'tall' },
    { id: 8, src: `/images/${eraId}-mixed-2.jpg`, alt: `${eraId} fashion`, height: 'medium' },
  ];

  const getHeightClass = (height) => {
    switch (height) {
      case 'tall': return 'h-96 md:h-[450px]';
      case 'short': return 'h-48 md:h-64';
      default: return 'h-64 md:h-80';
    }
  };

  return (
    <div ref={gridRef} className="masonry-grid">
      {/* Sizer element for Masonry */}
      <div className="masonry-sizer w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]" />

      {demoImages.map((image, index) => (
        <div
          key={image.id}
          className={`masonry-item w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] mb-4`}
          style={{
            opacity: loadedItems.has(index) ? 1 : 0,
            transform: loadedItems.has(index) ? 'translateY(0)' : 'translateY(30px)',
            transition: `opacity 0.5s ease-out ${index * 100}ms, transform 0.5s ease-out ${index * 100}ms`
          }}
        >
          <div className={`relative overflow-hidden rounded-xl group ${getHeightClass(image.height)}`}>
            {/* Gradient placeholder background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/20 to-[#f39c12]/20 animate-pulse" />

            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover relative z-10 group-hover:scale-110 transition-transform duration-700"
              onLoad={() => handleItemLoad(index)}
              onError={() => handleItemLoad(index)}
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 z-20" />

            {/* Zoom icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
