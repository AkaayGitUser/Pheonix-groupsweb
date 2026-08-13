"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Slide data for "In Numbers" carousel
const statsData = [
    {
        id: 1,
        number: "650+",
        text: "Employees at the Phoenix\ngroup",
    },
];

// Slide data for "Clients", "Upcoming Projects", and "Completed Projects" unified carousel
const carouselData = [
    {
        tag: "Clients",
        title: "Our Clients",
        items: [
            { title: "IBM", subtitle: "IT & ITES" },
            { title: "Optum", subtitle: "Health" },
            { title: "Micron", subtitle: "Technology" },
            { title: "HSBC", subtitle: "Finance" },
        ],
    },
    {
        tag: "Portfolio",
        title: "Upcoming Projects",
        items: [
            { title: "Phoenix Business Hub", subtitle: "Financial District" },
            { title: "Phoenix H10 campus", subtitle: "Hitech City" },
            { title: "Phoenix 14", subtitle: "Hitech City" },
            { title: "Phoenix 285 FD", subtitle: "Financial District" },
        ],
    },
    {
        tag: "Completed",
        title: "Completed Projects",
        items: [
            { title: "Avance Business Hub", subtitle: "Hitech City" },
            { title: "Phoenix Primea", subtitle: "Financial District" },
            { title: "Phoenix Lithop", subtitle: "Jubilee Hills" },
            { title: "Phoenix Trivium", subtitle: "Hafeezpet" },
        ],
    },
];

export default function Careers() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    // Auto-play timers for carousels
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlideIndex((prev) => (prev + 1) % carouselData.length);
        }, 4000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const handleNextSlide = () => {
        setActiveSlideIndex((prev) => (prev + 1) % carouselData.length);
    };


    return (
        <section
            id="careers"
            className="relative w-full bg-[#efefef] dark:bg-[#363636] py-16 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden snap-start snap-always"
        >
            <div className="max-w-[1550px] mx-auto relative pt-12">
                {/* Floating Careers Header Box */}
                <div className="absolute top-0 -left-2 sm:-left-4 md:-left-6 lg:-left-8 z-20 bg-white/40 dark:bg-[#363636]/40 backdrop-blur-md px-8 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-white/20 dark:border-white/10 rounded-none">
                    <h2 className="text-2xl font-medium tracking-tight text-[#3e3e3e] dark:text-white font-sans">
                        Careers
                    </h2>
                </div>

                {/* 3-Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

                    {/* Card 1: Beware of Job Scams (Spans 1 column, 2 rows on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-1 lg:row-span-2 bg-white dark:bg-[#25282a] hover:bg-[#EAEFF5] dark:hover:bg-[#2d3033] shadow-md flex flex-col justify-between group overflow-hidden border border-gray-100 dark:border-transparent hover:shadow-lg transition-all duration-300"
                    >
                        <div>
                            {/* Wooden Image Container */}
                            <div className="relative w-full aspect-[1286/1223] overflow-hidden">
                                <Image
                                    src="/images/carrers.png"
                                    alt="Scams disclaimer wood and crumbs backdrop"
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                                    priority
                                />
                                {/* Triangular cut-out arrow pointing upward into image */}
                                <div className="absolute bottom-0 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white dark:border-b-[#25282a] group-hover:border-b-[#EAEFF5] dark:group-hover:border-b-[#2d3033] transition-all duration-300 z-10" />
                            </div>

                            {/* Card Content */}
                            <div className="px-6 sm:px-8 py-8">
                                <p className="text-base font-medium text-[#0079F3] uppercase tracking-wider mb-2">
                                    Careers
                                </p>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6 font-sans tracking-tight">
                                    Beware of Job Scams
                                </h3>

                                {/* Quote details block */}
                                <div className="border-l-[3px] border-[#D4AF37] pl-5 py-0.5 ml-2">
                                    <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed font-sans font-medium">
                                        We do not charge/accept any amount <br />
                                        or security deposit from job seekers. <br />
                                        Read disclaimer.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Arrow Indicator */}
                        <div className="px-8 sm:px-10 pb-8 flex justify-end">
                            <button
                                onClick={() => {
                                    document.getElementById("disclaimer")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="hover:translate-x-1.5 transition-transform duration-200"
                                aria-label="Read job scams disclaimer"
                            >
                                <svg className="w-6 h-6 text-[#d19b34]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>

                    {/* Card 2: Early Career Phoenix Employee? (Top Right, Spans 2 columns on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="lg:col-span-2 relative h-[300px] sm:h-[320px] bg-gradient-to-br from-[#126870] to-[#0A294A] shadow-md overflow-hidden border border-gray-100 flex flex-col justify-center px-8 md:px-12 py-10 group"
                    >
                        {/* Background Mountain Path Illustration */}
                        <Image
                            src="/images/carrers-img.png"
                            alt="Mountain peak pathway illustration"
                            fill
                            unoptimized
                            className="object-cover object-right-top mix-blend-lighten pointer-events-none transition-transform duration-700 ease-out group-hover:scale-101"
                        />
                        {/* Dark gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#000]/30 to-transparent pointer-events-none" />

                        {/* TAS Tag at top-left */}
                        <span className="absolute top-6 left-8 text-xs font-semibold text-white/70 tracking-widest font-sans uppercase">
                            TAS
                        </span>

                        {/* Central Dark Blue Message Box */}
                        <div
                            className="relative z-10 flex flex-col justify-center shadow-2xl"
                            style={{
                                width: "320px",
                                height: "150px",
                                backgroundColor: "rgba(4, 58, 91, 0.8)",
                                marginLeft: "0px",
                                paddingLeft: "20px",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                        >
                            <h3
                                style={{
                                    color: "#ffffff",
                                    fontSize: "24px",
                                    lineHeight: "1.2",
                                    fontWeight: "normal",
                                    marginTop: "-10px",
                                    marginBottom: "10px",
                                    paddingTop: "25px",
                                    paddingLeft: "38px",
                                }}
                            >
                                Early Career Phoenix Employee?
                            </h3>

                            {/* Vertical line and details next to it */}
                            <div
                                style={{
                                    fontSize: "12px",
                                    color: "#ffffff",
                                    marginLeft: "58px",
                                    paddingLeft: "20px",
                                    borderLeft: "1.5px solid #ffffff",
                                }}
                            >
                                <p style={{ fontStyle: "italic", margin: 0, paddingBottom: "2px", whiteSpace: "nowrap" }}>
                                    Make #TheBestMoveForward.
                                </p>
                                <p style={{ fontStyle: "italic", margin: 0, whiteSpace: "nowrap" }}>
                                    Registrations for 2026 are closed.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right Arrow Link */}
                        <span className="absolute bottom-6 right-8 cursor-pointer hover:translate-x-1.5 transition-transform duration-200">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </motion.div>

                    {/* Card 4: In Numbers (Bottom Middle) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-1 bg-white dark:bg-[#25282a] hover:bg-[#EAEFF5] dark:hover:bg-[#2d3033] shadow-md p-8 sm:p-10 flex flex-col h-[300px] sm:h-[320px] border border-gray-100 dark:border-transparent hover:shadow-lg transition-all duration-300 relative justify-center"
                    >
                        <div>
                            <p className="text-base font-medium text-[#0079F3] uppercase tracking-wider mb-2 absolute top-8 left-8 sm:left-10">
                                In Numbers
                            </p>

                            {/* Stats static layout */}
                            <div className="flex flex-col items-center justify-center text-center mt-3">
                                {/* Outlined Stats Icon */}
                                <div className="mb-4">
                                    <Image
                                        src="/images/careers_icon.svg"
                                        alt="Phoenix Careers Icon"
                                        width={54}
                                        height={30}
                                        className="h-[30px] dark:invert"
                                    />
                                </div>

                                <p className="text-4xl sm:text-[44px] font-regular text-[#0079F3] leading-none mb-3 font-sans tracking-tight">
                                    {statsData[0].number}
                                </p>
                                <p className="text-base font-medium text-gray-700 dark:text-gray-300 font-sans leading-snug whitespace-pre-line">
                                    {statsData[0].text}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right Golden Arrow */}
                        <span className="absolute bottom-6 right-8 cursor-pointer hover:translate-x-1.5 transition-transform duration-200">
                            <svg className="w-6 h-6 text-[#d19b34]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </motion.div>

                    {/* Card 5: Featured Jobs (Bottom Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="lg:col-span-1 bg-[#1F4172] shadow-md p-8 sm:p-10 flex flex-col h-[300px] sm:h-[320px] text-white border border-transparent hover:shadow-lg transition-shadow duration-300 relative justify-center"
                    >
                        <p className="text-base font-medium text-white/70 uppercase tracking-wider mb-2 absolute top-8 left-8 sm:left-10">
                            Careers
                        </p>

                        <h3 className="text-xl font-medium text-white mb-6 font-sans tracking-tight mt-6">
                            Featured Jobs
                        </h3>

                        {/* Vertical list of jobs */}
                        <div className="flex flex-col gap-5">
                          <div className="border-l-[1.5px] border-white/30 pl-4 py-0.5">
                            <h4 className="font-regular text-white text-[16px] font-sans leading-snug">
                              Generative AI Engineer
                            </h4>
                            <p className="text-white/60 text-xs font-sans mt-1">
                              TCS, Duluth
                            </p>
                          </div>
                          <div className="border-l-[1.5px] border-white/30 pl-4 py-0.5">
                            <h4 className="font-regular text-white text-[16px] font-sans leading-snug">
                              Corporate Director, Talent Management...
                            </h4>
                            <p className="text-white/60 text-xs font-sans mt-1">
                              IHCL, Mumbai
                            </p>
                          </div>
                        </div>

                        {/* Bottom Right Arrow Link */}
                        <span className="absolute bottom-6 right-8 cursor-pointer hover:translate-x-1.5 transition-transform duration-200">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
