'use client';

import gsap from 'gsap';
import { LucideMapPin, LucideClock, LucideInfo } from 'lucide-react';
import React, { useRef, useEffect } from 'react';

type StatItem = {
  label: string;
  value: string;
  highlight?: boolean;
};

type Badge = {
  text: string;
  variant?: 'primary' | 'success' | 'warning' | 'outline';
};

type Props = {
  logoUrl?: string;
  title: string;
  subtitle?: string;
  fullAddress?: string;
  status?: string;
  statusColor?: string;
  rating?: number;
  reviewsCount?: number;
  priceRange?: string;
  completionDate?: string;
  stats?: StatItem[];
  progressPercent?: number;
  tags?: string[];
  badges?: Badge[];
  onViewDetails?: () => void;
  onContact?: () => void;
};

const badgeStyles: Record<string, string> = {
  primary: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  outline: 'border border-gray-300 text-gray-700 bg-white'
};

export default function ProjectOverview({
  logoUrl,
  title,
  subtitle,
  fullAddress,
  status,
  statusColor,
  rating,
  reviewsCount,
  priceRange,
  completionDate,
  stats = [],
  progressPercent = 0,
  tags = [],
  badges = [],
  onViewDetails,
  onContact
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (rootRef.current) {
      gsap.from(rootRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1
      });
    }
  }, []);

  return (
    <div
      ref={(el) => {
        rootRef.current = el;
      }}
      className="relative bg-white dark:bg-slate-800 dark:border-slate-700 overflow-hidden mx-auto transform will-change-transform"
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex gap-4 flex-1">
            {logoUrl && (
              <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                <img src={logoUrl} alt={`${title} logo`} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 truncate">
                  {title}
                </h2>
                {badges.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {badges.map((b, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          badgeStyles[b.variant || 'primary']
                        }`}
                      >
                        {b.text}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {subtitle && (
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1 truncate">{subtitle}</p>
              )}
              {fullAddress && (
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1 gap-1">
                  <LucideMapPin className="w-4 h-4" />
                  <span className="truncate">{fullAddress}</span>
                </div>
              )}
            </div>
          </div>

          {/* Status & meta */}
          <div className="flex flex-col sm:items-end gap-3">
            {status && (
              <div>
                <span
                  className={`inline-block px-4 py-1 text-sm font-semibold rounded-full ${
                    statusColor
                      ? 'text-white'
                      : status.toLowerCase().includes('hoàn')
                        ? 'bg-green-100 text-green-800'
                        : status.toLowerCase().includes('đang')
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                  }`}
                  style={statusColor ? { backgroundColor: statusColor, color: '#fff' } : undefined}
                >
                  {status}
                </span>
              </div>
            )}
            <div className="flex flex-wrap gap-3 items-center">
              {rating !== undefined && (
                <div className="flex items-center gap-1 text-sm">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 flex-shrink-0 ${
                          i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.154c.969 0 1.371 1.24.588 1.81l-3.366 2.447a1 1 0 00-.364 1.118l1.286 3.945c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.366 2.447c-.785.57-1.84-.197-1.54-1.118l1.286-3.945a1 1 0 00-.364-1.118L3.65 9.372c-.783-.57-.38-1.81.588-1.81h4.154a1 1 0 00.95-.69l1.286-3.945z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-gray-600 dark:text-gray-300">
                    {rating.toFixed(1)} ({reviewsCount ?? 0})
                  </span>
                </div>
              )}
              {priceRange && (
                <div className="text-sm px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full">
                  <span className="font-medium">Giá:</span> <span>{priceRange}</span>
                </div>
              )}
              {completionDate && (
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <LucideClock className="w-4 h-4" />
                  <span>Hoàn thành: {completionDate}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Stats + Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {s.label}
                </span>
                <span
                  className={`mt-1 font-semibold text-sm ${
                    s.highlight ? 'text-red-600' : 'text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>
          {/* Progress */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                <LucideInfo className="w-4 h-4" />
                <span>Tiến độ</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {progressPercent}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-slate-700 h-2.5 overflow-hidden">
              <div
                className="h-2.5 rounded-full transition-all"
                style={{
                  width: `${Math.min(100, Math.max(0, progressPercent))}%`,
                  background:
                    progressPercent >= 80
                      ? '#16a34a'
                      : progressPercent >= 40
                        ? '#f59e0b'
                        : '#dc2626'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex flex-wrap gap-3">
          {onViewDetails && (
            <button
              onClick={onViewDetails}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:shadow transition"
            >
              Xem chi tiết
            </button>
          )}
          {onContact && (
            <button
              onClick={onContact}
              className="inline-flex items-center gap-2 px-5 py-2 border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-700 transition"
            >
              Liên hệ
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
