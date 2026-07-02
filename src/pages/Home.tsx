import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { Building2, Stethoscope, Leaf, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Enterprise Cleaning"
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-3 mb-6 drop-shadow-md">
                <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-sm">
                  Est. 1991
                </span>
                <span className="text-sm font-bold tracking-widest text-white uppercase" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>Trusted Facility Management</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6"
                style={{ textShadow: '0 4px 16px rgba(0,0,0,0.8)' }}
              >
                Enterprise-Grade <br />
                Cleaning Solutions.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p 
                className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-medium"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
              >
                Delivering uncompromising hygiene and facility maintenance for commercial, medical, and industrial properties across the nation.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/booking"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-sm hover:bg-black hover:text-white border-2 border-white transition-colors rounded-sm text-center flex items-center justify-center gap-2"
                >
                  Get a Custom Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 bg-black text-white font-bold text-sm hover:bg-white hover:text-black transition-colors rounded-sm text-center border-2 border-white"
                >
                  Explore Our Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Bar (Certifications & Stats) */}
      <section className="bg-white border-b border-gray-200 py-8 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-black" />
              <div>
                <div className="text-xl font-black text-black">26+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-black" />
              <div>
                <div className="text-xl font-black text-black">500+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Enterprise Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-black" />
              <div>
                <div className="text-xl font-black text-black">OSHA</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Compliant</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Leaf className="w-8 h-8 text-black" />
              <div>
                <div className="text-xl font-black text-black">LEED</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Green Certified</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xl font-black text-black">24/7</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Support & Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-4">Comprehensive Facility Services</h2>
            <p className="text-gray-600 text-lg">Tailored cleaning programs designed to meet the rigorous demands of your specific industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Commercial Office', desc: 'Daily janitorial services, floor care, and deep cleaning for corporate workspaces.', icon: <Building2 className="w-8 h-8 text-black" /> },
              { title: 'Medical & Healthcare', desc: 'Terminal cleaning and strict infection control following healthcare protocols.', icon: <Stethoscope className="w-8 h-8 text-black" /> },
              { title: 'Green Cleaning', desc: 'Eco-friendly products and sustainable practices for LEED-certified facilities.', icon: <Leaf className="w-8 h-8 text-black" /> },
              { title: 'Specialty Services', desc: 'Post-construction, industrial warehouse cleaning, and emergency response.', icon: <ShieldCheck className="w-8 h-8 text-black" /> },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-black transition-colors h-full flex flex-col group">
                  <div className="p-4 bg-gray-100 rounded-sm w-fit mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                    {React.cloneElement(s.icon, { className: 'w-8 h-8 transition-colors group-hover:text-white text-black' })}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{s.desc}</p>
                  <Link to="/services" className="text-black font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Case Studies */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-4">Trusted by Industry Leaders</h2>
              <p className="text-gray-600 text-lg">See how we've elevated the standards for our enterprise partners.</p>
            </div>
            <Link to="/gallery" className="px-6 py-3 border-2 border-black text-black font-bold text-sm hover:bg-black hover:text-white transition-colors rounded-sm whitespace-nowrap">
              View All Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="up">
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-200">
                <div className="flex gap-1 text-black mb-6">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                  ))}
                </div>
                <p className="text-lg font-medium text-black leading-relaxed mb-8">
                  "GWM transitioned smoothly into our 200,000 sq ft facility. Their structured approach and dedicated account management have drastically improved our compliance ratings and overall employee satisfaction."
                </p>
                <div>
                  <div className="font-bold text-black">Director of Facilities</div>
                  <div className="text-sm text-gray-500">Global Tech Logistics Corp</div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-gray-50 p-10 rounded-sm border border-gray-200">
                <div className="flex gap-1 text-black mb-6">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                  ))}
                </div>
                <p className="text-lg font-medium text-black leading-relaxed mb-8">
                  "In the healthcare sector, precision is non-negotiable. GWM's adherence to terminal cleaning protocols and their highly trained staff make them an indispensable partner to our clinical operations."
                </p>
                <div>
                  <div className="font-bold text-black">VP of Operations</div>
                  <div className="text-sm text-gray-500">Regional Medical Group</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/medical.png"
            alt="Medical Cleaning"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Ready to Upgrade Your Facility Standard?</h2>
            <p className="text-xl text-gray-300 mb-10 font-medium">
              Get a comprehensive, custom-tailored cleaning proposal for your organization within 24 hours.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold text-base hover:bg-black hover:text-white border-2 border-white transition-colors rounded-sm"
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
