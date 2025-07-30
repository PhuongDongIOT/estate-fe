'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

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

export function ImageCarousel({
  images,
  height = 300,
  rounded = 'rounded-lg',
  className = '2/3 md:w-2/4',
  setActiveIndex
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  //   const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollNext(emblaApi.canScrollNext());
    if (setActiveIndex) setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setActiveIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  //   const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img) => (
            <div className={cn(className, ' flex-shrink-0 pr-4')} key={img.id}>
              <div className={`relative overflow-hidden h-36 ${rounded}`}>
                <Image
                  src={img.src}
                  alt={img.alt || 'carousel image'}
                  width={800}
                  height={height}
                  className={`object-cover w-auto h-[${height}px]`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-[-20px] -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10 disabled:opacity-30"
        disabled={!canScrollPrev}
      >
        <ChevronLeft size={20} />
      </button> */}
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-[-30px] -translate-y-1/2 shadow p-2 z-10 disabled:opacity-30"
        disabled={!canScrollNext}
      >
        <ChevronRight size={56} className="text-black" />
      </button>
    </div>
  );
}
