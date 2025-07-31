import Image from 'next/image';

import { TitledSection } from '@/components/molecules/titled-section/titled-section';
import { VisualCarousel } from '@/components/molecules/visual-carousel/visual-carousel';
import { PropertyCard } from '@/components/organisms/property-card/property-card';

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

const itemProperties = {
  id: 'prop-001',
  index: 1,
  image: '/images/estate.jpg',
  avatar: '/images/etienne.jpg',
  title: 'Căn hộ cao cấp tại Thảo Điền, Quận 2',
  price: '3.2 tỷ',
  location: 'Thảo Điền, TP. Thủ Đức, TP.HCM',
  area: '75m²'
};

type LocationDetailProps = {
  slug: string;
};
export const LocationDetailPage = ({ slug }: LocationDetailProps) => {
  return (
    <div className="w-full">
      <h1 className="hidden">{slug}</h1>
      <section className="w-full">
        <div className="h-[50vh] w-full overflow-hidden relative">
          <Image
            width={1920}
            height={1080}
            src={'/images/estate.jpg'}
            alt="Logo"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
            <h2 className="uppercase text-8xl font-bold outline-text animate-fade-in-up">
              SAI GÒN
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="py-8">
          <div className="mx-auto max-w-8xl px-4">
            <VisualCarousel {...visualCarousel} />
          </div>
        </div>
      </section>
      <section>
        <div className="py-16">
          <div className="max-w-8xl w-full mx-auto">
            <TitledSection title="Bất động sản nổi bật - Sài gòn">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
                <PropertyCard {...itemProperties} />
                <PropertyCard {...itemProperties} />
                <PropertyCard {...itemProperties} />
                <PropertyCard {...itemProperties} />
                <PropertyCard {...itemProperties} />
                <PropertyCard {...itemProperties} />
                <PropertyCard {...itemProperties} />
                <PropertyCard {...itemProperties} />
              </div>
            </TitledSection>
          </div>
        </div>
      </section>
    </div>
  );
};
