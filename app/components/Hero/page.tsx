"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";



const heroSlides = [
  {
    image: "/images/Hero/Arena.png",
    alt: "Arena",
    title: "Arena",
    heading: "Phoenix Arena",
    description:
      "Phoenix Arena is a world-class destination where business, culture, entertainment and community come together.",
    buttonText: "Explore Arena",
    buttonLink: "#arena",
  },
  {
    image: "/images/Hero/Constructions.png",
    alt: "Construction",
    title: "Constructions",
    heading: "Phoenix Construction",
    description:
      "Crafting spaces for modern living and lasting value.",
    buttonText: "View Construction",
    buttonLink: "#construction",
  },
  {
    image: "/images/Hero/Foundation.png",
    alt: "Foundation",
    title: "Foundation",
    heading: "Phoenix Foundation",
    description:
      "Nurturing little minds, building brighter tomorrows.",
    buttonText: "Our Impact",
    buttonLink: "#foundation",
  },
  {
    image: "/images/Hero/Mahaprastnam.png",
    alt: "Mahaprastnam",
    title: "Mahaprasthanam",
    heading: "Phoenix Mahaprasthanam",
    description:
      "Honoring lives with peace, dignity and compassion.",
    buttonText: "Learn More",
    buttonLink: "#mahaprasthanam",
  },
  {
    image: "/images/Hero/Motors.png",
    alt: "Motors",
    title: "Motors",
    heading: "Phoenix Motors",
    description:
      "Ride with confidence. Ride with Phoenix Motors.",
    buttonText: "Discover Bikes",
    buttonLink: "#motors",
  },
];
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverSlide, setHoverSlide] = useState<number | null>(null);
  const [progressKey, setProgressKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollDown = () => {
    if (sectionRef.current) {
      const nextElement = sectionRef.current.nextElementSibling;
      if (nextElement) {
        nextElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setProgressKey((prev) => (prev + 1))
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setProgressKey((prev) => prev + 1);
  };
  return (
    <section id="home" ref={sectionRef} className="relative w-full min-h-145 lg:max-h-1000 z-10 overflow-hidden snap-start snap-always">

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
      <div className="absolute inset-0 z-20 flex items-center mb-20 sm:mb-15">
        <div className="w-full px-4 sm:px-3.75 md:px-7.75 lg:px-15.5">
          <div className="max-w-160 text-white flex flex-col items-start gap-4">

            {/* Small Label */}
            <div
              key={currentSlide}
              className="trans-up inline-block bg-[#005a9c] text-white text-xs sm:text-sm font-medium tracking-wider px-3.5 py-1.5 uppercase mb-1"
            >
              <span>
                Phoenix Stories
              </span>
            </div>

            {/* Heading */}
            <h1
              key={`heading-${currentSlide}`}
              className="trans-up text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight select-none"
            >
              {heroSlides[currentSlide].heading}
            </h1>

            {/* Description + Orange-Yellow Line */}
            <div className="trans-up ml-13 max-w-120 flex items-start gap-3.5 mt-2"
              key={`line-${currentSlide}`}>
              <div className="w-[3px] min-h-[55px] bg-[#e1a91a] shrink-0"></div>

              <p
                key={`description-${currentSlide}`}
                className="text-sm sm:text-md lg:text-lg text-white/90 leading-relaxed"
              >
                {heroSlides[currentSlide].description}
              </p>
            </div>

            {/* CTA Button */}
            <div
              key={`btn-${currentSlide}`}
              className="trans-up ml-13 mt-4"
            >
              <a
                href={heroSlides[currentSlide].buttonLink}
                className="inline-flex items-center gap-3 bg-[#e1a91a] hover:bg-[#c99212] text-white text-sm sm:text-base font-semibold px-6 py-2.5 transition-colors duration-300 group"
              >
                <span>{heroSlides[currentSlide].buttonText}</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1.5 font-bold">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Progress Bars */}
        <div
          className="
            absolute
            sm:-bottom-10 sm:left-130
            -bottom-15 right-3
            -translate-x-1/2
            w-[70%]
            sm:max-w-300
            max-sm:w-[60%]
            z-30
          "
        >
          <div>
            <div className="flex gap-6 max-sm:gap-2">

              {heroSlides.map((slide, index) => {
                const isHovered = hoverSlide === index;

                return (
                  <div
                    key={slide.image}
                    className="
                  relative flex-1 h-40 flex items-end cursor-pointer pointer-events-auto
                  max-sm:h-10
                  "
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
                      max-sm:hidden
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
                      <div
                        className="relative w-46 h-30 object-cover cursor-pointer"
                        onClick={() => handleSlideChange(index)}
                      >
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
                      className={`
                      relative block min-w-45 w-full h-0.75
                      overflow-hidden
                      ${index === currentSlide ? "bg-white" : "bg-white/40"}
                      max-sm:min-w-0
                      max-sm:h-0.5
                  `}
                    >

                      {/* Current */}
                      {index === currentSlide && (
                        <span
                          key={progressKey}
                          style={{ animationPlayState: isPaused ? "paused" : "running" }}
                          className="hero-progress absolute left-0 top-0 h-full bg-[#e1a91a]"
                        />
                      )}

                      {/* Hover */}
                      {isHovered && index !== currentSlide && (
                        <span className="absolute inset-0 bg-[#e1a91a]/70 max-sm:hidden" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
            {/* Slide Number & Interactive Pause - BELOW PROGRESS BARS */}
            <div className="mt-3 flex justify-start items-center">
              <div className="text-white text-md flex items-center select-none">
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="mr-3 text-white hover:text-[#e1a91a] transition-colors cursor-pointer flex items-center justify-center focus:outline-none"
                  aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                >
                  {isPaused ? (
                    <span className="text-sm font-semibold">▶</span>
                  ) : (
                    <span className="text-sm font-semibold">||</span>
                  )}
                </button>
                <span className="font-semibold text-sm sm:text-base">
                  {currentSlide + 1} / {heroSlides.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Capsule Indicators (Right Side) */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-40 max-md:hidden">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={`vertical-indicator-wrapper-${index}`}
              className="relative flex items-center justify-center w-6 h-7 group cursor-pointer"
              onClick={() => handleSlideChange(index)}
            >
              {/* Heading name tooltip on hover */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap bg-[#005a9c]/30 backdrop-blur-xs border border-white/20 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 shadow-lg select-none">
                {slide.heading}
              </div>

              {/* Capsule Indicator */}
              <button
                className={`
                  w-1 h-7 rounded-full border transition-all duration-300 pointer-events-none focus:outline-none
                  ${isActive
                    ? "border-[#e1a91a] bg-[#e1a91a]/30 shadow-[0_0_8px_#e1a91a]"
                    : "border-white/40 bg-transparent"
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            </div>
          );
        })}
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 right-10 z-40 flex flex-col items-center cursor-pointer border-none bg-transparent focus:outline-none"
        aria-label="Scroll down to next section"
      >
        <div className="scroll-chevron scroll-chevron-1"></div>
        <div className="scroll-chevron scroll-chevron-2"></div>
        <div className="scroll-chevron scroll-chevron-3"></div>
        <div className="scroll-chevron scroll-chevron-4"></div>
      </button>
    </section>
  );
}