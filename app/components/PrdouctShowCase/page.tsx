"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const products = [
    {
        id: 1,
        title: "Phoenix Arena",
        heading: "Where Culture Meets ",
        heading1: "Celebration",
        description:
            "Phoenix Arena is a premier destination where business, culture, entertainment and community converge. Designed with world class infrastructure and exceptional versatility, it hosts conferences, exhibitions, performances, celebrations and large scale events that inspire meaningful connections and unforgettable experiences.",
        image: "/images/arena.png",
    },
    {
        id: 2,
        title: "Phoenix Construction",
        heading: "Our Signature Developments",
        heading1: "",
        description:
            "Phoenix Constructions creates premium residential, commercial and integrated developments that blend thoughtful design, superior craftsmanship and enduring value. Every project is carefully planned to enrich modern lifestyles and businesses, delivering spaces that are functional, sustainable and built to stand the test of time.",
        image: "/images/construction.png",
    },
    {
        id: 3,
        title: "Phoenix Foundation",
        heading: "Transforming Lives ",
        heading1: "Through Action",
        description:
            "Phoenix Foundation drives meaningful initiatives that empower communities through social responsibility, environmental stewardship, healthcare, education and public infrastructure development. Guided by a vision of inclusive and sustainable progress, we are committed to creating opportunities that improve lives and contribute to a stronger, more resilient society.",
        image: "/images/foundation.png",
    },

    {
        id: 4,
        title: "Phoenix Motors",
        heading: "Mobility Solutions for ",
        heading1: "Every Journey",
        description:
            "Phoenix Motors is an authorized Hero MotoCorp dealership offering a complete range of motorcycles and scooters, supported by expert sales guidance, genuine spare parts and certified after sales service. With a customer first approach, we deliver reliable mobility solutions backed by quality, transparency and professional excellence.",
        image: "/images/motor.png",
    },
    {
        id: 5,
        title: "Vaikunta Mahaprasthanam",
        heading: "A Place of Peace &",
        heading1: "Remembrance",
        description:
            "Vaikunta Mahaprasthanam provides a serene and thoughtfully designed environment where families can bid farewell to their loved ones with dignity, comfort and compassion. Combining modern facilities with peaceful surroundings, it reflects Phoenix Group's enduring commitment to serving communities with care, respect and humanity during life's most difficult moments.",
        image: "/images/Vaikunta1.png",
    },
];

export default function ProductShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const showcaseRef = useRef<HTMLDivElement>(null);

    const isShowcaseVisible = useInView(showcaseRef, {
        amount: 0.2,
    });
    return (
        <section ref={showcaseRef} className="relative w-full bg-white" style={{ font: "Archivo" }}>

            {/* Fixed Timeline */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isShowcaseVisible ? 1 : 0,
                    x: isShowcaseVisible ? 0 : 30,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                }}
                className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 pointer-events-none"
            >
                {products.map((product, i) => (
                    <div key={product.id} className="relative flex items-center justify-end">

                        {/* Sliding Content Box */}
                        <motion.div
                            initial={false}
                            animate={{
                                width: activeIndex === i ? 220 : 0,
                                opacity: activeIndex === i ? 1 : 0,
                                x: activeIndex === i ? 0 : 20,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            className="absolute right-5 overflow-hidden"
                        >
                            <div className="h12 w-55  bg-[#07315D] shadow-md flex items-center justify-center">
                                <span className="text-white text-lg whitespace-nowrap">
                                    {product.title}
                                </span>
                            </div>
                        </motion.div>

                        {/* Small Vertical Box */}
                        <div className={`h-6 ${activeIndex === i && i % 2 == 0 ? "w-1.25 border border-white" : "w-1 border border-[#085CB5]"} rounded-full `} />
                    </div>
                ))}
            </motion.div>
            {products.map((item, index) => {
                const reverse = index % 2 !== 0;
                const isDesktopReverse = reverse;

                return (
                    <motion.section
                        key={item.id}
                        onViewportEnter={() => setActiveIndex(index)}
                        viewport={{ amount: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:h-screen"
                    >
                        {/* Right */}
                        {isDesktopReverse ? (
                            <>
                                {/* Content */}
                                <div
                                    className={`
                                                bg-linear-to-br
                                                from-[#1F5DA0]
                                                via-[#15508A]
                                                to-[#07315D]
                                                flex
                                                items-center
                                                justify-center
                                                px-8
                                                py-12
                                                lg:px-20
                                                ${reverse ? "lg:order-1" : "lg:order-2"} order-2
                                            `}                                >

                                    <div className="max-w-xl text-gray-900">

                                        <h2 className="text-white text-3xl lg:text-2xl mb-6">
                                            {item.title}
                                        </h2>

                                        <p className="text-white/90 ">
                                            {item.description}
                                        </p>

                                        <button
                                            className="
                                                        mt-8
                                                        border
                                                        border-white
                                                        text-white

                                                        w-full
                                                        sm:w-auto

                                                        px-8
                                                        py-3

                                                        hover:bg-white
                                                        hover:text-[#07315D]
                                                        duration-300
                                                    "
                                        >
                                            Click to know more →
                                        </button>

                                    </div>

                                </div>

                                {/* Image */}
                                <div className={`bg-white py-10 lg:py-10 text-gray-900 ${reverse ? "lg:order-2" : "lg:order-1"} order-1`}>

                                    <div className="w-full lg:w-90 xl:w-110 mx-auto mb-8 px-6">

                                        <h1 className="text-3xl lg:text-3xl text-center lg:text-end">
                                            {item.heading}
                                        </h1>

                                        {item.heading1 && (
                                            <h2 className="text-3xl lg:text-3xl text-center lg:text-end">
                                                {item.heading1}
                                            </h2>
                                        )}

                                    </div>

                                    <div className="relative w-[90%] h-[280px] sm:h-[380px] md:h-[500px] lg:w-[80%] lg:h-[80%] mx-auto">

                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                </div>
                            </>
                        ) : (
                            <>
                                {/* Image First */}

                                <div className={`g-white py-10 lg:py-10 text-gray-900 ${reverse ? "lg:order-2" : "lg:order-1"} order-1 `}>

                                    <div className="w-full lg:w-90 xl:w-110 mx-auto mb-8 px-6">

                                        <h1 className="text-3xl lg:text-3xl text-center lg:text-end">
                                            {item.heading}
                                        </h1>

                                        {item.heading1 && (
                                            <h2 className="text-3xl lg:text-3xl text-center lg:text-end">
                                                {item.heading1}
                                            </h2>
                                        )}

                                    </div>

                                    <div className="relative w-[90%] h-[280px] sm:h-[380px] md:h-[500px] lg:w-[80%] lg:h-[80%] mx-auto">

                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                </div>

                                {/* Content */}

                                <div
                                    className={`
                                                bg-linear-to-br
                                                from-[#1F5DA0]
                                                via-[#15508A]
                                                to-[#07315D]
                                                flex
                                                items-center
                                                justify-center
                                                px-8
                                                py-12
                                                lg:px-20
                                                ${reverse ? "lg:order-1" : "lg:order-2"} order-2
                                            `}
                                >

                                    <div className="max-w-xl text-gray-900">

                                        <h2 className="text-white text-3xl lg:text-2xl mb-6">
                                            {item.title}
                                        </h2>

                                        <p className="text-white/90  ">
                                            {item.description}
                                        </p>

                                        <button
                                            className="
                                                        mt-8
                                                        border
                                                        border-white
                                                        text-white
                                                        w-full
                                                        sm:w-auto
                                                        px-8
                                                        py-3
                                                        hover:bg-white
                                                        hover:text-[#07315D]
                                                        duration-300
                                                    "
                                        >
                                            Click to know more →
                                        </button>

                                    </div>

                                </div>
                            </>
                        )}
                    </motion.section>
                );
            })}
        </section>
    );
}