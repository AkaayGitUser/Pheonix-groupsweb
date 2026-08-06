// "use client";

// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative w-full min-h-[99vh] z-10">

//       {/* Background Image */}
//       <Image
//         src="/images/Hero.png" // Your image
//         alt="Phoenix Group"
//         fill
//         priority
//         className="object-cover scale-[1.02] "
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/25 scale-[1.02]" />

//       {/* Hero Content */}
//       <div className="absolute inset-0 flex items-center justify-start pt-16">
//         <div className="max-w-screen mx-auto w-full px-15.5">

//           <div className="max-w-135 text-white">

//             <h1 className="text-4xl font-light leading-none">
//               Empowering Businesses. Enriching Lives.
//             </h1>

//             <p className="mt-5 text-md">
//               Phoenix Group is a diversified enterprise creating value across real estate, infrastructure, mobility, community development and public services. United by a commitment to excellence, innovation and sustainability, our businesses deliver meaningful experiences, strengthen communities and contribute to a future built on trust, progress and purpose.
//             </p>

//             <button className="mt-12 bg-[#0A5FB8] justify-center px-29 py-2 text-lg">
//               Enquire now
//             </button>

//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }


"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[99vh] z-10 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Phoenix Group"
        fill
        priority
        className="object-cover  sm:object-[80%_center] lg:object-[75%_center] "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start pt-10 sm:pt-12 md:pt-14 lg:pt-16">
        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-12 lg:px-15.5">

          <div className="max-w-full sm:max-w-[520px] md:max-w-[620px] lg:max-w-135 text-white">

            {/* Desktop text size unchanged */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-light leading-tight lg:leading-none text-start lg:text-left">
              Empowering Businesses. Enriching Lives.
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-base lg:text-md text-start lg:text-left">
              Phoenix Group is a diversified enterprise creating value across
              real estate, infrastructure, mobility, community development and
              public services. United by a commitment to excellence, innovation
              and sustainability, our businesses deliver meaningful experiences,
              strengthen communities and contribute to a future built on trust,
              progress and purpose.
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