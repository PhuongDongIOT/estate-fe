'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ImageCarousel } from '@/components/molecules/image-carousel/image-carousel';

type ImageWithCarouselProps = {
  imageList: { id: number; src: string; alt?: string }[];
  height?: number;
  rounded?: string;
  className?: string;
  carouselClassName?: string;
};

export const ImageWithCarousel: React.FC<ImageWithCarouselProps> = ({
  imageList,
  height = 350,
  rounded = 'rounded-xl',
  className = '',
  carouselClassName = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="w-full h-[75vh] flex justify-end ">
        <Image
          className="h-full w-auto object-cover rounded-xl"
          src={imageList[activeIndex].src}
          width={1920}
          height={1080}
          alt="Ảnh bất động sản"
          itemProp="image"
          loading="lazy"
        />
      </div>
      <div className={`absolute bottom-0 -left-[20%] max-w-md w-full ${carouselClassName}`}>
        <ImageCarousel
          setActiveIndex={setActiveIndex}
          images={imageList}
          height={height}
          rounded={rounded}
        />
      </div>
    </div>
  );
};
