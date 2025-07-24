'use client';

import React, { useRef, useState, useEffect } from 'react';

interface Song {
  title: string;
  src: string;
}

interface AudioPlaylistProps {
  songs: Song[];
  className?: string;
  mobileClassName?: string;
  desktopClassName?: string;
  audioProps?: React.AudioHTMLAttributes<HTMLAudioElement>;
  children?: React.ReactNode;
}

export const AudioPlaylist: React.FC<AudioPlaylistProps> = ({
  songs,
  className = '',
  mobileClassName = '',
  desktopClassName = '',
  audioProps,
  children
}) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleEnded = () => {
    handleNext();
  };

  const handleSelect = (idx: number) => {
    setCurrent(idx);
    setIsPaused(false);
    audioRef.current?.load();
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setIsPaused(true);
  };

  const handlePlay = () => {
    audioRef.current?.play();
    setIsPaused(false);
  };

  const handleNext = () => {
    const nextIdx = current + 1 < songs.length ? current + 1 : 0;
    setCurrent(nextIdx);
    setIsPaused(false);
    audioRef.current?.load();
    audioRef.current?.play();
  };

  const deviceClassName = isMobile ? mobileClassName : desktopClassName;

  return (
    <div
      className={`flex flex-col items-center shadow-lg bg-white/80 backdrop-blur p-4 ${className} ${deviceClassName}`}
    >
      <audio
        ref={audioRef}
        src={songs[current].src}
        controls
        autoPlay
        onEnded={handleEnded}
        className="hidden"
        {...audioProps}
      />
      <div className="flex flex-col items-center mb-4 w-full max-w-xs">
        <div className="flex gap-2 text-xs">
          {isPaused ? (
            <button
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white shadow transition"
              onClick={handlePlay}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <polygon points="5,3 19,10 5,17" />
              </svg>
              Play
            </button>
          ) : (
            <button
              className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white shadow transition"
              onClick={handlePause}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <rect x="4" y="4" width="4" height="12" />
                <rect x="12" y="4" width="4" height="12" />
              </svg>
              Pause
            </button>
          )}
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white shadow transition"
            onClick={handleNext}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <polygon points="5,4 15,10 5,16" />
            </svg>
            Next
          </button>
        </div>
      </div>
      <ul className="w-full max-w-xs">
        {songs.map((song, idx) => (
          <li
            key={song.title}
            className={`text-xs cursor-pointer px-2 py-1 ${
              idx === current ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => handleSelect(idx)}
          >
            {song.title}
          </li>
        ))}
      </ul>
      {children && <div className="mt-2 w-full">{children}</div>}
    </div>
  );
};
