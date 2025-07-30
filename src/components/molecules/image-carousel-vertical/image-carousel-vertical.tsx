'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect } from 'react';

import { cn } from '@/lib/utils';

type ImageItem = {
  id: number;
  src: string;
  alt?: string;
};

type Props = {
  images: ImageItem[];
  height?: number; // default 300
  rounded?: string;
  className?: string;
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
};

export function ImageCarouselVertical({
  images,
  className,
  rounded = 'rounded-lg',
  setActiveIndex
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: 'y', // 👈 chiều dọc
    align: 'center'
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    if (setActiveIndex) setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setActiveIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="relative max-h-screen">
      <div className="relative mx-auto w-full">
        <div className={`overflow-hidden h-screen`} ref={emblaRef}>
          <div className="flex flex-col h-screen">
            {images.map((img) => (
              <div key={img.id} className="shrink-0 py-2">
                <div className={cn(`relative overflow-hidden`, className, rounded)}>
                  <Image
                    src={img.src}
                    alt={img.alt || 'carousel image'}
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollNext}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 shadow-xl p-2 z-10"
      >
        <ChevronDown size={112} className="text-black" />
      </button>
    </div>
  );
}
