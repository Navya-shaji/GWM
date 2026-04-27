import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-white py-16 border-b border-slate-50">
        <div className="container mx-auto px-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Scheduling</span>
          <h1 className="text-5xl md:text-7xl font-medium text-brand font-display tracking-tighter">
            Request a <span className="italic font-light">Quote.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-50 p-12 rounded-sm border border-slate-100">
            <div className="flex items-center justify-between mb-12">
              {[1, 2, 3].map(s => (
                <div key={s} className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black ${step >= s ? 'bg-primary text-white' : 'bg-slate-200 text-slate-400'}`}>
                    {s}
                  </div>
                  <span className={`text-[8px] font-black uppercase tracking-widest ${step >= s ? 'text-primary' : 'text-slate-400'}`}>
                    {s === 1 ? 'Contact' : s === 2 ? 'Service' : 'Confirm'}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={e => e.preventDefault()} className="space-y-6">
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm" />
                  <input type="email" placeholder="Work Email" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm" />
                  <input type="tel" placeholder="Phone" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm" />
                  <input type="text" placeholder="Company" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm" />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm appearance-none">
                      <option>Office Cleaning</option>
                      <option>Medical Sanitation</option>
                      <option>Industrial/Warehouse</option>
                    </select>
                    <select className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm appearance-none">
                      <option>Standard</option>
                      <option>Premium</option>
                      <option>Elite</option>
                    </select>
                  </div>
                  <textarea rows={4} className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm" placeholder="Special requirements?"></textarea>
                </div>
              )}

              {step === 3 && (
                <div className="text-center py-6 animate-in zoom-in duration-300">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-xl font-medium text-brand font-display mb-2">Ready to submit?</h3>
                  <p className="text-slate-500 text-xs mb-8">Our team will contact you within 2 hours.</p>
                  <div className="bg-white p-6 border border-slate-100 text-left text-xs space-y-2">
                    <p><strong>Service:</strong> Premium Office Cleaning</p>
                    <p><strong>Client:</strong> John Doe (ACME)</p>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-8">
                {step > 1 && (
                  <button onClick={() => setStep(step - 1)} className="px-6 py-3 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-white">Back</button>
                )}
                <div className="ml-auto">
                  {step < 3 ? (
                    <button onClick={() => setStep(step + 1)} className="px-8 py-3 bg-brand text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl">Next</button>
                  ) : (
                    <button className="px-8 py-3 bg-primary text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary-dark shadow-xl">Confirm</button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
