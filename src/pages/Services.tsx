import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  { id: 'commercial', title: 'Commercial & Retail', description: 'Janitorial services for office buildings and retail facilities.', icon: '🏢' },
  { id: 'window', title: 'Window Cleaning', description: 'Sparkling windows to welcome your guests and customers.', icon: '🪟' },
  { id: 'washroom', title: 'Washroom Specialist', description: 'Steam cleaning vapors for a truly deep sanitization.', icon: '🚿' },
  { id: 'floor', title: 'Floor Care', description: 'Exceptional floor maintenance for healthcare and corporate facilities.', icon: '✨' },
  { id: 'stripping', title: 'Stripping & Waxing', description: 'Restoring floors from high traffic and harsh winters.', icon: '🧹' },
  { id: 'carpet', title: 'Carpet Cleaning', description: 'Care extractions to ensure longevity and aesthetic appeal.', icon: '🧼' },
  { id: 'porter', title: 'Day Porter', description: 'An extra hand for high traffic times to keep things clean.', icon: '🤵' },
  { id: 'residential', title: 'Residential', description: 'Professional cleaning solutions for your home.', icon: '🏠' },
  { id: 'pressure', title: 'Pressure Washing', description: 'Powerful cleaning for tough stains and exterior grime.', icon: '🔫' },
  { id: 'construction', title: 'Post Construction', description: 'Detailed cleaning for new developments and renovations.', icon: '🏗️' },
  { id: 'emergency', title: 'Emergency', description: 'Rapid response teams for unexpected situations.', icon: '🚨' }
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
                <div className="space-y-4">
                  <div className="text-2xl">{service.icon}</div>
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
