import React from 'react';

const OurStory = () => {
  return (
    <section className="w-full font-sans">
      {/* Top Image Section */}
      <div 
        className="relative h-[300px] md:h-[450px] w-full flex items-center px-8 md:px-16 lg:px-24"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://i.postimg.cc/LXTZ18QF/checking-conditioner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase">
          Our Story
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-[#111111] text-white py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
            Ambient has made a name for itself as a leading AC maintenance brand signifying quality & reliability, 
            be it for Residential, Commercial, Industrial, or Emergency cooling solutions across Qatar.
          </p>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-12 font-light">
            Endowed with an in-depth knowledge of HVAC systems and keen awareness of Qatar's unique climate challenges 
            for over 20 years, our founders decided to move forward from conventional AC services 
            to explore more innovative cooling solutions. Hence Ambient was founded.
          </p>
          
          <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">
            Our expertise team is well-versed in handling
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurStory;