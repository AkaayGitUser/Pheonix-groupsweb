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
            "Phoenix Arena is a vibrant destination where business, culture, entertainment and community come together. Designed with world class infrastructure, it hosts extraordinary experiences that leave a lasting impression.",
        image: "/images/arena.png",
    },
    {
        id: 2,
        title: "Phoenix Construction",
        heading: "Our Signature Developments",
        heading1: "",
        description:
            "Phoenix Constructions develops premium residential and commercial spaces that combine thoughtful design, superior craftsmanship and lasting value. Every development is carefully planned to meet the evolving needs of modern living and business, delivering spaces that are both functional and inspiring.",
        image: "/images/construction.png",
    },
    {
        id: 3,
        title: "Phoenix Foundation",
        heading: "Transforming Lives ",
        heading1: "Through Action",
        description:
            "Phoenix Foundation leads initiatives that strengthen communities through social responsibility, environmental stewardship and public infrastructure development. Guided by a vision of inclusive progress, we work to create opportunities that improve quality of life and contribute to the long term well being of society.",
        image: "/images/foundation.png",
    },

    {
        id: 4,
        title: "Phoenix Motors",
        heading: "Mobility Solutions for ",
        heading1: "Every Journey",
        description:
            "Phoenix Motors is an authorized Hero MotoCorp dealership offering motorcycles and scooters, backed by expert sales, genuine spare parts and certified service. We deliver trusted mobility solutions with quality and professionalism.",
        image: "/images/motor.png",
    },
    {
        id: 5,
        title: "Vaikunta Mahaprasthanam",
        heading: "A Place of Peace &",
        heading1: "Remembrance",
        description:
            "Vaikunta Mahaprasthanam offers a peaceful, thoughtfully designed environment where families can bid farewell to their loved ones with comfort, respect and compassion. Combining modern facilities with serene surroundings, it reflects Phoenix Group’s commitment to serving communities with care and humanity.",
        image: "/images/vaikunta.png",
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
                        <div className={`h-6 ${activeIndex === i && i%2==0 ? "w-1.25 border border-white" : "w-1 border border-[#085CB5]"} rounded-full `} />
                    </div>
                ))}
            </motion.div>
            {products.map((item, index) => {
                const reverse = index % 2 !== 0;

                return (
                    <motion.section
                        key={item.id}
                        onViewportEnter={() => setActiveIndex(index)}
                        viewport={{ amount: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-2 h-screen"
                    >
                        {/* Right */}
                        {reverse ? (
                            <>
                                {/* Content */}
                                <div
                                    className="flex items-center justify-center px-16 lg:px-20 bg-linear-to-br from-[#1F5DA0] via-[#15508A] to-[#07315D]"
                                >
                                    <div className="max-w-xl">
                                        <h2 className="text-white text-2xl  mb-8">
                                            {item.title}
                                        </h2>

                                        <p className="text-white/90 text-md">
                                            {item.description}
                                        </p>

                                        <button className="mt-8 border border-white text-white px-6 py-2 text-md hover:bg-white hover:text-[#0B4C8B] duration-300">
                                            Click to know more →
                                        </button>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative flex flex-col items-center bg-white py-10 text-gray-800">
                                    <div className="w-110 mb-8">
                                        <h1 className=" text-3xl  text-end">
                                            {item.heading}
                                        </h1>
                                        {item.heading1 && (
                                            <h2 className="text-3xl  text-end">
                                                {item.heading1}
                                            </h2>
                                        )}
                                    </div>

                                    <div className="relative w-[80%] h-[80%]">
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

                                <div className="relative flex flex-col items-center justify-center bg-white py-10 text-gray-800">
                                    <div className="w-90 mb-8">
                                        <h1 className=" text-3xl  text-end">
                                            {item.heading}
                                        </h1>
                                        {item.heading1 && (
                                            <h2 className="text-3xl  text-end">
                                                {item.heading1}
                                            </h2>
                                        )}
                                    </div>
                                    <div className="relative w-[80%] h-[80%]">
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
                                    className="flex items-center justify-center px-16 lg:px-20  bg-linear-to-br from-[#1F5DA0] via-[#15508A] to-[#07315D]"
                                >
                                    <div className="max-w-xl">
                                        <h2 className="text-white text-2xl font-medium mb-10">
                                            {item.title}
                                        </h2>

                                        <p className="text-white/90 text-md">
                                            {item.description}
                                        </p>

                                        <button className="mt-8 border border-white text-white px-6 py-2 text-md hover:bg-white hover:text-[#0B4C8B] duration-300">
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