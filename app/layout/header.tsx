"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe, Mail, Search } from "lucide-react";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const menuVariants: Variants = {
    closed: {
      height: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    open: {
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        delayChildren: 0.2,
      },
    },
  };

  const contentVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target;
      let scrollTop = 0;
      if (target instanceof HTMLElement) {
        scrollTop = target.scrollTop;
      } else if (target instanceof Document) {
        scrollTop = target.documentElement.scrollTop || window.scrollY;
      }
      setIsScrolled(scrollTop > 100);
      setOpenMenu(null);
    };

    window.addEventListener("scroll", handleScroll, { capture: true, passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextState = !prev;
      if (nextState) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return nextState;
    });
  };

  const headerY = isScrolled ? (isHovered ? 0 : -120) : 0;
  
  // Determine if white background style should be active
  const isWhiteHeader = isScrolled && isHovered && !openMenu;

  return (
    <>
      {isScrolled && (
        <div
          className="fixed top-0 left-0 w-full h-5 z-[999] pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
        />
      )}
      <motion.header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          height: openMenu ? "auto" : 96,
          y: headerY,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className={`
          ${isScrolled ? "fixed" : "absolute"}
          top-0
          left-0
          w-full
          z-1000
          transition-colors
          duration-500
          ${
            openMenu
              ? "bg-black/75 backdrop-blur-md text-white"
              : isWhiteHeader
              ? "bg-white text-black shadow-md"
              : "bg-transparent text-white"
          }
        `}
      >
        <div className="max-w-7xl mt-2 mx-auto h-16 sm:h-20 md:h-24 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Logo with dynamic image change */}
          <Link href="/">
            <Image
              className="sm:mb-6 md:mb-7 transition-all duration-300"
              src={isWhiteHeader ? "/headerlogowhite.png" : "/images/Logo.png"}
              alt="Phoenix Foundation"
              width={125}
              height={35}
              priority
            />
          </Link>

          {/* Navigation + Mega Menu */}
          <div className="relative">
            <nav
              className={`hidden lg:flex items-center gap-12 text-sm font-medium transition-colors ${
                isWhiteHeader ? "text-gray-800" : "text-white"
              }`}
            >
              <button
                className={`border-b border-b-transparent pb-1 transition-colors ${
                  isWhiteHeader ? "hover:border-black" : "hover:border-white"
                }`}
                onMouseEnter={() => setOpenMenu(null)}
              >
                Newsroom
              </button>
              <div
                onMouseEnter={() => setOpenMenu("business")}
                className="relative"
              >
                <button
                  className={`pb-1 transition ${
                    openMenu === "business"
                      ? isWhiteHeader
                        ? "border-b border-black"
                        : "border-b border-white"
                      : isWhiteHeader
                      ? "border-b border-transparent hover:border-black"
                      : "border-b border-transparent hover:border-white"
                  }`}
                >
                  Business
                </button>
              </div>
              <button
                className={`border-b border-b-transparent pb-1 transition-colors ${
                  isWhiteHeader ? "hover:border-black" : "hover:border-white"
                }`}
                onMouseEnter={() => setOpenMenu(null)}
              >
                Careers
              </button>
              <div
                onMouseEnter={() => setOpenMenu("community")}
                className="relative"
              >
                <button
                  className={`pb-1 transition ${
                    openMenu === "community"
                      ? isWhiteHeader
                        ? "border-b border-black"
                        : "border-b border-white"
                      : isWhiteHeader
                      ? "border-b border-transparent hover:border-black"
                      : "border-b border-transparent hover:border-white"
                  }`}
                >
                  Community
                </button>
              </div>

              <div
                onMouseEnter={() => setOpenMenu("about")}
                className="relative"
              >
                <button
                  className={`pb-1 transition ${
                    openMenu === "about"
                      ? isWhiteHeader
                        ? "border-b border-black"
                        : "border-b border-white"
                      : isWhiteHeader
                      ? "border-b border-transparent hover:border-black"
                      : "border-b border-transparent hover:border-white"
                  }`}
                >
                  About Us
                </button>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-2">
                {/* Search */}
                <div className="relative group">
                  <button
                    className={`p-2.5 rounded-full transition-colors flex items-center justify-center mb-1 ${
                      isWhiteHeader ? "hover:bg-black/10" : "hover:bg-white/10"
                    }`}
                  >
                    <Search size={20} strokeWidth={1.75} />
                  </button>
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-md">
                    Search
                  </div>
                </div>

                {/* Theme Toggle */}
               {/* <div className="relative group">
                  <button
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                    className={`p-2.5 rounded-full transition-colors flex items-center justify-center mb-1 ${
                      isWhiteHeader ? "hover:bg-black/10" : "hover:bg-white/10"
                    }`}
                  >
                    {isDark ? (
                      <Sun size={20} strokeWidth={1.75} />
                    ) : (
                      <Moon size={20} strokeWidth={1.75} />
                    )}
                  </button>
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-md mb-1">
                    {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  </div>
                </div>*/}

                {/* Mail */}
                <div className="relative group">
                  <button
                    className={`p-2.5 rounded-full transition-colors flex items-center justify-center mb-1 ${
                      isWhiteHeader ? "hover:bg-black/10" : "hover:bg-white/10"
                    }`}
                  >
                    <Mail size={20} strokeWidth={1.75} />
                  </button>
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-md">
                    Contact Us
                  </div>
                </div>

                {/* Globe */}
                <div className="relative group">
                  <button
                    className={`p-2.5 rounded-full transition-colors flex items-center justify-center mb-1 ${
                      isWhiteHeader ? "hover:bg-black/10" : "hover:bg-white/10"
                    }`}
                  >
                    <Globe size={20} strokeWidth={1.75} />
                  </button>
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-md">
                    Global
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="items-end">
              <button
                onClick={() => setMobileMenu(true)}
                className={`lg:hidden ${
                  isWhiteHeader ? "text-black" : "text-white"
                }`}
              >
                {mobileMenu ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed inset-0 z-9999 bg-black/95 backdrop-blur-md lg:hidden text-white"
            >
              <div className="flex items-center justify-between h-20 px-6 border-b border-white/10">
                <Image
                  src="/images/Logo.png"
                  alt="Phoenix"
                  width={130}
                  height={40}
                />

                <div className="flex items-center gap-4">
                  <button
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                    className="p-2 rounded-full hover:bg-white/10 text-white"
                  >
                    {isDark ? <Sun size={24} /> : <Moon size={24} />}
                  </button>
                  <button onClick={() => setMobileMenu(false)}>
                    <X className="text-white" size={30} />
                  </button>
                </div>
              </div>

              <div className="pt-3 overflow-y-auto h-[calc(100vh-80px)] text-white">
                <button className="w-full px-8 py-4 text-left text-white">
                  Newsroom
                </button>
                <div>
                  <button
                    onClick={() =>
                      setMobileOpen(mobileOpen === "business" ? null : "business")
                    }
                    className="w-full flex justify-between items-center px-8 py-4 text-white"
                  >
                    <span
                      className={
                        mobileOpen === "business" ? "text-[#085CB5]" : ""
                      }
                    >
                      Business
                    </span>
                    <span>{mobileOpen === "business" ? "⌄" : "›"}</span>
                  </button>

                  <AnimatePresence>
                    {mobileOpen === "business" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden px-8 pb-6 text-white"
                      >
                        <h2 className="text-2xl">Business Overview</h2>
                        <button className="font-semibold mt-2">Learn More</button>
                        <h2 className="text-2xl mt-8">Our Brands</h2>
                        <button className="font-semibold mt-2">
                          Browse Our Brands
                        </button>
                        <h2 className="text-2xl mt-8 mb-4">Business Verticals</h2>
                        <div className="flex flex-col gap-2 items-start text-white/80">
                          <button>Technology</button>
                          <button>Steel</button>
                          <button>Automotive</button>
                          <button>Consumer & Retail</button>
                          <button>Infrastructure</button>
                          <button>Financial Services</button>
                          <button>Aerospace & Defence</button>
                          <button>Tourism & Travel</button>
                          <button>Telecom & Media</button>
                          <button>Trading & Investments</button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button className="w-full px-8 py-4 text-left text-white">
                    Careers
                  </button>

                  <div>
                    <button
                      onClick={() =>
                        setMobileOpen(
                          mobileOpen === "community" ? null : "community",
                        )
                      }
                      className="w-full flex justify-between items-center px-8 py-4 text-white"
                    >
                      <span
                        className={
                          mobileOpen === "community" ? "text-[#085CB5]" : ""
                        }
                      >
                        Community
                      </span>
                      <span>{mobileOpen === "community" ? "⌄" : "›"}</span>
                    </button>

                    <AnimatePresence>
                      {mobileOpen === "community" && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden px-8 pb-6 text-white"
                        >
                          <h2 className="text-2xl">Overview</h2>
                          <button className="font-semibold mt-2">
                            Areas of Work
                          </button>
                          <div className="flex flex-col gap-2 mt-5 items-start text-white/80">
                            <button>Health</button>
                            <button>Education</button>
                            <button>Empowerment</button>
                            <button>Environment</button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div>
                      <button
                        onClick={() =>
                          setMobileOpen(mobileOpen === "about" ? null : "about")
                        }
                        className="w-full flex items-center justify-between px-8 py-4 text-white"
                      >
                        <span
                          className={
                            mobileOpen === "about" ? "text-[#085CB5]" : ""
                          }
                        >
                          About Us
                        </span>
                        <span className="text-xl">
                          {mobileOpen === "about" ? "⌄" : "›"}
                        </span>
                      </button>

                      <AnimatePresence>
                        {mobileOpen === "about" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="overflow-hidden px-8 pb-6 text-white"
                          >
                            <h2 className="text-2xl mb-2">The Phoenix Group</h2>
                            <button className="font-semibold mb-6">
                              About the Phoenix Group
                            </button>
                            <div className="flex flex-col gap-2 items-start text-white/80">
                              <button className="text-left hover:text-[#085CB5]">
                                Phoenix
                              </button>
                              <button className="text-left hover:text-[#085CB5]">
                                Values and Purpose
                              </button>
                              <button className="text-left hover:text-[#085CB5]">
                                Phoenix Code of Conduct
                              </button>
                              <button className="text-left hover:text-[#085CB5]">
                                Heritage
                              </button>
                              <button className="text-left hover:text-[#085CB5]">
                                Leadership
                              </button>
                              <button className="text-left hover:text-[#085CB5]">
                                Sponsorships
                              </button>
                              <button className="text-left hover:text-[#085CB5]">
                                Sustainability
                              </button>
                              <button className="text-left hover:text-[#085CB5]">
                                Innovation
                              </button>
                              <button className="text-left hover:text-[#085CB5]">
                                Books
                              </button>
                            </div>

                            <h2 className="text-2xl mt-10 mb-2">Investors</h2>
                            <button className="font-semibold mb-5">
                              Investor Section
                            </button>
                            <div className="flex flex-col gap-2 items-start text-white/80">
                              <button className="text-left hover:text-[#085CB5]">
                                Companies
                              </button>
                              <button className="text-left hover:text-[#085CB5]">
                                Stock Data
                              </button>
                              <button className="text-left hover:text-[#085CB5]">
                                Business Verticals
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button className="w-full px-8 py-4 text-left text-white">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Mega Menu Overlay */}
        <AnimatePresence mode="wait">
          {openMenu && (
            <motion.div
              layout
              layoutRoot
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="hidden lg:block overflow-hidden w-full text-white"
              onMouseLeave={() => setOpenMenu(null)}
            >
              <motion.div
                layout
                variants={contentVariants}
                className="px-8 py-6 max-w-7xl mx-auto"
              >
                {/* BUSINESS */}
                {openMenu === "business" && (
                  <div className="grid grid-cols-10 gap-6 items-start">
                    {/* Left Desktop Image */}
                    <div className="col-span-4 relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/Headerimgs/AboutUs.jpeg"
                        alt="Business Verticals"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Right Menu Content */}
                    <div className="col-span-6 pb-6 ">
                      <div className="border-b border-white pb-2 flex justify-between items-center">
                        <h2 className="text-xl">Business Overview</h2>
                        <h2 className="text-xl mr-20">Our Brands</h2>
                      </div>
                      <div className=" pb-2 flex justify-between items-center">
                      <button className=" mt-3 hover:text-amber-300 text-sm">
                        Learn More
                      </button>
                      
                      <button className=" mt-3 hover:text-amber-300 text-sm mr-16">
                        Browse Our Brands
                      </button>
                      </div>
                      <div className="border-b border-white py-2 mt-6 ">
                        <h2 className="text-xl">Business Verticals</h2>
                      </div>
                      <div className="grid grid-cols-3 gap-8 mt-3">
                        <div className="flex flex-col gap-2 items-start text-sm">
                          <button className="hover:text-amber-300 font-light">
                            Technology
                          </button>
                          <button className="hover:text-amber-300 font-light">
                            Steel
                          </button>
                          <button className="hover:text-amber-300 font-light">
                            Automotive
                          </button>
                          <button className="hover:text-amber-300 font-light">
                            Consumer & Retail
                          </button>
                        </div>
                        <div className="flex flex-col gap-2 items-start  text-sm">
                          <button className="hover:text-amber-300 font-light">
                            Infrastructure
                          </button>
                          <button className="hover:text-amber-300 font-light">
                            Financial Services
                          </button>
                          <button className="hover:text-amber-300 font-light">
                            Aerospace & Defence
                          </button>
                        </div>
                        <div className="flex flex-col gap-2 items-start  text-sm">
                          <button className="hover:text-amber-300 font-light">
                            Tourism & Travel
                          </button>
                          <button className="hover:text-amber-300 font-light">
                            Telecom & Media
                          </button>
                          <button className="hover:text-amber-300 font-light">
                            Trading & Investments
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* COMMUNITY */}
                {openMenu === "community" && (
                  <div className="grid grid-cols-10 gap-8 items-start">
                    {/* Left Desktop Image */}
                    <div className="col-span-4 relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/Headerimgs/committee.jpeg"
                        alt="Community Work"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Right Menu Content */}
                    <div className="col-span-6 pb-6">
                      <div className="border-b border-white pb-2">
                        <h2 className="text-xl">Overview</h2>
                      </div>
                      <button className=" mt-2 hover:text-amber-300 text-sm">
                        Areas of Work
                      </button>
                      <div className="grid grid-cols-2 mt-6">
                        <div className="flex flex-col gap-2 items-start font-light text-sm">
                          <button className="hover:text-amber-300">Health</button>
                          <button className="hover:text-amber-300">
                            Education
                          </button>
                        </div>
                        <div className="flex flex-col gap-2 items-start font-light text-sm">
                          <button className="hover:text-amber-300">
                            Empowerment
                          </button>
                          <button className="hover:text-amber-300">
                            Environment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ABOUT */}
                {openMenu === "about" && (
                  <div className="grid grid-cols-10 gap-8 items-start">
                    {/* Left Desktop Image */}
                    <div className="col-span-4 relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/Headerimgs/Abouttt.png"
                        alt="About Us"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Right Menu Content */}
                    <div className="col-span-6 pb-6 ">
                      <div className="border-b border-white pb-2">
                        <h2 className="text-xl">The Phoenix Group</h2>
                      </div>
                      <button className=" mt-2 hover:text-amber-300 text-sm">
                        About the Phoenix Group
                      </button>
                      <div className="grid grid-cols-3 gap-8 mt-6">
                        <div className="flex flex-col gap-2 items-start font-light text-sm">
                          <button className="hover:text-amber-300">Phoenix</button>
                          <button className="hover:text-amber-300">
                            Values and Purpose
                          </button>
                          <button className="hover:text-amber-300">
                            Phoenix Code of Conduct
                          </button>
                        </div>
                        <div className="flex flex-col gap-2 items-start font-light text-sm">
                          <button className="hover:text-amber-300">Heritage</button>
                          <button className="hover:text-amber-300">
                            Leadership
                          </button>
                          <button className="hover:text-amber-300">
                            Sponsorships
                          </button>
                        </div>
                        <div className="flex flex-col gap-2 items-start font-light text-sm">
                          <button className="hover:text-amber-300">
                            Sustainability
                          </button>
                          <button className="hover:text-amber-300">
                            Innovation
                          </button>
                          <button className="hover:text-amber-300">Books</button>
                        </div>
                      </div>

                      <div className="border-b border-white py-2 mt-10">
                        <h2 className="text-xl">Investors</h2>
                      </div>
                      <button className=" mt-2 hover:text-amber-300 text-sm">
                        Investor Section
                      </button>
                      <div className="grid grid-cols-2 gap-12 mt-6">
                        <div className="flex flex-col gap-2 items-start font-light text-sm">
                          <button className="hover:text-amber-300">
                            Companies
                          </button>
                          <button className="hover:text-amber-300">
                            Stock Data
                          </button>
                        </div>
                        <div className="flex flex-col gap-2 items-start font-light text-sm">
                          <button className="hover:text-amber-300">
                            Business Verticals
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}