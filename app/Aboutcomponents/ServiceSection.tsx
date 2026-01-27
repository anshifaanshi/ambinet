import React from 'react';
import { 
  Wind, 
  Snowflake, 
  Wrench, 
  ClipboardCheck, 
  Settings, 
  CalendarCheck,
  MessageCircle // WhatsApp icon
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { name: "AC Installation", link: "installation", desc: "Professional installation of all types of air conditioning systems for homes and businesses.", icon: <Settings className="w-10 h-10" /> },
    { name: "AC Maintenance", link: "maintenance", desc: "Regular maintenance services to keep your AC running efficiently year-round.", icon: <Wrench className="w-10 h-10" /> },
    { name: "AC Repair", link: "repair", desc: "Fast and reliable repair services for all AC brands and models across Qatar.", icon: <ClipboardCheck className="w-10 h-10" /> },
    { name: "Duct Cleaning", link: "ductcleaning", desc: "Comprehensive duct cleaning services ensuring clean air and optimal performance.", icon: <Wind className="w-10 h-10" /> },
    { name: "Cooling Solutions", link: "cooling", desc: "Customized cooling solutions designed for Qatar's extreme climate conditions.", icon: <Snowflake className="w-10 h-10" /> },
    { name: "Annual Contracts", link: "contracts", desc: "Flexible annual maintenance contracts with priority service and discounted rates.", icon: <CalendarCheck className="w-10 h-10" /> },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-8 md:px-20 relative">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold mb-16 tracking-tight">
        Our expertise team is well-versed in handling
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-6 group">
            {/* Icon Column */}
            <div className="flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>

            {/* Content Column */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold tracking-widest mb-3 uppercase">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {service.desc}
              </p>
              <a 
                href={service.link}
                className="border border-white/40 px-5 py-1.5 text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-transparent border-2 border-white p-2 rounded-full hover:scale-110 transition-transform z-40"
      >
        <MessageCircle size={32} fill="white" className="text-black" />
      </a>
    </section>
  );
};

export default ServicesSection;