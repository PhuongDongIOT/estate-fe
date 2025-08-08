'use client';

import { useEffect, useRef } from 'react';

type TikTokCreatorEmbedProps = {
  username: string;
  maxWidth?: string;
  minWidth?: string;
};

export const TikTokCreatorEmbed: React.FC<TikTokCreatorEmbedProps> = ({
  username,
  maxWidth = '780px',
  minWidth = '300px'
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
  }, [username]);

  return (
    <div
      ref={containerRef}
      className="rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:scale-[1.01] border-none"
      style={{ maxWidth, minWidth }}
    >
      <blockquote
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@${username}`}
        data-unique-id={username}
        data-embed-type="creator"
        style={{
          maxWidth,
          minWidth,
          border: 'none',
          margin: 0,
          padding: 0
        }}
      >
        <section>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.tiktok.com/@${username}?refer=creator_embed`}
            className="text-blue-600 hover:underline"
          >
            @{username}
          </a>
        </section>
      </blockquote>
    </div>
  );
};
