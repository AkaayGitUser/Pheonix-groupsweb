"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TimelinesHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white font-sans flex flex-col justify-end pb-8 sm:pb-12 md:pb-14 snap-start snap-always">
      {/* Background Graphic - With Light Black Tint for Legibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/ourjrny.png"
          alt="Our Journey Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom md:object-center transition-all duration-700 ease-out"
        />

        {/* Global Light Black Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Smooth Bottom Gradient for Contrast behind Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Floating Card Content Block */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-4 sm:px-6">
        <div className="rounded-2xl bg-black/10  p-5 sm:p-6 md:p-8 border border-white/10 shadow-2xl ring-1 ring-black/20">
          
          {/* Title - Bold & Sharp */}
          <h1 className="mb-3 font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white drop-shadow-md text-center">
            Our Timelines
          </h1>

          {/* Description - Highly Readable */}
          <p className="mx-auto max-w-xl text-xs sm:text-sm font-normal tracking-normal leading-relaxed text-gray-100 text-center">
            Established in 2001, the Phoenix Group is a conglomerate with diversified interests in Real Estate.
            Over the past decade, Phoenix has emerged as the pre-eminent commercial real estate developer in Hyderabad.
            Hyderabad has become one of India’s premier destination for business and has attracted companies globally in their search for partners and spaces that set a benchmark in excellence.
            
            {/* Inline CTA Arrow Link */}
            <span className="block mt-3 text-center">
              <Link
                href="#timelines"
                aria-label="Explore Timelines"
                className="group inline-flex items-center justify-center text-amber-300 hover:text-white transition-colors duration-200"
              >
                <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}