'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';

import { BackgroundVideo } from '@/components/molecules/background-video/background-video';
import { ImageCarouselVertical } from '@/components/molecules/image-carousel-vertical/image-carousel-vertical';
import { ImageWithCarousel } from '@/components/molecules/image-with-carousel/image-with-carousel';
import { ProvinceColumn } from '@/components/molecules/province-column/province-column';
import { StatusCard } from '@/components/molecules/status-card/status-card';
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle
} from '@/components/ui/timeline';

import { cn } from '@/lib/utils';

const linkStatic = 'http://173.249.41.172:9000/mybucket/video.mp4';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    id: 1,
    date: 'Mar 15, 2024',
    title: 'Project Kickoff',
    description: 'Initial team meeting.'
  },
  {
    id: 2,
    date: 'Mar 22, 2024',
    title: 'Design Phase',
    description: 'Completed wireframes.'
  },
  {
    id: 3,
    date: 'Apr 5, 2024',
    title: 'Development Sprint',
    description: 'Backend development.'
  },
  {
    id: 4,
    date: 'Apr 19, 2024',
    title: 'Testing & Deployment',
    description: 'Performance optimization.'
  },
  {
    id: 5,
    date: 'Apr 19, 2024',
    title: 'Testing & Deployment',
    description: 'Performance optimization.'
  }
];

const provinces = [
  { name: 'TP. HCM', color: 'bg-red-500', image: '/images/estate.jpg' },
  { name: 'Hà Nội', color: 'bg-blue-500', image: '/images/etienne.jpg' },
  { name: 'Đà Nẵng', color: 'bg-green-500', image: '/images/estate.jpg' },
  { name: 'Cần Thơ', color: 'bg-yellow-500', image: '/images/etienne.jpg' },
  { name: 'Hải Phòng', color: 'bg-purple-500', image: '/images/estate.jpg' }
];

const backupStatus = {
  title: 'System backup completed successfully.',
  timestamp: 'January 9, 2024 at 10:55 AM',
  icon: <CheckCircle className="text-indigo-600 w-4 h-4" />,
  statusColor: 'text-green-700'
};

const imageList = [
  { id: 1, src: '/images/mapi.png' },
  { id: 2, src: '/images/etienne.jpg' },
  { id: 3, src: '/images/mapi.png' }
];

const sampleImages = [
  {
    id: 1,
    src: '/images/estate.jpg',
    alt: 'Ảnh mẫu 1'
  },
  {
    id: 2,
    src: '/images/etienne.jpg',
    alt: 'Ảnh mẫu 2'
  },
  {
    id: 3,
    src: '/images/estate.jpg',
    alt: 'Ảnh mẫu 3'
  },
  {
    id: 4,
    src: '/images/etienne.jpg',
    alt: 'Ảnh mẫu 4'
  }
];

const SECTIONS = [
  {
    title: 'Giới thiệu',
    bg: 'bg-gradient-to-br from-white via-indigo-50 to-indigo-100',
    children: (
      <div className="relative group md:max-h-screen">
        <BackgroundVideo
          desktopSrc={linkStatic}
          mobileSrc={linkStatic}
          className="relative bottom-0 left-0 w-screen h-auto"
        />
        <div className="absolute top-[50%] transform -translate-y-1/2 w-full">
          <div className="w-full text-center">
            <div className="mx-auto max-w-3xl px-4">
              <div className="group-hover:border-l-[1px] group-hover:border-r-[1px] border-white py-4 px-2 transition-all duration-300">
                <div className="group-hover:border-l-[1px] group-hover:border-r-[1px] border-white transition-all duration-300">
                  <h2 className="text-6xl text-center font-bold transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-pink-500 group-hover:drop-shadow-lg group-hover:scale-105 group-hover:tracking-wide">
                    BALENCIAGAY
                  </h2>
                  <div className="mx-auto mt-2 max-w-2xl">
                    <p className="text-sm font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit qui, labore
                      officiis eius, minima placeat natus deserunt, possimus excepturi nobis vero.
                      Exercitationem hic qui ullam praesentium ipsum quas, non esse?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[30%] left-0 h-auto w-full z-10">
          <div className="pt-4 flex flex-col items-center gap-2">
            <div className="h-[1px] w-1/2 bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="h-[1px] w-3/4 bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Dự án',
    bg: 'bg-gradient-to-br from-white via-indigo-50 to-indigo-100',
    children: (
      <div className="px-4 mx-auto">
        <div className="mx-auto">
          <Timeline defaultValue={3} orientation="horizontal">
            {items.map((item) => (
              <TimelineItem
                key={item.id}
                step={item.id}
                className="group-data-[orientation=horizontal]/timeline:mt-0"
              >
                <TimelineHeader>
                  <TimelineSeparator className="group-data-[orientation=horizontal]/timeline:top-8" />
                  <TimelineDate className="mb-10">{item.date}</TimelineDate>
                  <TimelineTitle className="text-black">{item.title}</TimelineTitle>
                  <TimelineIndicator className="group-data-[orientation=horizontal]/timeline:top-8" />
                </TimelineHeader>
                <TimelineContent>{item.description}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
        <div className="grid grid-cols-5 pt-4">
          <div className="col-span-2 text-sm font-normal relative">
            <div className="text-black flex flex-col gap-2 ">
              <h2 className="text-2xl font-bold uppercase">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <div className="absolute bottom-[40%] -left-[20%]">
                <h3 className="-rotate-90 text-7xl font-bold">LOCATION</h3>
              </div>
              <div className="flex flex-col gap-2 pl-[15%]">
                <StatusCard {...backupStatus} />
                <StatusCard {...backupStatus} />
                <StatusCard {...backupStatus} />
                <StatusCard {...backupStatus} />
                <StatusCard {...backupStatus} />
              </div>
            </div>
          </div>
          <div className="col-span-3 relative">
            <ImageWithCarousel imageList={imageList} height={350} rounded="rounded-xl" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Căn hộ',
    bg: 'bg-gradient-to-br from-white via-indigo-50 to-indigo-100',
    children: (
      <div className="min-w-screen w-full">
        <div className="w-full grid grid-cols-3">
          <div className="text-black font-normal">
            <div className="absolute bottom-[40%] -left-[140px]">
              <h3 className="-rotate-90 text-7xl font-bold">LOCATION</h3>
            </div>
            <div className="pt-8 pb-4 pl-24">
              <h2 className="text-2xl font-bold uppercase">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ea molestiae
                quibusdam inventore. Eligendi ad nisi impedit, corporis magni sint saepe perferendis
                delectus officiis. Quibusdam voluptate omnis itaque commodi voluptatum?
              </p>
              <div className="flex flex-col pt-4 px-4">
                <StatusCard {...backupStatus} />
                <StatusCard {...backupStatus} />
                <StatusCard {...backupStatus} />
                <StatusCard {...backupStatus} />
                <StatusCard {...backupStatus} />
              </div>
            </div>
          </div>
          <div className="col-span-2 h-screen overflow-hidden">
            <ImageCarouselVertical
              images={sampleImages}
              height={600}
              className="h-[600px]"
              rounded=""
            />
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Dịch vụ',
    bg: 'bg-gradient-to-br from-white via-indigo-50 to-indigo-100',
    children: (
      <div className="flex h-[100vh] w-screen">
        <ProvinceColumn className="h-[100vh]" provinces={provinces} />
      </div>
    )
  },
  {
    title: 'Liên hệ',
    bg: 'bg-gradient-to-br from-white via-indigo-50 to-indigo-100',
    children: (
      <div className="isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Contact sales
          </h2>
          <p className="mt-2 text-sm font-normal text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-2 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-xs font-semibold text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full bg-white px-3.5 py-1 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-xs font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full bg-white px-3.5 py-1 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-xs font-semibold text-gray-900">
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="block min-w-0 grow py-1 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-xs font-semibold text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                  <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                  <input
                    id="agree-to-policies"
                    name="agree-to-policies"
                    type="checkbox"
                    aria-label="Agree to policies"
                    className="absolute inset-0 appearance-none focus:outline-hidden"
                  />
                </div>
              </div>
              <label htmlFor="agree-to-policies" className="text-xs text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold whitespace-nowrap text-indigo-600">
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Lets talk
            </button>
          </div>
        </form>
      </div>
    )
  }
];

const FullpageScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.section');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
        snap: 1,
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index)
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const scrollTo = (index: number) => {
    const section = document.querySelectorAll<HTMLElement>('.section')[index];
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      {/* Section Content */}
      {SECTIONS.map((sec, i) => (
        <section
          key={i}
          className={cn(
            'section h-screen w-full flex items-center justify-center text-white text-4xl font-bold transition-all duration-300',
            sec.bg
          )}
        >
          {sec.children ? sec.children : sec.title}
        </section>
      ))}
      <div className="h-screen"></div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {SECTIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              'w-3 h-3 rounded-full border-2 border-white transition-all duration-300',
              i === activeIndex ? 'bg-white scale-125' : 'bg-transparent'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default FullpageScroll;
