import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-white py-16 border-b border-slate-50">
        <div className="container mx-auto px-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Connect</span>
          <h1 className="text-5xl md:text-7xl font-medium text-brand font-display tracking-tighter">
            Speak to an <span className="italic font-light">Expert.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Office</h4>
                  <p className="text-slate-500 text-sm">123 Business Ave, Suite 456<br/>Cityville, ST 12345</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Phone</h4>
                  <p className="text-slate-500 text-sm">+1 (234) 567-890</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Email</h4>
                  <p className="text-slate-500 text-sm">info@gwmcleaningservices.com</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Hours</h4>
                  <p className="text-slate-500 text-sm">Mon-Fri: 8AM-8PM<br/>Sat: 9AM-5PM</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-sm border border-slate-100">
              <h2 className="text-2xl font-medium text-brand font-display mb-8">Direct Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary text-sm transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary text-sm transition-all" />
                </div>
                <input type="email" placeholder="Work Email" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary text-sm transition-all" />
                <textarea rows={4} placeholder="Message" className="w-full px-6 py-4 bg-white border border-slate-100 outline-none focus:border-primary text-sm transition-all"></textarea>
                <button className="w-full py-4 bg-brand text-white font-bold text-sm hover:bg-primary transition-all shadow-xl mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
