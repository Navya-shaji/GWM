import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Office Cleaning',
    level: 'Standard',
    requirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://gwm-cwgy.onrender.com';
      const response = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStep(4); // Success step
      } else {
        alert('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Network error. Failed to connect to server.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
          <div className="bg-white p-12 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100">
            {step < 4 && (
              <div className="flex items-center justify-between mb-12">
                {[1, 2, 3].map(s => (
                  <div key={s} className="flex flex-col items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${step >= s ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-100 text-slate-400'}`}>
                      {s}
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-widest ${step >= s ? 'text-primary' : 'text-slate-400'}`}>
                      {s === 1 ? 'Contact' : s === 2 ? 'Service' : 'Confirm'}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <form onSubmit={e => e.preventDefault()} className="space-y-6">
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm" required />
                  <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Work Email" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm" required />
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm" required />
                  <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Company" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm" />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm appearance-none">
                      <option value="Office Cleaning">Office Cleaning</option>
                      <option value="Medical Sanitation">Medical Sanitation</option>
                      <option value="Industrial/Warehouse">Industrial/Warehouse</option>
                      <option value="Residential Buildings Cleaning">Residential Buildings Cleaning</option>
                    </select>
                    <select name="level" value={formData.level} onChange={handleChange} className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary transition-all text-sm appearance-none">
                      <option value="Standard">Standard</option>
                      <option value="Premium">Premium</option>
                      <option value="Elite">Elite</option>
                    </select>
                  </div>
                  <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows={4} className="w-full px-6 py-4 bg-white border border-slate-200 rounded-lg outline-none focus:border-primary transition-all text-sm" placeholder="Special requirements?"></textarea>
                </div>
              )}

              {step === 3 && (
                <div className="text-center py-6 animate-in zoom-in duration-300">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-xl font-medium text-brand font-display mb-2">Review your request</h3>
                  <div className="bg-slate-50 p-6 border border-slate-100 text-left text-sm space-y-3 max-w-md mx-auto rounded-xl">
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Service:</strong> {formData.level} {formData.service}</p>
                    {formData.requirements && <p><strong>Notes:</strong> {formData.requirements}</p>}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="text-center py-12 animate-in zoom-in duration-300">
                  <div className="text-5xl mb-6">🎉</div>
                  <h3 className="text-2xl font-black text-brand font-display mb-4">Request Submitted Successfully!</h3>
                  <p className="text-slate-500 text-sm">Our team will contact you within 2 hours at {formData.email}.</p>
                </div>
              )}

              {step < 4 && (
                <div className="flex justify-between pt-8">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-white rounded-xl">Back</button>
                  ) : <div></div>}
                  
                  <div className="ml-auto">
                    {step < 3 ? (
                      <button type="button" onClick={() => {
                        if (step === 1 && (!formData.fullName || !formData.email || !formData.phone)) {
                          alert('Please fill in all required fields');
                          return;
                        }
                        setStep(step + 1);
                      }} className="px-8 py-3 bg-brand text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl rounded-xl">Next</button>
                    ) : (
                      <button type="button" onClick={handleSubmit} disabled={isSubmitting} className={`px-8 py-3 text-white text-[10px] font-black uppercase tracking-widest transition-all shadow-xl rounded-xl ${isSubmitting ? 'bg-slate-400' : 'bg-primary hover:bg-primary-dark'}`}>
                        {isSubmitting ? 'Submitting...' : 'Confirm'}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
