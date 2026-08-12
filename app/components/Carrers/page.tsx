"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
            className="relative w-full bg-[#f5f5f5] py-16 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
            style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}
        >
            <div className="max-w-[1550px] mx-auto relative pt-12">
                {/* Floating Careers Header Box */}
                <div className="absolute top-0 -left-2 sm:-left-4 md:-left-6 lg:-left-8 z-20 bg-white/40 backdrop-blur-md px-8 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-white/20 rounded-none">
                    <h2 className="text-2xl font-medium tracking-tight text-[#3e3e3e] font-sans">
                        Careers
                    </h2>
                </div>

                {/* 3-Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

                    {/* Card 1: Beware of Job Scams (Spans 1 column, 2 rows on desktop) */}
                    <div className="lg:col-span-1 lg:row-span-2 bg-white hover:bg-[#EAEFF5] shadow-md flex flex-col justify-between group overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <div>
                            {/* Wooden Image Container */}
                            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] overflow-hidden">
                                <Image
                                    src="/images/carrers.png"
                                    alt="Scams disclaimer wood and crumbs backdrop"
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                                    priority
                                />
                                {/* Triangular cut-out arrow pointing upward */}
                                <div className="absolute bottom-0 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white z-10" />
                            </div>

                            {/* Card Content */}
                            <div className="px-6 sm:px-8 py-10">
                                <p className="text-xs font-medium text-[#0079F3] uppercase tracking-wider mb-14">
                                    Careers
                                </p>
                                <h3 className="text-xl font-medium text-gray-900 mb-8 font-sans tracking-tight">
                                    Beware of Job Scams
                                </h3>

                                {/* Quote details block */}
                                <div className="border-l-[3px] border-[#D4AF37] pl-5 py-0.5 ml-2">
                                    <p className="text-[15px] text-gray-600 leading-relaxed font-sans font-medium">
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
                    </div>

                    {/* Card 2: Early Career Tata Employee? (Spans 2 columns on desktop) */}
                    <div className="lg:col-span-2 relative min-h-[350px] sm:min-h-[380px] bg-gradient-to-br from-[#126870] to-[#0A294A] shadow-md overflow-hidden border border-gray-100 flex flex-col justify-center px-8 md:px-12 py-10 group">
                        {/* Background Mountain Path Illustration */}
                        <Image
                            src="/images/carrers-img.png"
                            alt="Mountain peak pathway illustration"
                            fill
                            className="object-cover object-right-bottom mix-blend-lighten pointer-events-none transition-transform duration-700 ease-out group-hover:scale-101"
                        />
                        {/* Dark gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#000]/30 to-transparent pointer-events-none" />

                        {/* IAS Tag at top-left */}
                        <span className="absolute top-6 left-8 text-xs font-semibold text-white/70 tracking-widest font-sans uppercase">
                            TAS
                        </span>

                        {/* Central Dark Blue Message Box */}
                        <div className="relative z-10 bg-[#12455F]/90 p-6 w-[360px] h-[180px] flex flex-col justify-center shadow-2xl border border-white/5">
                            <h4 className="text-xl font-bold text-white mb-3 leading-tight tracking-tight font-sans">
                                Early Career Phoenix Employee?
                            </h4>

                            {/* Vertical line and details next to it */}
                            <div className="border-l border-white/30 pl-4 space-y-0.5">
                                <p className="italic text-[13px] text-white font-sans font-medium">
                                    Make #TheBestMoveForward.
                                </p>
                                <p className="text-[11px] text-white/60 font-sans">
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
                    </div>

                    {/* Card 3: In Numbers (Bottom Middle) */}
                    <div className="lg:col-span-1 bg-white hover:bg-[#EAEFF5] shadow-md p-8 sm:p-10 flex flex-col h-[300px] sm:h-[320px] border border-gray-100 hover:shadow-lg transition-all duration-300 relative justify-center">
                        <div>
                            <p className="text-xs font-semibold text-[#0079F3] uppercase tracking-wider mb-2 absolute top-8 left-8 sm:left-10">
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
                                        className="h-[30px]"
                                    />
                                </div>

                                <p className="text-4xl sm:text-[44px] font-regular text-[#0079F3] leading-none mb-3 font-sans tracking-tight">
                                    {statsData[0].number}
                                </p>
                                <p className="text-base font-medium text-gray-700 font-sans leading-snug whitespace-pre-line">
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
                    </div>

                    {/* Card 4: Clients & Portfolio Carousel (Bottom Right) */}
                    <div className="lg:col-span-1 bg-[#1F74DB] shadow-md p-8 sm:p-10 flex flex-col h-[300px] sm:h-[320px] text-white border border-transparent hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                        {/* Sliding Container Wrapper */}
                        <div className="w-full overflow-hidden flex-1 relative mb-6">
                            <div
                                className="flex w-[300%] h-full transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${activeSlideIndex * (100 / 3)}%)` }}
                            >
                                {carouselData.map((slide, slideIdx) => (
                                    <div key={slideIdx} className="w-1/3 shrink-0 h-full flex flex-col justify-between pr-4">
                                        <div>
                                            <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                                                {slide.tag}
                                            </p>
                                            <h3 className="text-2xl font-regular text-white mb-4 font-sans tracking-tight">
                                                {slide.title}
                                            </h3>

                                            {/* Grid side-by-side */}
                                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                                {slide.items.map((item, idx) => (
                                                    <div key={idx} className="border-l border-white/20 pl-4 py-0.5">
                                                        <h4 className="font-regular text-white text-[15px] font-sans leading-snug">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-xs text-white/60 italic mt-0.5 font-sans">
                                                            {item.subtitle}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Slider Navigation */}
                        <div className="absolute bottom-8 left-8 sm:left-10 flex gap-2.5 items-center">
                            {carouselData.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveSlideIndex(i)}
                                    className={`transition-all duration-300 ${activeSlideIndex === i
                                        ? "w-2.5 h-2.5 bg-white rounded-none scale-105"
                                        : "w-2 h-2 rounded-full border border-white/40 bg-transparent hover:bg-white/10"
                                        }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Right navigation arrow */}
                        <div className="absolute bottom-6 right-8">
                            <button
                                onClick={handleNextSlide}
                                className="hover:translate-x-1.5 transition-transform duration-200"
                                aria-label="Next slide"
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
