import { BadgeQuestionMark, Mailbox, Phone, SendHorizonal } from 'lucide-react';
import Image from 'next/image';

import { ArticleBox } from '@/components/molecules/article-box/article-box';
import { BranchLocationCard } from '@/components/molecules/branch-location-card/branch-location-card';
import { ContactInfo, ContactItem } from '@/components/molecules/contact-info/contact-info';
import { ContentOutline } from '@/components/molecules/content-outline/content-outline';
import { HighlightTopicList } from '@/components/molecules/highlight-topic-list/highlight-topic-list';
import PopularPosts from '@/components/molecules/popular-posts/popular-posts';
import { SmoothTab } from '@/components/molecules/smooth-tab/smooth-tab';
import { SubscribeInput } from '@/components/molecules/subscribe-input/subscribe-input';
import { CompanyInfoCard } from '@/components/organisms/company-info-card/company-info-card';
import { NewsletterCard } from '@/components/organisms/newsletter-card/newsletter-card';

const loanRate = [
  {
    type: 'Vay mua nhà (dưới 35 tuổi)',
    fixedRate: '5,5%/năm (3 năm đầu)',
    variableRate: '6,8 – 8,2%/năm',
    term: '40 năm',
    note: 'Ưu đãi theo chương trình hỗ trợ người trẻ'
  },
  {
    type: 'Vay nhà ở xã hội (dưới 35 tuổi)',
    fixedRate: '5,9%/năm (từ 01/7 – 31/12/2025)',
    variableRate: 'Thấp hơn 1–2% so với lãi suất thị trường',
    term: '15 năm',
    note: 'Áp dụng 1 lần duy nhất theo dự án đủ điều kiện'
  },
  {
    type: 'Vay mua nhà (phổ thông)',
    fixedRate: '5,5 – 6,5%/năm',
    variableRate: '7,0 – 8,5%/năm',
    term: '25 năm',
    note: 'Dành cho khách hàng trên 35 tuổi'
  },
  {
    type: 'Vay mua ô tô',
    fixedRate: '6,5 – 7,5%/năm',
    variableRate: '7,5 – 8,5%/năm',
    term: '7 năm',
    note: 'Có thể vay đến 100% nếu có tài sản đảm bảo khác'
  }
];

const mockPosts = [
  {
    title: 'Lãi Suất Agribank 2025: Lãi Suất Gửi Tiết Kiệm Cao Nhất Nhóm Big 4',
    link: '/lai-suat-agribank-2025'
  },
  {
    title: 'Mệnh Hỏa Hợp Màu Gì? Những Màu Sắc Mang Lại May Mắn...',
    link: '/menh-hoa-hop-mau-gi'
  },
  {
    title: 'Lãi Suất Ngân Hàng Vietcombank 2025...',
    link: '/lai-suat-vietcombank-2025'
  }
];

const tocItems = [
  { id: 'gioi-thieu', title: 'Giới thiệu' },
  { id: 'uu-diem', title: 'Ưu điểm của chương trình vay' },
  { id: 'lai-suat', title: 'Chi tiết lãi suất' },
  { id: 'faq', title: 'Câu hỏi thường gặp' }
];

const postData = {
  image: '/images/estate.jpg',
  title: 'Game “Pokémon Friends” mới ra mắt miễn phí ...',
  link: '/xxx'
};

const mockNewsletter = {
  title: 'Đăng ký nhận tin',
  description: 'Bạn sẽ không bỏ lỡ xu hướng mới.',
  placeholder: 'Email của bạn...',
  buttonText: 'GỬI NGAY',
  checkboxLabel: 'Tôi đồng ý nhận email quảng cáo',
  // onSubmit: (email: string) => console.log('Gửi:', email),
  customStyles: {
    wrapper: 'bg-white',
    button: 'bg-blue-400 hover:bg-blue-300 transition-all duration-100',
    title: 'text-2xl text-blue-700 group-hover:text-blue-800 transition-all duration-200',
    checkboxLabel: 'text-xs'
  }
};

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
      className="h-16 w-56"
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

type BlogDetailProps = {
  slug: string;
};

const BlogDetailPage = async ({ slug }: BlogDetailProps) => {
  return (
    <div>
      <section>
        <h2 className="hidden">{slug}</h2>
      </section>
      <section>
        <div className="mx-auto max-w-8xl w-full">
          <div className="grid grid-cols-8 gap-2">
            <div className="sticky top-0 h-fit">
              <ContentOutline items={tocItems} className="max-w-md" />
            </div>
            <div className="col-span-5">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">
                  Vay 400 Triệu Trong 5 Năm Agribank – Mỗi Tháng Trả Bao Nhiêu Tiền Lãi?
                </h2>
                <div className="w-full">
                  <Image
                    className="h-full w-auto object-cover transition duration-300"
                    src={'/images/estate.jpg'}
                    width={1920}
                    height={1080}
                    alt="Ảnh bất động sản"
                    itemProp="image"
                    loading="lazy"
                  />
                  <p className="text-xs md:text-sm text-gray-600">Căn hộ chuẩn - ảnh mẫu</p>
                </div>
                <p>
                  Khoản vay 400 triệu trong 5 năm là lựa chọn phổ biến cho nhiều mục đích như mua
                  nhà, mua ô tô hoặc đầu tư kinh doanh nhỏ. Vậy nếu vay 400 triệu trong 5 năm
                  Agribank lãi suất hiện nay là bao nhiêu, số tiền lãi phải trả mỗi tháng được tính
                  như thế nào? Bài viết sau sẽ giúp bạn có câu trả lời.
                </p>
                <h3 className="text-xl font-medium">Lãi Suất Vay Mua Nhà Tại Agribank</h3>
                <p>
                  Khoản vay với thời hạn 5 năm được Agribank phân loại vào nhóm vay trung và dài
                  hạn, thường triển khai dưới hình thức vay thế chấp. Theo cập nhật mới nhất, lãi
                  suất vay thế chấp tại Agribank đối với các sản phẩm vay mua nhà, mua ô tô và vay
                  vốn kinh doanh đang được áp dụng ở mức cạnh tranh, với nhiều ưu đãi trong giai
                  đoạn đầu khoản vay.
                </p>
                <div className="px-4">
                  <ul className="list-disc list-inside space-y-2 hover:text-indigo-900 transition-all delay-75 duration-150">
                    <li>
                      Trong 5 năm đầu, lãi suất thấp hơn 2% so với lãi suất cho vay trung dài hạn
                      VND bình quân của 4 ngân hàng thương mại nhà nước (Agribank, BIDV,
                      Vietcombank, VietinBank). Trong 10 năm tiếp theo, lãi suất thấp hơn 1% so với
                      lãi suất trung dài hạn bình quân của 4 ngân hàng trên.
                    </li>
                    <li>
                      Trong 5 năm đầu, lãi suất thấp hơn 2% so với lãi suất cho vay trung dài hạn
                      VND bình quân của 4 ngân hàng thương mại nhà nước (Agribank, BIDV,
                      Vietcombank, VietinBank). Trong 10 năm tiếp theo, lãi suất thấp hơn 1% so với
                      lãi suất trung dài hạn bình quân của 4 ngân hàng trên.
                    </li>
                    <li>
                      Trong 5 năm đầu, lãi suất thấp hơn 2% so với lãi suất cho vay trung dài hạn
                      VND bình quân của 4 ngân hàng thương mại nhà nước (Agribank, BIDV,
                      Vietcombank, VietinBank). Trong 10 năm tiếp theo, lãi suất thấp hơn 1% so với
                      lãi suất trung dài hạn bình quân của 4 ngân hàng trên.
                    </li>
                    <li>
                      Trong 5 năm đầu, lãi suất thấp hơn 2% so với lãi suất cho vay trung dài hạn
                      VND bình quân của 4 ngân hàng thương mại nhà nước (Agribank, BIDV,
                      Vietcombank, VietinBank). Trong 10 năm tiếp theo, lãi suất thấp hơn 1% so với
                      lãi suất trung dài hạn bình quân của 4 ngân hàng trên.
                    </li>
                  </ul>
                </div>
                <h3 className="text-xl font-medium">
                  Gói vay mua nhà dành cho khách hàng từ 35 tuổi trở lên
                </h3>
                <p>
                  Ngoài các chương trình hỗ trợ người trẻ, Agribank cũng cung cấp gói vay mua nhà
                  phổ thông với lãi suất cố định trong giai đoạn đầu như sau:
                </p>
                <div className="w-full">
                  <ul className="list-disc list-inside space-y-2 hover:text-indigo-900 transition-all delay-75 duration-150">
                    <li>5,5%/năm trong 6 tháng đầu</li>
                    <li>5,5%/năm trong 6 tháng đầu</li>
                    <li>5,5%/năm trong 6 tháng đầu</li>
                    <li>5,5%/năm trong 6 tháng đầu</li>
                  </ul>
                </div>
                <h3>Lãi Suất Vay Mua Ô Tô Tại Agribank</h3>
                <p>
                  Khoản vay 400 triệu trong 5 năm tại Agribank cũng là lựa chọn phổ biến với những
                  khách hàng có nhu cầu mua ô tô phục vụ đi lại cá nhân hoặc kinh doanh. Mức lãi
                  suất vay mua ô tô đang được áp dụng tại ngân hàng Agribank như sau:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-sm text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 font-semibold">Hình thức vay</th>
                        <th className="border p-3 font-semibold">Lãi suất ưu đãi (cố định)</th>
                        <th className="border p-3 font-semibold">Lãi suất sau ưu đãi (thả nổi)</th>
                        <th className="border p-3 font-semibold">Thời hạn vay tối đa</th>
                        <th className="border p-3 font-semibold">Ghi chú</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loanRate.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="border p-3">{row.type}</td>
                          <td className="border p-3">{row.fixedRate}</td>
                          <td className="border p-3">{row.variableRate}</td>
                          <td className="border p-3">{row.term}</td>
                          <td className="border p-3">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="w-full">
                  <Image
                    className="h-full w-auto object-cover transition duration-300"
                    src={'/images/estate.jpg'}
                    width={1920}
                    height={1080}
                    alt="Ảnh bất động sản"
                    itemProp="image"
                    loading="lazy"
                  />
                  <p className="text-xs md:text-sm text-gray-600">Căn hộ chuẩn - ảnh mẫu</p>
                </div>
                <h3>Lãi Suất Vay Mua Ô Tô Tại Agribank</h3>
                <p>
                  Khoản vay 400 triệu trong 5 năm tại Agribank cũng là lựa chọn phổ biến với những
                  khách hàng có nhu cầu mua ô tô phục vụ đi lại cá nhân hoặc kinh doanh. Mức lãi
                  suất vay mua ô tô đang được áp dụng tại ngân hàng Agribank như sau:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-sm text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 font-semibold">Hình thức vay</th>
                        <th className="border p-3 font-semibold">Lãi suất ưu đãi (cố định)</th>
                        <th className="border p-3 font-semibold">Lãi suất sau ưu đãi (thả nổi)</th>
                        <th className="border p-3 font-semibold">Thời hạn vay tối đa</th>
                        <th className="border p-3 font-semibold">Ghi chú</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loanRate.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="border p-3">{row.type}</td>
                          <td className="border p-3">{row.fixedRate}</td>
                          <td className="border p-3">{row.variableRate}</td>
                          <td className="border p-3">{row.term}</td>
                          <td className="border p-3">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <SmoothTab />
              </div>
            </div>
            <div className="col-span-2 max-w-md mx-auto">
              <div className="w-full">
                <PopularPosts title="Top bài viết hot 🔥" posts={mockPosts} className="" />
                <div className="px-4 py-2">
                  <div className="relative">
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
                <div className="py-4">
                  <NewsletterCard {...mockNewsletter} />
                </div>
                <div className="px-4">
                  <div className="grid grid-cols-2 gap-2">
                    <ArticleBox {...postData} />
                    <ArticleBox {...postData} />
                    <ArticleBox {...postData} />
                    <ArticleBox {...postData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
};

export default BlogDetailPage;
