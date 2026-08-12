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
  const [isDark, setIsDark] = useState(true); // Theme state

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
        duration: 0.4,
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

  // Sync theme with HTML class attribute for Tailwind dark mode
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
        ${openMenu ? "bg-black/75 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div
        className="max-w-7xl mx-auto h-16 sm:h-20 md:h-24 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10"
        style={{ font: "Archivo" }}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Logo.png"
            alt="Phoenix Foundation"
            width={125}
            height={35}
            priority
          />
        </Link>

        {/* Navigation + Mega Menu */}
        <div className="relative">
          <nav className="hidden lg:flex items-center gap-12 text-white">
            <button
              className="border-b border-b-transparent hover:border-white pb-1"
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
                    ? "border-b border-white"
                    : "border-b border-transparent hover:border-white"
                }`}
              >
                Business
              </button>
            </div>
            <button
              className="border-b border-b-transparent hover:border-white pb-1"
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
                    ? "border-b border-white"
                    : "border-b border-transparent hover:border-white"
                }`}
              >
                Community
              </button>
            </div>

            <div onMouseEnter={() => setOpenMenu("about")} className="relative">
              <button
                className={`pb-1 transition ${
                  openMenu === "about"
                    ? "border-b border-white"
                    : "border-b border-transparent hover:border-white"
                }`}
              >
                About Us
              </button>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-2 text-white">
              {/* Search */}
              <div className="relative group">
                <button className="p-2.5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center mb-1">
                  <Search size={20} strokeWidth={1.75} />
                </button>
                <div className=" absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-md">
                  Search
                </div>
              </div>

              {/* Theme Toggle (Dark / Light) */}
              <div className="relative group">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle Theme"
                  className="p-2.5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center mb-1"
                >
                  {isDark ? (
                    <Sun size={20} strokeWidth={1.75} />
                  ) : (
                    <Moon size={20} strokeWidth={1.75} />
                  )}
                </button>
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-md  mb-1">
                  {isDark ? "Light Mode" : "Dark Mode"}
                </div>
              </div>

              {/* Mail */}
              <div className="relative group">
                <button className="p-2.5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center mb-1">
                  <Mail size={20} strokeWidth={1.75} />
                </button>
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-md">
                  Contact Us
                </div>
              </div>

              {/* Globe */}
              <div className="relative group">
                <button className="p-2.5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center mb-1">
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
              className="lg:hidden text-white"
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
            {/* Header */}
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

            {/* Menu Body */}
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

                {/* Business Mobile Submenu */}
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

                {/* Community Mobile */}
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

                  {/* About Us */}
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

      {/* Mega Menu Overlay */}
      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.div
            layout
            layoutRoot
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden w-full text-white"
            onMouseLeave={() => setOpenMenu(null)}
          >
            <motion.div
              layout
              variants={contentVariants}
              className="pl-122 pr-16 max-w-7xl mx-auto"
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
                    <div className="flex flex-col gap-2 items-start text-sm">
                      <button className="hover:text-amber-300">
                        Technology
                      </button>
                      <button className="hover:text-amber-300">Steel</button>
                      <button className="hover:text-amber-300">
                        Automotive
                      </button>
                      <button className="hover:text-amber-300">
                        Consumer & Retail
                      </button>
                    </div>
                    <div className="flex flex-col gap-2 items-start font-light text-sm">
                      <button className="hover:text-amber-300">
                        Infrastructure
                      </button>
                      <button className="hover:text-amber-300">
                        Financial Services
                      </button>
                      <button className="hover:text-amber-300">
                        Aerospace & Defence
                      </button>
                    </div>
                    <div className="flex flex-col gap-2 items-start font-light text-sm">
                      <button className="hover:text-amber-300">
                        Tourism & Travel
                      </button>
                      <button className="hover:text-amber-300">
                        Telecom & Media
                      </button>
                      <button className="hover:text-amber-300">
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
              )}

              {/* ABOUT */}
              {openMenu === "about" && (
                <div className="pb-6">
                  <div className="border-b border-[#085CB5] pb-2">
                    <h2 className="text-xl">The Phoenix Group</h2>
                  </div>
                  <button className="font-semibold mt-2 hover:text-amber-300 text-sm">
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

                  <div className="border-b border-[#085CB5] py-2 mt-10">
                    <h2 className="text-xl">Investors</h2>
                  </div>
                  <button className="font-semibold mt-2 hover:text-amber-300 text-sm">
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
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
