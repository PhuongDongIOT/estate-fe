import Image from 'next/image';
import React from 'react';

export type EstateIntroProps = {
  name: string;
  description: string;
  image: string;
  address: string;
  price: string;
  area?: string;
  tags?: string[];
};

export const EstateIntro: React.FC<EstateIntroProps> = ({
  name,
  description,
  image,
  address,
  price,
  area,
  tags = []
}) => (
  <div
    className="max-w-3xl mx-auto overflow-hidden flex flex-col md:flex-row transition hover:scale-[1.02] hover:shadow-indigo-300 duration-300 group hover:border-r hover:border-gray-300/50"
    itemScope
    itemType="https://schema.org/Residence"
  >
    <div className="md:w-1/2 w-full flex-shrink-0 relative">
      <Image
        className="h-56 md:h-full w-full object-cover transition duration-300"
        width={1920}
        height={1080}
        src={image}
        alt={`Ảnh bất động sản ${name}`}
        itemProp="image"
        loading="lazy"
      />
      <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black to-transparent transition duration-300 p-2 opacity-0 group-hover:opacity-50">
        <div className="w-full h-full border-4 border-white p-2">
          <div className="w-full h-full border-2 border-slate-100 flex items-center justify-center">
            <p className="text-4xl text-white font-bold">+</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 group-hover:bottom-8 group-hover:right-8 transition duration-300 z-10 opacity-90 group-hover:opacity-100">
        <div className="flex gap-2">
          <div className="h-16">
            <Image
              className="h-full w-auto object-cover transition duration-300"
              src={image}
              width={1920}
              height={1080}
              alt={`Ảnh bất động sản ${name}`}
              itemProp="image"
              loading="lazy"
            />
          </div>
          <div className="h-16">
            <div className="h-16 w-16 border border-color-white overflow-hidden flex items-center justify-center text-white font-semibold">
              <p className="text-2xl">+5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="p-2 pt-2 md:p-4 md:pt-0 flex flex-col justify-between w-full">
      <header>
        <div className="flex items-center gap-2 md:mb-2">
          <h1
            className="uppercase tracking-wide text-sm text-indigo-700 font-bold group-hover:border-b-2 group-hover:border-slate-400/80 pb-1 transition-all duration-200"
            itemProp="name"
          >
            {name}
          </h1>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-3xs md:text-2xs font-semibold shadow">
            Mới
          </span>
        </div>
        <h2 className="text-xs md:text-sm font-semibold text-gray-900" itemProp="address">
          {address}
        </h2>
      </header>

      {area && (
        <p className="mt-2 text-gray-500 text-2xs font-bold md:text-xs">
          Diện tích:{' '}
          <span className="font-medium" itemProp="floorSize">
            {area}
          </span>
        </p>
      )}
      <p className="mt-2 text-gray-600 text-2xs md:text-xs" itemProp="description">
        {description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2" aria-label="Tiện ích nổi bật">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full text-3xs md:text-2xs font-medium shadow"
          >
            {tag}
          </span>
        ))}
      </div>
      <footer className="mt-6 grid grid-cols-5 items-center gap-4">
        <span
          className="text-lg col-span-3 md:text-xl text-green-600 drop-shadow uppercase"
          itemProp="price"
        >
          {price}
        </span>
        <a
          href="tel:0123456789"
          className="col-span-2 text-sm px-2 py-2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-xl shadow-lg outline-none hover:scale-105 hover:bg-indigo-800 transition font-bold group-hover:border-4 group-hover:border-violet-50"
          aria-label={`Liên hệ tư vấn về ${name}`}
        >
          Liên hệ ngay
        </a>
      </footer>
    </div>
  </div>
);
