import { Star, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type PartnerCardProps = {
  images: string[];
  partnerName: string;
  partnerType?: string;
  location: string;
  rating: number;
  reviewsCount: number;
  description: string;
  ctaLabel?: string;
  onClickCTA?: () => void;
  tags?: string[];
  logoUrl?: string;
};

export const PartnerCard = ({
  images,
  partnerName,
  partnerType = 'Partner',
  location,
  rating,
  reviewsCount,
  description,
  ctaLabel = 'Check availability',
  onClickCTA,
  tags = [],
  logoUrl
}: PartnerCardProps) => {
  return (
    <div className="max-w-5xl mx-auto overflow-hidden p-6 flex flex-col md:flex-row gap-6">
      <div className="grid grid-cols-3 gap-2 md:w-1/2">
        <Image
          height={1080}
          width={1920}
          src={images[0]}
          alt="Main"
          className="col-span-3 md:col-span-2 rounded-xl w-full h-48 md:h-full object-cover"
        />
        <div className="hidden md:flex flex-col gap-2">
          <Image
            height={1080}
            width={1920}
            src={images[1]}
            alt="thumb1"
            className="rounded-xl w-full h-24 object-cover"
          />
          <Image
            height={1080}
            width={1920}
            src={images[2]}
            alt="thumb2"
            className="rounded-xl w-full h-24 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between md:w-1/2">
        <div className="flex items-start gap-4">
          <div>
            <div className="flex items-start gap-4">
              {logoUrl && (
                <Image
                  height={256}
                  width={256}
                  src={logoUrl}
                  alt="Logo"
                  className="w-12 h-12 rounded-sm object-cover"
                />
              )}
              <div>
                <p className="text-xs uppercase text-gray-400 tracking-wider">{partnerType}</p>
                <h3 className="text-2xl font-bold text-gray-900">{partnerName}</h3>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-1 gap-2">
              <Star className="w-4 h-4 text-indigo-500 fill-transparent" />
              <span className="font-semibold text-gray-700">{rating}</span>
              <span>({reviewsCount} reviews)</span>
              <MapPin className="w-4 h-4 ml-2" />
              <span>{location}</span>
            </div>
            {tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="font-normal text-sm text-gray-700 mt-4 line-clamp-3">{description}</p>

        <div className="mt-4 flex items-center gap-3">
          {onClickCTA && (
            <button
              onClick={onClickCTA}
              className="ml-auto bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm px-5 py-2 transition-all"
            >
              {ctaLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
