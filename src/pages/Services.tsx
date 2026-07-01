import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

import { Building2, Grid2X2, Droplets, Sparkles, Brush, Waves, Users, Home, ScanLine, Construction, AlertCircle } from 'lucide-react';

const services = [
  { id: 'commercial', title: 'Commercial & Retail', description: 'Janitorial services for office buildings and retail facilities.', icon: <Building2 className="w-6 h-6 text-primary" strokeWidth={1.5} /> },
  { id: 'window', title: 'Window Cleaning', description: 'Sparkling windows to welcome your guests and customers.', icon: <Grid2X2 className="w-6 h-6 text-primary" strokeWidth={1.5} /> },
  { id: 'washroom', title: 'Washroom Specialist', description: 'Steam cleaning vapors for a truly deep sanitization.', icon: <Droplets className="w-6 h-6 text-primary" strokeWidth={1.5} /> },
  { id: 'floor', title: 'Floor Care', description: 'Exceptional floor maintenance for healthcare and corporate facilities.', icon: <Sparkles className="w-6 h-6 text-primary" strokeWidth={1.5} /> },
  { id: 'stripping', title: 'Stripping & Waxing', description: 'Restoring floors from high traffic and harsh winters.', icon: <Brush className="w-6 h-6 text-primary" strokeWidth={1.5} /> },
  { id: 'carpet', title: 'Carpet Cleaning', description: 'Care extractions to ensure longevity and aesthetic appeal.', icon: <Waves className="w-6 h-6 text-primary" strokeWidth={1.5} /> },
  { id: 'porter', title: 'Day Porter', description: 'An extra hand for high traffic times to keep things clean.', icon: <Users className="w-6 h-6 text-primary" strokeWidth={1.5} /> },
  { id: 'residential', title: 'Residential Buildings Cleaning', description: 'Professional cleaning solutions for residential properties.', icon: <Home className="w-6 h-6 text-primary" strokeWidth={1.5} /> },
  { id: 'pressure', title: 'Pressure Washing', description: 'Powerful cleaning for tough stains and exterior grime.', icon: <ScanLine className="w-6 h-6 text-primary" strokeWidth={1.5} /> },
  { id: 'construction', title: 'Post Construction', description: 'Detailed cleaning for new developments and renovations.', icon: <Construction className="w-6 h-6 text-primary" strokeWidth={1.5} /> },
  { id: 'emergency', title: 'Emergency', description: 'Rapid response teams for unexpected situations.', icon: <AlertCircle className="w-6 h-6 text-primary" strokeWidth={1.5} /> }
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="left">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">Capabilities</span>
              <h1 className="text-4xl md:text-6xl font-medium text-brand font-display tracking-tight">
                Our <span className="italic font-light">Expertise.</span>
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.05} width="100%">
                <div className="group flex flex-col items-start space-y-4 p-8 bg-white border border-slate-100 rounded-xl hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="p-3 bg-blue-50/50 rounded-lg group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-brand font-display">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
