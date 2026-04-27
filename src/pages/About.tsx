import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* About Main Section - Interesting Asymmetric Grid */}
      <section className="bg-white pt-24 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal direction="left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-primary"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Our Legacy</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-medium text-brand font-display tracking-tighter leading-none">
                    Quality <br/>
                    Without <br/>
                    <span className="italic font-light">Compromise.</span>
                  </h1>
                  <p className="text-xl text-slate-400 font-light leading-relaxed max-w-md">
                    GWM Cleaning Services has defined excellence in janitorial solutions for over 26 years.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div className="space-y-8 max-w-md border-t border-slate-100 pt-12">
                  <h2 className="text-2xl font-medium text-brand font-display">A Legacy of Excellence</h2>
                  <div className="space-y-6 text-slate-500 font-light text-base leading-relaxed">
                    <p>
                      Since 1991, we have served healthcare, corporate, and luxury residential clients with a 
                      unwavering commitment to hygiene and professional care.
                    </p>
                    <p>
                      Our goal is simple: to provide an impeccable service tailored to your specific 
                      needs. Our staff are the backbone of our business, reflecting our core 
                      value in customer care.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-7 relative">
              <ScrollReveal direction="right" delay={0.3}>
                <div className="relative group">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                    <img 
                      src="/images/team.png" 
                      alt="Professional GWM Team" 
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-10 -left-10 bg-brand text-white p-12 shadow-2xl rounded-sm hidden xl:block">
                    <div className="text-5xl font-display mb-2">26+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary">Years of Service</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Certs - Interactive Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-sm shadow-2xl group">
                  <img 
                    src="/images/hero.png" 
                    alt="Premium Office Space" 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-primary -z-10"></div>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 gap-12">
              <ScrollReveal direction="right" delay={0.5}>
                <div className="space-y-4 p-8 bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 border-l-4 border-primary">
                  <h4 className="text-2xl font-medium text-brand font-display">Sustainability</h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    We believe in doing our part to reduce the carbon footprint, which is why we pride 
                    ourselves on using environmentally safe green products in all our operations.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.6}>
                <div className="space-y-4 p-8 bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 border-l-4 border-brand">
                  <h4 className="text-2xl font-medium text-brand font-display">Certified Quality</h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    Fully insured by WSIB and WHMIS informed, ensuring a safe and compliant working 
                    environment for every member of our staff and every client we serve.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/[0.02] -skew-x-12 translate-x-1/2 -z-0"></div>
      </section>
    </div>
  );
};

export default About;
