"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
interface ProjectItem {
    id: string;
    name: string;
    location: string;
    image: string;
    type?: string;
}

const upcomingProjects: ProjectItem[] = [
    {
        id: "up-1",
        name: "Phoenix Business Hub",
        location: "Financial District",
        image: "/upcoming projects/image-1.jpg",
    },
    {
        id: "up-2",
        name: "Phoenix H10 Campus",
        location: "Hitech City",
        image: "/upcoming projects/image-2 .jpg",
    },
    {
        id: "up-3",
        name: "Phoenix 14",
        location: "Hitech City",
        image: "/upcoming projects/image-3.png",
    },
    {
        id: "up-4",
        name: "Phoenix 285 FD",
        location: "Financial District",
        image: "/upcoming projects/image-4 .jpg",
    },
];

const completedProjects: ProjectItem[] = [
    {
        id: "cp-1",
        name: "Avance Business Hub",
        location: "Hitech City",
        image: "/completed projects/image-1.png",
    },
    {
        id: "cp-2",
        name: "Phoenix Golf Edge Commercial",
        location: "Financial District",
        image: "/completed projects/image-2.jpg",
    },
    {
        id: "cp-3",
        name: "H-09, Avance Business Hub",
        location: "Hitech City",
        image: "/completed projects/image-3.jpg",
    },
    {
        id: "cp-4",
        name: "Phoenix Trivium",
        location: "Hafeezpet",
        image: "/completed projects/image-4.jpg",
    },
    {
        id: "cp-5",
        name: "Phoenix Ivy",
        location: "Jubilee Hills",
        image: "/completed projects/image-5.jpg",
    },
    {
        id: "cp-6",
        name: "Phoenix Sanjeevani",
        location: "Hitech City",
        image: "/completed projects/image-6.jpg",
    },
    {
        id: "cp-7",
        name: "Phoenix BHub Tower A",
        location: "Financial District",
        image: "/completed projects/image-7.jpg",
    },
    {
        id: "cp-8",
        name: "The Village",
        location: "Financial District",
        image: "/completed projects/image-8.jpg",
    },
    {
        id: "cp-9",
        name: "Phoenix One West",
        location: "Nanakramguda",
        image: "/completed projects/image-9.jpg",
    },
    {
        id: "cp-10",
        name: "Phoenix Avance Business Hub",
        location: "Hitech City",
        image: "/completed projects/image-10.jpg",
    },
    {
        id: "cp-11",
        name: "Phoenix Centaurus",
        location: "Financial District",
        image: "/completed projects/image-11.jpg",
    },
    {
        id: "cp-12",
        name: "Phoenix Equinox",
        location: "Hitech City",
        image: "/completed projects/image-12.jpg",
    },
    {
        id: "cp-13",
        name: "Phoenix Trivium",
        location: "Hafeezpet",
        image: "/completed projects/image-13.jpg",
    },
    {
        id: "cp-14",
        name: "Phoenix Primea",
        location: "Financial District",
        image: "/completed projects/image-14.jpg",
    },
    
];

const businessProjects: ProjectItem[] = [
    {
        id: "biz-1",
        name: "Phoenix Arena",
        location: "Hitech City",
        image: "/images/Hero/Arena.png",
    },
    {
        id: "biz-2",
        name: "Phoenix Constructions",
        location: "Financial District",
        image: "/images/business-construction .jpg",
    },
    {
        id: "biz-3",
        name: "Phoenix Foundation",
        location: "Hyderabad",
        image: "/images/business-foundation .webp",
    },
    {
        id: "biz-4",
        name: "Phoenix Mahaprasthanam",
        location: "Jubilee Hills",
        image: "/images/business-mahaprastanam.jpg",
    },
    {
        id: "biz-5",
        name: "Phoenix Motors",
        location: "Gachibowli",
        image: "/images/business-motors.png",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.03,
            staggerDirection: -1,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 45,
        scale: 0.94,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
    exit: {
        opacity: 0,
        y: 20,
        scale: 0.95,
        transition: {
            duration: 0.25,
            ease: "easeInOut",
        },
    },
};

export default function Careers() {
    const [activeTab, setActiveTab] = useState<"businesses" | "upcoming" | "completed">("businesses");
    const [showAllCompleted, setShowAllCompleted] = useState<boolean>(false);

    const displayedCompletedProjects = showAllCompleted
        ? completedProjects
        : completedProjects.slice(0, 8);

    const currentItems =
        activeTab === "businesses"
            ? businessProjects
            : activeTab === "upcoming"
            ? upcomingProjects
            : displayedCompletedProjects;

    return (
        <section
            id="careers"
            className="w-full bg-white dark:bg-[#1f2123] py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300 snap-start snap-always"
        >
            <div className="max-w-[1440px] mx-auto">
                {/* Header with Title and Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                    className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-0 mb-8 sm:mb-10 gap-4 sm:gap-0"
                >
                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#222222] dark:text-white uppercase font-sans">
                        OUR PORTFOLIO
                    </h2>
                    <ExternalLink className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer hover:opacity-80 transition-opacity mr-60 mb-2" />

                    {/* Right Tabs */}
                    <div className="flex items-center space-x-1 sm:space-x-2 relative self-end sm:self-auto overflow-x-auto sm:overflow-visible max-w-full pb-1 sm:pb-0 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {/* Business Tab */}
                        <button
                            onClick={() => {
                                setActiveTab("businesses");
                                setShowAllCompleted(false);
                            }}
                            className={`relative px-4 sm:px-6 py-3 text-base sm:text-lg tracking-wide whitespace-nowrap transition-all duration-200 hover:font-semibold ${activeTab === "businesses"
                                ? "font-semibold text-[#084d8d] dark:text-[#084d8d]"
                                : "font-normal text-gray-500 dark:text-gray-400 hover:text-[#084d8d] dark:hover:text-[#084d8d]"
                                }`}
                        >
                            Business
                            {activeTab === "businesses" && (
                                <motion.div
                                    layoutId="projectsTabUnderline"
                                    className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#084d8d]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>

                        {/* Upcoming Projects Tab */}
                        <button
                            onClick={() => {
                                setActiveTab("upcoming");
                                setShowAllCompleted(false);
                            }}
                            className={`relative px-4 sm:px-6 py-3 text-base sm:text-lg tracking-wide whitespace-nowrap transition-all duration-200 hover:font-semibold ${activeTab === "upcoming"
                                ? "font-semibold text-[#084d8d] dark:text-[#084d8d]"
                                : "font-normal text-gray-500 dark:text-gray-400 hover:text-[#084d8d] dark:hover:text-[#084d8d]"
                                }`}
                        >
                            Upcoming Projects
                            {activeTab === "upcoming" && (
                                <motion.div
                                    layoutId="projectsTabUnderline"
                                    className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#084d8d]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>

                        {/* Completed Projects Tab */}
                        <button
                            onClick={() => {
                                setActiveTab("completed");
                                setShowAllCompleted(false);
                            }}
                            className={`relative px-4 sm:px-6 py-3 text-base sm:text-lg tracking-wide whitespace-nowrap transition-all duration-200 hover:font-semibold ${activeTab === "completed"
                                ? "font-semibold text-[#084d8d] dark:text-[#084d8d]"
                                : "font-normal text-gray-500 dark:text-gray-400 hover:text-[#084d8d] dark:hover:text-[#084d8d]"
                                }`}
                        >
                            Completed Projects
                            {activeTab === "completed" && (
                                <motion.div
                                    layoutId="projectsTabUnderline"
                                    className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#084d8d]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    </div>
                </motion.div>

                {/* Projects Cards Grid with Staggered Scroll-in Entrance */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="w-full"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeTab}-${showAllCompleted}`}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                        >
                            {currentItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -6,
                                        scale: 1.015,
                                    }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative aspect-[328.29/196.97] w-full overflow-hidden rounded-none bg-gray-100 dark:bg-gray-800 shadow-sm">
                                        {/* IMAGE */}
                                        <img
                                             src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />

                                        {/* GRADIENT OVERLAY */}
                                        <div
                                            className="
                                                absolute inset-0
                                                bg-gradient-to-t from-black/85 via-black/25 to-transparent
                                                opacity-80 transition-opacity duration-300 group-hover:opacity-95
                                            "
                                        />

                                        {/* CINEMATIC LIGHT SWEEP */}
                                        <div
                                            className="
                                                pointer-events-none
                                                absolute
                                                -left-[120%]
                                                top-0
                                                h-full
                                                w-[60%]
                                                rotate-[15deg]
                                                bg-gradient-to-r
                                                from-transparent
                                                via-white/20
                                                to-transparent
                                                transition-all
                                                duration-1000
                                                group-hover:left-[130%]
                                            "
                                        />

                                        {/* BOTTOM CONTENT: TEXT, ARROW & LOADING BAR */}
                                        <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 xl:p-5 flex flex-col justify-end">
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="text-[12.5px] xs:text-[13px] sm:text-[14px] md:text-[13px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px] font-semibold text-white font-sans drop-shadow-sm whitespace-nowrap tracking-tight">
                                                        {item.name}
                                                    </h3>
                                                    {item.location && (
                                                        <p className="text-[11px] sm:text-xs text-white/80 font-sans mt-0.5 drop-shadow-sm whitespace-nowrap">
                                                            {item.location}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* RIGHT ARROW BUTTON */}
                                                <div className="shrink-0 text-white transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                                                    <svg
                                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2.4}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* LOADING PROGRESS LINE ON HOVER ONLY */}
                                            <div className="mt-2.5 w-full h-[2px] sm:h-[2.5px] overflow-hidden">
                                                <div className="h-full w-full bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* View More Button for Completed Projects */}
                    {activeTab === "completed" && completedProjects.length > 8 && (
                        <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
                            <button
                                onClick={() => setShowAllCompleted((prev) => !prev)}
                                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#055A9C] border border-[#055A9C] text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#055A9C] hover:brightness-110 hover:border-[#055A9C] hover:shadow-md transition-all duration-300 active:scale-95 cursor-pointer"
                            >
                                <span>{showAllCompleted ? "View Less" : "View More"}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        showAllCompleted
                                            ? "-rotate-90"
                                            : "group-hover:translate-x-1"
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
