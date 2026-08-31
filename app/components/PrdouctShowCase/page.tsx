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
<<<<<<< HEAD
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
=======
    <section
      className={`
        ${lato.className}

        relative
        w-full
        max-w-full
        overflow-x-hidden

        transition-colors
        duration-500

        ${isDark ? "bg-white" : "bg-[#eeeeee]"}

        py-10
        sm:py-12
        md:py-14
        lg:py-16
        xl:py-[70px]
      `}
    >
      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto

          w-full
          min-w-0
          max-w-[1140px]

          px-4
          sm:px-5
          md:px-6
          lg:px-8
          xl:px-0
        "
      >
        {/* =====================================================
            IN THE NEWS TITLE
        ===================================================== */}

        <div
          className={`
            absolute
            z-30

            left-4
            top-[-24px]
>>>>>>> 56d635b0161fcccdc90b37f3757f28c5c484f7ee

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

<<<<<<< HEAD
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
=======
            shadow-[0_3px_12px_rgba(0,0,0,0.16)]

            transition-colors
            duration-500

            sm:left-5
            sm:top-[-27px]
            sm:px-5

            md:left-6

            lg:left-8

            xl:left-[-20px]
            xl:top-[-30px]

            ${isDark ? "bg-[#353535]/95" : "bg-white/95"}
          `}
        >
          <h2
            className={`
              whitespace-nowrap

              text-[18px]
              font-bold
              leading-none

              transition-colors
              duration-500

              sm:text-[20px]
              md:text-[21px]
              lg:text-[22px]

              ${isDark ? "text-white" : "text-[#454545]"}
            `}
          >
            In the News
          </h2>
        </div>

        {/* =====================================================
            TOP SECTION
        ===================================================== */}

        <div
          className="
            grid
            w-full
            min-w-0

            grid-cols-1
            gap-5

            lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]

            xl:grid-cols-[minmax(0,750px)_360px]
            xl:gap-[30px]
          "
        >
          {/* =====================================================
              HERO NEWS CARD
          ===================================================== */}

          <div
            className="
              grid

              w-full
              min-w-0

              grid-cols-1

              overflow-hidden

              shadow-[0_2px_9px_rgba(0,0,0,0.08)]

              md:grid-cols-2

              xl:h-[362px]
              xl:grid-cols-[390px_minmax(0,360px)]
            "
>>>>>>> 56d635b0161fcccdc90b37f3757f28c5c484f7ee
          >
            <h1 className="m-0 mb-5 sm:mb-6 font-serif text-[36px] sm:text-[40px] md:text-[52px] lg:text-[74px] font-normal leading-[0.95] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]">
              {current.heading}
            </h1>

<<<<<<< HEAD
            <div className="max-w-[660px] text-[14px] lg:text-[17px] leading-[1.55] sm:leading-[1.65] text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              {current.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-3 sm:mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

=======
            <div
              className="
                relative

                h-[240px]

                w-full
                min-w-0

                overflow-hidden
                bg-black

                min-[380px]:h-[270px]

                sm:h-[320px]

                md:h-full
                md:min-h-[360px]

                xl:h-[362px]
                xl:min-h-0
              "
            >
              {heroNewsItems.map((item, index) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  className={`
                    absolute
                    inset-0

                    h-full
                    w-full

                    transition-opacity
                    duration-700
                    ease-in-out

                    ${
                      item.image === "/images/news-img.png"
                        ? "object-contain object-center"
                        : "object-cover object-center"
                    }

                    ${
                      index === currentSlide
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }
                  `}
                />
              ))}

              {/* IMAGE OVERLAY */}

              <div className="absolute inset-0 bg-black/[0.02]" />

              {/* =================================================
                  SLIDER DOTS
              ================================================= */}

              <div
                className="
                  absolute

                  bottom-5
                  left-1/2
                  z-20

                  flex

                  -translate-x-1/2

                  items-center
                  gap-3

                  sm:bottom-6
                "
              >
                {heroNewsItems.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`
                      h-[6px]
                      w-[6px]

                      shrink-0

                      transition-all
                      duration-300

                      ${
                        currentSlide === index
                          ? "bg-white"
                          : "border border-white bg-transparent"
                      }
                    `}
                  />
                ))}
              </div>
            </div>

            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div
              className={`
                relative

                flex
                w-full
                min-w-0

                min-h-[280px]

                flex-col

                px-5
                py-7

                transition-colors
                duration-500

                sm:min-h-[310px]
                sm:px-7
                sm:py-8

                md:min-h-[360px]
                md:px-8
                md:py-9

                lg:px-7

                xl:h-[362px]
                xl:min-h-0
                xl:px-[40px]
                xl:py-[42px]

                ${isDark ? "bg-[#353535]" : "bg-white"}
              `}
            >
              {/* =================================================
                  TRIANGLE
              ================================================= */}

              <div
                className={`
                  absolute

                  -left-[15px]
                  top-[25px]

                  z-20

                  hidden

                  h-0
                  w-0

                  border-b-[15px]
                  border-r-[15px]
                  border-t-[15px]

                  border-b-transparent
                  border-t-transparent

                  md:block

                  ${
                    isDark
                      ? "border-r-[#353535]"
                      : "border-r-white"
                  }
                `}
              />

              {/* =================================================
                  HERO TEXT
              ================================================= */}

              <div className="min-w-0">
                {/* CATEGORY */}

                <p
                  className="
                    text-[10px]
                    font-normal
                    uppercase
                    tracking-[0.02em]

                    text-[#0089cf]

                    sm:text-[11px]
                  "
                >
                  {activeHero.category}
                </p>

                {/* TITLE */}

                <h3
                  className={`
                    mt-8

                    max-w-[320px]

                    break-words

                    text-[18px]
                    font-bold
                    leading-[1.25]

                    transition-colors
                    duration-500

                    sm:mt-10
                    sm:text-[19px]

                    md:text-[20px]

                    xl:mt-[58px]

                    ${isDark ? "text-white" : "text-[#4a4a4a]"}
                  `}
                >
                  {activeHero.title}
                </h3>

                {/* DESCRIPTION */}

                <div
                  className="
                    mt-5

                    flex
                    min-w-0
                    items-stretch

                    sm:mt-[22px]
                  "
                >
                  {/* YELLOW LINE */}

                  <div
                    className="
                      mr-3

                      w-[2px]

                      shrink-0

                      bg-[#f5a000]

                      sm:mr-[14px]
                    "
                  />

                  <p
                    className={`
                      min-w-0

                      max-w-[280px]

                      break-words

                      text-[12px]
                      font-normal
                      leading-[1.7]

                      transition-colors
                      duration-500

                      sm:text-[13px]
                      sm:leading-[1.8]

                      ${
                        isDark
                          ? "text-[#eeeeee]"
                          : "text-[#555555]"
                      }
                    `}
                  >
                    {activeHero.description}
                  </p>
                </div>
              </div>

              {/* HERO ARROW REMOVED */}
            </div>
          </div>

          {/* =====================================================
              COMPANY NEWS
          ===================================================== */}

          <div
            className={`
              flex

              w-full
              min-w-0

              min-h-[300px]

              flex-col
              justify-between

              overflow-hidden

              px-5
              py-7

              shadow-[0_2px_9px_rgba(0,0,0,0.08)]

              transition-colors
              duration-500

              sm:min-h-[330px]
              sm:px-7
              sm:py-8

              md:px-8
              md:py-9

              lg:min-h-full
              lg:px-7

              xl:h-[362px]
              xl:min-h-0
              xl:px-[40px]
              xl:py-[42px]

              ${
                isDark
                  ? "bg-[#078AB8]"
                  : "bg-[#0B86BE]"
              }
            `}
          >
            <div key={currentCompany} className="min-w-0">
              {/* LABEL */}

              <p
                className="
                  text-[10px]
                  font-normal
                  uppercase
                  tracking-[0.02em]
                  text-white

                  sm:text-[11px]
                "
              >
                COMPANY NEWS
              </p>

              {/* TITLE */}

              <h3
                className="
                  mt-5

                  break-words

                  text-[18px]
                  font-bold
                  leading-[1.25]
                  text-white

                  sm:mt-6
                  sm:text-[20px]
                "
              >
                {activeCompany.title}
              </h3>

              {/* DESCRIPTION */}

              <div
                className="
                  mt-5

                  flex
                  min-w-0
                  items-stretch

                  sm:mt-6
                "
              >
                <div
                  className="
                    mr-3
                    w-[2px]
                    shrink-0

                    bg-[#ffb400]

                    sm:mr-[14px]
                  "
                />

                <p
                  className="
                    min-w-0
                    max-w-[290px]

                    break-words

                    text-[12px]
                    font-normal
                    leading-[1.7]
                    text-white

                    sm:text-[13px]
                    sm:leading-[1.8]

                    lg:max-w-[250px]
                  "
                >
                  {activeCompany.description}
                </p>
              </div>
            </div>

            {/* REFRESH */}

            <RefreshButton
              onClick={handleCompanyRefresh}
              label="Show next company"
            />
          </div>
        </div>

        {/* =====================================================
            BOTTOM SECTION
        ===================================================== */}

        <div
          className="
            mt-5

            grid

            w-full
            min-w-0

            grid-cols-1
            gap-5

            md:grid-cols-[minmax(250px,360px)_minmax(0,1fr)]

            xl:mt-[30px]
            xl:grid-cols-[360px_minmax(0,750px)]
            xl:gap-[30px]
          "
        >
          {/* =====================================================
              FACTS CARD
          ===================================================== */}

          <div
            className={`
              flex

              w-full
              min-w-0

              min-h-[300px]

              flex-col
              justify-between

              overflow-hidden

              px-5
              py-7

              shadow-[0_2px_9px_rgba(0,0,0,0.08)]

              transition-colors
              duration-500

              sm:min-h-[330px]
              sm:px-7
              sm:py-8

              md:min-h-[360px]
              md:px-8
              md:py-9

              xl:h-[362px]
              xl:min-h-0
              xl:px-[40px]
              xl:py-[42px]

              ${
                isDark
                  ? "bg-[#003D4D]"
                  : "bg-[#5F80AE]"
              }
            `}
          >
            <div key={currentFact} className="min-w-0">
              {/* LABEL */}

              <p
                className="
                  text-[10px]
                  font-normal
                  uppercase
                  tracking-[0.02em]
                  text-white

                  sm:text-[11px]
                "
              >
                FACTS
              </p>

              {/* TITLE */}

              <h3
                className="
                  mt-5

                  text-[18px]
                  font-bold
                  leading-[1.25]
                  text-white

                  sm:mt-6
                  sm:text-[20px]
                "
              >
                Did you know
              </h3>

              {/* FACT CONTENT */}

              <div
                className="
                  mt-5

                  flex
                  min-w-0
                  items-stretch

                  sm:mt-6
                "
              >
                <div
                  className="
                    mr-3

                    w-[2px]

                    shrink-0

                    bg-[#ffb000]

                    sm:mr-[14px]
                  "
                />

                <div className="min-w-0">
                  <p
                    className="
                      min-w-0

                      max-w-[270px]

                      break-words

                      text-[12px]
                      font-normal
                      leading-[1.7]
                      text-white

                      sm:text-[13px]
                      sm:leading-[1.8]
                    "
                  >
                    {activeFact.text}
                  </p>
                </div>
              </div>
            </div>

            {/* REFRESH */}

            <RefreshButton
              onClick={handleFactRefresh}
              label="Show next fact"
            />
          </div>

          {/* =====================================================
              INSTAGRAM CARD
          ===================================================== */}

          <div
            className={`
              relative

              w-full
              min-w-0

              min-h-[300px]

              overflow-hidden

              bg-gradient-to-r

              from-[#ff7900]
              via-[#ef4c68]

              px-5
              py-7

              shadow-[0_2px_9px_rgba(0,0,0,0.08)]

              transition-all
              duration-500

              sm:min-h-[330px]
              sm:px-7
              sm:py-8

              md:min-h-[360px]
              md:px-8
              md:py-9

              xl:h-[362px]
              xl:min-h-0
              xl:px-[40px]
              xl:py-[42px]

              ${
                isDark
                  ? "to-[#40233c]"
                  : "to-[#dfbdd8]"
              }
            `}
          >
            {/* =================================================
                INSTAGRAM ICON
            ================================================= */}

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="
                h-[22px]
                w-[22px]

                sm:h-[24px]
                sm:w-[24px]
              "
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="white"
                strokeWidth="1.4"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="white"
                strokeWidth="1.4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="white"
              />
            </svg>

            {/* =================================================
                INSTAGRAM CONTENT
            ================================================= */}

            <div
              className="
                mt-8

                flex

                min-w-0

                items-stretch

                sm:mt-10

                xl:mt-[42px]
              "
            >
              <div
                className="
                  mr-3

                  w-[1px]

                  shrink-0

                  bg-white

                  sm:mr-[14px]
                "
              />

              <div className="min-w-0 max-w-[470px]">
                <p
                  className="
                    break-words

                    text-[12px]
                    font-normal
                    leading-[1.7]
                    text-white

                    sm:text-[13px]
                    sm:leading-[1.8]
                  "
                >
                  Building experiences that bring people together.
                  <br className="hidden sm:block" />
                  Creating spaces that inspire communities.
                  <br className="hidden sm:block" />
                  Discover more from Phoenix.
                  <br className="hidden sm:block" />
                  #Phoenix #Community #Experiences
                </p>

                <p
                  className="
                    mt-2

                    text-[11px]
                    font-normal
                    italic
                    text-white
                  "
                >
                  Explore Phoenix
                </p>
              </div>
            </div>

            {/* =================================================
                EXTERNAL LINK ICON
            ================================================= */}

>>>>>>> 56d635b0161fcccdc90b37f3757f28c5c484f7ee
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