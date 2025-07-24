// import { AudioPlaylist } from "@/components/molecules/audio-playlist/audio-playlist";
import { BackgroundVideo } from '@/components/molecules/background-video/background-video';
import {
  EstateIntro,
  type EstateIntroProps
} from '@/components/molecules/estate-intro/estate-intro';
import { HeroBanner } from '@/components/molecules/hero-banner/hero-banner';
import { TitledSection } from '@/components/molecules/titled-section/titled-section';
import { NewsCard, type NewsCardProps } from '@/components/organisms/new-card/new-card';
import {
  ProjectSearchBar,
  type ProjectSearchBarProps
} from '@/components/organisms/project-search-bar/project-search-bar';

const linkStatic = 'http://173.249.41.172:9000/mybucket/video.mp4';
// const linkAudioStatic = 'http://173.249.41.172:9000/mybucket/memory.mp3';

const itemHeroBanner = {
  backgroundImage: '/images/estate.jpg',
  heightClass: 'h-[70vh] w-screen',
  overlayEnabled: true,
  overlayColor: 'bg-black',
  overlayOpacity: 'bg-opacity-50',
  className: 'relative flex items-center justify-center text-white',
  children: (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Chào mừng đến với Estate</h1>
      <p className="text-lg">Khám phá những bất động sản tuyệt vời nhất</p>
    </div>
  )
};

const tabItem: ProjectSearchBarProps = {
  tabs: [
    { label: 'Tất cả', value: 'all' },
    { label: 'Nhà ở', value: 'housing' },
    { label: 'Đất nền', value: 'land' },
    { label: 'Dự án', value: 'project' }
  ],
  defaultTab: 'all',
  searchPlaceholder: 'Tìm kiếm dự án, nhà ở, đất nền...',
  // onSearch: (searchText: any, filters: any, activeTab: any) => {
  //   console.log('Search:', searchText, filters, activeTab);
  // },
  filters: [
    {
      name: 'location',
      placeholder: 'Chọn vị trí',
      options: [
        { label: 'Hà Nội', value: 'hanoi' },
        { label: 'TP.HCM', value: 'hcm' },
        { label: 'Đà Nẵng', value: 'danang' }
      ]
    },
    {
      name: 'price',
      placeholder: 'Khoảng giá',
      options: [
        { label: 'Dưới 1 tỷ', value: '<1billion' },
        { label: '1-3 tỷ', value: '1-3billion' },
        { label: 'Trên 3 tỷ', value: '>3billion' }
      ]
    }
  ]
};

const estateData: EstateIntroProps = {
  name: 'Biệt thự ven sông',
  description: 'Biệt thự cao cấp với không gian xanh, gần trung tâm, tiện ích đầy đủ.',
  image: '/images/estate.jpg',
  address: '123 Đường Hoa Sứ, Quận 7, TP.HCM',
  price: 'Liên hệ',
  area: '500m²',
  tags: ['Sân vườn', 'Hồ bơi', 'An ninh 24/7']
};

const estateItem: NewsCardProps = {
  image: '/images/estate.jpg',
  source: 'Báo Dân trí',
  title: 'Lý do Bộ Tài chính muốn áp thuế 20% trên lãi chuyển nhượng bất động sản',
  url: '/images/estate.jpg',
  time: '23 hours ago',
  avatar: '/images/estate.jpg',
  category: 'Bất động sản',
  isVerified: true,
  direction: 'horizontal'
};

const HomePage = () => (
  <div className="relative flex flex-col items-center justify-center min-h-screen  bg-gradient-to-br from-white via-indigo-50 to-indigo-100 overflow-hidden">
    {/* <div className="fixed bottom-2 right-2">
      <AudioPlaylist
        songs={[
          { title: 'Memory', src: linkAudioStatic },
          { title: 'Another Song', src: linkAudioStatic },
        ]}
        className="audio-playlist"
        mobileClassName="audio-playlist-mobile"
        desktopClassName="audio-playlist-desktop"
        audioProps={{
          controls: true,
          autoPlay: true,
        }} /> 
    </div>*/}
    <section>
      <div className="w-full">
        <HeroBanner {...itemHeroBanner}>
          <ProjectSearchBar {...tabItem} />
        </HeroBanner>
        {/* <ProjectSearchBar {...tabItem} /> */}
      </div>
    </section>
    <section>
      <div className="py-16">
        <div className="max-w-8xl w-full mx-auto">
          <TitledSection title="Tin tức nổi bật">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-1 md:col-span-2 md:grid-cols-2 gap-4 px-4 border-r border-gray-300/50">
                <NewsCard {...estateItem} direction="vertical" />
                <div className="flex flex-col gap-4">
                  <NewsCard {...estateItem} />
                  <NewsCard {...estateItem} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 px-4">
                <NewsCard {...estateItem} />
                <NewsCard {...estateItem} />
              </div>
            </div>
          </TitledSection>
        </div>
      </div>
    </section>
    <section>
      <div className="py-8">
        <div className="max-w-8xl h-72 relative mx-auto overflow-hidden">
          <BackgroundVideo
            desktopSrc={linkStatic}
            mobileSrc={linkStatic}
            className="relative bottom-0 left-0 w-full h-auto"
          />
        </div>
      </div>
    </section>
    <section>
      <div className="py-16">
        <div className="max-w-8xl w-full mx-auto">
          <TitledSection title="Danh sách bất động sản">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
              <EstateIntro {...estateData} />
              <EstateIntro {...estateData} />
              <EstateIntro {...estateData} />
              <EstateIntro {...estateData} />
              <EstateIntro {...estateData} />
              <EstateIntro {...estateData} />
            </div>
          </TitledSection>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
