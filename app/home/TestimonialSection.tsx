'use client';

import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Excellent AC maintenance service! My air conditioner runs like new. The technicians were professional and thorough. Highly recommend for anyone in Qatar.",
      feedback: "Feedback on AC Maintenance",
      author: "by Ahmed Al-Kuwari",
      delay: "0ms"
    },
    {
      quote: "Quick and reliable washing machine repair. They diagnosed the issue immediately and fixed it on the same day. Great service!",
      feedback: "Feedback on Washing Machine Repair",
      author: "by Fatima Hassan",
      delay: "200ms"
    },
    {
      quote: "Our refrigerator stopped working in the middle of summer. Ambient came the next day and fixed it perfectly. Professional service and fair pricing.",
      feedback: "Feedback on Fridge Repair",
      author: "by Mohammed & Sara Abdullah",
      delay: "400ms"
    }
  ];

  return (
    <section className="bg-[#1e3a5f] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f97316] text-xs md:text-sm uppercase tracking-[0.25em] mb-8 font-semibold">
            CLIENT TESTIMONIALS
          </p>
          
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.15] max-w-5xl mx-auto"
            style={{ fontFamily: 'serif' }}
          >
            <span className="inline-block bg-[#f97316] px-4 py-2 mr-3 font-normal">T</span>
            rusted by families and businesses across Qatar for reliable appliance solutions
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-[#2a4d7f] p-8 transform hover:-translate-y-2 transition-all duration-500"
              style={{ 
                animationDelay: testimonial.delay,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
                clipPath: `polygon(
                  1% 3%, 3% 1.5%, 6% 2%, 9% 1%, 12% 1.8%, 15% 1.2%, 18% 1.5%, 21% 1%, 24% 1.8%, 27% 1.2%, 30% 1.5%, 33% 1%, 36% 1.8%, 39% 1.2%, 42% 1.5%, 45% 1%, 48% 1.8%, 51% 1.2%, 54% 1.5%, 57% 1%, 60% 1.8%, 63% 1.2%, 66% 1.5%, 69% 1%, 72% 1.8%, 75% 1.2%, 78% 1.5%, 81% 1%, 84% 1.8%, 87% 1.2%, 90% 1.5%, 93% 1%, 96% 1.8%, 98% 2.5%,
                  99% 4%, 99.2% 7%, 99% 10%, 99.3% 13%, 99.1% 16%, 99.3% 19%, 99% 22%, 99.2% 25%, 99% 28%, 99.3% 31%, 99.1% 34%, 99.3% 37%, 99% 40%, 99.2% 43%, 99% 46%, 99.3% 49%, 99.1% 52%, 99.3% 55%, 99% 58%, 99.2% 61%, 99% 64%, 99.3% 67%, 99.1% 70%, 99.3% 73%, 99% 76%, 99.2% 79%, 99% 82%, 99.3% 85%, 99.1% 88%, 99.3% 91%, 99% 94%, 98.5% 96.5%,
                  96% 98.5%, 93% 99.2%, 90% 99%, 87% 99.5%, 84% 99.2%, 81% 99.5%, 78% 99.8%, 75% 99.3%, 72% 99.6%, 69% 99.9%, 66% 99.4%, 63% 99.7%, 60% 99.2%, 57% 99.6%, 54% 99%, 51% 99.5%, 48% 99.2%, 45% 99.6%, 42% 99%, 39% 99.5%, 36% 99.8%, 33% 99.3%, 30% 99.7%, 27% 99.1%, 24% 99.6%, 21% 99.9%, 18% 99.4%, 15% 99.8%, 12% 99.2%, 9% 99.6%, 6% 99%, 3% 99.5%, 1.5% 98%,
                  0.8% 96%, 0.5% 93%, 0.8% 90%, 0.3% 87%, 0.6% 84%, 0.2% 81%, 0.5% 78%, 0.8% 75%, 0.4% 72%, 0.7% 69%, 0.3% 66%, 0.6% 63%, 0.9% 60%, 0.5% 57%, 0.8% 54%, 0.3% 51%, 0.6% 48%, 0.2% 45%, 0.5% 42%, 0.8% 39%, 0.4% 36%, 0.7% 33%, 0.3% 30%, 0.6% 27%, 0.9% 24%, 0.5% 21%, 0.8% 18%, 0.3% 15%, 0.6% 12%, 0.2% 9%, 0.5% 6%, 0.8% 4%
                )`
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg 
                  width="56" 
                  height="56" 
                  viewBox="0 0 24 24" 
                  fill="#f97316"
                  className="opacity-70"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              {/* Quote Text */}
              <p 
                className="text-white text-lg md:text-xl leading-relaxed mb-10 font-light"
                style={{ fontFamily: 'serif', letterSpacing: '-0.01em' }}
              >
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-[#f97316]/30 pt-5">
                <p className="text-[#f97316] font-semibold text-base mb-2 tracking-wide">
                  {testimonial.feedback}
                </p>
                <p className="text-white/50 text-sm font-light italic">
                  {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}