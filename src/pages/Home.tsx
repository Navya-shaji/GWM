import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { Building2, Stethoscope, Leaf, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Enterprise Cleaning"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-accent/20 text-accent border border-accent/30 text-xs font-bold uppercase tracking-widest rounded-sm">
                  Est. 1991
                </span>
                <span className="text-sm font-semibold text-slate-300">Trusted Facility Management</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
                Enterprise-Grade <br />
                <span className="text-accent">Cleaning Solutions.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-medium">
                Delivering uncompromising hygiene and facility maintenance for commercial, medical, and industrial properties across the nation.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/booking"
                  className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold text-sm hover:bg-accent-hover transition-colors rounded-sm text-center shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
                >
                  Get a Custom Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors rounded-sm text-center border border-white/20"
                >
                  Explore Our Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Bar (Certifications & Stats) */}
      <section className="bg-white border-b border-slate-200 py-8 relative z-20 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-12 opacity-70 grayscale">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <div>
                <div className="text-xl font-black text-primary">26+</div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-primary" />
              <div>
                <div className="text-xl font-black text-primary">500+</div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider">Enterprise Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <div>
                <div className="text-xl font-black text-primary">OSHA</div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider">Compliant</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Leaf className="w-8 h-8 text-primary" />
              <div>
                <div className="text-xl font-black text-primary">LEED</div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider">Green Certified</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xl font-black text-primary">24/7</div>
              <div className="text-xs font-bold text-secondary uppercase tracking-wider">Support & Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-4">Comprehensive Facility Services</h2>
            <p className="text-secondary text-lg">Tailored cleaning programs designed to meet the rigorous demands of your specific industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Commercial Office', desc: 'Daily janitorial services, floor care, and deep cleaning for corporate workspaces.', icon: <Building2 className="w-8 h-8 text-accent" /> },
              { title: 'Medical & Healthcare', desc: 'Terminal cleaning and strict infection control following healthcare protocols.', icon: <Stethoscope className="w-8 h-8 text-accent" /> },
              { title: 'Green Cleaning', desc: 'Eco-friendly products and sustainable practices for LEED-certified facilities.', icon: <Leaf className="w-8 h-8 text-accent" /> },
              { title: 'Specialty Services', desc: 'Post-construction, industrial warehouse cleaning, and emergency response.', icon: <ShieldCheck className="w-8 h-8 text-accent" /> },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col group">
                  <div className="p-4 bg-slate-50 rounded-sm w-fit mb-6 group-hover:bg-accent/10 transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">{s.desc}</p>
                  <Link to="/services" className="text-accent font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Case Studies */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-4">Trusted by Industry Leaders</h2>
              <p className="text-secondary text-lg">See how we've elevated the standards for our enterprise partners.</p>
            </div>
            <Link to="/gallery" className="px-6 py-3 border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors rounded-sm whitespace-nowrap">
              View All Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="up">
              <div className="bg-slate-50 p-10 rounded-sm border border-slate-200">
                <div className="flex gap-1 text-accent mb-6">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                  ))}
                </div>
                <p className="text-lg font-medium text-primary leading-relaxed mb-8">
                  "GWM transitioned smoothly into our 200,000 sq ft facility. Their structured approach and dedicated account management have drastically improved our compliance ratings and overall employee satisfaction."
                </p>
                <div>
                  <div className="font-bold text-primary">Director of Facilities</div>
                  <div className="text-sm text-secondary">Global Tech Logistics Corp</div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-slate-50 p-10 rounded-sm border border-slate-200">
                <div className="flex gap-1 text-accent mb-6">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                  ))}
                </div>
                <p className="text-lg font-medium text-primary leading-relaxed mb-8">
                  "In the healthcare sector, precision is non-negotiable. GWM's adherence to terminal cleaning protocols and their highly trained staff make them an indispensable partner to our clinical operations."
                </p>
                <div>
                  <div className="font-bold text-primary">VP of Operations</div>
                  <div className="text-sm text-secondary">Regional Medical Group</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Ready to Upgrade Your Facility Standard?</h2>
            <p className="text-xl text-slate-300 mb-10 font-medium">
              Get a comprehensive, custom-tailored cleaning proposal for your organization within 24 hours.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-white font-bold text-base hover:bg-accent-hover transition-colors rounded-sm shadow-xl shadow-accent/20"
            >
              Get a Custom Quote Today <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
