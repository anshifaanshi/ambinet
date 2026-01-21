'use client'
import React from 'react';

export default function VisionSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div className="pt-0 md:pt-8">
            <p className="text-gray-600 text-xs md:text-sm uppercase tracking-[0.2em] mb-4 font-medium">
              DISCOVER OUR SERVICES
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 leading-[1.1]" style={{ fontFamily: 'serif' }}>
              Complete Appliance Solutions for Qatar
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5 font-light">
              At Ambient, we specialize in comprehensive appliance repair and maintenance services. 
              From air conditioning systems that keep your spaces comfortable, to washing machines 
              that handle your daily laundry needs, and refrigerators that preserve your food - 
              we ensure all your essential appliances run efficiently year-round.
            </p>
            
           
            
            <button className="relative inline-flex items-center gap-3 px-8 py-4 bg-[#1e3a5f] hover:bg-[#2a4d7f] text-white text-sm tracking-wider uppercase font-medium transition-all duration-300 overflow-visible group" style={{ clipPath: 'url(#rough-clip)' }}>
              {/* Rough torn paper edge effect */}
              <svg width="0" height="0">
                <defs>
                  <clipPath id="rough-clip" clipPathUnits="objectBoundingBox">
                    <path d="M 0.015,0.08 
                             L 0.02,0.055 
                             L 0.03,0.025 
                             L 0.045,0.015 
                             L 0.06,0.008 
                             L 0.08,0.012 
                             L 0.11,0.018 
                             L 0.14,0.01 
                             L 0.17,0.015 
                             L 0.20,0.022 
                             L 0.23,0.015 
                             L 0.26,0.008 
                             L 0.29,0.015 
                             L 0.32,0.02 
                             L 0.35,0.012 
                             L 0.38,0.018 
                             L 0.41,0.01 
                             L 0.44,0.015 
                             L 0.47,0.02 
                             L 0.50,0.015 
                             L 0.53,0.01 
                             L 0.56,0.018 
                             L 0.59,0.012 
                             L 0.62,0.02 
                             L 0.65,0.015 
                             L 0.68,0.01 
                             L 0.71,0.018 
                             L 0.74,0.012 
                             L 0.77,0.015 
                             L 0.80,0.02 
                             L 0.83,0.015 
                             L 0.86,0.01 
                             L 0.89,0.018 
                             L 0.92,0.022 
                             L 0.94,0.015 
                             L 0.96,0.025 
                             L 0.975,0.045 
                             L 0.985,0.07 
                             L 0.99,0.095 
                             L 0.988,0.13 
                             L 0.992,0.165 
                             L 0.985,0.20 
                             L 0.99,0.235 
                             L 0.988,0.27 
                             L 0.992,0.305 
                             L 0.985,0.34 
                             L 0.99,0.375 
                             L 0.988,0.41 
                             L 0.992,0.445 
                             L 0.985,0.48 
                             L 0.99,0.515 
                             L 0.988,0.55 
                             L 0.992,0.585 
                             L 0.985,0.62 
                             L 0.99,0.655 
                             L 0.988,0.69 
                             L 0.992,0.725 
                             L 0.985,0.76 
                             L 0.99,0.795 
                             L 0.988,0.83 
                             L 0.982,0.86 
                             L 0.975,0.885 
                             L 0.965,0.91 
                             L 0.95,0.93 
                             L 0.93,0.95 
                             L 0.91,0.965 
                             L 0.89,0.975 
                             L 0.87,0.982 
                             L 0.84,0.988 
                             L 0.81,0.992 
                             L 0.78,0.985 
                             L 0.75,0.99 
                             L 0.72,0.985 
                             L 0.69,0.992 
                             L 0.66,0.988 
                             L 0.63,0.985 
                             L 0.60,0.99 
                             L 0.57,0.988 
                             L 0.54,0.992 
                             L 0.51,0.985 
                             L 0.48,0.99 
                             L 0.45,0.988 
                             L 0.42,0.992 
                             L 0.39,0.985 
                             L 0.36,0.99 
                             L 0.33,0.985 
                             L 0.30,0.992 
                             L 0.27,0.988 
                             L 0.24,0.985 
                             L 0.21,0.99 
                             L 0.18,0.988 
                             L 0.15,0.992 
                             L 0.12,0.985 
                             L 0.09,0.978 
                             L 0.07,0.97 
                             L 0.05,0.955 
                             L 0.035,0.935 
                             L 0.022,0.91 
                             L 0.015,0.88 
                             L 0.01,0.85 
                             L 0.008,0.82 
                             L 0.012,0.79 
                             L 0.008,0.76 
                             L 0.012,0.73 
                             L 0.008,0.70 
                             L 0.012,0.67 
                             L 0.008,0.64 
                             L 0.012,0.61 
                             L 0.008,0.58 
                             L 0.012,0.55 
                             L 0.008,0.52 
                             L 0.012,0.49 
                             L 0.008,0.46 
                             L 0.012,0.43 
                             L 0.008,0.40 
                             L 0.012,0.37 
                             L 0.008,0.34 
                             L 0.012,0.31 
                             L 0.008,0.28 
                             L 0.012,0.25 
                             L 0.008,0.22 
                             L 0.012,0.19 
                             L 0.008,0.16 
                             L 0.012,0.13 
                             L 0.015,0.10 Z" />
                  </clipPath>
                </defs>
              </svg>
              
              <span className="relative z-10">View All Services</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://i.postimg.cc/wjLZ4ssG/team-replacing-old-air-conditioner.jpg" 
                alt="Professional appliance repair services"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1e3a5f] rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#2a4d7f] rounded-lg -z-10"></div>
              <div className="absolute top-1/2 -right-8 w-20 h-20 bg-[#f97316] rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}