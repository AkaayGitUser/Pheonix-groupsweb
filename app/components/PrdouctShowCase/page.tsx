"use client";

import React, { useEffect, useState } from "react";

/* =========================================================
   HERO NEWS DATA
========================================================= */

const heroNewsItems = [
  {
    id: 1,
    category: "PRESS RELEASE",
    title:
      "Winner of CSR Initiative of the year - Real Estate Firm",
    description:
      "Celebrating our commitment to meaningful change and stronger communities.",
    image:
      "/images/news.png",
  },
//   {
//     id: 2,
//     category: "PRESS RELEASE",
//     title: "Tata Electronics and ASML Announce Strategic Partnership",
//     description:
//       "To advance semiconductor manufacturing ecosystem in India.",
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?q=90&w=1600&auto=format&fit=crop",
//   },
  {
    id: 3,
    category: "INNOVATION",
    title: "Winner of CSR Leader of the year – Real Estate Sector",
    description:
      "Leading with purpose. Creating lasting impact.",
    image:
      "/images/news-img.png",
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
    description:
      "Building spaces that inspire, endure and belong.",
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
    text:
      "Phoenix Group has been steadily building a robust portfolio of projects in Hyderabad over the last 20 years.",
  },
  {
    id: 2,
    text:
      "Phoenix Arena, launched in association with TSIIC, is a vibrant platform that celebrates art and creativity.",
  },
  {
    id: 3,
    text:
      "Phoenix Foundation restored Sabarimala’s sacred Dwajasthambham with a new gold-plated teakwood flag post, inaugurated on 25 June 2017.",
  },
  {
    id: 4,
    text:
      "Phoenix Foundation relocated 1,000 ancient banyan trees to create a thriving eco-forest in Moinabad.",
  },
  {
    id: 5,
    text:
      "Phoenix Foundation partners with Sankara Eye Hospital to provide free eye care for underprivileged communities.",
  },
  {
    id: 6,
    text:
      "Vaikuntha Mahaprasthanam transformed crematoria into eco-friendly spaces offering dignity, comfort and care.",
  },
  {
    id: 7,
    text:
      "Phoenix Foundation provided free, clean drinking water through 30+ camps across the city.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [currentCompany, setCurrentCompany] = useState(0);

  const [currentFact, setCurrentFact] = useState(0);

  /* =======================================================
     HERO AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroNewsItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const activeHero = heroNewsItems[currentSlide];

  const activeCompany = companyNewsItems[currentCompany];

  const activeFact = factsItems[currentFact];

  /* =======================================================
     COMPANY NEWS REFRESH
  ======================================================= */

  const handleCompanyRefresh = () => {
    setCurrentCompany((prev) => (prev + 1) % companyNewsItems.length);
  };

  /* =======================================================
     FACTS REFRESH
  ======================================================= */

  const handleFactRefresh = () => {
    setCurrentFact((prev) => (prev + 1) % factsItems.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#202020] py-12 sm:py-14 lg:py-[70px]">
      <div className="relative mx-auto w-full max-w-[1140px] px-4 sm:px-6 lg:px-0">
        {/* ===================================================
            TITLE
        =================================================== */}

        <div
          className="
            absolute
            left-4
            top-[-28px]
            z-30
            bg-[#353535]/95
            px-5
            py-3

            sm:left-6
            sm:top-[-30px]

            lg:left-[-20px]
            lg:top-[-30px]
          "
        >
          <h2 className="whitespace-nowrap text-[20px] font-semibold leading-none text-white sm:text-[22px]">
            In the News
          </h2>
        </div>

        {/* ===================================================
            TOP SECTION
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5

            lg:grid-cols-[minmax(0,750px)_360px]
            lg:gap-[30px]
          "
        >
          {/* =================================================
              HERO CARD
          ================================================= */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              overflow-visible

              md:grid-cols-[52%_48%]

              lg:h-[362px]
              lg:grid-cols-[390px_360px]
            "
          >
            {/* IMAGE */}

            <div
              className="
                relative
                h-[300px]
                w-full
                overflow-hidden
                bg-black

                sm:h-[360px]

                md:h-[380px]

                lg:h-[362px]
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

              <div className="absolute inset-0 bg-black/[0.03]" />

              {/* SLIDER DOTS */}

              <div
                className="
                  absolute
                  bottom-[25px]
                  left-1/2
                  z-20
                  flex
                  -translate-x-1/2
                  items-center
                  gap-[12px]
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
                HERO DARK CONTENT
            ================================================= */}

            <div
              className="
                relative
                flex
                min-h-[330px]
                w-full
                flex-col
                justify-between
                bg-[#353535]

                px-7
                py-8

                sm:px-9
                sm:py-10

                md:h-[380px]
                md:min-h-0

                lg:h-[362px]
                lg:px-[40px]
                lg:py-[42px]
              "
            >
              {/* TRIANGLE */}

              <div
                className="
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
                  border-r-[#353535]
                  border-t-transparent

                  md:block
                "
              />

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.02em] text-[#00aeef]">
                  {/* {activeHero.category} */}
                </p>

                <h3
                  className="
                    mt-10
                    max-w-[290px]
                    text-[19px]
                    font-semibold
                    leading-[1.2]
                    text-white

                    sm:mt-12
                    sm:text-[20px]

                    lg:mt-[60px]
                  "
                >
                  {activeHero.title}
                </h3>

                <div className="mt-[22px] flex items-stretch">
                  <div className="mr-[14px] w-[2px] shrink-0 bg-[#FFD000]" />

                  <p
                    className="
                      max-w-[260px]
                      text-[12px]
                      leading-[1.8]
                      text-[#eeeeee]

                      sm:text-[13px]
                    "
                  >
                    {activeHero.description}
                  </p>
                </div>
              </div>

              {/* ARROW */}

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  aria-label="Read news"
                  className="group flex h-[30px] w-[30px] items-center justify-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[25px] w-[25px] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M4 12H19"
                      stroke="white"
                      strokeWidth="1.3"
                    />

                    <path
                      d="M14 7L19 12L14 17"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* =================================================
              COMPANY NEWS CARD
          ================================================= */}

          <div
            className="
              flex
              min-h-[340px]
              w-full
              flex-col
              justify-between
              overflow-hidden
              bg-[#078AB8]

              px-6
              py-8

              sm:min-h-[360px]
              sm:px-8
              sm:py-10

              md:px-9

              lg:h-[362px]
              lg:min-h-0
              lg:px-[40px]
              lg:py-[42px]
            "
          >
            <div key={currentCompany}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.02em] text-white">
                COMPANY NEWS
              </p>

              <h3
                className="
                  mt-6
                  break-words
                  text-[20px]
                  font-semibold
                  leading-[1.2]
                  text-white

                  sm:text-[21px]
                "
              >
                {activeCompany.title}
              </h3>

              <div className="mt-6 flex items-stretch">
                <div className="mr-[14px] w-[2px] shrink-0 bg-[#FFD400]" />

                <p
                  className="
                    max-w-[270px]
                    break-words
                    text-[13px]
                    leading-[1.8]
                    text-white

                    lg:max-w-[250px]
                  "
                >
                  {activeCompany.description}
                </p>
              </div>
            </div>

            {/* COMPANY REFRESH */}

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleCompanyRefresh}
                aria-label="Show next company"
                className="
                  group
                  flex
                  h-[44px]
                  w-[44px]
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300

                  hover:bg-white/10
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    h-[30px]
                    w-[30px]
                    transition-transform
                    duration-500

                    group-active:rotate-180
                  "
                >
                  <path
                    d="M20 11A8 8 0 1 1 17.7 5.4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M17 2V6H21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM SECTION
        =================================================== */}

        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-5

            md:grid-cols-[minmax(260px,360px)_minmax(0,1fr)]

            lg:mt-[30px]
            lg:grid-cols-[360px_750px]
            lg:gap-[30px]
          "
        >
          {/* =================================================
              FACTS / DID YOU KNOW
          ================================================= */}

          <div
            className="
              flex
              min-h-[340px]
              w-full
              flex-col
              justify-between
              overflow-hidden
              bg-[#003D4D]

              px-6
              py-8

              sm:min-h-[360px]
              sm:px-8
              sm:py-10

              md:px-9

              lg:h-[362px]
              lg:min-h-0
              lg:px-[40px]
              lg:py-[42px]
            "
          >
            <div key={currentFact}>
              {/* FACTS LABEL */}

              <p className="text-[10px] font-semibold uppercase tracking-[0.02em] text-white">
                FACTS
              </p>

              {/* HEADING */}

              <h3
                className="
                  mt-6
                  text-[20px]
                  font-semibold
                  leading-[1.2]
                  text-white

                  sm:text-[21px]
                "
              >
                Did you know
              </h3>

              {/* FACT CONTENT */}

              <div className="mt-6 flex items-stretch">
                {/* YELLOW LINE */}

                <div className="mr-[14px] w-[2px] shrink-0 bg-[#FFD100]" />
<div className="min-w-0">
  <p
    className="
      max-w-[245px]
      break-words
      text-[12px]
      leading-[1.8]
      text-white

      sm:text-[13px]
    "
  >
    {activeFact.text}
  </p>
</div>
              </div>
            </div>

            {/* =================================================
                FACT REFRESH BUTTON
            ================================================= */}

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={handleFactRefresh}
                aria-label="Show next fact"
                className="
                  group
                  flex
                  h-[44px]
                  w-[44px]
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300

                  hover:bg-white/10
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    h-[29px]
                    w-[29px]
                    transition-transform
                    duration-500

                    group-active:rotate-180
                  "
                >
                  <path
                    d="M20 11A8 8 0 1 1 17.7 5.4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M17 2V6H21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* =================================================
              INSTAGRAM GRADIENT CARD
          ================================================= */}

          <div
            className="
              relative
              min-h-[340px]
              w-full
              overflow-hidden

              bg-gradient-to-r
              from-[#ff7900]
              via-[#eb456e]
              to-[#40233c]

              px-6
              py-8

              sm:px-8
              sm:py-10

              lg:h-[362px]
              lg:min-h-0
              lg:px-[40px]
              lg:py-[42px]
            "
          >
            {/* INSTAGRAM ICON */}

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-[24px] w-[24px]"
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

              <circle cx="17.5" cy="6.5" r="1" fill="white" />
            </svg>

            {/* CONTENT */}

            <div className="mt-10 flex items-stretch sm:mt-[42px]">
              <div className="mr-[14px] w-[1px] shrink-0 bg-white" />

              <div className="max-w-[440px]">
                <p
                  className="
                    text-[12px]
                    font-medium
                    leading-[1.9]
                    text-white

                    sm:text-[13px]
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

                <p className="mt-2 text-[11px] italic text-white">
                  Explore Phoenix
                </p>
              </div>
            </div>

            {/* EXTERNAL LINK */}

            <button
              type="button"
              aria-label="Open post"
              className="
                absolute
                bottom-6
                right-6
                transition-transform
                duration-300

                hover:-translate-y-1
                hover:translate-x-1
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-[22px] w-[22px]"
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
          </div>
        </div>
      </div>
    </section>
  );
}