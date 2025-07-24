import React from 'react';

export interface NewsCardProps {
  image: string;
  source: string;
  title: string;
  url: string;
  time: string;
  avatar?: string;
  category?: string;
  isVerified?: boolean;
  actions?: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
}

export const NewsCard: React.FC<NewsCardProps> = ({
  image,
  source,
  title,
  url,
  time,
  avatar,
  category,
  isVerified,
  actions,
  direction = 'vertical'
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`bloc hover:shadow-lg transition group ${
      direction === 'horizontal' ? 'flex max-w-2xl' : ''
    }`}
  >
    <div className={direction === 'horizontal' ? 'w-40 flex-shrink-0 relative' : 'relative'}>
      <img
        src={image}
        alt={title}
        className={`object-cover ${
          direction === 'horizontal' ? 'h-full w-full' : 'w-full h-44'
        } group-hover:brightness-90 transition`}
        loading="lazy"
      />
      {category && (
        <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
          {category}
        </span>
      )}
      {actions && <div className="absolute top-2 right-2">{actions}</div>}
    </div>
    <div className={`p-4 ${direction === 'horizontal' ? 'flex-1' : ''}`}>
      <div className="flex items-center gap-2 mb-2">
        {avatar && (
          <img src={avatar} alt={source} className="w-7 h-7 rounded-full border object-cover" />
        )}
        <span className="text-xs text-gray-700 font-semibold flex items-center gap-1">
          {source}
          {isVerified && (
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 7.293a1 1 0 00-1.414 0L9 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
            </svg>
          )}
        </span>
      </div>
      <h2 className="text-lg font-semibold text-blue-900 group-hover:text-indigo-700 transition line-clamp-2">
        {title}
      </h2>
      <div className="flex items-center justify-between mt-3">
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  </a>
);
