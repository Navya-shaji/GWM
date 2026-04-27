import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* About Main Section */}
      <section className="bg-white pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <ScrollReveal direction="left">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">Our Story</span>
                  <h1 className="text-5xl md:text-[5.5rem] font-medium text-brand font-display tracking-tight leading-none">
                    About <span className="italic font-light">GWM.</span>
                  </h1>
                  <p className="text-base text-slate-400 font-light leading-relaxed max-w-md">
                    Exceptional quality janitorial services for over 26 years. 
                    Dedicated to excellence, safety, and a greener planet.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div className="space-y-4 max-w-md border-t border-slate-50 pt-10">
                  <h2 className="text-xl font-medium text-brand font-display">A Legacy of Excellence</h2>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    GWM Cleaning Services has been providing exceptional janitorial service for over 26 years. 
                    Our portfolio includes healthcare, corporate, and luxury facilities.
                  </p>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    We are proud of our committed staff who reflect our core 
                    value in customer care—the backbone of our business.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal direction="right" delay={0.3}>
              <div className="aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="/images/team.png" 
                  alt="Professional GWM Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy & Certs - Switched to White BG */}
      <section className="py-20 bg-white border-t border-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="aspect-video overflow-hidden rounded-sm shadow-lg">
                <img 
                  src="/images/hero.png" 
                  alt="Premium Office Space" 
                  className="w-full h-full object-cover grayscale-[10%]"
                />
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <ScrollReveal direction="right" delay={0.5}>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-brand font-display">Sustainability</h4>
                  <p className="text-slate-500 font-light text-xs leading-relaxed">
                    We use environmentally safe green products to reduce our carbon footprint.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.6}>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-brand font-display">Certified Quality</h4>
                  <p className="text-slate-500 font-light text-xs leading-relaxed">
                    Fully insured by WSIB and WHMIS informed, ensuring a safe and compliant environment.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
