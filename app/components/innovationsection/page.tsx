'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AwardCardProps {
  category: string;
  cardImgSrc: string; 
}

const awardsData: AwardCardProps[] = [
  { category: 'Real-Estate', cardImgSrc: '/Awards/Award1.jpg' },
  { category: 'Real-Estate', cardImgSrc: '/Awards/Award2.jpg' },
  { category: 'Real-Estate', cardImgSrc: '/Awards/Award3.jpg' },
  { category: 'Design', cardImgSrc: '/Awards/Award4.jpg' },
  { category: 'Growth', cardImgSrc: '/Awards/Award5.jpg' },
  { category: 'Global', cardImgSrc: '/Awards/Award6.jpg' },
  { category: 'Real-Estate', cardImgSrc: '/Awards/awardp1.jpg' },
  { category: 'Global', cardImgSrc: '/Awards/awardp2.jpg' },
  { category: 'Global', cardImgSrc: '/Awards/awardp3.jpg' },
];

export default function AwardsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(awardsData.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const currentCards = awardsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Awards
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 transition-transform hover:scale-110 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCards.map((award, index) => (
              <div
                key={index}
                className="relative min-h-[350px] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background Image Container with rounded corners */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={award.cardImgSrc}
                    alt={award.category}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Top-Right Folded Ribbon Tag */}
                <div className="absolute top-6 -right-2.5 z-20">
                  <div className="relative bg-black/30 backdrop-blur-md  text-white font-semibold text-xs uppercase tracking-wider px-4 py-1.5 shadow-md">
                    {award.category}

                    {/* 3D Dark Fold Shadow (Tapers back behind the card edge) */}
                    <span className="absolute right-0 top-full w-0 h-0 border-t-[10px] border-t-black/80 border-r-[10px] border-r-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 transition-transform hover:scale-110 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Page Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === idx ? 'bg-gray-900 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}