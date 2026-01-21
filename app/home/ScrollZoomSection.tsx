'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ScrollZoomSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress when section enters viewport
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const progress = Math.min(Math.max((windowHeight - sectionTop) / (windowHeight + sectionHeight), 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale based on scroll progress (from 0.1 to 1.5 for full coverage)
  const scale = 0.1 + (scrollProgress * 1.4);
  const opacity = scrollProgress;

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[150vh] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Image that zooms in */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
        }}
      >
        <img 
          src="https://i.postimg.cc/wjLZ4ssG/team-replacing-old-air-conditioner.jpg"
          alt="Professional appliance repair services"
          className="w-full h-full min-h-screen min-w-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{
          opacity: scrollProgress > 0.3 ? (scrollProgress - 0.3) / 0.7 : 0,
          transform: `translateY(${20 - scrollProgress * 20}px)`,
          transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
        }}
      >
        {/* Badge */}
        <div className="inline-block mb-6">
          <div 
            className="px-6 py-3 bg-[#f97316] text-white text-base font-bold rounded-full shadow-2xl"
            style={{ 
              clipPath: `polygon(
                2% 1%, 5% 0.5%, 10% 1%, 15% 0.8%, 20% 1.2%, 25% 0.5%, 30% 1%, 35% 0.8%, 40% 1.2%, 45% 0.5%, 50% 1%, 55% 0.8%, 60% 1.2%, 65% 0.5%, 70% 1%, 75% 0.8%, 80% 1.2%, 85% 0.5%, 90% 1%, 95% 0.8%, 98% 1.5%,
                99% 5%, 99.5% 10%, 99% 15%, 99.5% 20%, 99% 25%, 99.5% 30%, 99% 35%, 99.5% 40%, 99% 45%, 99.5% 50%, 99% 55%, 99.5% 60%, 99% 65%, 99.5% 70%, 99% 75%, 99.5% 80%, 99% 85%, 99.5% 90%, 99% 95%,
                98% 98.5%, 95% 99.2%, 90% 99%, 85% 99.5%, 80% 99%, 75% 99.2%, 70% 99%, 65% 99.5%, 60% 99%, 55% 99.2%, 50% 99%, 45% 99.5%, 40% 99%, 35% 99.2%, 30% 99%, 25% 99.5%, 20% 99%, 15% 99.2%, 10% 99%, 5% 99.5%, 2% 98.5%,
                1% 95%, 0.5% 90%, 1% 85%, 0.5% 80%, 1% 75%, 0.5% 70%, 1% 65%, 0.5% 60%, 1% 55%, 0.5% 50%, 1% 45%, 0.5% 40%, 1% 35%, 0.5% 30%, 1% 25%, 0.5% 20%, 1% 15%, 0.5% 10%, 1% 5%
              )`
            }}
          >
            Trusted Throughout Qatar
          </div>
        </div>

        {/* Main Heading */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 drop-shadow-2xl font-semibold"
          style={{ 
            fontFamily: 'serif',
            textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
          }}
        >
          Your <em className="font-light italic">trusted partner</em> for comprehensive
          appliance <em className="font-light italic">maintenance and repair</em> services across Qatar:
          keeping your AC, washing machines, and <em className="font-light italic">refrigerators</em> running
          perfectly all year round.
        </h2>
      </div>

      {/* Scroll indicator at bottom */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{
          opacity: scrollProgress < 0.8 ? 1 - scrollProgress : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div 
            className="w-1 h-2 bg-white rounded-full animate-bounce"
          ></div>
        </div>
      </div>
    </section>
  );
}