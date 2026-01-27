'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

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
    route: '/About',
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

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleMenuClick = (itemName: string, route: string) => {
    onClose();
    router.push(route);
    console.log(`Navigating to: ${itemName}`);
  };

  return (
    <div
      ref={menuRef}
      className={`fixed inset-0 z-50 transition-transform duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Close Button */}
        <div className="flex justify-start p-4 md:p-8 bg-white">
          <button
            onClick={onClose}
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
  );
}