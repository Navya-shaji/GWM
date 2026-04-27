import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-10 hidden lg:block"></div>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="max-w-xl">
            <ScrollReveal direction="down">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-primary"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Est. 1991</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.1}>
              <h1 className="text-6xl md:text-[6.5rem] font-medium text-brand leading-[1.05] mb-10 font-display tracking-tight">
                Hygiene That <br/>
                Actually <span className="italic font-light">Inspires.</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-lg text-slate-400 mb-12 max-w-lg leading-relaxed font-light">
                With over 26 years of service, GWM provides advanced, 
                green cleaning for commercial and medical environments.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex items-center gap-8">
                <Link 
                  to="/booking" 
                  className="group relative px-12 py-5 overflow-hidden bg-brand text-white font-bold text-sm transition-all"
                >
                  <span className="relative z-10">Request a Quote</span>
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </Link>
                <Link 
                  to="/services" 
                  className="text-sm font-bold text-brand hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  Our Services 
                  <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative group">
              <div className="relative z-10 overflow-hidden aspect-[4/5] rounded-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="/images/hero.png" 
                  alt="Office Cleaning" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-64 h-64 border border-slate-100 -z-10 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 -z-10 rounded-full blur-3xl"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Services - Interactive Cards */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Washroom Specialist', desc: 'Steam cleaning vapors for deep sanitization.', icon: '🚿' },
              { title: 'Floor Care', desc: 'Expert janitorial maintenance since 1991.', icon: '✨' },
              { title: 'Window Cleaning', desc: 'Flawless first impressions for your guests.', icon: '🪟' },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1} width="100%">
                <div className="flex flex-col items-center text-center space-y-6 group p-8 hover:bg-slate-50 transition-all duration-500 rounded-sm">
                  <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-500 grayscale group-hover:grayscale-0">{s.icon}</div>
                  <h3 className="text-2xl font-medium text-brand font-display">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] mx-auto font-light">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Overlapping Philosophy Section - Interesting Layout */}
      <section className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-video bg-white shadow-2xl p-4 rounded-sm rotate-[-2deg] transition-transform hover:rotate-0 duration-700">
                  <img src="/images/medical.png" alt="Medical Cleaning" className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="absolute -bottom-12 -right-12 aspect-square w-64 bg-brand shadow-2xl p-4 rotate-[4deg] transition-transform hover:rotate-0 duration-700 hidden lg:block">
                  <img src="/images/team.png" alt="Our Team" className="w-full h-full object-cover rounded-sm" />
                </div>
              </div>
            </ScrollReveal>
            
            <div className="space-y-10">
              <ScrollReveal direction="right" delay={0.2}>
                <h2 className="text-5xl md:text-7xl font-medium text-brand font-display tracking-tight leading-tight">
                  Safety, quality, and <br/> <span className="italic font-light">green</span> solutions.
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3}>
                <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
                  We use the most advanced and safe green products. Our teams are 
                  fully insured by the WSIB and informed about WHMIS practices.
                </p>
              </ScrollReveal>
              <div className="flex gap-12 pt-6">
                {[
                  { v: '26+', l: 'Years' },
                  { v: 'WSIB', l: 'Insured' },
                  { v: 'WHMIS', l: 'Safety' },
                ].map((s, i) => (
                  <ScrollReveal key={i} delay={0.4 + (i * 0.1)}>
                    <div className="text-center border-l border-slate-200 pl-8 first:border-0 first:pl-0">
                      <div className="text-3xl font-display text-brand mb-1">{s.v}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">{s.l}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Large Quote Style */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal direction="up">
            <div className="text-center space-y-16">
              <div className="text-primary text-8xl font-display opacity-20 leading-none">"</div>
              <p className="text-4xl md:text-5xl font-light text-brand italic leading-tight font-display tracking-tight">
                The staff is trustworthy, reliable and dependable. They are quick to respond to requests and have made themselves available with very little notice.
              </p>
              <div className="space-y-2">
                <div className="h-px w-12 bg-primary mx-auto mb-6"></div>
                <div className="text-[12px] font-black uppercase tracking-[0.5em] text-brand">Corporate Partner</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Full Bleed Style */}
      <section className="py-0 bg-brand overflow-hidden group">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-20 lg:p-40 flex flex-col justify-center space-y-10 order-2 lg:order-1">
            <ScrollReveal direction="left">
              <h2 className="text-6xl md:text-8xl font-medium text-white font-display tracking-tight leading-[0.9]">
                Refine Your <br/> <span className="italic font-light text-primary">Standard.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <Link 
                to="/booking" 
                className="inline-block px-16 py-8 bg-white text-brand font-bold text-xl hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
              >
                Request a Quote
              </Link>
            </ScrollReveal>
          </div>
          
          <div className="relative min-h-[60vh] lg:min-h-full overflow-hidden order-1 lg:order-2">
            <img 
              src="/images/before-after.png" 
              alt="Impeccable Cleaning Result" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand/20 mix-blend-multiply group-hover:bg-brand/10 transition-colors"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
