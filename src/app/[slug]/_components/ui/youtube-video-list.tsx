'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export type YouTubeVideo = {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: YouTubeThumbnail;
      medium: YouTubeThumbnail;
      high: YouTubeThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
};

export type YouTubeThumbnail = {
  url: string;
  width: number;
  height: number;
};

export type YouTubeSearchResponse = {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeVideo[];
};

type YouTubeVideoListProps = {
  videos: YouTubeVideo[];
};
export const YouTubeVideoList: React.FC<YouTubeVideoListProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const closeModal = () => setSelectedVideo(null);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-4">
        {videos.map((video) => (
          <motion.div
            key={video.id.videoId}
            onClick={() => setSelectedVideo(video)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hover:shadow transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                {video.snippet.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{video.snippet.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>📺 {video.snippet.channelTitle}</span>
                {/* <span>🕓 {new Date(video.snippet.publishTime).toLocaleDateString()}</span> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AnimatePresence for Modal animation */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full max-w-3xl mx-4 relative overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 p-1 px-3 text-lg z-10"
              >
                ✕
              </button>

              <div className="w-full h-0 pb-[56.25%] relative">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`}
                  title={selectedVideo.snippet.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>

              <div className="p-4 bg-slate-100/80">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {selectedVideo.snippet.title}
                </h2>
                <p className="text-sm text-gray-600">{selectedVideo.snippet.description}</p>
                <div className="text-xs text-gray-500 mt-2">
                  <span>📺 {selectedVideo.snippet.channelTitle} – </span>
                  <span>🕓 {new Date(selectedVideo.snippet.publishTime).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
