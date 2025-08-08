'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export type RealEstateGalleryProps = {
  images: string[];
  status?: string;
  pricePerSqm?: string;
  areaSize?: string;
  moreImagesText?: string;
};

export function RealEstateGallery({
  images,
  status = 'Đang mở bán',
  pricePerSqm = '37,5 – 54,97',
  areaSize = '27',
  moreImagesText = '+12 ảnh'
}: RealEstateGalleryProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-1 overflow-hidden shadow-xl"
    >
      <div className="relative group overflow-hidden">
        <img
          src={images[0]}
          alt="Main View"
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 shadow">
          {status}
        </span>
        <div className="absolute bottom-3 left-3 flex items-center gap-6 text-white text-sm font-medium bg-black/10 p-2 backdrop-blur-md">
          <div>
            <div className="text-lg font-bold">{pricePerSqm}</div>
            <div className="text-xs">triệu/m²</div>
          </div>
          <div className="border-l border-white h-6"></div>
          <div>
            <div className="text-lg font-bold">{areaSize}</div>
            <div className="text-xs">ha</div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-1">
          {images.slice(1).map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden shadow-sm">
              <img
                src={src}
                alt={`Gallery ${idx + 2}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {idx === images.length - 2 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-sm font-semibold">
                  {moreImagesText}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
