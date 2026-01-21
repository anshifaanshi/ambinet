import React from 'react'
import HeroSection from './home/HeroSection'
import VisionSection from './home/VisionSection'
import ScrollTextAnimation from './home/ScrollTextAnimation'
import TestimonialsSection from './home/TestimonialSection'
import ScrollZoomSection from './home/ScrollZoomSection'
import Footer from './home/Footer'
function page() {
  return (
    <div>
      <HeroSection/>
      <VisionSection/>
      <ScrollTextAnimation/>
      <TestimonialsSection/>
      <ScrollZoomSection/>
      <Footer/>
    </div>
  )
}

export default page