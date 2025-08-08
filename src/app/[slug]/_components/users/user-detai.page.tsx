import { Info, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

import { RealEstateHeader } from '@/components/molecules/real-estate-header/real-estate-header';
import { RealEstateOverview } from '@/components/organisms/real-estate-overview/real-estate-overview';

const realEstate = {
  title: 'Khu đô thị Sunshine City',
  subtitle: 'Quận 7, TP. Hồ Chí Minh',
  tabs: [
    {
      label: 'Tổng quan',
      active: true,
      icon: <Info className="w-4 h-4" />
    },
    {
      label: 'Thông tin',
      icon: <Info className="w-4 h-4" />
    },
    {
      label: 'Hình ảnh',
      icon: <ImageIcon className="w-4 h-4" />
    }
  ]
};

const realEstateData = {
  image: '/images/estate.jpg',
  videoLength: '48:00',
  mainTitle: 'Tổng hợp thông tin Sunshine City',
  subDescription:
    'Dự án Sunshine City tọa lạc tại Quận 7, TP.HCM với tiện ích hiện đại, thiết kế sang trọng.',
  postedDate: 'Feb 28, 2024',
  status: 'Sắp mở bán',
  price: '40 – 55 triệu/m²',
  area: '30 – 120 m²',
  videoUrl: 'https://youtube.com/watch?v=xxxx',
  infoCards: [
    { title: 'Năm xây dựng', value: '2022', subValue: '3 năm trước', bgColor: 'bg-green-50' },
    { title: 'Tiện ích', value: 'Hồ bơi, Gym, Công viên', bgColor: 'bg-yellow-50' }
  ],
  newsCards: [
    {
      title: 'Sunshine City mở bán giai đoạn 2',
      date: '6 ngày trước',
      image: '/images/estate.jpg'
    }
  ]
};

type UserDetailPageProps = {
  slug: string;
};
export default async function UserDetailPage({ slug }: UserDetailPageProps) {
  return (
    <div>
      <div className="hidden">{slug}</div>
      <section>
        <div className="py-8">
          <div className="mx-auto max-w-8xl w-full">
            <RealEstateHeader {...realEstate} />
            <div className="grid grid-cols-3 gap-2">
              <div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Image
                      className="h-full w-auto object-cover transition duration-300"
                      src={'/images/estate.jpg'}
                      width={1920}
                      height={1080}
                      alt="Ảnh bất động sản"
                      itemProp="image"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Image
                      className="h-full w-auto object-cover transition duration-300"
                      src={'/images/estate.jpg'}
                      width={1920}
                      height={1080}
                      alt="Ảnh bất động sản"
                      itemProp="image"
                      loading="lazy"
                    />
                    <Image
                      className="h-full w-auto object-cover transition duration-300"
                      src={'/images/estate.jpg'}
                      width={1920}
                      height={1080}
                      alt="Ảnh bất động sản"
                      itemProp="image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <RealEstateOverview {...realEstateData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
