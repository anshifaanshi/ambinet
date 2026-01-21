'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 
              className="text-3xl font-light mb-6 text-[#f97316]" 
              style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}
            >
              AMBIENT
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
              Professional appliance repair and maintenance services across Qatar. 
              Specializing in AC systems, washing machines, and refrigerators for homes and businesses.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="#facebook" 
                className="w-10 h-10 rounded-full border border-[#f97316] flex items-center justify-center hover:bg-[#f97316] transition-all"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a 
                href="#instagram" 
                className="w-10 h-10 rounded-full border border-[#f97316] flex items-center justify-center hover:bg-[#f97316] transition-all"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="#twitter" 
                className="w-10 h-10 rounded-full border border-[#f97316] flex items-center justify-center hover:bg-[#f97316] transition-all"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a 
                href="#whatsapp" 
                className="w-10 h-10 rounded-full border border-[#f97316] flex items-center justify-center hover:bg-[#f97316] transition-all"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#f97316] text-lg font-semibold mb-6 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#service-areas" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#f97316] text-lg font-semibold mb-6 tracking-wider uppercase">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#ac-maintenance" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  AC Maintenance
                </a>
              </li>
              <li>
                <a href="#ac-repair" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  AC Repair & Installation
                </a>
              </li>
              <li>
                <a href="#washing-machine" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  Washing Machine Repair
                </a>
              </li>
              <li>
                <a href="#fridge-repair" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  Refrigerator Repair
                </a>
              </li>
              <li>
                <a href="#annual-maintenance" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  Annual Maintenance Contracts
                </a>
              </li>
              <li>
                <a href="#emergency" className="text-gray-300 hover:text-[#f97316] transition-colors text-sm font-light">
                  Emergency Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#f97316] text-lg font-semibold mb-6 tracking-wider uppercase">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" className="mt-1 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-gray-300 text-sm font-light">
                  Doha, Qatar<br/>Serving All Areas of Qatar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" className="flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-gray-300 text-sm font-light">
                  +974 XXXX XXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="text-gray-300 text-sm font-light">
                  info@ambient.qa
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-[#f97316]/30 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-light text-white mb-4" style={{ fontFamily: 'serif' }}>
              Get Maintenance Reminders
            </h4>
            <p className="text-gray-300 text-sm mb-6 font-light">
              Subscribe for seasonal maintenance tips and exclusive service offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#2a4d7f] border border-[#f97316]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#f97316] rounded"
              />
              <button 
                className="px-8 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-medium transition-all rounded"
                style={{
                  clipPath: `polygon(
                    1% 3%, 3% 1.5%, 6% 2%, 9% 1%, 12% 1.8%, 15% 1.2%, 18% 1.5%, 85% 1%, 88% 1.8%, 91% 1.2%, 94% 1.5%, 97% 1%, 98.5% 2.5%,
                    99% 4%, 99.2% 7%, 99% 90%, 99.3% 93%, 98.5% 96.5%,
                    96% 98.5%, 93% 99.2%, 90% 99%, 15% 99.5%, 12% 99.2%, 9% 99.6%, 6% 99%, 3% 99.5%, 1.5% 98%,
                    0.8% 96%, 0.5% 93%, 0.8% 10%, 0.5% 6%, 0.8% 4%
                  )`
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#f97316]/30 bg-[#152e3e]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-light">
              © 2025 Ambient AC Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-[#f97316] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-[#f97316] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-[#f97316] text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}