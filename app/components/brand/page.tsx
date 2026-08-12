"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    image: "/images/motors-img.png",
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

export default function TimelinesHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [isSliding, setIsSliding] = useState(false);

  const targetIndex = currentSlide;
  const activeSlide = slides[currentSlide] ?? slides[0];

  const changeSlide = (index: number) => {
    if (isSliding || index === currentSlide) return;

    setIsSliding(true);
    setContentVisible(false);

    setTimeout(() => {
      setCurrentSlide(index);

      setTimeout(() => {
        setContentVisible(true);
        setIsSliding(false);
      }, 300);
    }, 200);
  };

  const goNext = () => {
    if (isSliding) return;
    const next = (currentSlide + 1) % slides.length;
    changeSlide(next);
  };

  const goPrevious = () => {
    if (isSliding) return;
    const previous = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(previous);
  };

  const goToSlide = (index: number) => {
    changeSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setContentVisible(false);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);

        setTimeout(() => {
          setContentVisible(true);
        }, 300);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white font-sans flex flex-col justify-end pb-8 sm:pb-12 md:pb-14 snap-start snap-always">
      {/* ===================================================
          MAIN DISPLAY BACKGROUND IMAGE
      =================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          key={activeSlide.id}
          src={activeSlide.image}
          alt={activeSlide.title}
          fill
          priority
          unoptimized
          className="object-cover object-center transition-opacity duration-700 ease-in-out"
        />
      </div>

      {/* Light Black Tint for Legibility */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />

      {/* LEFT GRADIENT */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[90%] bg-gradient-to-r from-black/60 via-black/20 to-transparent sm:w-[70%] md:w-[60%] lg:w-[48%]" />

      {/* BOTTOM GRADIENT */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[40%] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* ===================================================
          HERO CONTENT
      =================================================== */}
      <div className="pointer-events-none absolute inset-x-0 z-20 bottom-[90px] min-[480px]:bottom-[105px] sm:bottom-[120px] md:bottom-[140px] lg:bottom-[155px] xl:bottom-[160px]">
        <div className="mx-auto w-full max-w-[1180px] px-4 min-[480px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-0">
          <div
            className={`pointer-events-auto max-w-[500px] transition-all ease-out ${contentVisible
                ? "translate-y-0 opacity-100 duration-[1000ms]"
                : "translate-y-[25px] opacity-0 duration-150"
              }`}
          >
            {/* LABEL */}
            <span className="inline-flex items-center bg-[#073B56] px-[9px] py-[5px] text-[9px] font-medium italic text-white min-[480px]:text-[10px] sm:px-3 sm:py-[7px] sm:text-[11px] md:text-[12px]">
              {activeSlide.label}
            </span>

            {/* TITLE */}
            <div className="mt-3 flex items-center gap-2 sm:mt-4 sm:gap-3">
              <h2 className="max-w-[450px] text-[22px] font-light leading-[1.08] text-white min-[480px]:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px]">
                {activeSlide.title}
              </h2>

              {/* EXTERNAL LINK ICON */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-[17px] w-[17px] shrink-0 text-white sm:h-[20px] sm:w-[20px] md:h-[22px] md:w-[22px]"
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

            {/* DESCRIPTION */}
            {/* <p className="mt-2 max-w-[420px] text-[10px] leading-[1.65] text-white min-[480px]:text-[11px] sm:mt-3 sm:text-[12px] md:text-[13px] lg:text-[14px]">
              {activeSlide.description}
            </p> */}

            {/* VIEW ALL BUTTON */}
            <button
              type="button"
              className="group mt-3 flex h-[34px] items-center gap-2 bg-[#F6A51C] px-3 text-[10px] font-medium text-white transition-all duration-300 hover:bg-[#E9970F] min-[480px]:h-[36px] min-[480px]:px-4 min-[480px]:text-[11px] sm:mt-5 sm:h-[40px] sm:gap-3 sm:px-5 sm:text-[12px] md:h-[44px] md:px-6 md:text-[13px]"
            >
              View All
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================
          RIGHT SIDE INDICATORS
      =================================================== */}
      <div className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-[3px] sm:flex md:right-5 lg:right-8">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            disabled={isSliding}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${slide.title}`}
            className={`w-[2px] transition-all duration-500 ${targetIndex === index
                ? "h-[38px] bg-[#F6A51C] md:h-[42px]"
                : "h-[22px] bg-white/80 md:h-[28px]"
              }`}
          />
        ))}
      </div>

      {/* ===================================================
          BOTTOM THUMBNAIL STRIP
      =================================================== */}
      <div className="absolute inset-x-0 bottom-0 z-30 bg-black/60 backdrop-blur-[1px]">
        <div className="mx-auto flex w-full max-w-[1150px] items-center justify-center gap-[6px] px-2 py-2 sm:gap-2 sm:px-4 sm:py-3 md:gap-3 md:px-5 lg:px-0 lg:py-4">
          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={goPrevious}
            disabled={isSliding}
            aria-label="Previous slide"
            className="group mr-[2px] flex h-[30px] w-[30px] shrink-0 items-center justify-center bg-[#F6A51C] text-white transition-all duration-300 hover:bg-[#E9970F] disabled:cursor-default disabled:opacity-60 min-[480px]:h-[34px] min-[480px]:w-[34px] sm:mr-1 sm:h-[38px] sm:w-[38px] md:h-[42px] md:w-[42px] lg:mr-2 lg:h-[44px] lg:w-[44px]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-[16px] w-[16px] transition-transform duration-300 group-hover:-translate-x-1 sm:h-[19px] sm:w-[19px] md:h-[22px] md:w-[22px]"
            >
              <path d="M19 12H5" stroke="currentColor" strokeWidth="1.4" />
              <path
                d="M10 7L5 12L10 17"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* THUMBNAIL SCROLLER */}
          <div className="flex min-w-0 items-center gap-[5px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[480px]:gap-[6px] sm:gap-2 md:gap-3">
            {slides.map((slide, index) => {
              const isActive = targetIndex === index;
              return (
                <div
                  key={slide.id}
                  className="relative group shrink-0 pt-2 pb-2"
                >
                  {/* Upward pointing indicator tip */}
                  <div
                    className={`absolute top-[3px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 
                      bg-[#4A5568] rotate-45 transition-all duration-300 pointer-events-none z-10
                      border-l border-t
                      ${isActive
                        ? "opacity-100 scale-100 border-white"
                        : "opacity-0 scale-50 border-transparent group-hover:opacity-100 group-hover:scale-100 group-hover:border-white/50"
                      }
                    `}
                  />

                  <button
                    type="button"
                    disabled={isSliding}
                    onClick={() => goToSlide(index)}
                    aria-label={`Show ${slide.title}`}
                    className={`relative h-[48px] w-[68px] shrink-0 overflow-hidden border transition-all duration-500 disabled:cursor-default min-[430px]:h-[52px] min-[430px]:w-[78px] min-[480px]:h-[55px] min-[480px]:w-[88px] sm:h-[62px] sm:w-[105px] md:h-[72px] md:w-[130px] lg:h-[84px] lg:w-[165px] xl:h-[88px] xl:w-[170px] ${isActive ? "border-white" : "border-transparent group-hover:border-white/50"
                      }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      quality={90}
                      sizes="(max-width:430px) 68px, (max-width:480px) 78px, (max-width:640px) 88px, (max-width:768px) 105px, (max-width:1024px) 130px, 170px"
                      className="object-cover object-center brightness-[1.12] saturate-[1.08] transition-transform duration-700 group-hover:scale-105"
                    />

                    <div
                      className={`absolute inset-0 transition-all duration-300 ${isActive
                          ? "bg-[#4A5568]/85"
                          : "bg-transparent group-hover:bg-[#4A5568]/85"
                        }`}
                    />

                    <div
                      className={`absolute inset-0 flex items-center justify-center px-1 sm:px-2 transition-all duration-300 ${isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                        }`}
                    >
                      <span className="text-center text-[7px] font-medium leading-[1.2] text-white drop-shadow-lg min-[480px]:text-[8px] sm:text-[9px] md:text-[10px] lg:text-[12px] xl:text-[13px] max-w-full break-words">
                        {slide.title}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={goNext}
            disabled={isSliding}
            aria-label="Next slide"
            className="group ml-[2px] flex h-[30px] w-[30px] shrink-0 items-center justify-center bg-[#F6A51C] text-white transition-all duration-300 hover:bg-[#E9970F] disabled:cursor-default disabled:opacity-60 min-[480px]:h-[34px] min-[480px]:w-[34px] sm:ml-1 sm:h-[38px] sm:w-[38px] md:h-[42px] md:w-[42px] lg:ml-2 lg:h-[44px] lg:w-[44px]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-1 sm:h-[19px] sm:w-[19px] md:h-[22px] md:w-[22px]"
            >
              <path d="M5 12H19" stroke="currentColor" strokeWidth="1.4" />
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