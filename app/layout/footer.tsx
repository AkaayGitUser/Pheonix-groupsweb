"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function FooterPage() {
  return (
    <footer className="w-full bg-[#084d8d] text-white font-sans box-border">
      {/* Footer Main Container */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 items-stretch p-6 sm:p-8 lg:px-12 lg:py-8 gap-6 lg:gap-8">
        
        {/* Column 1: Logo & Newsletter */}
        <div className="col-span-1 flex flex-col  gap-2 pr-2 lg:pr-6 border-b lg:border-b-0 border-white/12 pb-4 lg:pb-0">
          <Image
            src="/LOGOP.png"
            alt="Phoenix Logo"
            width={140}
            height={70}
            className="w-[95px] min-[500px]:w-[110px] md:w-[125px] lg:w-[130px] h-auto object-contain object-left"
          />

          <div className="flex flex-col gap-1 w-full max-w-full lg:max-w-[220px]">
            <span className="text-[10px] lg:text-[11px] text-white/80 leading-tight">
              Sign Up to Get Latest News / Updates
            </span>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center w-full rounded-[4px] border border-white/25 bg-white/10 p-[2px] overflow-hidden"
            >
              <input
                type="email"
                required
                placeholder="Enter email address"
                className="flex-1 w-full h-7 border-none bg-gray-200 text-gray-800 text-[11px] px-2 rounded-l-[3px] outline-none placeholder:text-gray-400 min-w-0"
              />
              <button
                type="submit"
                className="h-7 px-3 bg-[#084d8d] text-white text-[11px] font-medium border-none rounded-r-[3px] cursor-pointer hover:bg-[#063a6b] transition-colors duration-200 shrink-0"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Column 2: Quick Links (Top Aligned to Match Address Header) */}
        <div className="col-span-1 flex flex-col justify-start pl-0 lg:pl-12 lg:border-l lg:border-white/10">
          <h2 className="m-0 mb-3 text-white text-sm sm:text-base font-semibold uppercase tracking-wider text-white/90 leading-none">
            Quick Links
          </h2>

          <ul className="flex flex-col gap-2 p-0 m-0 list-none text-white/80 text-[11px] sm:text-xs lg:text-[12.5px] leading-relaxed">
            <li><a href="https://arena.akaayis.com/" className="hover:text-white transition-colors">Phoenix Arena</a></li>
            <li><a href="https://foundation.akaayis.com/" className="hover:text-white transition-colors">Phoenix Foundation</a></li>
            <li><a href="https://pxinfra.akaayis.com/" className="hover:text-white transition-colors">Phoenix Construction</a></li>
            <li><a href="https://motors.akaayis.com/" className="hover:text-white transition-colors">Phoenix Motors</a></li>
            <li><a href="https://mahaprasthanam.akaayis.com/" className="hover:text-white transition-colors">Vaikunta Mahaprasthana</a></li>
          </ul>
        </div>

        {/* Column 3: Address (Top Aligned to Match Quick Links Header) */}
        <div className="col-span-1 flex flex-col justify-start pl-3 lg:pl-12 border-l border-white/12 lg:border-white/10">
          <h2 className="m-0 mb-3 text-white text-sm sm:text-base font-semibold uppercase tracking-wider text-white/90 leading-none">
            Address
          </h2>

          <div className="flex flex-col gap-2.5 text-white/80 text-[11px] sm:text-xs lg:text-[12.5px] leading-relaxed">
            <div className="flex items-start gap-2">
              <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-white/90" />
              <p className="m-0">
                Nagarjuna Residency Driveway, Diamond Hills, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500081
              </p>
            </div>

            <div className="flex items-start gap-2">
              <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-white/90" />
              <p className="m-0">
                Plot No. 1335, Road No. 45 Jubilee Hills, Jubilee Hills, Hyderabad, Telangana 500033
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: Social Media */}
        <div className="col-span-1 flex flex-col justify-start pt-2 lg:pt-0 border-t border-white/12 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-8">
          <h2 className="m-0 mb-3 text-white text-sm sm:text-base font-semibold uppercase tracking-wider text-white/90 leading-none">
            Follow Us
          </h2>

          <div className="flex items-center gap-4 text-white/90">
            <a href="#" className="hover:text-white transition-transform hover:scale-110" aria-label="Facebook">
              <FaFacebookSquare size={22} />
            </a>
            <a href="#" className="hover:text-white transition-transform hover:scale-110" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="hover:text-white transition-transform hover:scale-110" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-3 px-4 border-t border-white/10 text-white/60 text-[10px] lg:text-[11px] font-normal text-center">
        Copyright © Phoenix Groups 2026 All rights reserved.
      </div>
    </footer>
  );
}