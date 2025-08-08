import { Play, ExternalLink } from 'lucide-react';
import React from 'react';

type InfoCard = {
  title: string;
  value: string;
  subValue?: string;
  bgColor?: string; // màu nền tuỳ chỉnh
  textColor?: string;
  onClick?: () => void;
};

type NewsCard = {
  image?: string;
  title: string;
  date: string;
  onClick?: () => void;
};

type RealEstateOverviewProps = {
  image: string;
  videoLength?: string;
  mainTitle: string;
  subDescription: string;
  postedDate: string;
  status?: string;
  price?: string;
  area?: string;
  infoCards: InfoCard[];
  newsCards: NewsCard[];
  videoUrl?: string;
};

export const RealEstateOverview: React.FC<RealEstateOverviewProps> = ({
  image,
  videoLength,
  mainTitle,
  subDescription,
  postedDate,
  status,
  price,
  area,
  infoCards,
  newsCards,
  videoUrl
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="relative overflow-hidden group shadow-md">
          <img
            src={image}
            alt={mainTitle}
            className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
          />

          {videoLength && (
            <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1">
              {videoLength}
            </span>
          )}

          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition"
            >
              <Play className="w-12 h-12 text-white" />
            </a>
          )}
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            {mainTitle}
          </h2>
          <p className="text-sm text-gray-500 mt-1">{subDescription}</p>
          <span className="text-xs text-gray-400">{postedDate}</span>
        </div>

        <div className="flex flex-wrap gap-3 mt-3 text-sm">
          {status && (
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-sm">{status}</span>
          )}
          {price && (
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-sm">Giá: {price}</span>
          )}
          {area && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-sm ">
              Diện tích: {area}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {infoCards.map((card, idx) => (
          <div
            key={idx}
            onClick={card.onClick}
            className={`rounded-sm p-3 cursor-pointer transition transform hover:-translate-y-1 hover:shadow-lg ${card.bgColor || 'bg-blue-50'} ${card.textColor || 'text-gray-800'}`}
          >
            <h3 className="text-sm font-medium">{card.title}</h3>
            <p className="text-lg font-bold">{card.value}</p>
            {card.subValue && <p className="text-xs opacity-80">{card.subValue}</p>}
          </div>
        ))}

        {newsCards.map((news, idx) => (
          <div
            key={idx}
            onClick={news.onClick}
            className="flex items-center gap-3 bg-purple-50 rounded-xl p-3 hover:bg-purple-100 hover:shadow-md transition cursor-pointer"
          >
            {news.image && (
              <img
                src={news.image}
                alt={news.title}
                className="w-14 h-14 object-cover rounded-lg"
              />
            )}
            <div className="flex flex-col">
              <h4 className="text-sm font-medium line-clamp-2">{news.title}</h4>
              <span className="text-xs text-gray-500">{news.date}</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};
