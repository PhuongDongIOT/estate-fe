'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type NewsItem = {
  id: number;
  title: string;
  image: string;
  avatar?: string;
};

type Props = {
  items: NewsItem[];
};

export function NewsCarousel({ items }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div className="w-2/3 md:w-1/4 pr-4 flex-shrink-0 group" key={item.id}>
              <div className="overflow-hidden relative">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[200px] object-cover"
                  />

                  <div className="absolute bottom-2 left-2">
                    <span className="text-2xl font-bold text-white group-hover:text-4xl transition-all duration-150">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="absolute top-0 right-0 w-full h-0 py-0 px-4 group-hover:h-full group-hover:py-8 delay-75 transition-all duration-150">
                    <div className="h-full border-r-[1px] border-white py-8 px-2">
                      <div className="h-full border-r-[1px] border-white"></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 py-2 items-start">
                  {item.avatar ? (
                    <div className="w-32 group-hover:w-0 group-hover:h-0 delay-150 transition-all duration-150">
                      <Image
                        src={item.avatar}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <p className="text-md font-medium text-gray-800 line-clamp-2 group-hover:text-ls delay-150 transition-all duration-150">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute top-1/3 left-[-20px] -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10 disabled:opacity-30"
        disabled={!canScrollPrev}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/3 right-[-20px] -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10 disabled:opacity-30"
        disabled={!canScrollNext}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
