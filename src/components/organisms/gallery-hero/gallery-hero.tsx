import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

import { BackgroundVideo } from '@/components/molecules/background-video/background-video';

gsap.registerPlugin(ScrollTrigger);

export interface GalleryHeroProps {
  videoDesktopSrc: string;
  videoMobileSrc?: string;
  headline: string;
  description: string;
  mainImageSrc: string;
  mainImageAlt?: string;
  infoTitle1: string;
  infoTitle2: string;
  footerText: string;
  qrImageSrc: string;
  qrAlt?: string;
  sideLabel?: string;
  gradientFrom?: string;
  gradientTo?: string;
  onCtaClick?: () => void;
  ctaText?: string;
}

export const GalleryHero: React.FC<GalleryHeroProps> = ({
  videoDesktopSrc,
  videoMobileSrc,
  headline,
  description,
  mainImageSrc,
  mainImageAlt = '',
  infoTitle1,
  infoTitle2,
  footerText,
  qrImageSrc,
  qrAlt = 'QR Code',
  sideLabel = 'Bất động sản',
  gradientFrom = '#6366F1', // indigo-500
  gradientTo = '#EC4899' // pink-500
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const mainImageRef = useRef<HTMLDivElement | null>(null);
  const qrRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const footerTextRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(containerRef.current, { opacity: 0, duration: 1 });

    tl.from(descRef.current, { y: 30, opacity: 0, duration: 0.6 }, '<0.1');
    tl.from(mainImageRef.current, { scale: 1.1, opacity: 0, duration: 1 }, '<0.3');
    tl.from(infoRef.current, { y: 40, opacity: 0, duration: 0.8 }, '-=0.6');
    tl.fromTo(
      qrRef.current,
      { rotation: -15, scale: 0.8, opacity: 0 },
      {
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)'
      },
      '-=0.5'
    );
    tl.from(footerTextRef.current, { y: 20, opacity: 0, duration: 1 }, '-=0.4');

    const parallax = gsap.to(containerRef.current, {
      scale: 1.02,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    return () => {
      // cleanup
      tl.kill();
      parallax.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative group min-h-screen w-full" ref={containerRef}>
      <div className="absolute top-0 left-0 w-screen h-screen flex items-center overflow-hidden">
        <div className="w-full h-1/2 overflow-hidden">
          <BackgroundVideo
            desktopSrc={videoDesktopSrc}
            mobileSrc={videoMobileSrc || videoDesktopSrc}
            className="relative bottom-0 left-0 !w-screen !h-auto"
          />
        </div>
      </div>

      <div className="absolute -top-[50vh] -left-[50vh] group-hover:top-0 group-hover:left-0 transition-all duration-300">
        <div className="flex gap-4 transform -rotate-45">
          <div className="w-2 h-[75vh] bg-gradient-to-b from-yellow-200 via-slate-100 to-yellow-500"></div>
          <div className="w-[6px] h-[65vh] bg-gradient-to-b from-yellow-200 via-slate-100 to-yellow-500"></div>
          <div className="w-1 h-[60vh] bg-gradient-to-b from-yellow-200 via-slate-100 to-yellow-500"></div>
          <div className="w-[2px] h-[55vh] bg-gradient-to-b from-yellow-200 via-slate-100 to-yellow-500"></div>
        </div>
      </div>

      <div className="absolute -bottom-[50vh] -right-[50vh] group-hover:bottom-0 group-hover:right-0 transition-all duration-300">
        <div className="flex items-end gap-4 transform -rotate-45">
          <div className="w-2 h-[75vh] bg-gradient-to-b from-yellow-200 via-slate-100 to-yellow-500"></div>
          <div className="w-[6px] h-[65vh] bg-gradient-to-b from-yellow-200 via-slate-100 to-yellow-500"></div>
          <div className="w-1 h-[60vh] bg-gradient-to-b from-yellow-200 via-slate-100 to-yellow-500"></div>
          <div className="w-[2px] h-[55vh] bg-gradient-to-b from-yellow-200 via-slate-100 to-yellow-500"></div>
        </div>
      </div>

      <div className="group-hover:scale-110 transition-transform duration-300 absolute top-[50%] transform -translate-y-1/2 w-full">
        <div className="w-full">
          <div className="mx-auto max-w-3xl w-full px-4">
            <div className="py-4 px-2">
              <div className="relative text-black">
                <div className="absolute top-28 -left-[100px] z-10">
                  <h2
                    // ref={headlineRef}
                    className="w-1/2 uppercase text-4xl font-bold transition-all duration-300 text-transparent bg-clip-text drop-shadow-lg scale-105 tracking-wide"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
                    }}
                  >
                    {headline}
                  </h2>
                  <div className="mt-2 max-w-md">
                    <p ref={descRef} className="text-xs font-normal text-white">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="w-full" ref={mainImageRef}>
                  <Image
                    src={mainImageSrc}
                    alt={mainImageAlt}
                    width={526}
                    height={526}
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="absolute bottom-12 left-0 w-full">
                  <div className="flex gap-4 justify-between items-end">
                    <div ref={infoRef}>
                      <h3 className="text-sm">{infoTitle1}</h3>
                      <h4 className="text-sm">{infoTitle2}</h4>
                    </div>
                    <div className="relative flex" ref={qrRef}>
                      <div className="w-24">
                        <Image
                          src={qrImageSrc}
                          alt={qrAlt}
                          width={526}
                          height={526}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="absolute top-1/2 -right-12 text-xs w-max transform -rotate-90">
                          {sideLabel}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p ref={footerTextRef} className="text-xs font-normal pt-1">
                    {footerText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
