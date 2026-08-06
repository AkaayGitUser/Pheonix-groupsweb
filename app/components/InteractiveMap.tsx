// 'use client';

// import React, { useEffect, useState, useMemo, useRef } from 'react';
// import * as d3 from 'd3';
// import * as topojson from 'topojson-client';

// import worldData from 'world-atlas/countries-110m.json';

// interface LocationMarker {
//   id: string;
//   name: string;
//   coordinates: [number, number];
// }

// const COMPANY_LOCATIONS: LocationMarker[] = [
//   { id: '1', name: 'Rajasthan', coordinates: [73.5, 26.5] },
//   { id: '2', name: 'Gujarat', coordinates: [70.5, 22.2] },
//   { id: '3', name: 'Maharashtra', coordinates: [74.5, 19.5] },
//   { id: '4', name: 'Telangana', coordinates: [79.2, 17.5] },
//   { id: '5', name: 'Andhra Pradesh', coordinates: [80.0, 14.2] },
// ];

// export default function InteractiveMap() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [mounted, setMounted] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [containerSize, setContainerSize] = useState({ width: 1200, height: 600 });

//   useEffect(() => {
//     setMounted(true);

//     const updateSize = () => {
//       if (containerRef.current) {
//         setContainerSize({
//           width: containerRef.current.clientWidth || 1200,
//           height: containerRef.current.clientHeight || 600,
//         });
//       }
//     };

//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const { width, height } = containerSize;

//   const projection = useMemo(() => {
//     const scale = Math.min(width / 5.8, height / 2.2);

//     return d3.geoMercator()
//       .scale(scale)
//       .center([25, 18])
//       .translate([width / 2, height / 2]);
//   }, [width, height]);

//   const pathGenerator = useMemo(() => d3.geoPath().projection(projection), [projection]);

//   const countries = useMemo(() => {
//     return (topojson.feature(worldData as any, worldData.objects.countries as any) as any).features;
//   }, []);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;

//     setIsHovered(true);
//     setOffset({ x: -x * 0.012, y: -y * 0.012 });
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setOffset({ x: 0, y: 0 });
//   };

//   if (!mounted) return null;

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="relative w-full h-[60vh] min-h-[450px] max-h-[800px] bg-[#0d3570] overflow-hidden select-none cursor-pointer flex items-center justify-center"
//     >
//       {/* Background Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-20 pointer-events-none"
//         style={{
//           backgroundImage: 'radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)',
//           backgroundSize: '24px 24px',
//         }}
//       />

//       {/* GPU Accelerated Map Container */}
//       <div
//         className="w-full h-full will-change-transform transition-transform duration-700 ease-out flex items-center justify-center"
//         style={{
//           transform: isHovered
//             ? `translate3d(calc(-17% + ${offset.x}px), calc(15% + ${offset.y}px), 0) scale(5.6)`
//             : `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1)`,
//           transformOrigin: '65% 50%',
//         }}
//       >
//         <svg
//           width={width}
//           height={height}
//           viewBox={`0 0 ${width} ${height}`}
//           className="w-full h-full block overflow-visible"
//         >
//           <defs>
//             {/* Pin Drop Shadow */}
//             <filter id="pin-shadow" x="-30%" y="-30%" width="200%" height="200%">
//               <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#f4f6f7" floodOpacity="0.45" />
//             </filter>

//             <clipPath id="logo-full-clip">
//               <circle cx="0" cy="0" r="3.2" />
//             </clipPath>
//           </defs>

//           {/* World Landmass Paths */}
//           <g className="countries">
//             {/* Render base country paths */}
//             {countries.map((feature: any, i: number) => {
//               const isIndia = feature.id === '356';

//               return (
//                 <path
//                   key={i}
//                   d={pathGenerator(feature) || ''}
//                   className={`transition-colors duration-500 ${
//                     isIndia && isHovered
//                       ? 'fill-[#2382e4] stroke-white stroke-[0.8]'
//                       : 'fill-[#c4e2ff] stroke-white/60 stroke-[0.3] hover:fill-[#aed4fc]'
//                   }`}
//                 />
//               );
//             })}

//             {/* Render India on top so its white stroke overlays neighbor countries clearly */}
//             {countries
//               .filter((feature: any) => feature.id === '356')
//               .map((feature: any, i: number) => (
//                 <path
//                   key={`india-top-${i}`}
//                   d={pathGenerator(feature) || ''}
//                   className={`transition-all duration-500 pointer-events-none ${
//                     isHovered
//                       ? 'fill-[#2382e4] stroke-white stroke-[0.8]'
//                       : 'fill-transparent stroke-transparent'
//                   }`}
//                 />
//               ))}
//           </g>

//           {/* Location Pins inside India */}
//           {COMPANY_LOCATIONS.map((marker) => {
//             const coords = projection(marker.coordinates);
//             if (!coords) return null;
//             const [x, y] = coords;

//             return (
//               <g
//                 key={marker.id}
//                 transform={`translate(${x}, ${y})`}
//                 className={`group cursor-pointer transition-all duration-500 ${
//                   isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
//                 }`}
//               >
//                 <g clipPath="url(#logo-full-clip)" filter="url(#pin-shadow)" className="transition-transform duration-300 group-hover:scale-125">
//                   <image
//                     href="/logo.png"
//                     x="-3.2"
//                     y="-3.2"
//                     width="6.4"
//                     height="6.4"
//                     preserveAspectRatio="xMidYMid slice"
//                   />
//                 </g>
//               </g>
//             );
//           })}

//           {/* Metrics Overlay - Clean Text Placement directly on Landmass */}
//           {(() => {
//             const chinaCoords = projection([96, 34]);
//             if (!chinaCoords) return null;
//             const [mx, my] = chinaCoords;

//             return (
//               <g
//                 transform={`translate(${mx}, ${my})`}
//                 className={`transition-opacity duration-500 ${
//                   isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
//                 }`}
//               >
//                 <text
//                   x="46"
//                   y="3"
//                   textAnchor="middle"
//                   className="fill-[#0d3570] text-[6px] font-medium tracking-tight"
//                 >
//                   Metrics
//                 </text>

//                 <g transform="translate(15, 13)">
//                   <text x="0" y="0" textAnchor="middle" className="fill-[#0d3570] text-[5px] font-black">
//                     20+
//                   </text>
//                   <text x="0" y="6" textAnchor="middle" className="fill-[#0d3570]/80 text-[2.5px] font-bold">
//                     Eco Friendly Crematoria
//                   </text>
//                 </g>

//                 <line x1="31" y1="8" x2="31" y2="21" className="stroke-[#0d3570]/30 stroke-[0.4]" />

//                 <g transform="translate(45, 13)">
//                   <text x="0" y="0" textAnchor="middle" className="fill-[#0d3570] text-[5px] font-black">
//                     8+
//                   </text>
//                   <text x="0" y="6" textAnchor="middle" className="fill-[#0d3570]/80 text-[2.5px] font-bold">
//                     Signature Initiatives
//                   </text>
//                 </g>

//                 <line x1="60" y1="8" x2="60" y2="21" className="stroke-[#0d3570]/30 stroke-[0.4]" />

//                 <g transform="translate(78, 13)">
//                   <text x="0" y="0" textAnchor="middle" className="fill-[#0d3570] text-[5px] font-black">
//                     20+
//                   </text>
//                   <text x="0" y="6" textAnchor="middle" className="fill-[#0d3570]/80 text-[2.5px] font-bold">
//                     Of Purpose Driven Impact
//                   </text>
//                 </g>
//               </g>
//             );
//           })()}
//         </svg>
//       </div>
//     </div>
//   );
// }

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateSize = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth || 1200;
        const h = containerRef.current.clientHeight || 600;
        setContainerSize({ width: w, height: h });
        setIsMobile(w < 768);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const { width, height } = containerSize;

  const projection = useMemo(() => {
    const scale = Math.min(width / 5.8, height / 2.2);

    return d3.geoMercator()
      .scale(scale)
      .center([25, 18])
      .translate([width / 2, height / 2]);
  }, [width, height]);

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
    setOffset({ x: -x * 0.012, y: -y * 0.012 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  if (!mounted) return null;

  // Responsive values for map transform
  const hoveredTransform = isMobile
    ? `translate3d(calc(-5% + ${offset.x}px), calc(-8% + ${offset.y}px), 0) scale(2.8)`
    : `translate3d(calc(-17% + ${offset.x}px), calc(15% + ${offset.y}px), 0) scale(5.6)`;

  const transformOrigin = isMobile ? '50% 45%' : '65% 50%';

  // Responsive coordinates & layout for Metrics Overlay
  const chinaLongitude = isMobile ? 86 : 96;
  const chinaLatitude = isMobile ? 38 : 34;

  const chinaCoords = projection([chinaLongitude, chinaLatitude]);
  const [mx, my] = chinaCoords || [0, 0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[60vh] min-h-[450px] max-h-[800px] bg-[#0d3570] overflow-hidden select-none cursor-pointer flex items-center justify-center"
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
            ? hoveredTransform
            : `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1)`,
          transformOrigin: transformOrigin,
        }}
      >
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full block overflow-visible"
        >
          <defs>
            {/* Pin Drop Shadow */}
            <filter id="pin-shadow" x="-30%" y="-30%" width="200%" height="200%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#f4f6f7" floodOpacity="0.45" />
            </filter>

            <clipPath id="logo-full-clip">
              <circle cx="0" cy="0" r="3.2" />
            </clipPath>
          </defs>

          {/* World Landmass Paths */}
          <g className="countries">
            {/* Render base country paths */}
            {countries.map((feature: any, i: number) => {
              const isIndia = feature.id === '356';

              return (
                <path
                  key={i}
                  d={pathGenerator(feature) || ''}
                  className={`transition-colors duration-500 ${
                    isIndia && isHovered
                      ? 'fill-[#2382e4] stroke-white stroke-[0.1]'
                      : 'fill-[#c4e2ff] stroke-white/60 stroke-[0.1] hover:fill-[#aed4fc]'
                  }`}
                />
              );
            })}

            {/* Render India on top so its white stroke overlays neighbor countries clearly */}
            {countries
              .filter((feature: any) => feature.id === '356')
              .map((feature: any, i: number) => (
                <path
                  key={`india-top-${i}`}
                  d={pathGenerator(feature) || ''}
                  className={`transition-all duration-500 pointer-events-none ${
                    isHovered
                      ? 'fill-[#2382e4] stroke-white stroke-[0.1]'
                      : 'fill-transparent stroke-transparent'
                  }`}
                />
              ))}
          </g>

          {/* Location Pins inside India */}
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
                    x="-3.2"
                    y="-3.2"
                    width="6.4"
                    height="6.4"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
              </g>
            );
          })}

          {/* Metrics Overlay */}
          {chinaCoords && (
            <g
              transform={`translate(${mx}, ${my})`}
              className={`transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <text
                x={isMobile ? '35' : '46'}
                y={isMobile ? '-2' : '3'}
                textAnchor="middle"
                className={`fill-[#0d3570] font-medium tracking-tight ${
                  isMobile ? 'text-[7px]' : 'text-[10px]'
                }`}
              >
                Metrics
              </text>

              <g transform={isMobile ? 'translate(10, 10)' : 'translate(15, 13)'}>
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  className={`fill-[#0d3570] font-black ${isMobile ? 'text-[6px]' : 'text-[5px]'}`}
                >
                  20+
                </text>
                <text
                  x="0"
                  y={isMobile ? '5' : '6'}
                  textAnchor="middle"
                  className={`fill-[#0d3570]/80 font-bold ${isMobile ? 'text-[2.2px]' : 'text-[2.5px]'}`}
                >
                  Eco Friendly Crematoria
                </text>
              </g>

              <line
                x1={isMobile ? '23' : '31'}
                y1={isMobile ? '6' : '8'}
                x2={isMobile ? '23' : '31'}
                y2={isMobile ? '17' : '21'}
                className="stroke-[#0d3570]/30 stroke-[0.4]"
              />

              <g transform={isMobile ? 'translate(35, 10)' : 'translate(45, 13)'}>
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  className={`fill-[#0d3570] font-black ${isMobile ? 'text-[6px]' : 'text-[5px]'}`}
                >
                  8+
                </text>
                <text
                  x="0"
                  y={isMobile ? '5' : '6'}
                  textAnchor="middle"
                  className={`fill-[#0d3570]/80 font-bold ${isMobile ? 'text-[2.2px]' : 'text-[2.5px]'}`}
                >
                  Signature Initiatives
                </text>
              </g>

              <line
                x1={isMobile ? '47' : '60'}
                y1={isMobile ? '6' : '8'}
                x2={isMobile ? '47' : '60'}
                y2={isMobile ? '17' : '21'}
                className="stroke-[#0d3570]/30 stroke-[0.4]"
              />

              <g transform={isMobile ? 'translate(60, 10)' : 'translate(78, 13)'}>
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  className={`fill-[#0d3570] font-black ${isMobile ? 'text-[6px]' : 'text-[5px]'}`}
                >
                  20+
                </text>
                <text
                  x="0"
                  y={isMobile ? '5' : '6'}
                  textAnchor="middle"
                  className={`fill-[#0d3570]/80 font-bold ${isMobile ? 'text-[2.2px]' : 'text-[2.5px]'}`}
                >
                  Of Purpose Driven Impact
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}