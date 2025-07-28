'use client';

import React, { useState } from 'react';

type Province = {
  name: string;
  color?: string;
  image: string;
};

type ProvinceColumnProps = {
  provinces: Province[];
};

export function ProvinceColumn({ provinces }: ProvinceColumnProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <div
        className="flex h-[40vh] md:h-[60vh] w-screen transition-all duration-300 ease-in-out group"
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {provinces.map((province, index) => {
          return (
            <div
              key={index}
              className={`transition-all duration-300 ease-in-out h-[40vh] md:h-[60vh] w-1/5 z-10 ${
                province.color
              } ${!isHover && index === 0 ? 'w-1/3' : ''} hover:w-1/2`}
              style={{
                background: `url(${province.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <div className="h-full flex items-center justify-center text-white text-lg md:text-2xl font-medium pt-16">
                {province.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
