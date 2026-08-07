'use client';

import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import worldData from 'world-atlas/countries-50m.json';

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

// Fixed 1200x600 SVG Canvas coordinate system
const CANVAS_W = 1200;
const CANVAS_H = 600;

// Static 1:1 Mercator projection onto 1200x600 SVG canvas
const projection = d3
  .geoMercator()
  .scale(206.8)
  .center([25, 18])
  .translate([CANVAS_W / 2, CANVAS_H / 2]);

const pathGenerator = d3.geoPath().projection(projection);

// ViewBox targets [x, y, w, h] — spacious unclipped framing matching 
const VB_DEFAULT: [number, number, number, number] = [0, 0, 1200, 600];
const VB_HOVERED_DESKTOP: [number, number, number, number] = [715, 205, 310, 145];
const VB_HOVERED_MOBILE: [number, number, number, number] = [610, 192, 420, 170];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function InteractiveMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isIndiaHighlighted, setIsIndiaHighlighted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ViewBox state [x, y, w, h] for crisp vector zooming
  const [vb, setVb] = useState<[number, number, number, number]>(VB_DEFAULT);

  const animRef = useRef<{
    current: [number, number, number, number];
    target: [number, number, number, number];
    reqId: number;
    isHovering: boolean;
  }>({
    current: [...VB_DEFAULT],
    target: [...VB_DEFAULT],
    reqId: 0,
    isHovering: false,
  });

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth ViewBox RAF Lerp loop
  const startAnim = useCallback(() => {
    cancelAnimationFrame(animRef.current.reqId);

    const step = () => {
      const a = animRef.current;
      const cur = a.current;
      const tar = a.target;

      const nx = lerp(cur[0], tar[0], 0.22);
      const ny = lerp(cur[1], tar[1], 0.22);
      const nw = lerp(cur[2], tar[2], 0.22);
      const nh = lerp(cur[3], tar[3], 0.22);

      a.current = [nx, ny, nw, nh];
      setVb([nx, ny, nw, nh]);

      const diff =
        Math.abs(nx - tar[0]) +
        Math.abs(ny - tar[1]) +
        Math.abs(nw - tar[2]) +
        Math.abs(nh - tar[3]);

      // Reveal icons and Legacy overlay after 80% zoom progress (diff <= 450)
      if (diff <= 450 && a.isHovering) {
        setShowContent(true);
      }

      if (diff > 0.1) {
        a.reqId = requestAnimationFrame(step);
      } else {
        a.current = [...tar];
        setVb([...tar]);
      }
    };

    animRef.current.reqId = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    animRef.current.isHovering = isHovered;

    const targetVb = isHovered
      ? (isMobile ? VB_HOVERED_MOBILE : VB_HOVERED_DESKTOP)
      : VB_DEFAULT;

    const prevTar = animRef.current.target;
    const targetChanged =
      prevTar[0] !== targetVb[0] ||
      prevTar[1] !== targetVb[1] ||
      prevTar[2] !== targetVb[2] ||
      prevTar[3] !== targetVb[3];

    if (targetChanged) {
      animRef.current.target = targetVb;
      setShowContent(false);

      if (isHovered) {
        setIsIndiaHighlighted(true);
      } else {
        setIsIndiaHighlighted(false);
      }

      startAnim();
    }
  }, [isHovered, isMobile, mounted, startAnim]);

  useEffect(() => {
    return () => cancelAnimationFrame(animRef.current.reqId);
  }, []);

  const countries = useMemo(() => {
    const geo = topojson.feature(
      worldData as any,
      (worldData as any).objects.countries
    ) as any;
    return geo.features || [];
  }, []);

  const countryBorders = useMemo(() => {
    return topojson.mesh(
      worldData as any,
      (worldData as any).objects.countries,
      (a: any, b: any) => a !== b
    );
  }, []);

  if (!mounted) return null;

  const isIndia = (feature: any) => String(feature?.id) === '356';

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-[2/1] min-h-[450px] max-h-[850px] overflow-hidden select-none cursor-pointer"
      style={{ background: '#0c326b', fontFamily: 'var(--font-archivo), Archivo, sans-serif' }}
    >
      {/* Background dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #B8CAE3 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* SVG with native vector ViewBox animation — 100% crisp, zero blur */}
      <svg
        width="100%"
        height="100%"
        viewBox={`${vb[0]} ${vb[1]} ${vb[2]} ${vb[3]}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full block"
      >
        <defs>
          <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0.5" stdDeviation="0.6" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* ── Base World Landmass Paths ── */}
        <g className="countries">
          {countries.map((feature: any, i: number) => {
            const india = isIndia(feature);
            return (
              <path
                key={i}
                d={pathGenerator(feature) || ''}
                fill={india && isIndiaHighlighted ? '#3686DD' : '#c5e3fe'}
                stroke="#ffffff"
                strokeWidth={0.3}
                strokeOpacity={0.35}
                className="transition-colors duration-250"
              />
            );
          })}

          {/* Interior country borders mesh overlay for crisp outline rendering */}
          {countryBorders && (
            <path
              d={pathGenerator(countryBorders as any) || ''}
              fill="none"
              stroke="#ffffff"
              strokeWidth={0.25}
              strokeOpacity={0.20}
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{ pointerEvents: 'none' }}
            />
          )}

          {/* India highlighted overlay with crisp white border when hovered */}
          {isIndiaHighlighted &&
            countries
              .filter(isIndia)
              .map((feature: any, i: number) => (
                <path
                  key={`india-top-${i}`}
                  d={pathGenerator(feature) || ''}
                  fill="#3686DD"
                  stroke="#ffffff"
                  strokeWidth={0.4}
                  style={{ pointerEvents: 'none' }}
                />
              ))}
        </g>

        {/* ── Company Location Pins inside India ── */}
        {COMPANY_LOCATIONS.map((marker) => {
          const coords = projection(marker.coordinates);
          if (!coords) return null;
          const [px, py] = coords;

          return (
            <g
              key={marker.id}
              transform={`translate(${px}, ${py})`}
              style={{
                opacity: showContent ? 1 : 0,
                transition: 'opacity 0.25s ease-in-out',
                pointerEvents: showContent ? 'auto' : 'none',
              }}
            >
              {/* White outer pin circle */}
              {/* <circle
                cx="0"
                cy="0"
                r="4.0"
                fill="#0c326b"
                stroke="#ffffff"
                strokeWidth="0.5"
                filter="url(#pin-shadow)"
              /> */}
              {/* Phoenix Logo inside pin */}
              <image
                href="/logo.png"
                x="-3.5"
                y="-3.5"
                width="7.5"
                height="7.5"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          );
        })}

        {/* ── Legacy Overlay (Desktop original vs Mobile tuned) ── */}
        <g
          style={{
            opacity: showContent ? 1 : 0,
            transition: 'opacity 0.25s ease-in-out',
            pointerEvents: 'none',
          }}
        >
          {/* Main Title: "Legacy" centered inside China region */}
          <text
            x={isMobile ? '837' : '875'}
            y={isMobile ? '208' : '224'}
            textAnchor="middle"
            fill="#125095"
            fontSize="8.5"
            fontWeight="600"
            letterSpacing="-0.3"
          >
            Legacy
          </text>

          {/* Stat 1: 20+ Eco Friendly Crematoria */}
          <g transform={`translate(${isMobile ? 802 : 840}, ${isMobile ? 220 : 242})`}>
            <text
              x="0"
              y="0"
              textAnchor="middle"
              fill="#125095"
              fontSize="6.0"
              fontWeight="900"
            >
              20+
            </text>
            <text
              x="0"
              y="3.5"
              textAnchor="middle"
              fill="#125095"
              fontSize="2.4"
              fontWeight="700"
              opacity="0.90"
            >
              Eco Friendly Crematoria
            </text>
          </g>

          {/* Vertical Divider 1 */}
          <line
            x1={isMobile ? 819.5 : 857.5}
            y1={isMobile ? 215 : 235}
            x2={isMobile ? 819.5 : 857.5}
            y2={isMobile ? 229 : 254}
            stroke="#125095"
            strokeWidth="0.2"
            strokeOpacity="0.20"
          />

          {/* Stat 2: 8+ Signature Initiatives */}
          <g transform={`translate(${isMobile ? 837 : 875}, ${isMobile ? 220 : 242})`}>
            <text
              x="0"
              y="0"
              textAnchor="middle"
              fill="#125095"
              fontSize="6.0"
              fontWeight="900"
            >
              8+
            </text>
            <text
              x="0"
              y="3.5"
              textAnchor="middle"
              fill="#125095"
              fontSize="2.4"
              fontWeight="700"
              opacity="0.90"
            >
              Signature Initiatives
            </text>
          </g>

          {/* Vertical Divider 2 */}
          <line
            x1={isMobile ? 854.5 : 892.5}
            y1={isMobile ? 215 : 235}
            x2={isMobile ? 854.5 : 892.5}
            y2={isMobile ? 229 : 254}
            stroke="#125095"
            strokeWidth="0.2"
            strokeOpacity="0.20"
          />

          {/* Stat 3: 20+ Of Purpose Driven Impact */}
          <g transform={`translate(${isMobile ? 872 : 910}, ${isMobile ? 220 : 242})`}>
            <text
              x="0"
              y="0"
              textAnchor="middle"
              fill="#125095"
              fontSize="6.0"
              fontWeight="900"
            >
              20+
            </text>
            <text
              x="0"
              y="3.5"
              textAnchor="middle"
              fill="#125095"
              fontSize="2.4"
              fontWeight="700"
              opacity="0.90"
            >
              Of Purpose Driven Impact
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}