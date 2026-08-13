"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Lato } from "next/font/google";

/* =========================================================
   LATO FONT
========================================================= */

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

/* =========================================================
   SLIDES DATA
========================================================= */

const slides = [
  {
    id: 1,
    image: "/images/arena-img.png",
    title: "Phoenix Arena",
    label: "Our Brands",
  },
  {
    id: 2,
    image: "/images/foundation-img.png",
    title: "Phoenix Foundation",
    label: "Community",
  },
  {
    id: 3,
    image: "/images/infra-img.png",
    title: "Phoenix Infra",
    label: "Infrastructure",
  },
  {
    id: 4,
    image: "/images/motors-bg.png",
    title: "Phoenix Motors",
    label: "Mobility",
  },
  {
    id: 5,
    image: "/images/mahaprastanam-img.png",
    title: "Vaikunta Mahaprasthanam",
    label: "Community",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TimelinesHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [isSliding, setIsSliding] = useState(false);

  const activeSlide = slides[currentSlide] ?? slides[0];

  /* =========================================================
     CHANGE SLIDE
  ========================================================= */

  const changeSlide = (index: number) => {
    if (isSliding || index === currentSlide) return;

    setIsSliding(true);
    setContentVisible(false);

    window.setTimeout(() => {
      setCurrentSlide(index);

      window.setTimeout(() => {
        setContentVisible(true);
        setIsSliding(false);
      }, 300);
    }, 200);
  };

  /* =========================================================
     NEXT
  ========================================================= */

  const goNext = () => {
    if (isSliding) return;

    const next = (currentSlide + 1) % slides.length;

    changeSlide(next);
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const goPrevious = () => {
    if (isSliding) return;

    const previous =
      (currentSlide - 1 + slides.length) % slides.length;

    changeSlide(previous);
  };

  /* =========================================================
     GO TO SLIDE
  ========================================================= */

  const goToSlide = (index: number) => {
    changeSlide(index);
  };

  /* =========================================================
     AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setContentVisible(false);

      window.setTimeout(() => {
        setCurrentSlide(
          (prev) => (prev + 1) % slides.length
        );

        window.setTimeout(() => {
          setContentVisible(true);
        }, 300);
      }, 200);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="brands"
      className={`
        ${lato.className}

        snap-start
        snap-always

        relative
        isolate

        flex

        h-[100svh]
        min-h-[560px]
        w-full
        max-w-full

        flex-col

        overflow-hidden

        bg-black
        text-white

        md:min-h-[620px]

        lg:min-h-[650px]

        xl:min-h-[680px]
      `}
    >
      {/* =====================================================
          MAIN BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0 z-0">
        <Image
          key={activeSlide.id}
          src={activeSlide.image}
          alt={activeSlide.title}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="
            object-cover
            object-center

            transition-opacity
            duration-700
            ease-in-out
          "
        />
      </div>

      {/* =====================================================
          BLACK TINT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10

          bg-black/20
        "
      />

      {/* =====================================================
          LEFT GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10

          w-full

          bg-gradient-to-r
          from-black/65
          via-black/25
          to-transparent

          sm:w-[85%]

          md:w-[70%]

          lg:w-[58%]

          xl:w-[50%]
        "
      />

      {/* =====================================================
          BOTTOM GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10

          h-[55%]

          bg-gradient-to-t
          from-black/90
          via-black/30
          to-transparent

          sm:h-[50%]

          lg:h-[45%]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0

          bottom-[88px]

          z-20

          min-[400px]:bottom-[92px]

          sm:bottom-[112px]

          md:bottom-[130px]

          lg:bottom-[145px]

          xl:bottom-[150px]
        "
      >
        <div
          className="
            mx-auto

            w-full
            max-w-[1180px]

            px-4

            min-[400px]:px-5

            sm:px-6

            md:px-8

            lg:px-10

            xl:px-6

            2xl:px-0
          "
        >
          <div
            className={`
              pointer-events-auto

              min-w-0

              w-full
              max-w-[520px]

              transition-all
              ease-out

              ${
                contentVisible
                  ? "translate-y-0 opacity-100 duration-[800ms]"
                  : "translate-y-[20px] opacity-0 duration-150"
              }
            `}
          >
            {/* =================================================
                LABEL
            ================================================= */}

            <span
              className="
                inline-flex
                max-w-full

                items-center

                bg-[#073B56]

                px-2.5
                py-1.5

                text-[9px]
                font-normal
                italic
                leading-none
                text-white

                min-[400px]:text-[10px]

                sm:px-3
                sm:py-[7px]
                sm:text-[11px]

                md:text-[12px]
              "
            >
              {activeSlide.label}
            </span>

            {/* =================================================
                TITLE
            ================================================= */}

            <div
              className="
                mt-3

                flex
                min-w-0

                items-center

                gap-2

                sm:mt-4
                sm:gap-3
              "
            >
              <h2
                className="
                  min-w-0
                  max-w-[470px]

                  break-words

                  text-[22px]
                  font-light
                  leading-[1.08]
                  text-white

                  min-[400px]:text-[25px]

                  min-[480px]:text-[27px]

                  sm:text-[30px]

                  md:text-[34px]

                  lg:text-[38px]

                  xl:text-[40px]
                "
              >
                {activeSlide.title}
              </h2>

              {/* EXTERNAL LINK ICON */}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="
                  h-[17px]
                  w-[17px]

                  shrink-0

                  text-white

                  sm:h-[20px]
                  sm:w-[20px]

                  md:h-[22px]
                  md:w-[22px]
                "
              >
                <path
                  d="M14 4H20V10"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M20 4L11 13"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />

                <path
                  d="M18 13V19H5V6H11"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* =================================================
                VIEW ALL
            ================================================= */}

            <button
              type="button"
              className="
                group

                mt-3

                flex

                h-[34px]

                max-w-full

                items-center

                gap-2

                bg-[#F6A51C]

                px-3

                text-[10px]
                font-bold
                text-white

                transition-all
                duration-300

                hover:bg-[#E9970F]

                min-[400px]:h-[36px]
                min-[400px]:px-4
                min-[400px]:text-[11px]

                sm:mt-5
                sm:h-[40px]
                sm:gap-3
                sm:px-5
                sm:text-[12px]

                md:h-[44px]
                md:px-6
                md:text-[13px]
              "
            >
              View All

              <ArrowRight
                className="
                  h-4
                  w-4
                  shrink-0

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT SIDE INDICATORS

          Hidden on mobile because horizontal thumbnail
          navigation is already available.
      ===================================================== */}

      <div
        className="
          absolute

          right-4
          top-1/2

          z-30

          hidden

          -translate-y-1/2

          flex-col

          gap-[4px]

          md:flex

          lg:right-8

          xl:right-10
        "
      >
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;

          return (
            <button
              key={slide.id}
              type="button"
              disabled={isSliding}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${slide.title}`}
              className={`
                w-[2px]

                transition-all
                duration-500

                disabled:cursor-default

                ${
                  isActive
                    ? "h-[38px] bg-[#F6A51C] md:h-[42px]"
                    : "h-[22px] bg-white/75 md:h-[28px]"
                }
              `}
            />
          );
        })}
      </div>

      {/* =====================================================
          BOTTOM THUMBNAIL AREA
      ===================================================== */}

      <div
        className="
          absolute

          inset-x-0
          bottom-0

          z-30

          w-full

          bg-black/60

          backdrop-blur-[2px]
        "
      >
        <div
          className="
            mx-auto

            flex

            w-full
            max-w-[1180px]

            items-center

            gap-1.5

            px-2
            py-1.5

            min-[400px]:gap-2
            min-[400px]:px-3
            min-[400px]:py-2

            sm:gap-2.5
            sm:px-4
            sm:py-2.5

            md:gap-3
            md:px-5
            md:py-3

            lg:px-8

            xl:px-6

            2xl:px-0
          "
        >
          {/* =================================================
              LEFT ARROW
          ================================================= */}

          <button
            type="button"
            onClick={goPrevious}
            disabled={isSliding}
            aria-label="Previous slide"
            className="
              group

              flex

              h-[30px]
              w-[30px]

              shrink-0

              items-center
              justify-center

              bg-[#F6A51C]
              text-white

              transition-all
              duration-300

              hover:bg-[#E9970F]

              disabled:cursor-default
              disabled:opacity-60

              min-[400px]:h-[32px]
              min-[400px]:w-[32px]

              min-[480px]:h-[34px]
              min-[480px]:w-[34px]

              sm:h-[38px]
              sm:w-[38px]

              md:h-[42px]
              md:w-[42px]

              lg:h-[44px]
              lg:w-[44px]
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="
                h-[15px]
                w-[15px]

                transition-transform
                duration-300

                group-hover:-translate-x-1

                sm:h-[19px]
                sm:w-[19px]

                md:h-[22px]
                md:w-[22px]
              "
            >
              <path
                d="M19 12H5"
                stroke="currentColor"
                strokeWidth="1.4"
              />

              <path
                d="M10 7L5 12L10 17"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* =================================================
              THUMBNAIL SCROLLER

              IMPORTANT:
              flex-1 + min-w-0 prevents overflow.
              overflow-x-auto allows small screens to scroll.
          ================================================= */}

          <div
            className="
              flex

              min-w-0
              flex-1

              items-center

              gap-[5px]

              overflow-x-auto
              overscroll-x-contain

              scroll-smooth

              [scrollbar-width:none]

              [&::-webkit-scrollbar]:hidden

              min-[400px]:gap-[6px]

              sm:gap-2

              md:gap-3

              lg:justify-center
            "
          >
            {slides.map((slide, index) => {
              const isActive =
                currentSlide === index;

              return (
                <div
                  key={slide.id}
                  className="
                    group

                    relative

                    shrink-0

                    pb-1
                    pt-2

                    sm:pb-2
                  "
                >
                  {/* ==========================================
                      TOP INDICATOR
                  ========================================== */}

                  <div
                    className={`
                      pointer-events-none

                      absolute

                      left-1/2
                      top-[4px]

                      z-10

                      h-2
                      w-2

                      -translate-x-1/2
                      rotate-45

                      border-l
                      border-t

                      bg-[#4A5568]

                      transition-all
                      duration-300

                      sm:h-2.5
                      sm:w-2.5

                      ${
                        isActive
                          ? "scale-100 border-white opacity-100"
                          : "scale-50 border-transparent opacity-0 group-hover:scale-100 group-hover:border-white/50 group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* ==========================================
                      THUMBNAIL
                  ========================================== */}

                  <button
                    type="button"
                    disabled={isSliding}
                    onClick={() =>
                      goToSlide(index)
                    }
                    aria-label={`Show ${slide.title}`}
                    className={`
                      relative

                      h-[44px]
                      w-[60px]

                      shrink-0

                      overflow-hidden

                      border

                      transition-all
                      duration-500

                      disabled:cursor-default

                      min-[360px]:h-[46px]
                      min-[360px]:w-[64px]

                      min-[400px]:h-[48px]
                      min-[400px]:w-[70px]

                      min-[430px]:h-[50px]
                      min-[430px]:w-[76px]

                      min-[480px]:h-[54px]
                      min-[480px]:w-[86px]

                      sm:h-[62px]
                      sm:w-[104px]

                      md:h-[72px]
                      md:w-[128px]

                      lg:h-[82px]
                      lg:w-[150px]

                      xl:h-[88px]
                      xl:w-[165px]

                      ${
                        isActive
                          ? "border-white"
                          : "border-transparent group-hover:border-white/50"
                      }
                    `}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      quality={85}
                      sizes="
                        (max-width: 359px) 60px,
                        (max-width: 399px) 64px,
                        (max-width: 429px) 70px,
                        (max-width: 479px) 76px,
                        (max-width: 639px) 86px,
                        (max-width: 767px) 104px,
                        (max-width: 1023px) 128px,
                        (max-width: 1279px) 150px,
                        165px
                      "
                      className="
                        object-cover
                        object-center

                        brightness-[1.12]
                        saturate-[1.08]

                        transition-transform
                        duration-700

                        group-hover:scale-105
                      "
                    />

                    {/* DARK OVERLAY */}

                    <div
                      className={`
                        absolute
                        inset-0

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-[#4A5568]/85"
                            : "bg-transparent group-hover:bg-[#4A5568]/85"
                        }
                      `}
                    />

                    {/* THUMBNAIL TITLE */}

                    <div
                      className={`
                        absolute
                        inset-0

                        flex

                        items-center
                        justify-center

                        px-1

                        transition-all
                        duration-300

                        sm:px-2

                        ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        }
                      `}
                    >
                      <span
                        className="
                          max-w-full

                          break-words

                          text-center

                          text-[6px]
                          font-bold
                          leading-[1.15]
                          text-white

                          drop-shadow-lg

                          min-[400px]:text-[7px]

                          min-[480px]:text-[8px]

                          sm:text-[9px]

                          md:text-[10px]

                          lg:text-[11px]

                          xl:text-[12px]
                        "
                      >
                        {slide.title}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* =================================================
              RIGHT ARROW
          ================================================= */}

          <button
            type="button"
            onClick={goNext}
            disabled={isSliding}
            aria-label="Next slide"
            className="
              group

              flex

              h-[30px]
              w-[30px]

              shrink-0

              items-center
              justify-center

              bg-[#F6A51C]
              text-white

              transition-all
              duration-300

              hover:bg-[#E9970F]

              disabled:cursor-default
              disabled:opacity-60

              min-[400px]:h-[32px]
              min-[400px]:w-[32px]

              min-[480px]:h-[34px]
              min-[480px]:w-[34px]

              sm:h-[38px]
              sm:w-[38px]

              md:h-[42px]
              md:w-[42px]

              lg:h-[44px]
              lg:w-[44px]
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="
                h-[15px]
                w-[15px]

                transition-transform
                duration-300

                group-hover:translate-x-1

                sm:h-[19px]
                sm:w-[19px]

                md:h-[22px]
                md:w-[22px]
              "
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="1.4"
              />

              <path
                d="M14 7L19 12L14 17"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}