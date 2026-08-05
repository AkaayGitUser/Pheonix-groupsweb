'use client';

import React, { useEffect, useState, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

import worldData from 'world-atlas/countries-110m.json';

interface LocationMarker {
  id: string;
  name: string;
  coordinates: [number, number];
}

const COMPANY_LOCATIONS: LocationMarker[] = [
  { id: '1', name: 'Rajasthan', coordinates: [73.5, 26.5] },
  { id: '2', name: 'Gujarat', coordinates: [70.5, 22.2] },
  { id: '3', name: 'Maharashtra', coordinates: [74.5, 19.5] },
  { id: '4', name: 'Telangana', coordinates: [79.2, 17.5] },
  { id: '5', name: 'Andhra Pradesh', coordinates: [80.0, 14.2] },
];

export default function InteractiveMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 1200, height: 600 });

  useEffect(() => {
    setMounted(true);

    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth || 1200,
          height: containerRef.current.clientHeight || 600,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const { width, height } = containerSize;

  // Calculate dynamic scale to ensure landmass stays fully visible regardless of browser zoom percentage
  const projection = useMemo(() => {
    // Dynamic scale factor based on container aspect ratio
    const scale = Math.min(width / 5.8, height / 2.2);
    
    // Smoothly focus on Asia/India when hovered
    const centerLon = isHovered ? 68 : 20;
    const centerLat = isHovered ? 23 : 15;

    return d3.geoMercator()
      .scale(scale)
      .center([centerLon, centerLat])
      .translate([width / 2, height / 2]);
  }, [width, height, isHovered]);

  const pathGenerator = useMemo(() => d3.geoPath().projection(projection), [projection]);

  const countries = useMemo(() => {
    return (topojson.feature(worldData as any, worldData.objects.countries as any) as any).features;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setIsHovered(true);
    setOffset({ x: -x * 0.015, y: -y * 0.015 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[60vh] min-h-[400px] max-h-[800px] bg-[#0d3570] overflow-hidden select-none cursor-pointer flex items-center justify-center"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* GPU Accelerated Map Container */}
      <div
        className="w-full h-full will-change-transform transition-transform duration-700 ease-out flex items-center justify-center"
        style={{
          transform: isHovered
            ? `translate3d(${offset.x}px, ${offset.y}px, 0) scale(2.0)`
            : `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1)`,
          transformOrigin: '55% 45%',
        }}
      >
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full block"
        >
          <defs>
            {/* Glass Shadow Filter */}
            <filter id="glass-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#092044" floodOpacity="0.2" />
            </filter>

            {/* Pin Drop Shadow */}
            <filter id="pin-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#041226" floodOpacity="0.45" />
            </filter>

            <clipPath id="logo-full-clip">
              <circle cx="0" cy="0" r="4.5" />
            </clipPath>
          </defs>

          {/* World Landmass Paths */}
          <g className="countries">
            {countries.map((feature: any, i: number) => {
              const isIndia = feature.id === '356';

              return (
                <path
                  key={i}
                  d={pathGenerator(feature) || ''}
                  className={`transition-colors duration-500 stroke-[#0d3570]/40 stroke-[0.3] ${
                    isIndia && isHovered
                      ? 'fill-[#2382e4]'
                      : 'fill-[#c4e2ff] hover:fill-[#aed4fc]'
                  }`}
                />
              );
            })}
          </g>

          {/* Location Pins */}
          {COMPANY_LOCATIONS.map((marker) => {
            const coords = projection(marker.coordinates);
            if (!coords) return null;
            const [x, y] = coords;

            return (
              <g
                key={marker.id}
                transform={`translate(${x}, ${y})`}
                className={`group cursor-pointer transition-all duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <g clipPath="url(#logo-full-clip)" filter="url(#pin-shadow)" className="transition-transform duration-300 group-hover:scale-125">
                  <image
                    href="/logo.png"
                    x="-4.5"
                    y="-4.5"
                    width="9"
                    height="9"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                <circle
                  r="4.5"
                  className="fill-none stroke-white stroke-[0.5] pointer-events-none transition-transform duration-300 group-hover:scale-125"
                />
              </g>
            );
          })}

          {/* Metrics Glassmorphism Card */}
          {(() => {
            const chinaCoords = projection([105, 32]);
            if (!chinaCoords) return null;
            const [mx, my] = chinaCoords;

            return (
              <g
                transform={`translate(${mx}, ${my})`}
                className={`transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <rect
                  x="0"
                  y="0"
                  width="165"
                  height="52"
                  rx="6"
                  ry="6"
                  filter="url(#glass-shadow)"
                  className="fill-white/60 stroke-white/80 stroke-[0.6]"
                />

                <text
                  x="82.5"
                  y="15"
                  textAnchor="middle"
                  className="fill-[#0d3570] text-[10.5px] font-bold tracking-tight"
                >
                  Metrics
                </text>

                <g transform="translate(27, 30)">
                  <text x="0" y="0" textAnchor="middle" className="fill-[#0d3570] text-[9.5px] font-black">
                    20+
                  </text>
                  <text x="0" y="8" textAnchor="middle" className="fill-[#0d3570]/80 text-[4px] font-bold">
                    Eco Friendly Crematoria
                  </text>
                </g>

                <line x1="55" y1="26" x2="55" y2="42" className="stroke-[#0d3570]/25 stroke-[0.5]" />

                <g transform="translate(82.5, 30)">
                  <text x="0" y="0" textAnchor="middle" className="fill-[#0d3570] text-[9.5px] font-black">
                    8+
                  </text>
                  <text x="0" y="8" textAnchor="middle" className="fill-[#0d3570]/80 text-[4px] font-bold">
                    Signature Initiatives
                  </text>
                </g>

                <line x1="110" y1="26" x2="110" y2="42" className="stroke-[#0d3570]/25 stroke-[0.5]" />

                <g transform="translate(138, 30)">
                  <text x="0" y="0" textAnchor="middle" className="fill-[#0d3570] text-[9.5px] font-black">
                    20+
                  </text>
                  <text x="0" y="8" textAnchor="middle" className="fill-[#0d3570]/80 text-[4px] font-bold">
                    Of Purpose Driven Impact
                  </text>
                </g>
              </g>
            );
          })()}
        </svg>
      </div>
    </div>
  );
}