import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Background Video (Right / Full-bleed) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Video/group last section.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Video Contrast */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Auto-Fitting Left Content Card */}
      <div className="relative z-10 w-full max-w-md lg:max-w-lg h-fit p-6 sm:p-8 md:p-10 bg-black/40 backdrop-blur-md border border-l-0 border-white/10 text-white shadow-2xl rounded-r-2xl flex flex-col justify-center">
        {/* Single-line Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4 whitespace-nowrap">
          Where Vision Creates Impact
        </h1>

        {/* Description Content */}
        <p className="text-sm sm:text-base leading-relaxed text-gray-200/90 font-light mb-6">
          Discover how Phoenix Group drives progress across infrastructure,
          mobility, destinations, entertainment, and community initiatives—creating
          lasting value through a shared commitment to excellence.
        </p>

        {/* Outlined Pill Button */}
        <div>
          <button
            type="button"
            className="px-8 py-2.5 rounded-full border border-white/80 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Explore Our Businesses
          </button>
        </div>
      </div>
    </section>
  );
}