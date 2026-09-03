import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] sm:h-[500px] overflow-hidden flex items-center justify-start">
      {/* Background Video (Right / Full-bleed) */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center sm:object-top z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Video/group-last-section.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Video Contrast */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/20 z-0" />

      {/* Left Content Card - Fully Responsive */}
      <div className="relative z-10 w-full sm:max-w-md lg:max-w-lg min-h-[360px] sm:h-[400px] my-8 sm:my-0 p-6 sm:p-8 md:p-10 bg-black/50 sm:bg-black/40 backdrop-blur-md border-y sm:border-y sm:border-r border-white/10 text-white shadow-2xl rounded-none sm:rounded-r-2xl flex flex-col justify-center">
        {/* Responsive Heading */}
        <h1 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-3 sm:mb-4 text-white">
          Where Vision Creates Impact
        </h1>

        {/* Description Content */}
        <p className="text-xs xs:text-sm sm:text-base leading-relaxed text-gray-200/90 font-light mb-6 sm:mb-6">
          Discover how Phoenix Group drives progress across infrastructure,
          mobility, destinations, entertainment, and community initiatives—creating
          lasting value through a shared commitment to excellence.
        </p>

        {/* Outlined Pill Button */}
        <div className="flex items-center">
          <button
            type="button"
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 rounded-full border border-white/80 text-white text-xs sm:text-sm font-medium hover:bg-white hover:text-black active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Explore Our Businesses
          </button>
        </div>
      </div>
    </section>
  );
}