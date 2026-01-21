'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function ScrollTextAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [words, setWords] = useState<
    Array<{ word: string; isColored: boolean }>
  >([]);
  
  const text =
    'Expert appliance repair and maintenance services in Qatar. We specialize in air conditioning systems, washing machine repairs, and refrigerator servicing to keep your home running smoothly all year round.';
  
  useEffect(() => {
    setWords(text.split(' ').map(word => ({ word, isColored: false })));
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight * 0.65;
      
      if (rect.top < startPoint && rect.bottom > 0) {
        const progress = Math.min(
          Math.max((startPoint - rect.top) / (windowHeight * 0.6), 0),
          1
        );
        setScrollProgress(progress);
        if (progress >= 0.98) setHasScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const finalProgress = hasScrolled ? 1 : scrollProgress;
    const coloredCount = Math.floor(finalProgress * words.length);
    setWords(prev =>
      prev.map((w, i) => ({
        ...w,
        isColored: i < coloredCount || hasScrolled
      }))
    );
  }, [scrollProgress, hasScrolled, words.length]);
  
  return (
    <section className="bg-white py-20">
      <div
        ref={containerRef}
        className="flex justify-center px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-7xl">
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold">
            {words.map((wordObj, index) => (
              <span
                key={index}
                className={`transition-colors duration-300 ${
                  wordObj.isColored ? 'text-[#1e3a5f]' : 'text-gray-300'
                }`}
              >
                {wordObj.word}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}