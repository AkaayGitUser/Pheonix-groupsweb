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
    <footer className="w-full mt-1 bg-[#084d8d] text-white font-sans box-border">
      {/* Footer Content Grid - Increased Vertical Padding & Gaps */}
      <div className="w-full min-h-[300px] lg:min-h-[300px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[28%_22%_28%_22%] items-center p-[28px_16px] sm:p-[36px_24px] md:p-[48px_32px] lg:p-[56px_6%_48px] gap-[20px_16px] md:gap-y-[28px] lg:gap-0 max-w-[1400px] mx-auto">
        
        {/* Logo & Send Message Box */}
        <div className="col-span-1 lg:col-span-1 grid grid-cols-1 lg:flex lg:flex-col items-center lg:items-start justify-start p-0 pr-2 lg:pr-6 pb-2 lg:pb-0 gap-4 border-b lg:border-b-0 border-white/12">
          <Image
            src="/LOGOP.png"
            alt="Phoenix Logo"
            width={140}
            height={65}
            className="block w-[95px] min-[480px]:w-[110px] md:w-[130px] lg:w-[145px] h-auto max-w-full object-contain object-left"
          />

          {/* Send Message / Newsletter Signup Box */}
          <div className="flex flex-col gap-2 w-full max-w-full lg:max-w-[210px]">
            <span className="text-[9px] min-[480px]:text-[10px] lg:text-[11px] text-white/80 leading-normal whitespace-normal lg:whitespace-nowrap">
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
                className="flex-1 w-full h-7 border-none bg-gray-200 text-gray-800 text-[11px] px-2 rounded-l-[3px] outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="h-7 px-3 bg-[#084d8d] text-white text-[11px] font-medium border-none rounded-r-[3px] cursor-pointer hover:bg-[#063a6b] transition-colors duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 min-h-auto p-0 pr-1 lg:pl-8 lg:border-l lg:border-white/10">
          <h2 className="m-0 mb-3 sm:mb-4 lg:mb-5 text-white text-sm min-[480px]:text-base lg:text-lg font-normal leading-none tracking-tight">
            Quick Links
          </h2>

          <div className="flex flex-col items-start gap-2.5 sm:gap-3 lg:gap-3.5">
            <span className="text-white/90 text-[10px] min-[480px]:text-[11px] lg:text-sm font-normal leading-tight">
              Phoenix Arena
            </span>
            <span className="text-white/90 text-[10px] min-[480px]:text-[11px] lg:text-sm font-normal leading-tight">
              Phoenix Foundation
            </span>
            <span className="text-white/90 text-[10px] min-[480px]:text-[11px] lg:text-sm font-normal leading-tight">
              Phoenix Construction
            </span>
            <span className="text-white/90 text-[10px] min-[480px]:text-[11px] lg:text-sm font-normal leading-tight">
              Phoenix Motors
            </span>
            <span className="text-white/90 text-[10px] min-[480px]:text-[11px] lg:text-sm font-normal leading-tight">
              Vaikunta Mahaprasthana
            </span>
          </div>
        </div>

        {/* Address */}
        <div className="col-span-1 min-h-auto pl-3 lg:pl-10 border-l border-white/12 lg:border-white/10 flex flex-col">
          <h2 className="m-0 mb-3 sm:mb-4 lg:mb-5 text-white text-sm min-[480px]:text-base lg:text-lg font-normal leading-none tracking-tight">
            Address
          </h2>

          <div className="grid grid-cols-[auto_1fr] gap-x-2 items-start mb-3 lg:mb-4 text-white/80">
            <MapPin size={14} strokeWidth={1.5} className="mt-[2px] w-3 h-3 lg:w-3.5 lg:h-3.5" />
            <p className="m-0 text-[9.5px] min-[480px]:text-[10.5px] lg:text-[12.5px] font-normal leading-relaxed tracking-tight break-words">
              Nagarjuna Residency Driveway,
              <br />
              Diamond Hills, Lumbini Avenue,
              <br />
              Gachibowli, Hyderabad,
              <br />
              Telangana 500081
            </p>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-2 items-start mb-2 lg:mb-3 text-white/80">
            <MapPin size={14} strokeWidth={1.5} className="mt-[2px] w-3 h-3 lg:w-3.5 lg:h-3.5" />
            <p className="m-0 text-[9.5px] min-[480px]:text-[10.5px] lg:text-[12.5px] font-normal leading-relaxed tracking-tight break-words">
              Plot No. 1335, Road No. 45 Jubilee
              <br />
              Hills, Jubilee Hills, Hyderabad,
              <br />
              Telangana 500033
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="col-span-1 lg:col-span-1 min-h-auto pt-2 lg:pt-0 mt-2 lg:mt-0 border-t border-white/12 lg:border-t-0 lg:border-l lg:border-white/10 flex flex-col items-start gap-2 lg:gap-0 lg:pl-10">
          <h2 className="m-0 mb-0 lg:mb-4 text-white text-xs min-[480px]:text-sm lg:text-lg font-normal leading-none tracking-tight">
            Follow US :
          </h2>

          <div className="flex items-center gap-3 lg:gap-4 mt-0 lg:mt-2 text-white">
            <span className="inline-flex items-center justify-center">
              <FaFacebookSquare size={20} />
            </span>
            <span className="inline-flex items-center justify-center">
              <FaInstagram size={20} />
            </span>
            <span className="inline-flex items-center justify-center">
              <FaLinkedin size={20} />
            </span>
          </div>
        </div>
      </div>

      {/* Copyright Bar - Increased Height & Vertical Padding */}
      <div className="min-h-[48px] lg:min-h-[56px] flex items-center justify-center p-3 lg:p-[12px_20px] border-t border-white/10 text-white/70 text-[9px] min-[480px]:text-[10px] font-normal text-center">
        Copyright © Phoenix Groups 2026 All rights reserved.
      </div>
    </footer>
  );
}