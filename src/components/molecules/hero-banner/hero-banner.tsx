import React from 'react';

export type HeroBannerProps = {
  backgroundImage: string;
  heightClass?: string;
  overlayEnabled?: boolean;
  overlayColor?: string;
  overlayOpacity?: string;
  className?: string;
  children?: React.ReactNode;
};

export const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage,
  heightClass = 'h-96',
  overlayEnabled = true,
  overlayColor = 'bg-black',
  overlayOpacity = 'bg-opacity-50',
  className = '',
  children
}) => {
  return (
    <div
      className={`relative bg-cover bg-center bg-no-repeat ${heightClass} ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlayEnabled && (
        <div className={`absolute inset-0 ${overlayColor} ${overlayOpacity} z-0`} />
      )}
      <div className="relative z-10 w-full h-full flex justify-center items-center">{children}</div>
    </div>
  );
};
