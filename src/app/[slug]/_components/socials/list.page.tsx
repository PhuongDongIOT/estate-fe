import { TikTokCreatorEmbed } from '../ui/tikTok-creator-embed';
import { TikTokVideoEmbed } from '../ui/tikTok-video-embed';
import { YouTubeSearchResponse, YouTubeVideoList } from '../ui/youtube-video-list';

const tiktokRel = {
  videoUrl: 'https://www.tiktok.com/@dxmdvietnamreview/video/7532821784983375122',
  width: '100%',
  height: '700px'
};

type ListPageProps = {
  slug: string;
};
export default async function ListPage({ slug }: ListPageProps) {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const query = 'đất xanh miền đông';
  const maxResults = 8;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=${maxResults}&key=${API_KEY}`,
    {
      next: { revalidate: 3600 }
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch videos');
  }

  const data: YouTubeSearchResponse = await res.json();

  return (
    <main>
      <div className="hidden">{slug}</div>
      <section>
        <div className="py-8">
          <div className="mx-auto max-w-8xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <TikTokCreatorEmbed username="dxmdvietnamreview" />
              </div>
              <div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: 'url(/images/estate.jpg)' }}
              ></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4">
              <TikTokVideoEmbed {...tiktokRel} />
              <TikTokVideoEmbed {...tiktokRel} />
              <TikTokVideoEmbed {...tiktokRel} />
              <TikTokVideoEmbed {...tiktokRel} />
              <TikTokVideoEmbed {...tiktokRel} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-8">
          <div className="mx-auto max-w-8xl w-full">
            <h1 className="text-2xl font-bold mb-6">🐱 Youtube Công Ty Cổ Phần DXMD Việt Nam</h1>
            <YouTubeVideoList videos={data.items} />
          </div>
        </div>
      </section>
    </main>
  );
}
