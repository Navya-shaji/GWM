import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white min-h-[70vh]">
      <section className="bg-white py-16 border-b border-slate-50">
        <div className="container mx-auto px-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Investment</span>
          <h1 className="text-5xl md:text-7xl font-medium text-brand font-display tracking-tighter">
            Transparent <span className="italic font-light">Value.</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-slate-50 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="relative max-w-3xl mx-auto bg-white p-12 md:p-20 border border-slate-100 rounded-2xl shadow-2xl shadow-slate-200/50 space-y-8 overflow-hidden transition-all duration-300 hover:shadow-slate-200/70">
            {/* Premium top accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary to-brand"></div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-brand font-display">
              Tailored Pricing for Your Business
            </h2>
            <p className="text-slate-500 font-light leading-relaxed max-w-xl mx-auto text-lg">
              Every facility has unique requirements. Rather than one-size-fits-all pricing, we provide customized, competitive quotes based on a thorough assessment of your exact needs.
            </p>
            <div className="pt-8">
              <Link 
                to="/booking" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand text-white font-bold text-sm tracking-widest uppercase hover:bg-primary transition-all duration-300 rounded-xl shadow-xl hover:shadow-primary/30 hover:-translate-y-1 group"
              >
                Request a Bespoke Quote
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
