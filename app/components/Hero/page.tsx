"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[99vh] z-10">

      {/* Background Image */}
      <Image
        src="/images/Hero.png" // Your image
        alt="Phoenix Group"
        fill
        priority
        className="object-cover scale-[1.02] "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 scale-[1.02]" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start pt-16">
        <div className="max-w-screen mx-auto w-full px-15.5">

          <div className="max-w-135 text-white">

            <h1 className="text-5xl font-light leading-none">
              Phoenix Group
            </h1>

            <p className="mt-5 text-md">
              Empowering Businesses, Enriching Lives. With a strong presence across
              multiple sectors, our group companies combine expertise, innovation, and
              collaboration to shape a better future for customers and communities.
            </p>

            <button className="mt-12 bg-[#0A5FB8] justify-center px-29 py-2 text-lg">
              Enquire now
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}