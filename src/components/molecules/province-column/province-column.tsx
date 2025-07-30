'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';

type Province = {
  name: string;
  color?: string;
  image: string;
};

type ProvinceColumnProps = {
  provinces: Province[];
  className?: string;
};

export function ProvinceColumn({
  provinces,
  className = 'h-[40vh] md:h-[60vh]'
}: ProvinceColumnProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <div
        className={cn('flex w-screen transition-all duration-300 ease-in-out', className)}
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {provinces.map((province, index) => {
          return (
            <div
              key={index}
              className={cn(
                `transition-all duration-300 ease-in-out w-1/5 z-10 ${
                  province.color
                } ${!isHover && index === 0 ? 'w-1/3' : ''}  group hover:w-1/2`,
                className
              )}
              style={{
                background: `url(${province.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <div className="h-full flex flex-col items-center justify-center text-white text-lg md:text-2xl font-medium pt-16">
                {province.name}
                <div className="w-0 group-hover:w-full pt-2 flex flex-col justify-center items-center transition-width duration-200">
                  <div className="mx-auto w-1/3 h-[1px] bg-white"></div>
                  <div className="mt-2 mx-auto w-3/4 h-[1px] bg-white"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
