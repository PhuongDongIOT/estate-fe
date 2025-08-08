// import { AudioPlaylist } from "@/components/molecules/audio-playlist/audio-playlist";
import Image from 'next/image';

import { FooterDesktop } from '@/components/layouts/footer-desktop/footer-desktop';
import { BackgroundVideo } from '@/components/molecules/background-video/background-video';
import {
  EstateIntro,
  type EstateIntroProps
} from '@/components/molecules/estate-intro/estate-intro';
import { HeroBanner } from '@/components/molecules/hero-banner/hero-banner';
import { NewsCarousel } from '@/components/molecules/news-carousel/news-carousel';
import { ProvinceColumn } from '@/components/molecules/province-column/province-column';
import { TitledSection } from '@/components/molecules/titled-section/titled-section';
import { VisualCarousel } from '@/components/molecules/visual-carousel/visual-carousel';
import { NewsCard, type NewsCardProps } from '@/components/organisms/new-card/new-card';
import {
  ProjectSearchBar,
  type ProjectSearchBarProps
} from '@/components/organisms/project-search-bar/project-search-bar';

const linkStatic = 'http://173.249.41.172:9000/mybucket/video.mp4';
// const linkAudioStatic = 'http://173.249.41.172:9000/mybucket/memory.mp3';

const itemHeroBanner = {
  backgroundImage: '/images/estate.jpg',
  heightClass: 'h-[60vh] md:h-[70vh] w-screen',
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

const imageList = [
  {
    src: '/images/etienne.jpg',
    title: 'Sunshine City',
    subtitle: 'Không gian sống đẳng cấp',
    label: 'Căn hộ'
  },
  {
    src: '/images/estate.jpg',
    title: 'Sunshine City',
    subtitle: 'Không gian sống đẳng cấp',
    label: 'Căn hộ'
  },
  {
    src: '/images/etienne.jpg',
    title: 'Sunshine City',
    subtitle: 'Không gian sống đẳng cấp',
    label: 'Căn hộ'
  },
  {
    src: '/images/estate.jpg',
    title: 'Sunshine City',
    subtitle: 'Không gian sống đẳng cấp',
    label: 'Căn hộ'
  }
];

const visualCarousel = {
  images: imageList,
  autoplayDelay: 2000,
  dragFree: true,
  // className: "my-8",
  slideClassName: 'shadow-xl'
};

const provinces = [
  { name: 'TP. HCM', color: 'bg-red-500', image: '/images/estate.jpg' },
  { name: 'Hà Nội', color: 'bg-blue-500', image: '/images/etienne.jpg' },
  { name: 'Đà Nẵng', color: 'bg-green-500', image: '/images/estate.jpg' },
  { name: 'Cần Thơ', color: 'bg-yellow-500', image: '/images/etienne.jpg' },
  { name: 'Hải Phòng', color: 'bg-purple-500', image: '/images/estate.jpg' }
];

const newsItems = [
  {
    id: 1,
    title: '200 Triệu Gửi Ngân Hàng Agribank Lãi Bao Nhiêu, Nên Gửi Kỳ Hạn Nào...',
    image: '/images/estate.jpg',
    avatar: '/images/estate.jpg'
  },
  {
    id: 2,
    title: 'The TEN: Khởi Nguyên Chuẩn Sống Thượng Lưu Độc Bản Tại Siêu Đô Thị...',
    image: '/images/estate.jpg',
    avatar: '/images/estate.jpg'
  },
  {
    id: 3,
    title: 'Vay Ngân Hàng Agribank 100 Triệu Lãi Suất Bao Nhiêu? Vay Tín Chấp Ha...',
    image: '/images/estate.jpg',
    avatar: '/images/estate.jpg'
  }
];

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
  url: '/SPR-xx',
  time: '23 hours ago',
  avatar: '/images/estate.jpg',
  category: 'Bất động sản',
  isVerified: true,
  direction: 'horizontal'
};

const HomePage = () => (
  <div className="relative min-h-screen bg-gradient-to-br from-white via-indigo-50 to-indigo-100 overflow-hidden">
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
                <NewsCard {...estateItem} url="/spp-xxxx" direction="vertical" />
                <div className="flex flex-col gap-4">
                  <NewsCard {...estateItem} url="/spx-xxx" />
                  <NewsCard {...estateItem} url="/spl-xxx" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 px-4 group">
                <div className="w-full h-full relative mt-4 md:mt-0">
                  <Image
                    src="/images/estate.jpg"
                    alt="Estate"
                    width={1920}
                    height={1080}
                    objectFit="cover"
                    className="h-full w-auto object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full z-10 px-8 py-4 mt-4">
                    <div className="w-0 h-full group-hover:px-8 group-hover:py-16 group-hover:border-y-2 group-hover:border-white group-hover:w-full transition-all duration-200 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center group-hover:border-x-2 group-hover:border-white">
                        <div>
                          <p className="text-4xl font-light text-white">REAL ESTATE</p>
                          <div className="w-56 h-[1px] bg-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TitledSection>
        </div>
      </div>
    </section>
    <section>
      <div className="py-0">
        <div className="max-w-8xl px-4 h-72 relative mx-auto overflow-hidden">
          <div className="h-72 relative overflow-hidden">
            <BackgroundVideo
              desktopSrc={linkStatic}
              mobileSrc={linkStatic}
              className="relative bottom-0 left-0 w-screen h-auto"
            />
          </div>
          <div className="top-0 left-0 absolute h-full w-full">
            <div className="py-4 px-12">
              <VisualCarousel {...visualCarousel} />
            </div>
          </div>
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
    <section>
      <div className="flex h-[40vh] md:h-[60vh] w-screen">
        <ProvinceColumn provinces={provinces} />
      </div>
    </section>
    <section>
      <div className="mx-auto max-w-8xl w-full">
        <div className="py-8">
          <TitledSection title="Tin tức">
            <NewsCarousel items={newsItems} />
          </TitledSection>
        </div>
      </div>
    </section>
    <section>
      <div className="mx-auto max-w-8xl w-full">
        <div className="py-8">
          <TitledSection title="Tin tức">
            <NewsCarousel items={newsItems} />
          </TitledSection>
        </div>
      </div>
    </section>

    <FooterDesktop />
  </div>
);

export default HomePage;
