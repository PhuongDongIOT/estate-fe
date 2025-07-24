'use client';

import React, { useEffect, useState } from 'react';

interface BackgroundVideoProps {
  mobileSrc: string;
  desktopSrc: string;
  className?: string;
  overlayOpacity?: number;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  mobileSrc,
  desktopSrc,
  className = ''
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const src = isMobile ? mobileSrc : desktopSrc;

  return (
    <video
      className={`w-full h-full object-cover ${className}`}
      src={src}
      autoPlay
      loop
      muted
      playsInline
    />
  );
};
