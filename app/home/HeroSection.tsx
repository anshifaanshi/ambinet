'use client';

import { ShoppingCart, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const words = ['Excellence', 'Comfort', 'Solutions', 'Innovation', 'Quality'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <style jsx>{`
        @keyframes flip {
          0% {
            transform: rotateX(0deg);
            opacity: 1;
          }
          49% {
            transform: rotateX(90deg);
            opacity: 0;
          }
          50% {
            transform: rotateX(-90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
      {/* Orange Dot Pattern Background - 3D Random Effect */}
      <div className="absolute right-0 top-0 w-3/5 h-full overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Completely random dots with varying sizes */}
            {Array.from({ length: 300 }).map((_, i) => {
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              const radius = Math.random() * 5 + 0.5;
              const opacity = Math.random() * 0.7 + 0.3;
              
              return (
                <circle
                  key={`dot-${i}`}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r={radius}
                  fill="#f97316"
                  opacity={opacity}
                />
              );
            })}
          </g>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-black text-2xl md:text-3xl font-black tracking-tight">
            AMBIENT
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-black hover:text-orange-500 transition-colors font-semibold">HOME</a>
          <a href="#" className="text-black hover:text-orange-500 transition-colors font-semibold">ABOUT US</a>
          <a href="#" className="text-black hover:text-orange-500 transition-colors font-semibold">PEOPLE</a>
          <a href="#" className="text-black hover:text-orange-500 transition-colors font-semibold">PORTFOLIO</a>
          <a href="#" className="text-black hover:text-orange-500 transition-colors font-semibold">BLOG</a>
        </div>

        {/* Contact Button */}
        <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-full transition-colors">
          CONTACT US
        </button>

        {/* Mobile Menu */}
        <button className="md:hidden text-black">
          <Menu size={28} />
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 py-20 md:py-32 max-w-7xl">
        <h1 className="text-black text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-12 tracking-tight" style={{ fontFamily: "'Poppins', 'Montserrat', 'Arial Black', sans-serif" }}>
          Cooling
          <br />
          Solutions That
          <br />
          Deliver{' '}
          <span className="text-orange-500 inline-block min-w-[300px] perspective-1000">
            <span 
              key={currentWordIndex}
              className="inline-block animate-flip"
              style={{
                animation: 'flip 0.6s ease-in-out'
              }}
            >
              {words[currentWordIndex]}
            </span>
          </span>
        </h1>

        <p className="text-gray-700 text-2xl md:text-3xl font-normal max-w-4xl" style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}>
          We know how much <span className="font-bold text-black">cooling comfort</span> takes.
        </p>
      </div>
    </div>
  );
}