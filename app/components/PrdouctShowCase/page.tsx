"use client";

import React, { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import { useTheme } from "@/app/context/ThemeContext";
import { motion } from "framer-motion";

/* =========================================================
   LATO FONT
========================================================= */

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

/* =========================================================
   HERO NEWS DATA
========================================================= */

const heroNewsItems = [
  {
    id: 1,
    category: "PRESS RELEASE",
    title: "Winner of CSR Initiative of the year - Real Estate Firm",
    description:
      "Celebrating our commitment to meaningful change and stronger communities.",
    image: "/images/news.png",
  },
  {
    id: 3,
    category: "INNOVATION",
    title: "Winner of CSR Leader of the year – Real Estate Sector",
    description: "Leading with purpose. Creating lasting impact.",
    image: "/images/news-img.png",
  },
];

/* =========================================================
   COMPANY NEWS DATA
========================================================= */

const companyNewsItems = [
  {
    id: 1,
    title: "Phoenix Arena",
    description:
      "Where moments, experiences and communities come together.",
  },
  {
    id: 2,
    title: "Phoenix Foundation",
    description:
      "Building stronger communities. Creating brighter futures.",
  },
  {
    id: 3,
    title: "Phoenix Motors",
    description:
      "We provide trusted mobility solutions with quality, reliability, and professionalism.",
  },
  {
    id: 4,
    title: "Phoenix Construction",
    description: "Building spaces that inspire, endure and belong.",
  },
  {
    id: 5,
    title: "Vaikunta Mahaprasthanam",
    description:
      "Peaceful surroundings. Compassionate care. Dignified farewells.",
  },
];

/* =========================================================
   FACTS DATA
========================================================= */

const factsItems = [
  {
    id: 1,
    text: "Phoenix Group has been steadily building a robust portfolio of projects in Hyderabad over the last 20 years.",
  },
  {
    id: 2,
    text: "Phoenix Arena, launched in association with TSIIC, is a vibrant platform that celebrates art and creativity.",
  },
  {
    id: 3,
    text: "Phoenix Foundation restored Sabarimala’s sacred Dwajasthambham with a new gold-plated teakwood flag post, inaugurated on 25 June 2017.",
  },
  {
    id: 4,
    text: "Phoenix Foundation relocated 1,000 ancient banyan trees to create a thriving eco-forest in Moinabad.",
  },
  {
    id: 5,
    text: "Phoenix Foundation partners with Sankara Eye Hospital to provide free eye care for underprivileged communities.",
  },
  {
    id: 6,
    text: "Vaikuntha Mahaprasthanam transformed crematoria into eco-friendly spaces offering dignity, comfort and care.",
  },
  {
    id: 7,
    text: "Phoenix Foundation provided free, clean drinking water through 30+ camps across the city.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ProductShowcase() {
  /* =========================================================
     THEME
  ========================================================= */

  const { theme } = useTheme();

  const isDark = theme === "dark";

  /* =========================================================
     SLIDER STATES
  ========================================================= */

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCompany, setCurrentCompany] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);

  /* =========================================================
     HERO AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroNewsItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     ACTIVE CONTENT
  ========================================================= */

  const activeHero = heroNewsItems[currentSlide];

  const activeCompany = companyNewsItems[currentCompany];

  const activeFact = factsItems[currentFact];

  /* =========================================================
     COMPANY REFRESH
  ========================================================= */

  const handleCompanyRefresh = () => {
    setCurrentCompany((prev) => (prev + 1) % companyNewsItems.length);
  };

  /* =========================================================
     FACT REFRESH
  ========================================================= */

  const handleFactRefresh = () => {
    setCurrentFact((prev) => (prev + 1) % factsItems.length);
  };

  return (
    <section
      id="social-media"
      className={`
        ${lato.className}

        relative
        w-full
        max-w-full
        overflow-x-hidden

        snap-start
        snap-always

        transition-colors
        duration-500

        dark:bg-[#363636]
        bg-[#efefef]

        py-10
        sm:py-12
        md:py-14
        lg:py-16
        xl:py-17.5
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
          max-w-285

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
          className="
            absolute
            z-30

            left-4
            -top-6

            px-4
            py-3

            shadow-[0_3px_12px_rgba(0,0,0,0.16)]

            transition-colors
            duration-500

            sm:left-5
            sm:-top-6.75
            sm:px-5

            md:left-6

            lg:left-8

            xl:-left-5
            xl:-top-7.5

           bg-white 
              dark:bg-[#454545]
          "
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
              dark:text-white
              text-[#454545]
              
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
            xl:gap-7.5
          "
        >
          {/* =====================================================
              HERO NEWS CARD
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              grid

              w-full
              min-w-0

              grid-cols-1

              overflow-hidden

              shadow-[0_2px_9px_rgba(0,0,0,0.08)]

              md:grid-cols-2

              xl:h-90.5
              xl:grid-cols-[390px_minmax(0,360px)]
            "
          >
            {/* =================================================
                HERO IMAGE
            ================================================= */}

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

                    ${item.image === "/images/news-img.png"
                      ? "object-contain object-center"
                      : "object-cover object-center"
                    }

                    ${index === currentSlide
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

                      ${currentSlide === index
                        ? "bg-white dark:bg-[#454545]"
                        : "border border-white dark:bg-[#454545] bg-transparent"
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
                
               dark:text-white
               text-[#454545]
              bg-white 
              dark:bg-[#454545]
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

                
                  dark:border-r-[#353535]
                  border-r-white
                `}
              />

              {/* =================================================
                  HERO TEXT
              ================================================= */}

              <div className="min-w-0">
                {/* CATEGORY */}

                <p
                  className="
                    text-[28px]
                    font-medium
                    uppercase
                    tracking-[0.02em]

                    text-[#0089cf]

                    sm:text-[14px]
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

                    dark:text-white
                    text-[#4a4a4a]
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
                      dark:text-[#eeeeee]
                      text-[#555555]
                    `}
                  >
                    {activeHero.description}
                  </p>
                </div>
              </div>

              {/* HERO ARROW REMOVED */}
            </div>
          </motion.div>

          {/* =====================================================
              COMPANY NEWS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
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

              dark:bg-[#078AB8]
              bg-[#0B86BE]
            `}
          >
            <div key={currentCompany} className="min-w-0">
              {/* LABEL */}

              <p
                className="
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.05em]
                  text-white

                  sm:text-[13px]
                "
              >
                COMPANY NEWS
              </p>

              {/* TITLE */}

              <h3
                className="
                  mt-5

                  break-words

                  text-[22px]
                  font-bold
                  leading-[1.25]
                  text-white

                  sm:mt-6
                  sm:text-[26px]
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
          </motion.div>
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

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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

              dark:bg-[#003D4D]
              bg-[#5F80AE]
            `}
          >
            <div key={currentFact} className="min-w-0">
              {/* LABEL */}

              <p
                className="
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.05em]
                  text-white

                  sm:text-[16px]
                "
              >
                FACTS
              </p>

              {/* TITLE */}

              <h3
                className="
                  mt-5

                  text-[22px]
                  font-bold
                  leading-[1.25]
                  text-white

                  sm:mt-6
                  sm:text-[26px]
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
          </motion.div>

          {/* =====================================================
              INSTAGRAM CARD
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
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

              dark:to-[#40233c]
              to-[#dfbdd8]
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

            <button
              type="button"
              aria-label="Open post"
              className="
                absolute

                bottom-5
                right-5

                transition-transform
                duration-300

                hover:-translate-y-1
                hover:translate-x-1

                sm:bottom-6
                sm:right-6
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="
                  h-[20px]
                  w-[20px]

                  sm:h-[22px]
                  sm:w-[22px]
                "
              >
                <path
                  d="M14 4H20V10"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M20 4L11 13"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />

                <path
                  d="M18 13V19H5V6H11"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   REUSABLE REFRESH BUTTON
========================================================= */

function RefreshButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <div
      className="
        mt-6
        flex
        justify-center
      "
    >
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className="
          group

          flex

          h-[42px]
          w-[42px]

          shrink-0

          items-center
          justify-center

          rounded-full

          transition-all
          duration-300

          hover:bg-white/10

          sm:h-[44px]
          sm:w-[44px]
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="
            h-[27px]
            w-[27px]

            transition-transform
            duration-500

            group-active:rotate-180

            sm:h-[29px]
            sm:w-[29px]
          "
        >
          <path
            d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M21 3v5h-5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}