"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type ShowcaseTab = {
  id: string;
  title: string;
  heading: string;
  paragraphs: string[];
  image: string;
};

const SLIDE_TIME = 5000;

const aboutImages = ["/images/ourstory/img.jpg"];

const tabs: ShowcaseTab[] = [
  {
    id: "our-story",
    title: "Our Story",
    heading: "Our Story",
    image: "/images/ourstory/img.jpg",
    paragraphs: [
      "We are committed to building a sustainable future by accelerating the transition toward clean energy, circular business models, and net-zero carbon operations across all key sectors.",
      "By leveraging next-generation materials and renewable energy technologies, we strive to harmonize industrial growth with environmental stewardship.",
    ],
  },
  {
    id: "innovation",
    title: "Innovation",
    heading: "Innovation",
    image: "/images/product/img1.jpg",
    paragraphs: [
      "Innovation is a way of life at Reliance. Our spectacular growth story is engineered by innovation and the new paradigms we set every single day to create a better future for all.",
      "Our innovations touch many facets of life in India – be it digital services, transportation, retail, or healthcare. Our bold ambitions for Reliance and for India push us to create an innovation agenda that is even bolder, ensuring that the next wave of growth will remain innovation-led.",
    ],
  },
  {
    id: "impact",
    title: "Impact",
    heading: "Impact",
    image: "/images/impact/image.jpg",
    paragraphs: [
      "At Reliance, we are constantly aligning our ambitions with India's dreams. We have generated employment and immense societal value, committed resources and ideas to a digital revolution, built world-class manufacturing assets, and created an integrated retail ecosystem.",
      "We have also joined forces with the best in the world to bring the best of the world to India, stepping up to the challenge of making the future our own.",
    ],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    tabs.forEach((tab) => {
      const img = new window.Image();
      img.src = tab.image;
    });

    aboutImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
      setProgressKey((prev) => prev + 1);
    }, SLIDE_TIME);

    return () => clearTimeout(timer);
  }, [activeTab, progressKey]);

  useEffect(() => {
    if (aboutImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const current = tabs[activeTab];

  const backgroundImage =
    current.id === "our-story"
      ? aboutImages[currentImageIndex]
      : current.image;

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgressKey((prev) => prev + 1);
  };

  return (
    <main className="relative w-full min-h-[700px] overflow-hidden bg-[#111] text-white font-sans">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#111]">
        <div
          key={`${current.id}-${currentImageIndex}`}
          className="absolute -top-[50px] -right-[50px] -bottom-[50px] -left-[50px] bg-cover bg-center bg-no-repeat blur-[18px] opacity-[0.92] animate-[backgroundChange_1s_ease_forwards]"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/15 via-black/5 to-black/14" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1450px] min-h-[700px] mx-auto px-5 sm:px-10 lg:px-[60px] py-[22px] sm:py-[30px] lg:py-[38px] flex flex-col">
        {/* TABS */}
        <div className="w-full grid grid-cols-3 gap-3 sm:gap-6 lg:gap-[60px]">
          {tabs.map((tab, index) => {
            const active = activeTab === index;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(index)}
                className="w-full p-0 border-none outline-none bg-transparent cursor-pointer flex flex-col items-start text-left font-inherit"
              >
                <div className="relative w-full h-[3px] overflow-hidden bg-white/35">
                  {active && (
                    <span
                      key={`${progressKey}-${tab.id}`}
                      className="absolute top-0 left-0 h-full bg-[#e9a536] animate-[progressLoading_5s_linear_forwards]"
                    />
                  )}
                </div>

                <span
                  className={`mt-2 sm:mt-3 text-[12px] sm:text-[14px] lg:text-[20px] font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] ${
                    active ? "text-white" : "text-white/60"
                  }`}
                >
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* MAIN GRID */}
        <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] items-center gap-[28px] sm:gap-[35px] lg:gap-[65px] pt-[28px] sm:pt-[35px] lg:pt-[55px] pb-[15px]">
          {/* LEFT CONTENT */}
          <div
            key={`content-${current.id}`}
            className="w-full max-w-full lg:max-w-[680px] animate-[contentEnter_0.7s_ease_forwards]"
          >
            <h1 className="m-0 mb-5 sm:mb-6 font-serif text-[36px] sm:text-[40px] md:text-[52px] lg:text-[74px] font-normal leading-[0.95] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]">
              {current.heading}
            </h1>

            <div className="max-w-[660px] text-[14px] lg:text-[17px] leading-[1.55] sm:leading-[1.65] text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              {current.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-3 sm:mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <button
              type="button"
              className="mt-[10px] sm:mt-[14px] h-[40px] sm:h-[44px] px-6 border border-white/85 rounded-full bg-transparent text-white text-[14px] cursor-pointer inline-flex items-center justify-center gap-[14px] transition-all duration-300 hover:bg-white hover:text-[#111] font-inherit"
            >
              <span>read more</span>
              <span className="text-[17px]">→</span>
            </button>
          </div>

          {/* RIGHT CONTENT */}
          {current.id === "our-story" ? (
            <div className="w-full max-w-full sm:max-w-[720px] lg:max-w-[650px] justify-self-center lg:justify-self-end flex flex-col items-center animate-[yearsEnter_0.9s_ease_forwards]">
              {/* BIG 25 */}
              <div className="w-full h-[245px] sm:h-[285px] md:h-[350px] lg:h-[390px] flex items-center justify-center">
                <svg
                  className="block w-full max-w-[470px] sm:max-w-[680px] lg:max-w-[650px] h-auto overflow-visible"
                  viewBox="0 0 760 470"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="25 Years"
                >
                  <defs>
                    <pattern
                      id="imagePattern25"
                      patternUnits="userSpaceOnUse"
                      width="760"
                      height="470"
                    >
                      <image
                        href={aboutImages[currentImageIndex]}
                        x="0"
                        y="0"
                        width="760"
                        height="470"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </pattern>
                  </defs>

                  <text
                    x="50%"
                    y="83%"
                    textAnchor="middle"
                    fontFamily="Arial Black, Arial, sans-serif"
                    fontWeight="900"
                    fontSize="445"
                    fill="url(#imagePattern25)"
                  >
                    25
                  </text>
                </svg>
              </div>

              {/* STATS BELOW 25 */}
              <div className="w-[84%] sm:w-[82%] max-w-[300px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[500px] -mt-9 sm:-mt-[42px] md:-mt-[52px] lg:-mt-[58px] mx-auto p-0 grid grid-cols-3 items-start justify-center gap-[5px] sm:gap-[8px] md:gap-[20px] lg:gap-[26px]">
                {/* STAT 1 */}
                <div className="w-full min-w-0 grid grid-rows-[11px_21px] sm:grid-rows-[12px_23px] md:grid-rows-[14px_28px] items-center justify-items-center text-center text-white">
                  <span className="w-full flex items-center justify-center text-[6px] sm:text-[7px] md:text-[9px] lg:text-[10px] leading-none font-medium text-white/90 whitespace-nowrap text-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]">
                    Established in
                  </span>

                  <strong className="m-0 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-none font-bold text-white whitespace-nowrap text-center drop-shadow-[0_2px_5px_rgba(0,0,0,0.55)]">
                    2001
                  </strong>
                </div>

                {/* STAT 2 */}
                <div className="w-full min-w-0 grid grid-rows-[11px_21px] sm:grid-rows-[12px_23px] md:grid-rows-[14px_28px] items-center justify-items-center text-center text-white">
                  <span className="w-full flex items-center justify-center text-[6px] sm:text-[7px] md:text-[9px] lg:text-[10px] leading-none font-medium text-white/90 whitespace-nowrap text-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)] invisible">
                    &nbsp;
                  </span>

                  <div className="w-full flex items-baseline justify-center gap-0.5 sm:gap-[3px] min-w-0 whitespace-nowrap">
                    <strong className="m-0 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-none font-bold text-white whitespace-nowrap text-center drop-shadow-[0_2px_5px_rgba(0,0,0,0.55)]">
                      40 mil.
                    </strong>

                    <span className="text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] leading-none font-semibold text-white/88 whitespace-nowrap">
                      sq ft.
                    </span>
                  </div>
                </div>

                {/* STAT 3 */}
                <div className="w-full min-w-0 grid grid-rows-[11px_21px] sm:grid-rows-[12px_23px] md:grid-rows-[14px_28px] items-center justify-items-center text-center text-white">
                  <span className="w-full flex items-center justify-center text-[6px] sm:text-[7px] md:text-[9px] lg:text-[10px] leading-none font-medium text-white/90 whitespace-nowrap text-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)] invisible">
                    &nbsp;
                  </span>

                  <strong className="m-0 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-none font-bold text-white whitespace-nowrap text-center drop-shadow-[0_2px_5px_rgba(0,0,0,0.55)]">
                    40%
                  </strong>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={`image-${current.id}`}
              className="relative w-full max-w-[520px] h-[360px] md:h-[420px] lg:h-[500px] justify-self-center lg:justify-self-end overflow-hidden rounded-none animate-[imageContainerEnter_1s_ease_forwards]"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center rounded-none"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}