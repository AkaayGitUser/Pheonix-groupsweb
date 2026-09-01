"use client";
 
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
 
/* =========================================================
   TYPES
========================================================= */
 
type TabId = "our-story" | "innovation" | "impact";
 
type ShowcaseTab = {
  id: TabId;
  title: string;
  heading: string;
  paragraphs: string[];
};
 
type CardItem = {
  id: number;
  src: string;
  alt: string;
  translate: boolean;
};
 
/* =========================================================
   SETTINGS
========================================================= */
 
const SLIDE_TIME = 5000;
 
/* =========================================================
   DIFFERENT BACKGROUND FOR EACH TAB
========================================================= */
 
const BACKGROUND_IMAGES: Record<TabId, string> = {
  "our-story": "/images/Bg/image.png",
  innovation: "/images/Bg/drone.png",
  impact: "/images/Bg/leaf.png",
};
 
/* =========================================================
   IMAGES INSIDE 25 (CAROUSEL)
========================================================= */
 
const OUR_STORY_IMAGES = [
  "/images/25/image-1.png",
  "/images/25/image2.png",
  "/images/25/image-3.png",
];
 
/* =========================================================
   INNOVATION CARDS
========================================================= */
 
const INNOVATION_CARDS: CardItem[] = [
  {
    id: 1,
    src: "/images/innovation/pic1.png",
    alt: "Innovation card 1",
    translate: false,
  },
  {
    id: 2,
    src: "/images/innovation/pic2.png",
    alt: "Innovation card 2",
    translate: true,
  },
  {
    id: 3,
    src: "/images/innovation/pic3.png",
    alt: "Innovation card 3",
    translate: false,
  },
  {
    id: 4,
    src: "/images/innovation/pic4.png",
    alt: "Innovation card 4",
    translate: true,
  },
];
 
/* =========================================================
   IMPACT CARDS
========================================================= */
 
const IMPACT_CARDS: CardItem[] = [
  {
    id: 1,
    src: "/images/impact/people.png",
    alt: "Impact card 1",
    translate: false,
  },
  {
    id: 2,
    src: "/images/impact/card2.png",
    alt: "Impact card 2",
    translate: true,
  },
  {
    id: 3,
    src: "/images/impact/card3.png",
    alt: "Impact card 3",
    translate: false,
  },
  {
    id: 4,
    src: "/images/impact/card4.png",
    alt: "Impact card 4",
    translate: true,
  },
];
 
/* =========================================================
   TAB CONTENT
========================================================= */
 
const tabs: ShowcaseTab[] = [
  {
    id: "our-story",
    title: "Our Story",
    heading: "Our Story",
    paragraphs: [
      "Phoenix Group’s journey is deeply connected to the growth and evolution of Hyderabad. With a vision to create spaces that inspire and endure, we have built a legacy shaped by ambition, innovation and a commitment to excellence.",
      "Over the years, our journey has grown beyond creating developments to shaping destinations, workplaces, experiences and communities. As Hyderabad continues to move forward, we remain driven by the same belief: to create a meaningful and lasting impact on the way people live, work, connect and experience the city.",
    ],
  },
  {
    id: "innovation",
    title: "Our Innovation",
    heading: "Our Innovation",
    paragraphs: [
      "Innovation is at the heart of how Phoenix Group shapes the future. We embrace forward-thinking ideas, evolving technologies and sustainable practices to create spaces and experiences that respond to changing needs.",
      "From smarter developments and modern infrastructure to new possibilities across our businesses, we continuously challenge convention and look ahead, creating lasting value for people, communities and the city.",
    ],
  },
  {
    id: "impact",
    title: "Our Impact",
    heading: "Our Impact",
    paragraphs: [
      "Our impact extends beyond the spaces and businesses we create. Through every development, initiative and partnership, we strive to contribute meaningfully to the growth of Hyderabad and the communities around us.",
      "By creating opportunities, supporting communities and embracing responsible growth, Phoenix Group is committed to building a positive and lasting impact for people, the city and generations to come.",
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */
 
export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [restartKey, setRestartKey] = useState(0);
  const [storyImageIndex, setStoryImageIndex] = useState(0);
 
  const animationRef = useRef<number | null>(null);
  const current = tabs[activeTab];
 
  /* =========================================================
     PRELOAD ALL IMAGES
  ========================================================= */
 
  useEffect(() => {
    const preloadImage = (src: string) => {
      const image = new window.Image();
      image.src = src;
    };
 
    Object.values(BACKGROUND_IMAGES).forEach((src) => {
      preloadImage(src);
    });
 
    OUR_STORY_IMAGES.forEach((src) => {
      preloadImage(src);
    });
 
    INNOVATION_CARDS.forEach((card) => {
      preloadImage(card.src);
    });
 
    IMPACT_CARDS.forEach((card) => {
      preloadImage(card.src);
    });
  }, []);
 
  /* =========================================================
     ROTATE OUR STORY IMAGES EVERY 3.5 SECONDS
  ========================================================= */
 
  useEffect(() => {
    if (tabs[activeTab].id !== "our-story") return;
 
    const interval = setInterval(() => {
      setStoryImageIndex((prev) => (prev + 1) % OUR_STORY_IMAGES.length);
    }, 1500);
 
    return () => clearInterval(interval);
  }, [activeTab]);
 
  /* =========================================================
     5 SECOND LOADING + AUTO CHANGE TABS
  ========================================================= */
 
  useEffect(() => {
    setProgress(0);
    const startTime = performance.now();
 
    const animateProgress = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const percentage = Math.min((elapsedTime / SLIDE_TIME) * 100, 100);
 
      setProgress(percentage);
 
      if (percentage < 100) {
        animationRef.current = requestAnimationFrame(animateProgress);
      } else {
        setActiveTab((previous) => (previous + 1) % tabs.length);
      }
    };
 
    animationRef.current = requestAnimationFrame(animateProgress);
 
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeTab, restartKey]);
 
  /* =========================================================
     CLICK TAB
  ========================================================= */
 
  const handleTabClick = (index: number) => {
    setProgress(0);
 
    if (index === activeTab) {
      setRestartKey((previous) => previous + 1);
      return;
    }
 
    setActiveTab(index);
  };
 
  /* =========================================================
     REUSABLE CARD GRID
  ========================================================= */
 
  const renderCardGrid = (cards: CardItem[]) => {
    return (
      <div
        className="
          grid
          w-full
          grid-cols-2
          gap-x-3
          gap-y-4
          sm:gap-x-4
          sm:gap-y-5
          md:gap-x-5
          md:gap-y-6
        "
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`
              relative
              w-full
              ${
                card.translate
                  ? "-translate-y-4 sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-10"
                  : ""
              }
            `}
          >
            <motion.div
              initial={{
                x: index % 2 === 0 ? -40 : 40,
                y: index % 2 === 0 ? 25 : -25,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.025,
              }}
              className="
                group
                relative
                h-[145px]
                w-full
                overflow-hidden
                bg-white/10
                sm:h-[190px]
                md:h-[225px]
                lg:h-[245px]
                xl:h-[255px]
              "
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                unoptimized
                sizes="
                  (max-width: 640px) 50vw,
                  (max-width: 1024px) 45vw,
                  350px
                "
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-105
                "
              />
 
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  border
                  border-white/10
                "
              />
            </motion.div>
          </div>
        ))}
      </div>
    );
  };
 
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        relative
        w-full
        min-h-[700px]
        overflow-hidden
        bg-[#111]
        text-white
        font-['General_Sans',Arial,sans-serif]
        max-lg:min-h-0
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={`background-${current.id}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="
              absolute
              -inset-[20px]
              bg-cover
              bg-center
              bg-no-repeat
              blur-[5px]
              max-sm:blur-[3px]
            "
            style={{
              backgroundImage: `url("${BACKGROUND_IMAGES[current.id]}")`,
            }}
          />
        </AnimatePresence>
 
        <div
          className="
            absolute
            inset-0
            z-[1]
            bg-gradient-to-r
            from-black/55
            via-black/30
            to-black/35
          "
        />
      </div>
 
      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[700px]
          w-full
          max-w-[1450px]
          flex-col
          px-4
          py-5
          sm:px-7
          sm:py-6
          md:px-10
          md:py-8
          lg:px-[60px]
          lg:py-[38px]
          max-lg:min-h-0
        "
      >
        {/* ===================================================
            TABS
        =================================================== */}
        <div
          className="
            grid
            w-full
            grid-cols-3
            gap-3
            sm:gap-5
            md:gap-8
            lg:gap-[60px]
          "
        >
          {tabs.map((tab, index) => {
            const active = index === activeTab;
            const completed = index < activeTab;
 
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(index)}
                className="
                  group
                  flex
                  w-full
                  flex-col
                  items-start
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  outline-none
                  cursor-pointer
                "
              >
                {/* PROGRESS LINE */}
                <div
                  className="
                    relative
                    h-[2px]
                    w-full
                    overflow-hidden
                    bg-white/30
                    sm:h-[3px]
                  "
                >
                  {completed && (
                    <span className="absolute inset-0 bg-white/80" />
                  )}
 
                  {active && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        bg-[#e9a536]
                        will-change-[width]
                      "
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  )}
                </div>
 
                {/* TITLE */}
                <span
                  className={`
                    mt-2
                    text-[11px]
                    font-semibold
                    transition-colors
                    duration-300
                    sm:mt-3
                    sm:text-[14px]
                    md:text-[16px]
                    lg:text-[20px]
                    ${
                      active || completed
                        ? "text-white"
                        : "text-white/60 group-hover:text-white"
                    }
                  `}
                >
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>
 
        {/* ===================================================
            MAIN GRID
        =================================================== */}
        <div
          className="
            grid
            w-full
            flex-1
            grid-cols-1
            items-center
            gap-8
            pb-5
            pt-8
            sm:gap-10
            sm:pt-10
            lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
            lg:gap-[55px]
            lg:pt-[45px]
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${current.id}`}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-[620px]"
            >
              <h1
                className="
                  mb-5
                  font-sans
                  text-[36px]
                  font-normal
                  leading-[1]
                  sm:text-[42px]
                  md:text-[52px]
                  lg:text-[62px]
                  xl:text-[68px]
                "
              >
                {current.heading}
              </h1>
 
              <div
                className="
                  max-w-[600px]
                  text-[14px]
                  leading-[1.55]
                  text-white/95
                  sm:text-[15px]
                  sm:leading-[1.65]
                  lg:text-[16px]
                "
              >
                {current.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
 
              <button
                type="button"
                className="
                  mt-6
                  inline-flex
                  h-[42px]
                  min-w-[145px]
                  items-center
                  justify-center
                  gap-4
                  rounded-full
                  border
                  border-white/80
                  bg-transparent
                  px-6
                  text-[13px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                  sm:h-[44px]
                  sm:min-w-[155px]
                  sm:text-[14px]
                "
              >
                <span>read more</span>
                <span className="text-[17px]">→</span>
              </button>
            </motion.div>
          </AnimatePresence>
 
          {/* =================================================
              RIGHT
          ================================================= */}
          <AnimatePresence mode="wait">
            {current.id === "our-story" ? (
              <motion.div
                key="right-story"
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                  flex
                  w-full
                  max-w-[720px]
                  flex-col
                  items-center
                  justify-self-center
                  lg:justify-self-end
                "
              >
                {/* ===============================================
                    BIG 25 WITH MULTIPLE IMAGE MASK ROTATION
                =============================================== */}
                <div
                  className="
                    flex
                    h-[250px]
                    w-full
                    items-center
                    justify-center
                    sm:h-[320px]
                    md:h-[390px]
                    lg:h-[450px]
                  "
                >
                  <svg
                    className="
                      block
                      h-auto
                      w-full
                      max-w-[520px]
                      overflow-visible
                      sm:max-w-[620px]
                      md:max-w-[700px]
                      lg:max-w-[720px]
                    "
                    viewBox="0 0 760 470"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="25 Years"
                  >
                    <defs>
                      {OUR_STORY_IMAGES.map((src, idx) => (
                        <pattern
                          key={idx}
                          id={`imagePattern25-${idx}`}
                          patternUnits="userSpaceOnUse"
                          width="760"
                          height="470"
                        >
                          <image
                            href={src}
                            x="0"
                            y="0"
                            width="760"
                            height="470"
                            preserveAspectRatio="xMidYMid slice"
                          />
                        </pattern>
                      ))}
                    </defs>
 
                    {OUR_STORY_IMAGES.map((_, idx) => (
                      <motion.text
                        key={idx}
                        x="50%"
                        y="86%"
                        textAnchor="middle"
                        fontFamily="General Sans, Arial, sans-serif"
                        fontWeight="700"
                        fontSize="560"
                        fill={`url(#imagePattern25-${idx})`}
                        initial={false}
                        animate={{
                          opacity: idx === storyImageIndex ? 1 : 0,
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                        }}
                      >
                        25
                      </motion.text>
                    ))}
                  </svg>
                </div>
 
                {/* ===============================================
                    YEARS OF EXPERIENCE
                =============================================== */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="
                    -mt-2
                    mb-5
                    text-center
                    font-sans
                    text-[15px]
                    font-medium
                    tracking-[0.05em]
                    text-white
                    sm:-mt-4
                    sm:text-[18px]
                    md:-mt-6
                    md:text-[21px]
                    lg:-mt-8
                    lg:text-[24px]
                  "
                >
                  Years of Experience
                </motion.p>
 
                <div
                  className="
                    mx-auto
                    grid
                    w-[84%]
                    max-w-[320px]
                    grid-cols-3
                    items-start
                    gap-[5px]
                    sm:w-[82%]
                    sm:max-w-[400px]
                    sm:gap-2
                    md:max-w-[500px]
                    md:gap-5
                    lg:max-w-[540px]
                    lg:gap-[26px]
                  "
                >
                  {/* STAT 1 */}
                  <div
                    className="
                      grid
                      w-full
                      grid-rows-[12px_22px]
                      items-center
                      justify-items-center
                      text-center
                      md:grid-rows-[14px_28px]
                    "
                  >
                    <span
                      className="
                        whitespace-nowrap
                        text-[6px]
                        font-medium
                        leading-none
                        text-white/90
                        sm:text-[7px]
                        md:text-[9px]
                        lg:text-[10px]
                      "
                    >
                      Established in
                    </span>
 
                    <strong
                      className="
                        whitespace-nowrap
                        text-[14px]
                        font-bold
                        leading-none
                        sm:text-[16px]
                        md:text-[20px]
                        lg:text-[24px]
                      "
                    >
                      2001
                    </strong>
                  </div>
 
                  {/* STAT 2 */}
                  <div
                    className="
                      grid
                      w-full
                      grid-rows-[12px_22px]
                      items-center
                      justify-items-center
                      md:grid-rows-[14px_28px]
                    "
                  >
                    <span className="invisible">x</span>
 
                    <div
                      className="
                        flex
                        items-baseline
                        justify-center
                        gap-0.5
                        whitespace-nowrap
                      "
                    >
                      <strong
                        className="
                          text-[14px]
                          font-bold
                          leading-none
                          sm:text-[16px]
                          md:text-[20px]
                          lg:text-[24px]
                        "
                      >
                        40 mil.
                      </strong>
 
                      <span
                        className="
                          text-[5px]
                          font-semibold
                          sm:text-[6px]
                          md:text-[7px]
                          lg:text-[8px]
                        "
                      >
                        sq ft.
                      </span>
                    </div>
                  </div>
 
                  {/* STAT 3 */}
                  <div
                    className="
                      grid
                      w-full
                      grid-rows-[12px_22px]
                      items-center
                      justify-items-center
                      md:grid-rows-[14px_28px]
                    "
                  >
                    <span className="invisible">x</span>
 
                    <strong
                      className="
                        whitespace-nowrap
                        text-[14px]
                        font-bold
                        leading-none
                        sm:text-[16px]
                        md:text-[20px]
                        lg:text-[24px]
                      "
                    >
                      40%
                    </strong>
                  </div>
                </div>
              </motion.div>
            ) : current.id === "innovation" ? (
              /* =================================================
                 OUR INNOVATION
              ================================================= */
              <motion.div
                key="right-innovation"
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                  mx-auto
                  w-full
                  max-w-[700px]
                  lg:mx-0
                  lg:justify-self-end
                "
              >
                {renderCardGrid(INNOVATION_CARDS)}
              </motion.div>
            ) : (
              /* =================================================
                 OUR IMPACT
              ================================================= */
              <motion.div
                key="right-impact"
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                  mx-auto
                  w-full
                  max-w-[700px]
                  lg:mx-0
                  lg:justify-self-end
                "
              >
                {renderCardGrid(IMPACT_CARDS)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}