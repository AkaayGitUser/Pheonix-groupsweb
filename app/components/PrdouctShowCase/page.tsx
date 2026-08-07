"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const products = [
    {
        id: 1,
        title: "Phoenix Arena",
        heading: "Where Culture Meets",
        heading1:    "Celebration",
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
            "Phoenix Construction develops premium residential and commercial spaces that combine thoughtful design, superior craftsmanship and lasting value. Every development is carefully planned to meet the evolving needs of modern living and business, delivering spaces that are both functional and inspiring. ",
        image: "/images/construction.png",
    },
    {
        id: 3,
        title: "Phoenix Foundation",
        heading: "Transforming Lives",
        heading1: "Through Action",
        description:
            "Phoenix Foundation leads initiatives that strengthen communities through social responsibility, environmental stewardship and public infrastructure development. Guided by a vision of inclusive progress, we work to create opportunities that improve quality of life and contribute to the long term well being of society. ",
        image: "/images/foundation.png",
    },
    {
        id: 4,
        title: "Phoenix Motors",
        heading: "Mobility Solutions for",
        heading1: "Every Journey",
        description:
            "Phoenix Motors is an authorized Hero MotoCorp dealership offering motorcycles and scooters, backed by expert sales, genuine spare parts and certified service. We deliver trusted mobility solutions with quality and professionalism. ",
        image: "/images/motor.png",
    },
    {
        id: 5,
        title: "Vaikunta Mahaprasthanam",
        heading: "A Place of Peace &",
        heading1: "Remembrance",
        description:
            "Vaikunta Mahaprasthanam offers a peaceful, thoughtfully designed environment where families can bid farewell to their loved ones with comfort, respect and compassion. Combining modern facilities with serene surroundings, it reflects Phoenix Group's commitment to serving communities with care and humanity.",
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
        <section ref={showcaseRef} className="relative w-full bg-white overflow-x-hidden" style={{ fontFamily: "Archivo, sans-serif" }}>

            {/* Fixed Navigation Dots on Right */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isShowcaseVisible ? 1 : 0,
                    x: isShowcaseVisible ? 0 : 30,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 pointer-events-none"
            >
                {products.map((product, i) => (
                    <div key={product.id} className="relative flex items-center justify-end">
                        {/* Title Tooltip */}
                        <motion.div
                            initial={false}
                            animate={{
                                width: activeIndex === i ? 200 : 0,
                                opacity: activeIndex === i ? 1 : 0,
                                x: activeIndex === i ? 0 : 10,
                            }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute right-5 overflow-hidden pointer-events-none"
                        >
                            <div className="h-10 w-[200px] bg-[#07315D]/80 backdrop-blur-md border border-white/20 shadow-md rounded flex items-center justify-center px-3">
                                <span className="text-white text-xs lg:text-sm whitespace-nowrap overflow-hidden text-ellipsis font-medium tracking-wide">
                                    {product.title}
                                </span>
                            </div>
                        </motion.div>

                        {/* Indicator Pill */}
                        <div className={`h-6 w-1 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-white border border-white" : "bg-[#085CB5]"}`} />
                    </div>
                ))}
            </motion.div>

            {/* Sections */}
            {products.map((item, index) => {
                const reverse = index % 2 !== 0;

                return (
                    <motion.section
                        key={item.id}
                        onViewportEnter={() => setActiveIndex(index)}
                        viewport={{ amount: 0.4 }}
                        /* items-stretch forces both left & right columns to match exact height */
                        className="grid grid-cols-1 lg:grid-cols-2 min-h-fit  lg:min-h-[480px] w-full items-stretch"
                    >
                        {/* Left Side: White Section (Heading + Small Image) */}
                        <div
                            className={`w-full h-full bg-white flex flex-col justify-center items-center px-6 lg:px-12 py-12 ${
                                reverse ? "lg:order-2" : "lg:order-1"
                            }`}
                        > 
                            {/* Headings */}
                            <div className="w-full max-w-sm lg:max-w-md mx-auto mb-6 text-center lg:text-center ml-12 -mr-15   ">
                                <h2 className="text-2xl lg:text-3xl text-gray-900 font-Archivo leading-tight ">
                                    {item.heading}
                                </h2>
                                {item.heading1 && (
                                    <h2 className="text-2xl lg:text-3xl  text-gray-800 font-Archivo leading-tight ml-20">
                                        {item.heading1}
                                    </h2>
                                )}
                            </div>

                            {/* Small Fixed-Size Image */}
                            <div className="relative w-full  max-w-sm h-[220px] sm:h-[260px] mx-auto overflow-hidden shadow-sm">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Side: Blue Section (Content & Button) */}
                        <div
                            className={`w-full h-105 bg-gradient-to-br from-[#1F5DA0] via-[#15508A] to-[#07315D] flex flex-col justify-center items-start px-8 lg:px-16 py-12  ${
                                reverse ? "lg:order-1" : "lg:order-2"
                            }`}
                        >
                            <div className="max-w-md text-white">
                                <h2 className="text-2xl lg:text-3xl font-Archivo mb-4">
                                    {item.title}
                                </h2>

                                <p className="text-white/90 text-sm lg:text-base font-Archivo leading-relaxed mb-8">
                                    {item.description}
                                </p>

                                <button
                                    className="
                                        border border-white text-white
                                        px-6 py-2.5
                                        text-sm font-medium
                                        hover:bg-white hover:text-[#07315D]
                                        transition-colors duration-300
                                    "
                                >
                                    Click to know more →
                                </button>
                            </div>
                        </div>
                    </motion.section>
                );
            })}
        </section>
    );
}