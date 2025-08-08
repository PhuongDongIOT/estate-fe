import { Phone, BadgeQuestionMark, Mailbox, SendHorizonal } from 'lucide-react';
import Image from 'next/image';

import { BranchLocationCard } from '@/components/molecules/branch-location-card/branch-location-card';
import { ContactInfo, ContactItem } from '@/components/molecules/contact-info/contact-info';
import { HighlightTopicList } from '@/components/molecules/highlight-topic-list/highlight-topic-list';
import { SubscribeInput } from '@/components/molecules/subscribe-input/subscribe-input';
import { CompanyInfoCard } from '@/components/organisms/company-info-card/company-info-card';

const highlightTopicData = {
  title: 'Chủ đề nổi bật',
  topics: [
    { title: 'Tin tức bất động sản', href: '/tin-tuc-bds' },
    { title: 'Bất động sản Hà Nội', href: '/bds-ha-noi' },
    { title: 'Bất động sản Hồ Chí Minh', href: '/bds-ho-chi-minh' },
    { title: 'Báo cáo thị trường', href: '/bao-cao-thi-truong' },
    { title: 'Mua bất động sản', href: '/mua-bds' }
  ],
  moreLink: '/tat-ca-chu-de'
};

const branchLocation = {
  title: 'Chi nhánh TP. Hồ Chí Minh',
  address: `Tầng 2, 3, Tháp B Tòa nhà Viettel, 285 Cách Mạng Tháng Tám,\nPhường Hòa Hưng, TP.HCM, Việt Nam`,
  hotline: '1900 1881',
  children: <button className="mt-1 text-blue-600 hover:underline text-sm">Xem bản đồ</button>
};

const propertyGuruInfo = {
  logo: (
    <Image
      width={1920}
      height={1080}
      src={'/images/batdongsan-logo.svg'}
      alt="Logo"
      className="h-16"
    />
  ),
  companyName: 'CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM',
  address: `Tầng 31, Keangnam Hanoi Landmark Tower,\nPhường Yên Hòa, Thành phố Hà Nội, Việt Nam`,
  phones: ['(024) 3562 5939', '(024) 3562 5940'],
  qrCodeSrc: '/images/qr-code.svg',
  googlePlaySrc: '/images/google-play.png',
  appStoreSrc: '/images/app-store.png'
};

const contacts: ContactItem[] = [
  {
    icon: <Phone className="w-6 h-6 text-gray-700" />,
    label: 'Hotline',
    value: '1900 1881'
  },
  {
    icon: <BadgeQuestionMark className="w-6 h-6 text-gray-700" />,
    label: 'Hỗ trợ khách hàng',
    value: 'trogiup.batdongsan.com.vn',
    link: 'https://trogiup.batdongsan.com.vn'
  },
  {
    icon: <Mailbox className="w-6 h-6 text-gray-700" />,
    label: 'Chăm sóc khách hàng',
    value: 'hotro@batdongsan.com.vn',
    link: 'mailto:hotro@batdongsan.com.vn'
  }
];

const subscribeProps = {
  title: 'Nhận thông tin mới',
  placeholder: 'Nhập email để nhận tin khuyến mãi',
  buttonColor: 'bg-blue-600 hover:bg-blue-700',
  icon: <SendHorizonal size={16} />
};

export function FooterDesktop() {
  return (
    <div>
      <section>
        <div className="max-w-8xl w-full mx-auto px-4">
          <div className="py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4">
              <HighlightTopicList {...highlightTopicData} />
              <HighlightTopicList {...highlightTopicData} />
              <HighlightTopicList {...highlightTopicData} />
              <HighlightTopicList {...highlightTopicData} />
              <HighlightTopicList {...highlightTopicData} />
              <HighlightTopicList {...highlightTopicData} />
              <HighlightTopicList {...highlightTopicData} />
              <HighlightTopicList {...highlightTopicData} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-8 w-full">
          <div className="max-w-8xl w-full mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <BranchLocationCard {...branchLocation} />
              <BranchLocationCard {...branchLocation} />
              <BranchLocationCard {...branchLocation} />
              <BranchLocationCard {...branchLocation} />
              <BranchLocationCard {...branchLocation} />
              <BranchLocationCard {...branchLocation} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-2">
          <div className="mx-auto max-w-8xl w-full px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CompanyInfoCard {...propertyGuruInfo} />
              <div className="md:col-span-2 w-full">
                <ContactInfo contacts={contacts} />
                <SubscribeInput {...subscribeProps} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
