"use client";

import Image from "next/image";
import { useEffect, useState } from "react";



const heroSlides = [
  {
    image: "/images/Hero/Arena.png",
    alt: "Arena",
    title: "Arena",
    heading: "Phoenix Arena",
    description:
      "Phoenix Arena is a world-class destination where business, culture, entertainment and community come together.",
  },
  {
    image: "/images/Hero/Constructions.png",
    alt: "Construction",
    title: "Constructions",
    heading: "Phoenix Construction",
    description:
      "Crafting spaces for modern living and lasting value.",
  },
  {
    image: "/images/Hero/Foundation.png",
    alt: "Foundation",
    title: "Foundation",
    heading: "Phoenix Foundation",
    description:
      "Nurturing little minds, building brighter tomorrows.",
  },
  {
    image: "/images/Hero/Mahaprastnam.png",
    alt: "Mahaprastnam",
    title: "Mahaprasthanam",
    heading: "Phoenix Mahaprasthanam",
    description:
      "Honoring lives with peace, dignity and compassion.",
  },
  {
    image: "/images/Hero/Motors.png",
    alt: "Motors",
    title: "Motors",
    heading: "Phoenix Motors",
    description:
      "Ride with confidence. Ride with Phoenix Motors.",
  },
];
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverSlide, setHoverSlide] = useState<number | null>(null);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setProgressKey((prev) => (prev + 1))
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setProgressKey((prev) => prev + 1);
  };
  return (
    <section className="relative w-full min-h-150 lg:max-h-1000 z-10 overflow-hidden snap-start snap-always">

      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className="relative min-w-full h-full shrink-0"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className={`object-cover sm:object-[80%_center] lg:object-[75%_center] ${index === currentSlide ? "hero-image-zoom" : ""
                  }`} />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/70 to-black/0" />

      {/* Dotted Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />
      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center mb-30">
        <div className="w-full px-4 sm:px-3.75 md:px-7.75 lg:px-15.5">
          <div className="trans-up max-w-150 text-white">

            {/* Small Label */}
            <div
              key={currentSlide}
              className=" inline-block py-1 px-3 mb-1 bg-blue-900/40 backdrop-blur-lg border border-blue-900/20 rounded-xl"
            >
              <span className="text-xs sm:text-base italic">
                Phoenix Stories
              </span>
            </div>

            {/* Heading */}
            <h1
              key={`heading-${currentSlide}`}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
            >
              {heroSlides[currentSlide].heading}
            </h1>

            {/* Description + Blue Line */}
            <div className="mx-13 max-w-105 flex items-start gap-3"
              key={`line-${currentSlide}`}>
              <div className="w-0.5 min-h-15 bg-blue-500 shrink-0"></div>

              <p
                key={`description-${currentSlide}`}
                className=" text-sm sm:text-md lg:text-lg"
              >
                {heroSlides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
        {/* Progress Bars */}
        <div className="absolute sm:-bottom-10  sm:left-130 -translate-x-1/2 w-[70%] sm:max-w-300 z-30">
          <div className="flex gap-6">

            {heroSlides.map((slide, index) => {
              const isHovered = hoverSlide === index;

              return (
                <div
                  key={slide.image}
                  className="relative flex-1 h-40 flex items-end cursor-pointer pointer-events-auto"
                  onMouseEnter={() => setHoverSlide(index)}
                  onMouseLeave={() => setHoverSlide(null)}
                >

                  {/* Hover Preview */}
                  <div
                    className={`
                        absolute bottom-4.5 left-6 -translate-x-1/2
                        w-[30%]
                        transition-all duration-300
                        pointer-events-auto
              ${isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"
                      }
            `}
                  >
                    {/* Title */}
                    <div className="text-white text-lg font-medium mb-2">
                      {slide.title}
                    </div>

                    {/* Thumbnail */}
                    <div className="relative  w-46 h-30 object-cover cursor-pointer"
                      onClick={() => handleSlideChange(index)}>
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <button
                    type="button"
                    onClick={() => handleSlideChange(index)}
                    className="relative block min-w-45 w-full h-0.75 overflow-hidden bg-white/40"
                  >

                    {/* Current */}
                    {index === currentSlide && (
                      <span
                        key={progressKey}
                        className="hero-progress absolute left-0 top-0 h-full bg-blue-500" />
                    )}

                    {/* Hover */}
                    {isHovered && index !== currentSlide && (
                      <span className="absolute inset-0 bg-blue-500/70" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 right-10 z-40 flex flex-col items-center">
        <div className="scroll-chevron scroll-chevron-1"></div>
        <div className="scroll-chevron scroll-chevron-2"></div>
        <div className="scroll-chevron scroll-chevron-3"></div>
        <div className="scroll-chevron scroll-chevron-4"></div>
      </div>
    </section>
  );
}