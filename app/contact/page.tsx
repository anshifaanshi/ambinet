'use client';

import React, { useState } from 'react';
import Header from '../home/Header';
import FullscreenMenu from '../home/FullScreenMenu';
import { MessageCircle } from 'lucide-react';
import Footer from '../home/Footer';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Fullscreen Menu */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Header - using dark theme since the background is dark */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header onMenuClick={() => setIsMenuOpen(true)} theme="dark" />
      </div>

      {/* Page Content */}
      <div className="bg-[#0f0f0f] text-white font-sans min-h-screen py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading - Matches the heavyweight bold font */}
          <h1 className="text-6xl md:text-8xl font-black mb-24 tracking-tighter">
            Get In Touch
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-12">
              <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
              
              <div className="flex items-start">
                <span className="text-xs font-bold tracking-[0.2em] text-white uppercase w-24 pt-2">PHONE</span>
                <div className="flex-1 border-b border-white/20 pb-2">
                  <a href="tel:+97470073765" className="text-lg hover:text-gray-400 transition-colors">
                    +974 7007 3765
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-xs font-bold tracking-[0.2em] text-white uppercase w-24 pt-2">E-MAIL</span>
                <div className="flex-1 border-b border-white/20 pb-2">
                  <a href="mailto:info@ambient.qa" className="text-lg hover:text-gray-400 transition-colors">
                    info@ambient.qa
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-xs font-bold tracking-[0.2em] text-white uppercase w-24 pt-2">OFFICE</span>
                <div className="flex-1">
                  <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                    Office 305, 3rd Floor, Abdul Jaleel Abdul Ghani Building, Old Airport Road, Doha, State of Qatar
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Social/Alternative Contact */}
            <div className="flex flex-col justify-start">
              <h3 className="text-2xl font-bold mb-8">Connect With Us</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Our expert technicians are available 24/7 to assist you with all your AC maintenance and cooling needs across Qatar.
              </p>
              
              <div className="flex flex-col space-y-6">
                <a href="/services" className="group flex items-center justify-between border border-white/20 p-6 hover:bg-white hover:text-black transition-all">
                  <span className="font-bold tracking-widest uppercase text-sm">Our Services</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </a>
                <a href="https://wa.me/97470073765" className="group flex items-center justify-between border border-white/20 p-6 hover:bg-white hover:text-black transition-all">
                  <span className="font-bold tracking-widest uppercase text-sm">Chat on WhatsApp</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </a>
                <a href="/quote" className="group flex items-center justify-between border border-white/20 p-6 hover:bg-white hover:text-black transition-all">
                  <span className="font-bold tracking-widest uppercase text-sm">Request Quote</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/97470073765" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-50"
        >
          <div className="bg-transparent border-2 border-white rounded-full p-2 hover:scale-110 transition-transform">
            <MessageCircle size={32} fill="white" className="text-black" />
          </div>
        </a>
        
      </div>
      <Footer/>
    </>
  );
};

export default Contact;