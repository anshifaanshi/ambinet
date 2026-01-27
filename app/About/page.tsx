'use client';

import React, { useState } from 'react';
import Header from '../home/Header';
import FullscreenMenu from '../home/FullScreenMenu';
import OurStory from '../Aboutcomponents/Ourstory';
import ServicesSection from '../Aboutcomponents/ServiceSection';
import Footer from '../home/Footer';

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Fullscreen Menu */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Header - using light theme since the background is likely light */}
      <div className="absolute top-0 left-0 right-0 z-40">
        <Header onMenuClick={() => setIsMenuOpen(true)} theme="light" />
      </div>

      {/* Page Content */}
      <OurStory />
      <ServicesSection />
      <Footer/>
    </div>
  );
}

export default Page;