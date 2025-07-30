import Image from 'next/image';
import React from 'react';

type ArticleBoxProps = {
  image: string;
  title: string;
  link?: string;
  className?: string;
};

export function ArticleBox({ title, link = '#', className = '' }: ArticleBoxProps) {
  return (
    <a
      href={link}
      className={`block overflow-hidden bg-white hover:shadow-md transition ${className}`}
    >
      <div className="relative">
        <Image
          className="h-full w-auto object-cover transition duration-300"
          src={'/images/estate.jpg'}
          width={1920}
          height={1080}
          alt="Ảnh bất động sản"
          itemProp="image"
          loading="lazy"
        />
      </div>
      <div className="p-3 text-xs font-medium text-gray-800 leading-snug line-clamp-2">{title}</div>
    </a>
  );
}
