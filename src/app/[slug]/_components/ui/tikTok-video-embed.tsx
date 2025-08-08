'use client';

import { useEffect, useRef } from 'react';

type TikTokVideoEmbedProps = {
  videoUrl: string;
  width?: string;
  height?: string;
};

export const TikTokVideoEmbed: React.FC<TikTokVideoEmbedProps> = ({
  videoUrl = 'https://www.tiktok.com/@dxmdvietnamreview/video/7532821784983375122',
  width = '100%',
  height = '500px'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'tiktok-embed-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      if ((window as any).tiktokEmbedLoad) {
        (window as any).tiktokEmbedLoad();
      }
    }
  }, [videoUrl]);

  return (
    <div
      ref={containerRef}
      className="transition-all duration-500 hover:scale-[1.01] overflow-hidden"
      style={{ width, height }}
    >
      <blockquote
        className="tiktok-embed"
        cite={videoUrl}
        data-video-id={videoUrl.split('/').pop()}
        style={{ width, height, margin: 0, border: 'none' }}
      >
        <section></section>
      </blockquote>
    </div>
  );
};
