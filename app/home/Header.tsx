'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

interface HeaderProps {
  onMenuClick: () => void;
  theme?: 'light' | 'dark';
}

export default function Header({ onMenuClick, theme = 'dark' }: HeaderProps) {
  const router = useRouter();
  const isDark = theme === 'dark';

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
      <button 
        onClick={onMenuClick}
        className={`flex items-center gap-2 md:gap-3 ${isDark ? 'text-white' : 'text-gray-900'} hover:opacity-80 transition-opacity`}
      >
        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-orange-500 hover:bg-orange-600 transition-colors">
          <MenuIcon />
        </div>
        <span className="text-xs md:text-sm font-medium tracking-wider uppercase">MENU</span>
      </button>

      <div className={`${isDark ? 'text-white' : 'text-gray-900'} text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.3em]`}>
        AMBIENT
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button 
          onClick={() => router.push('/quote')}
          className={`hidden sm:inline-block px-3 md:px-6 py-2 ${
            isDark ? 'text-white border-white/50 hover:bg-white/10' : 'text-gray-900 border-gray-900/50 hover:bg-gray-900/10'
          } text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 border`}
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
  );
}