import React, { useState, useEffect } from 'react';

const Pricing: React.FC = () => {
  const [sqft, setSqft] = useState(1000);
  const [frequency, setFrequency] = useState('weekly');
  const [tier, setTier] = useState('standard');
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    let baseRate = 0.15;
    if (tier === 'premium') baseRate = 0.25;
    if (tier === 'elite') baseRate = 0.40;

    let multiplier = 1;
    if (frequency === 'daily') multiplier = 0.8;
    if (frequency === 'bi-weekly') multiplier = 1.1;
    if (frequency === 'one-time') multiplier = 1.5;

    setEstimate(Math.round(sqft * baseRate * multiplier));
  }, [sqft, frequency, tier]);

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-white py-16 border-b border-slate-50">
        <div className="container mx-auto px-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Investment</span>
          <h1 className="text-5xl md:text-7xl font-medium text-brand font-display tracking-tighter">
            Transparent <span className="italic font-light">Value.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-slate-50 p-10 border border-slate-100">
              <h2 className="text-2xl font-medium text-brand font-display mb-10">Calculator</h2>
              
              <div className="space-y-10">
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Area: <span className="text-primary">{sqft.toLocaleString()} Sq. Ft.</span></label>
                  <input 
                    type="range" min="500" max="50000" step="500"
                    value={sqft} onChange={(e) => setSqft(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Service Tier</label>
                    <select value={tier} onChange={(e) => setTier(e.target.value)} className="w-full bg-white border border-slate-100 p-3 text-xs outline-none">
                      <option value="standard">Standard</option>
                      <option value="premium">Premium</option>
                      <option value="elite">Elite</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Frequency</label>
                    <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full bg-white border border-slate-100 p-3 text-xs outline-none">
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="bi-weekly">Bi-weekly</option>
                      <option value="one-time">One-time</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Monthly Estimate</span>
                <div className="text-7xl md:text-8xl font-medium text-brand font-display tracking-tighter">
                  ${estimate.toLocaleString()}
                </div>
              </div>
              <p className="text-slate-400 font-light text-sm max-w-sm leading-relaxed">
                Estimated pricing for professional hygiene services.
              </p>
              <button className="px-8 py-4 bg-brand text-white font-bold text-sm hover:bg-primary transition-all">
                Get Bespoke Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
