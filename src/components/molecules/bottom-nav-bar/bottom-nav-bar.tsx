import clsx from 'clsx';
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

export type Tab = {
  key: string;
  label: string;
  badge?: string | number;
  disabled?: boolean;
  ariaLabel?: string;
};

export type BottomNavBarProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
  visitSiteHref?: string;
  onVisitSite?: () => void;
  visitSiteLabel?: string;
  logo?: React.ReactNode;
  variant?: 'dark' | 'light';
  showDivider?: boolean;
  className?: string;
  rightSlot?: React.ReactNode;
};

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  tabs,
  activeTab,
  onTabChange,
  visitSiteHref,
  onVisitSite,
  visitSiteLabel = 'Visit Site',
  logo,
  variant = 'dark',
  showDivider = true,
  className = '',
  rightSlot
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const tabTextActive = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const tabTextInactive =
    variant === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700';
  const visitBg = variant === 'dark' ? 'bg-yellow-300' : 'bg-yellow-500';
  const visitText = variant === 'dark' ? 'text-[#1f2329]' : 'text-black';

  // cập nhật indicator khi activeTab đổi
  useEffect(() => {
    const activeEl = tabRefs.current[activeTab];
    const containerEl = containerRef.current;
    const indicatorEl = indicatorRef.current;
    if (!activeEl || !containerEl || !indicatorEl) return;

    const activeRect = activeEl.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();

    const targetX = activeRect.left - containerRect.left;
    const targetW = activeRect.width;

    gsap.to(indicatorEl, {
      x: targetX,
      width: targetW,
      ease: 'power3.out',
      duration: 0.35
    });

    gsap.fromTo(
      activeEl,
      { scale: 1.02 },
      {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      }
    );
  }, [activeTab]);

  // init indicator position
  useEffect(() => {
    const activeEl = tabRefs.current[activeTab];
    const containerEl = containerRef.current;
    const indicatorEl = indicatorRef.current;
    if (!activeEl || !containerEl || !indicatorEl) return;

    const activeRect = activeEl.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();
    const initX = activeRect.left - containerRect.left;
    const initW = activeRect.width;

    gsap.set(indicatorEl, {
      x: initX,
      width: initW,
      opacity: 0
    });

    gsap.to(indicatorEl, {
      opacity: 1,
      duration: 0.4,
      ease: 'power1.out'
    });
  }, []);

  return (
    <div
      className={clsx(
        'fixed inset-x-0 bottom-0 flex items-center justify-center p-2 font-[emoji] font-medium',
        // "backdrop-blur-md",
        className
      )}
      aria-label="bottom navigation bar"
    >
      <div
        className={clsx(
          'inline-flex items-center overflow-hidden w-auto max-w-3xl relative rounded-sm bg-gray-700 px-4 py-1',
          variant === 'dark' ? 'bg-transparent' : 'bg-white'
        )}
      >
        <div
          className={clsx(
            'flex items-center justify-center px-4 py-2 flex-shrink-0 h-14 rounded-l-sm',
            variant === 'dark' ? 'bg-gray-600' : 'bg-gray-100'
          )}
        >
          {logo ? (
            logo
          ) : (
            <span
              className={clsx(
                'text-lg font-semibold',
                variant === 'dark' ? 'text-white' : 'text-gray-800'
              )}
            >
              W.
            </span>
          )}
        </div>

        <div
          className={clsx(
            'flex divide-x relative rounded-r-sm',
            variant === 'dark' ? 'divide-gray-600 bg-gray-600' : 'divide-gray-200 bg-gray-50'
          )}
          role="tablist"
          ref={(el) => {
            containerRef.current = el;
          }}
        >
          <div
            ref={(el) => {
              indicatorRef.current = el;
            }}
            className={clsx(
              'pointer-events-none absolute top-0 left-0 h-[calc(100%-0px)] rounded-sm p-1 z-2'
            )}
            style={{ willChange: 'transform, width' }}
          >
            <div
              className={clsx(
                'h-full w-full rounded-sm',
                variant === 'dark' ? 'border border-yellow-400' : 'border border-yellow-500'
              )}
            ></div>
          </div>

          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;

            return (
              <button
                key={tab.key}
                ref={(el) => {
                  tabRefs.current[tab.key] = el;
                }}
                onClick={() => !tab.disabled && onTabChange(tab.key)}
                disabled={tab.disabled}
                aria-label={tab.ariaLabel || tab.label}
                aria-current={isActive ? 'page' : undefined}
                className={clsx(
                  'h-14 relative flex items-center px-4 text-sm font-medium transition-transform outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
                  isActive ? tabTextActive : tabTextInactive,
                  tab.disabled && 'opacity-50 cursor-not-allowed',
                  'flex-nowrap hover:scale-[1.03]'
                )}
                role="tab"
              >
                {!isActive ? (
                  <div
                    className={clsx(
                      'pointer-events-none absolute top-0 left-0 h-full w-full rounded-sm p-1 z-1'
                    )}
                  >
                    <div
                      className={clsx(
                        'h-full w-full rounded-sm',
                        variant === 'dark' ? 'border border-gray-400' : 'border border-gray-500'
                      )}
                    ></div>
                  </div>
                ) : null}
                <span className="relative flex items-center gap-1">
                  <span>{tab.label}</span>
                  {tab.badge !== undefined && (
                    <span className="align-super text-[8px] inline-flex items-center justify-center font-semibold text-indigo-400">
                      {tab.badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {showDivider && <div className="w-px h-8 bg-gray-500 mx-1" aria-hidden="true" />}

        <div className="flex items-center gap-2 px-2">
          {rightSlot}
          {visitSiteHref || onVisitSite ? (
            visitSiteHref ? (
              <a
                href={visitSiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  'h-14 px-5 py-2 whitespace-nowrap shadow rounded-sm flex items-center font-bold',
                  visitBg,
                  visitText
                )}
              >
                {visitSiteLabel}
              </a>
            ) : (
              <button
                onClick={onVisitSite}
                className={clsx(
                  'px-5 py-2 whitespace-nowrap shadow rounded-full flex items-center font-bold',
                  visitBg,
                  visitText
                )}
              >
                {visitSiteLabel}
              </button>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};
