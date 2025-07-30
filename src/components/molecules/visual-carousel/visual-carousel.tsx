'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback } from 'react';

type ImageItem = {
  src: string;
  title?: string;
  subtitle?: string;
  label?: string;
};

type VisualCarouselProps = {
  images: ImageItem[];
  autoplayDelay?: number;
  dragFree?: boolean;
  className?: string;
  slideClassName?: string;
};

export function VisualCarousel({
  images = [],
  autoplayDelay = 2000,
  dragFree = true,
  className = '',
  slideClassName = ''
}: VisualCarouselProps) {
  const [carouselRef, carouselApi] = useEmblaCarousel({ loop: true, dragFree }, [
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false })
  ]);

  const handlePrev = useCallback(() => {
    if (carouselApi) carouselApi.scrollPrev();
  }, [carouselApi]);

  const handleNext = useCallback(() => {
    if (carouselApi) carouselApi.scrollNext();
  }, [carouselApi]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex">
          {images.map(({ src, label, title, subtitle }, index) => (
            <div
              key={index}
              className={`flex-[0_0_80%] md:flex-[0_0_30%] px-2 relative group ${slideClassName}`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full h-64 object-cover rounded-xl group-hover:scale-110 transactioon-all duration-300"
              />
              {label && (
                <div className="absolute -left-[5%] top-[50%] transform -translate-y-1/2 group-hover:left-[5%] group-hover:top-[15%] group-hover:translate-y-0 transition-all duration-200">
                  <p className="uppercase text-3xl group-hover:text-4xl font-bold text-white rotate-90 group-hover:rotate-0 drop-shadow transition-all duration-200">
                    {label}
                  </p>
                </div>
              )}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h3 className="uppercase text-xl group-hover:text-2xl font-bold drop-shadow transition-all duration-200">
                  {title}
                </h3>
                <p className="h-[1px] bg-white w-0 group-hover:w-1/2 mx-auto transition-width duration-200"></p>
                <p className="text-xs drop-shadow">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
