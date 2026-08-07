"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-162.5 lg:max-h-1000 z-10 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Phoenix Group"
        fill
        priority
        className="object-cover  sm:object-[80%_center] lg:object-[75%_center] "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/70 to-black/0" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start pt-10 sm:pt-12 md:pt-14 lg:pt-16">
        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-12 lg:px-15.5">

          <div className="max-w-full sm:max-w-130 md:max-w-155 lg:max-w-125 text-white">

            {/* Desktop text size unchanged */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-light leading-tight lg:leading-none text-start lg:text-left">
              Phoenix Group
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-[14px] lg:text-md text-start lg:text-left">
              Empowering Businesses, Enriching Lives  with a strong presence across multiple sectors, our group companies combine expertise, innovation and collaboration to shape a better future for customers and communities.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="mt-8 lg:mt-12 bg-[#0A5FB8] px-10 sm:px-16 md:px-20 lg:px-29 py-3 lg:py-2 text-base lg:text-lg w-full sm:w-auto">
                Enquire now
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}