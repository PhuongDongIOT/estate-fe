'use client';

import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

type PropertyCardProps = {
  id: string | number;
  index: number;
  image: string;
  avatar?: string;
  title: string;
  price?: string;
  location?: string;
  area?: string;
  wrapperClassName?: string;
};

export const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  index,
  image,
  avatar,
  title,
  price = 'Giá liên hệ',
  location = 'Đang cập nhật',
  area = '',
  wrapperClassName = ''
}) => {
  return (
    <div
      className={cn('w-full flex-shrink-0 group border-b-[1px] border-gray-200', wrapperClassName)}
      key={id}
    >
      <div className="overflow-hidden relative">
        <div className="relative">
          <Image
            width={1920}
            height={1080}
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="px-2 py-1 bg-indigo-100/20 outline-indigo-500 outline-dashed outline-[1px]">
              <p className="text-4xl font-bold text-white mt-1">{price}</p>
            </div>
          </div>
          <div className="absolute bottom-2 left-2">
            <span className="text-2xl font-bold text-white group-hover:border bodder-white group-hover:text-4xl transition-all duration-150 p-1">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="absolute top-0 right-0 w-full h-0 py-0 px-4 group-hover:h-full group-hover:py-8 delay-75 transition-all duration-150">
            <div className="h-full border-r-[1px] border-white py-8 px-2">
              <div className="h-full border-r-[1px] border-white"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 py-3 px-2 items-start">
          <div className="flex gap-2 group-hover:gap-0 items-start">
            {avatar && (
              <div className="w-16 h-16 flex-shrink-0 group-hover:w-0 group-hover:h-0 overflow-hidden transition-all duration-150 delay-150">
                <Image src={avatar} alt={title} width={64} height={64} className="object-cover" />
              </div>
            )}

            <h3 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-lg transition-all duration-150 delay-150">
              {title}
            </h3>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-600">{location}</p>
            <p className="text-sm text-gray-600">{area && `Diện tích: ${area}`}</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 group-hover:opacity-0">
          <p className="text-lg font-bold text-blue-600 mt-1">{price}</p>
        </div>
      </div>
    </div>
  );
};
