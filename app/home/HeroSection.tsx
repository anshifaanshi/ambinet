'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface MenuItem {
  name: string;
  route: string;
  image: string;
  color: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Home',
    route: '/',
    image: 'https://images.unsplash.com/photo-1631545806609-614d8e6bc52d?w=800&q=80',
    color: '#1e3a5f'
  },
  {
    name: 'About',
    route: '/about',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    color: '#2a4d7f'
  },
  {
    name: 'Services',
    route: '/services',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    color: '#f97316'
  },
  {
    name: 'Contact',
    route: '/contact',
    image: 'https://images.unsplash.com/photo-1635274531425-28d0271f303c?w=800&q=80',
    color: '#ea580c'
  }
];

const slides: Slide[] = [
  {
    image: 'https://i.postimg.cc/wjLZ4ssG/team-replacing-old-air-conditioner.jpg',
    title: 'AC Maintenance Services',
    subtitle: 'KEEP YOUR SPACE COOL AND COMFORTABLE WITH EXPERT AC MAINTENANCE IN QATAR.'
  },
  {
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1920&q=80',
    title: 'Washing Machine Repair',
    subtitle: 'PROFESSIONAL WASHING MACHINE REPAIR AND MAINTENANCE FOR ALL BRANDS.'
  },
  {
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=1920&q=80',
    title: 'Fridge Repair Services',
    subtitle: 'EXPERT REFRIGERATOR REPAIR AND MAINTENANCE TO KEEP YOUR FOOD FRESH.'
  }
];

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function AmbientACPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 1000);
  };

  const handleMenuClick = (itemName: string, route: string) => {
    setIsMenuOpen(false);
    router.push(route);
    console.log(`Navigating to: ${itemName}`);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full Screen Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-50 transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-start p-4 md:p-8 bg-white">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#1e3a5f] hover:bg-[#2a4d7f] transition-colors text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.name, item.route)}
                className="flex-1 flex relative overflow-hidden group border-b border-gray-200 last:border-b-0 cursor-pointer"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Background Image (1/3 left) */}
                <div 
                  className={`absolute left-0 top-0 h-full transition-all duration-700 ease-out ${
                    hoveredItem === index ? 'w-1/3 opacity-100' : 'w-0 opacity-0'
                  }`}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Colored Background (2/3 right) */}
                <div 
                  className={`absolute right-0 top-0 h-full transition-all duration-700 ease-out ${
                    hoveredItem === index ? 'w-2/3' : 'w-0'
                  }`}
                  style={{ backgroundColor: item.color }}
                />

                {/* Default Background */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    hoveredItem === index ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ 
                    backgroundColor: index === 0 ? '#ffffff' : 
                                    index === 1 ? '#f9fafb' : 
                                    index === 2 ? '#f3f4f6' : '#e5e7eb'
                  }}
                />

                {/* Text Content */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-2 md:gap-4">
                    <span 
                      className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl transition-colors duration-700 ${
                        hoveredItem === index ? 'text-white' : 'text-[#1e3a5f]'
                      }`}
                      style={{ 
                        fontFamily: "'Poppins', 'Montserrat', sans-serif",
                        fontWeight: 700,
                        letterSpacing: '0.02em'
                      }}
                    >
                      {item.name}
                    </span>
                    {hoveredItem === index && (
                      <svg 
                        width="30" 
                        height="30" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="1.5"
                        className="animate-[slideRight_0.7s_ease-out] md:w-10 md:h-10"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-6 md:py-8 bg-gray-100 text-[#1e3a5f] text-xs tracking-[0.2em] uppercase font-medium px-4">
            <button onClick={() => handleMenuClick('About', '/about')} className="hover:text-orange-500 transition-colors">ABOUT</button>
            <button onClick={() => handleMenuClick('FAQs', '/faqs')} className="hover:text-orange-500 transition-colors">FAQS</button>
            <button onClick={() => handleMenuClick('Services', '/services')} className="hover:text-orange-500 transition-colors">SERVICES</button>
            <button onClick={() => handleMenuClick('Contact', '/contact')} className="hover:text-orange-500 transition-colors">CONTACT</button>
          </div>
        </div>

        {/* Vertical Sidebar Icons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 md:gap-6 bg-white/80 py-4 md:py-6 px-2 md:px-3">
          <button className="text-[#1e3a5f] hover:text-orange-500 transition-colors" aria-label="Phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-5 md:h-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
          <button className="text-[#1e3a5f] hover:text-orange-500 transition-colors" aria-label="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-5 md:h-5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </button>
          <div className="w-px h-12 md:h-20 bg-[#1e3a5f]/30"></div>
          <span 
            className="text-[#1e3a5f] text-[8px] md:text-xs tracking-[0.3em] font-bold"
            style={{ writingMode: 'vertical-rl' }}
          >
            AMBIENT
          </span>
          <div className="w-px h-12 md:h-20 bg-[#1e3a5f]/30"></div>
          <button className="text-[#1e3a5f] hover:text-orange-500 transition-colors" aria-label="Location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-5 md:h-5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </button>
          <button className="text-[#1e3a5f] hover:text-orange-500 transition-colors" aria-label="Scroll to Top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-5 md:h-5">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 md:gap-3 text-white hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-orange-500 hover:bg-orange-600 transition-colors">
              <MenuIcon />
            </div>
            <span className="text-xs md:text-sm font-medium tracking-wider uppercase">MENU</span>
          </button>

          <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.3em]">
            AMBIENT
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => router.push('/quote')}
              className="hidden sm:inline-block px-3 md:px-6 py-2 text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-all duration-300 border border-white/50"
              style={{ 
                fontFamily: 'sans-serif',
                letterSpacing: '0.15em'
              }}
            >
              GET QUOTE
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="px-3 md:px-6 py-2 bg-orange-500 text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-orange-600 transition-all duration-300"
              style={{ 
                fontFamily: 'sans-serif',
                letterSpacing: '0.15em'
              }}
            >
              CONTACT US
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl">
            <h1 
              className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 md:mb-8 leading-[1.1] transition-all duration-1000 ${
                isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                fontFamily: "'Poppins', 'Montserrat', sans-serif",
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}
            >
              {slides[currentSlide].title}
            </h1>

            <p 
              className={`text-white text-xs md:text-sm tracking-[0.15em] mb-8 md:mb-12 max-w-xl uppercase font-light transition-all duration-1000 delay-200 ${
                isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                fontFamily: 'sans-serif',
                fontWeight: 300
              }}
            >
              {slides[currentSlide].subtitle}
            </p>

            <button 
              className={`px-6 md:px-10 py-3 md:py-4 bg-orange-500 text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-orange-600 transition-all duration-300 rounded ${
                isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                transitionDelay: '400ms',
                fontFamily: 'sans-serif',
                letterSpacing: '0.15em'
              }}
            >
              BOOK SERVICE NOW
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 md:bottom-12 left-4 md:left-8 lg:left-16 xl:left-24 flex gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 md:w-12 h-1 transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-orange-500' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 md:bottom-12 right-4 md:right-8 lg:right-16 xl:right-24 text-white text-sm">
          <span className="text-xl md:text-2xl font-light">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-white/50 mx-1 md:mx-2">/</span>
          <span className="text-white/50">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}