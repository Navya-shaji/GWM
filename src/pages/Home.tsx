import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-16 overflow-hidden bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-xl">
            <ScrollReveal direction="down">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Est. 1991</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h1 className="text-5xl md:text-[5.5rem] font-medium text-brand leading-[1.1] mb-8 font-display tracking-tight">
                Hygiene That <br />
                Actually <span className="italic font-light">Inspires.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-base text-slate-400 mb-8 max-w-lg leading-relaxed font-light">
                With over 26 years of service, GWM provides advanced,
                green cleaning for commercial and medical environments.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex items-center gap-6">
                <Link
                  to="/booking"
                  className="px-10 py-4 bg-brand text-white font-bold text-sm hover:bg-primary transition-all"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/services"
                  className="text-sm font-bold text-brand hover:text-primary transition-colors flex items-center gap-2"
                >
                  Our Services &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative aspect-square w-full max-w-lg ml-auto">
              <img
                src="/images/hero.png"
                alt="Office Cleaning"
                className="w-full h-full object-cover rounded-sm grayscale-[10%]"
              />
              <div className="absolute -top-4 -left-4 -bottom-4 -right-4 border border-slate-50 -z-10"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Services - Centered Text */}
      <section className="py-20 bg-white border-t border-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Washroom Specialist', desc: 'Steam cleaning vapors for deep sanitization.', icon: '🚿' },
              { title: 'Floor Care', desc: 'Expert janitorial maintenance since 1991.', icon: '✨' },
              { title: 'Window Cleaning', desc: 'Flawless first impressions for your guests.', icon: '🪟' },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1} width="100%">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h3 className="text-xl font-medium text-brand font-display">{s.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-[240px] mx-auto">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
            <ScrollReveal direction="up" width="100%">
              <h2 className="text-4xl md:text-7xl font-medium text-brand font-display tracking-tight leading-tight">
                Safety, quality, and <br /> <span className="italic font-light">green</span> cleaning solutions.
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} width="100%">
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                We use the most advanced and safe green products. Our teams are
                fully insured by the WSIB and informed about WHMIS practices.
              </p>
            </ScrollReveal>
            <div className="flex justify-center gap-12 md:gap-20 pt-8">
              {[
                { v: '26+', l: 'Years' },
                { v: 'WSIB', l: 'Insured' },
                { v: 'WHMIS', l: 'Safety' },
              ].map((s, i) => (
                <ScrollReveal key={i} delay={0.3 + (i * 0.1)} width="fit-content">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl md:text-4xl font-display text-brand mb-1">{s.v}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">{s.l}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div className="space-y-4 text-center md:text-left">
                <p className="text-lg font-light text-brand italic leading-relaxed">
                  "We were extremely pleased with the outcome of their work and we plan to use their services again."
                </p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Retail Client</div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-4 text-center md:text-left">
                <p className="text-lg font-light text-brand italic leading-relaxed">
                  "The staff is trustworthy, reliable and dependable. They are quick to respond to requests."
                </p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Corporate Partner</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white border-t border-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-[5.5rem] font-medium text-brand font-display tracking-tight leading-[1]">
                  Refine Your <br /> <span className="italic font-light">Standard.</span>
                </h2>
                <div className="pt-2">
                  <Link
                    to="/booking"
                    className="inline-block px-10 py-4 bg-brand text-white font-bold text-sm hover:bg-primary transition-all"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative aspect-video overflow-hidden rounded-sm shadow-xl">
                <img
                  src="/images/medical.png"
                  alt="Medical cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
