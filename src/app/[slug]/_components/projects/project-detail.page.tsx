import Image from 'next/image';

import { FooterDesktop } from '@/components/layouts/footer-desktop/footer-desktop';

import { BottomNavProject } from '../ui/bottom-nav-project';
import { ExampleChart } from '../ui/example-chart';
import LoanCalculatorPanel from '../ui/loan-calculator-panel';
import { MapView } from '../ui/map-view';
import { OverviewExample } from '../ui/overview-example';
import { RealEstateGallery } from '../ui/real-estate-gallery';
import { TableExample } from '../ui/table-example';

const galleryData = {
  images: [
    '/images/estate.jpg',
    '/images/estate.jpg',
    '/images/estate.jpg',
    '/images/estate.jpg',
    '/images/estate.jpg'
  ],
  status: 'Sắp mở bán',
  pricePerSqm: '40 – 55',
  areaSize: '30',
  moreImagesText: '+10 ảnh'
};
type ProjectDetailProps = {
  slug: string;
};
export const ProjectDetailPage = ({ slug }: ProjectDetailProps) => {
  return (
    <div>
      <div className="hidden">{slug}</div>
      <section>
        <div className="relative max-h-[75vh] overflow-hidden group">
          <div className="absolute w-full h-full flex flex-col justify-center items-center">
            <h2 className="w-1/2 uppercase text-center text-6xl font-bold transition-all bg-gradient-to-br from-indigo-500 to-pink-500 duration-300 text-transparent bg-clip-text group-hover:drop-shadow-lg  scale-105 tracking-wide">
              BALI REAL ESTATE
            </h2>
            <div className="pt-2 flex flex-col items-center gap-1">
              <div className="w-0 group-hover:w-[35vw] h-[1px] bg-white transition-width duration-300"></div>
              <div className="w-0 group-hover:w-[50vw] h-[2px] bg-white transition-width duration-300"></div>
              <div className="w-0 group-hover:w-[65vw] h-[3px] bg-white transition-width duration-300"></div>
            </div>
            <div className="text-center text-xs text-black p-1">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, quis, dolore
                possimus at et iste, nihil hic expedita nulla adipisci eveniet commodi incidunt
                nesciunt eum iusto debitis?
              </p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, quis, dolore
                possimus at et iste, nihil hic expedita nulla adipisci eveniet commodi incidunt
                nesciunt eum iusto debitis? Quo, quos explicabo.
              </p>
            </div>
          </div>
          <Image
            src="/images/estate.jpg"
            alt="QR Code"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain border"
          />
        </div>
      </section>
      <section>
        <div className="py-8">
          <div className="mx-auto max-w-8x w-full">
            <RealEstateGallery {...galleryData} />
          </div>
        </div>
      </section>
      <section>
        <div className="py-8">
          <div className="mx-auto max-w-8xl px-4">
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <div>
                  <div className="py-8">
                    <div className="max-w-8xl mx-auto">
                      <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-bold pb-2">Tổng quan Vinhomes Global Gate</h2>
                        <div>
                          <OverviewExample />
                        </div>

                        <div className="py-8">
                          <TableExample />
                        </div>
                        <p className="text-sm">
                          Vinhomes Global Gate là dự án khu đô thị sinh thái do Tập đoàn Vingroup và
                          công ty Cổ phần trung tâm hội chợ triển lãm Việt Nam làm chủ đầu tư. Tọa
                          lạc trên địa bàn huyện Đông Anh, cách trung tâm thủ đô Hà Nội chỉ 15km,
                          Vinhomes Global Gate sẽ được chia thành 2 tiểu khu chính với quy hoạch
                          đồng bộ bên cạnh trung tâm Hội chợ triển lãm Quốc gia. Theo đó, Khu Đóng
                          sẽ là phân khu Biệt thự biệt lập dành cho phân khách hàng đẳng cấp và Khu
                          Mở sẽ là phân khu Biệt thự nhà liền kề, nhà phố thương mại với thiết kế mở
                          ra không gian tiện ích chung.
                        </p>
                        <div className="mx-auto max-w-6xl w-full">
                          <div className="h-full w-full overflow-hidden">
                            <Image
                              src="/images/estate.jpg"
                              alt="QR Code"
                              width={1920}
                              height={1080}
                              className="h-full w-auto object-cover border windowgroup-hover:blur-0 transition-all duration-200"
                            />
                          </div>
                        </div>
                        <div className="mx-auto max-w-6xl w-full">
                          <div className="h-full w-full overflow-hidden">
                            <Image
                              src="/images/estate.jpg"
                              alt="QR Code"
                              width={1920}
                              height={1080}
                              className="h-full w-auto object-cover border group-hover:blur-0 transition-all duration-200"
                            />
                          </div>
                        </div>
                        <div className="mx-auto max-w-6xl w-full">
                          <div className="h-full w-full overflow-hidden">
                            <Image
                              src="/images/estate.jpg"
                              alt="QR Code"
                              width={1920}
                              height={1080}
                              className="h-full w-auto object-cover border group-hover:blur-0 transition-all duration-200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-8">
                    <div className="mx-auto max-w-8xl">
                      <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-bold pb-2">Bản đò Vinhomes Global Gate</h2>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex h-full items-end justify-end">
                            <div className="flex flex-col gap-2 text-right">
                              <div className="max-w-md text-sm font-medium">
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                  Laudantium nulla pariatur numquam expedita cum eum dolorum quae
                                  modi quis, atque, quaerat magnam minima, enim velit laborum!
                                  Deleniti provident corrupti obcaecati?
                                </p>
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                  Laudantium nulla pariatur numquam expedita cum eum dolorum quae
                                  modi quis, atque, quaerat magnam minima, enim velit laborum!
                                  Deleniti provident corrupti obcaecati?
                                </p>
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                  Laudantium nulla pariatur numquam expedita cum eum dolorum quae
                                  modi quis, atque, quaerat magnam minima, enim velit laborum!
                                  Deleniti provident corrupti obcaecati?
                                </p>
                              </div>
                              <h2 className="uppercase text-4xl font-bold">Real estate</h2>
                            </div>
                          </div>
                          <div>
                            <ExampleChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-8">
          <div className="mx-auto max-w-8xl w-full">
            <MapView />
          </div>
        </div>
      </section>
      <LoanCalculatorPanel className="grid grid-cols-1 lg:grid-cols-2 gap-10" />
      <BottomNavProject />

      <FooterDesktop />
    </div>
  );
};
