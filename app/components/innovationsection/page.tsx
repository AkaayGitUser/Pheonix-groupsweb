"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AwardCardProps {
  category: string;
  cardImgSrc: string; 
  title: string;
}

const awardsData: AwardCardProps[] = [
  {
    category: 'Real-Estate',
    cardImgSrc: '/Awards/Award1.jpg',
    title: 'Iconic Real Estate Leader',
  },
  {
    category: 'Real-Estate',
    cardImgSrc: '/Awards/Award2.jpg',
    title: 'Iconic Real Estate Leader of the Year 2026',
  },
  {
    category: 'Certificate',
    cardImgSrc: '/Awards/Certificate.png',
    title: 'Certificate',
  },
  {
    category: 'Design',
    cardImgSrc: '/Awards/awardp6.jpg',
    title: 'Best CSR Practices in real estate sector ',
  },
  {
    category: 'Growth',
    cardImgSrc: '/Awards/Award5.jpg',
    title: 'Category Commercial Space-2025',
  },
  {
    category: 'Global',
    cardImgSrc: '/Awards/Award6.jpg',
    title: 'International Brand Honor',
  },
  {
    category: 'Real-Estate',
    cardImgSrc: '/Awards/1758609993291.jpg',
    title: 'Excellence Award',
  },
  {
    category: 'Global',
    cardImgSrc: '/Awards/awardp2.jpg',
    title: 'CSR Initiative of the Year – Real Estate Firm',
  },
  {
    category: 'Certificate',
    cardImgSrc: '/Certificate/Certificate 3.png',
    title: 'Certificate',
  },
  {
    category: 'Real-Estate',
    cardImgSrc: '/Awards/Award3.jpg',
    title: 'Grohe Hurun Excellence In Real Estate',
  },
  {
    category: 'Certificate',
    cardImgSrc: '/Certificate/Certificate4.png',
    title: 'Certificate',
  },
  {
    category: 'Global',
    cardImgSrc: '/Awards/steel-award1.jpg',
    title: 'Legend of Steel Construction @ Steel Day 2026 ',
  },
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#222222] dark:text-white uppercase font-sans mb-10">
          Awards & Certification
        </h2>

        {/* Carousel Wrapper with Relative Positioning */}
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
              <div key={index} className="flex flex-col">
                {/* Card Container */}
                <div className="relative min-h-[350px] transition-all duration-300 hover:-translate-y-1">
                  {/* Background Image Container */}
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
                    <div className="relative bg-black/30 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-wider px-4 py-1.5 shadow-md">
                      {award.category}

                      {/* 3D Dark Fold Shadow */}
                      <span className="absolute right-0 top-full w-0 h-0 border-t-[10px] border-t-black/80 border-r-[10px] border-r-transparent" />
                    </div>
                  </div>
                </div>

                {/* Content Under Card */}
                <div className="mt-4 px-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">
                    {award.title}
                  </h3>
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