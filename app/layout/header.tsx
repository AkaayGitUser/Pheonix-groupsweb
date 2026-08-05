"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function Header() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const menuVariants: Variants = {
        closed: {
            height: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        open: {
            height: "auto",
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                when: "beforeChildren",
                delayChildren: 0.2,
            },
        },
    };
    const contentVariants = {
        closed: {
            opacity: 0,
            y: -20,
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
    };
    useEffect(() => {
        const handleScroll = () => {
            setOpenMenu(null);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.header
            animate={{
                height: openMenu ? "auto" : 96,
            }}
            transition={{
                duration: 0.4,
                ease: "easeInOut",
            }}
            className={`
    absolute
    top-0
    left-0
    w-full
    z-1000
    transition-all
    duration-500
    ${openMenu
                    ? "bg-black/75 backdrop-blur-md"
                    : "bg-transparent"
                }
  `}>
            <div className="max-w-screen mx-auto h-24 flex items-center justify-between px-15 " style={{ font: "Archivo" }}>
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/images/Logo.png"
                        alt="Phoenix Foundation"
                        width={175}
                        height={55}
                        priority
                    />
                </Link>

                {/* Navigation + Mega Menu */}
                <div className="relative">
                    <nav className="hidden lg:flex items-center gap-12 text-white">
                        <button className="border-b border-b-transparent hover:border-[#085CB5] pb-2"
                            onMouseEnter={() => {

                                setOpenMenu(null);
                            }}>
                            Newsroom
                        </button>
                        <div
                            onMouseEnter={() => {

                                setOpenMenu("business");
                            }}
                            className="relative"
                        >
                            <button
                                className={`pb-2 transition ${openMenu === "business"
                                    ? "border-b border-[#085CB5]"
                                    : "border-b border-transparent hover:border-[#085CB5]"
                                    }`}
                            >
                                Business
                            </button>
                        </div>
                        <button className="border-b border-b-transparent hover:border-[#085CB5] pb-2"
                            onMouseEnter={() => {

                                setOpenMenu(null);
                            }}>
                            Careers
                        </button>
                        <div
                            onMouseEnter={() => {

                                setOpenMenu("community");
                            }}
                            className="relative"
                        >
                            <button
                                className={`pb-2 transition ${openMenu === "community"
                                    ? "border-b border-[#085CB5]"
                                    : "border-b border-transparent hover:border-[#085CB5]"
                                    }`}
                            >
                                Community
                            </button>
                        </div>

                        <div
                            onMouseEnter={() => {

                                setOpenMenu("about");
                            }}
                            className="relative"
                        >
                            <button
                                className={`pb-2 transition ${openMenu === "about"
                                    ? "border-b border-[#085CB5]"
                                    : "border-b border-transparent hover:border-[#085CB5]"
                                    }`}
                            >
                                About Us
                            </button>
                        </div>
                        <button className="bg-[#085CB5] px-5 py-1.5">
                            Explore More
                        </button>

                    </nav>

                </div>
            </div>{/* Mega Menu */}
            <AnimatePresence mode="wait">
                {openMenu && (
                    <motion.div
                        layout
                        layoutRoot
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="overflow-hidden w-full"
                        onMouseLeave={() => setOpenMenu(null)}
                    >

                        <motion.div
                            layout
                            variants={contentVariants}
                            className="pl-125 pr-16 mt-6 max-w-7xl mx-auto"
                        >

                            {/* BUSINESS */}
                            {openMenu === "business" && (
                                <div className="pb-6">
                                    <div className="border-b border-[#085CB5] pb-2">
                                        <h2 className="text-xl">Business Overview</h2>
                                    </div>

                                    <button className="font-semibold mt-3 hover:text-amber-300 text-sm">
                                        Learn More
                                    </button>

                                    <div className="border-b border-[#085CB5] py-2 mt-6">
                                        <h2 className="text-xl">Our Brands</h2>
                                    </div>

                                    <button className="font-semibold mt-3 hover:text-amber-300 text-sm">
                                        Browse Our Brands
                                    </button>

                                    <div className="border-b border-[#085CB5] py-2 mt-6">
                                        <h2 className="text-xl">Business Verticals</h2>
                                    </div>

                                    <div className="grid grid-cols-3 gap-8 mt-3">
                                        <div className="flex flex-col gap-2 items-start text-sm ">
                                            <button className=" hover:text-amber-300">
                                                Technology
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Steel
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Automotive
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Consumer & Retail
                                            </button>
                                        </div>

                                        <div className="flex flex-col gap-2 items-start font-light text-sm ">
                                            <button className=" hover:text-amber-300">
                                                Infrastructure
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Financial Services
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Aerospace & Defence
                                            </button>
                                        </div>

                                        <div className="flex flex-col gap-2 items-start font-light text-sm ">
                                            <button className=" hover:text-amber-300">
                                                Tourism & Travel
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Telecom & Media
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Trading & Investments
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* COMMUNITY */}
                            {openMenu === "community" && (
                                <div className="pb-6">
                                    <div className="border-b border-[#085CB5] pb-2">
                                        <h2 className="text-xl">Overview</h2>
                                    </div>

                                    <button className="font-semibold mt-2 hover:text-amber-300 text-sm">
                                        Areas of Work
                                    </button>

                                    <div className="grid grid-cols-2 mt-6">
                                        <div className="flex flex-col gap-2 items-start font-light text-sm ">
                                            <button className=" hover:text-amber-300">
                                                Health
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Education
                                            </button>
                                        </div>

                                        <div className="flex flex-col gap-2 items-start font-light text-sm ">
                                            <button className=" hover:text-amber-300">
                                                Empowerment
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Environment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ABOUT */}
                            {openMenu === "about" && (
                                <div className="pb-6">
                                    <div className="border-b border-[#085CB5] pb-2">
                                        <h2 className="text-xl">The Phenoix Group</h2>
                                    </div>

                                    <button className="font-semibold mt-2 hover:text-amber-300 text-sm">
                                        About the Phenoix Group
                                    </button>

                                    <div className="grid grid-cols-3 gap-8 mt-6">

                                        <div className="flex flex-col gap-2 items-start font-light text-sm ">
                                            <button className=" hover:text-amber-300">
                                                Phenoix
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Values and Purpose
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Phenoix Code of Conduct
                                            </button>
                                        </div>

                                        <div className="flex flex-col gap-2 items-start font-light text-sm ">
                                            <button className=" hover:text-amber-300">
                                                Heritage
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Leadership
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Sponsorships
                                            </button>
                                        </div>

                                        <div className="flex flex-col gap-2 items-start font-light text-sm ">
                                            <button className=" hover:text-amber-300">
                                                Sustainability
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Innovation
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Books
                                            </button>
                                        </div>

                                    </div>

                                    <div className="border-b border-[#085CB5] py-2 mt-10">
                                        <h2 className="text-xl">Investors</h2>
                                    </div>

                                    <button className="font-semibold mt-2 hover:text-amber-300 text-sm">
                                        Investor Section
                                    </button>

                                    <div className="grid grid-cols-2 gap-12 mt-6">
                                        <div className="flex flex-col gap-2 items-start font-light text-sm ">
                                            <button className=" hover:text-amber-300">
                                                Companies
                                            </button>
                                            <button className=" hover:text-amber-300">
                                                Stock Data
                                            </button>
                                        </div>

                                        <div className="flex flex-col gap-2 items-start font-light text-sm ">
                                            <button className=" hover:text-amber-300">
                                                Business Verticals
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header >
    );
}