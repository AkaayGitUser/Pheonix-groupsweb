"use client";

import Image from "next/image";

// Add all 36 items here with their respective image paths
const logoItems = [
  // { src: "/images/Hero/.png" },
  { src: "/images/Hero/cognizant 1.png" },
  // { src: "/images/Hero/deshaw.png" },
  { src: "/images/Hero/ebix 1.png" },
  { src: "/images/Hero/endiya 1.png" },
  // { src: "/images/Hero/fairfield.png" },
  { src: "/images/Hero/freyr 1.png" },
  { src: "/images/Hero/genpact 1.png" },
  { src: "/images/Hero/HCL 1.png" },
  { src: "/images/Hero/holdiayinn-removebg-preview 1.png" },
  { src: "/images/Hero/hsbc 1.png" },
  // { src: "/images/Hero/hyundai.png" },
  // { src: "/images/Hero/IBM.png" },
  { src: "/images/Hero/amazon 1.png" },
  // { src: "/images/Hero/kfc.png" },
  { src: "/images/Hero/kony 1.png" },
  { src: "/images/Hero/legato-removebg-preview 1.png" },
  { src: "/images/Hero/maqsoftware 1.png" },
  // { src: "/images/Hero/mc.png" },
  // { src: "/images/Hero/micron-removebg-preview.png" },
  { src: "/images/Hero/mylan 1.png" },
  { src: "/images/Hero/optum 1.png" },
  { src: "/images/Hero/otsi 1.png" },
  // { src: "/images/Hero/pennant.png" },
  // { src: "/images/Hero/phoenixlg 1.png" },
  { src: "/images/Hero/quest 1.png" },
  // { src: "/images/Hero/regus.png" },
  { src: "/images/Hero/sears 1.png" },
  { src: "/images/Hero/techolution 1.png" },
  { src: "/images/Hero/techware 1.png" },
  { src: "/images/Hero/therapiva 1.png" },
  // { src: "/images/Hero/ubs-logo.webp" },
  // { src: "/images/Hero/unisys 1.png" },
  // { src: "/images/Hero/valuelabs.png" },
  { src: "/images/Hero/yashtechnologies 1.png" },
  // { src: "/images/Hero/ze-removebg-preview.png" },
];

export default function Hero() {
  // Duplicate array once to enable seamless continuous scrolling
  const marqueeItems = [...logoItems, ...logoItems];

  return (
    <section className="relative h-screen w-full overflow-hidden font-Generalsans">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/1080.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 " />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end justify-center pb-55 md:pb-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wider leading-tight">
            • TOTAL CONTROL OF HIGH-RISK WORK
          </h1>

          <div className="w-full h-px bg-white/40 my-6" />

          <div className="flex flex-col items-center gap-4">
            <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto">
              SiteAssist is a Control of Works platform for high-risk
              industries digitising, standardising, and enforcing
              safety-critical processes.
            </p>

            <span className="text-white/80 text-xs md:text-sm whitespace-nowrap">
              51.3476°N &nbsp; 0.4862°W
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Blur & Masked Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-40 bg-linear-to-t from-black/80 via-black/20 to-transparent backdrop-blur-md overflow-hidden flex items-center justify-center mask-[linear-gradient(to_bottom,transparent_0%,black_40%)]">
        <div className="flex w-full shrink-0 items-center justify-around gap-12 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] pt-6">
          {marqueeItems.map((item, index) => (
            <div
              key={`logo-${index}`}
              className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={item.src}
                alt={`Partner logo ${index + 1}`}
                width={40}
                height={40}
                className="h-10 w-auto object-contain shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}