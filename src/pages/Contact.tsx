import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Use environment variables for EmailJS credentials
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    .then((result) => {
        console.log(result.text);
        setSubmitStatus('success');
        form.current?.reset();
    }, (error) => {
        console.log(error.text);
        setSubmitStatus('error');
    }).finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <div className="flex flex-col w-full bg-white text-black min-h-[80vh]">
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-widest text-black mb-4 block">Connect</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Speak to an Expert.
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black">Office</h4>
                  <p className="text-gray-600 text-sm">123 Enterprise Blvd, Suite 400<br/>Business District, NY 10001</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black">Phone</h4>
                  <p className="text-gray-600 text-sm">1-800-GWM-CLEAN</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black">Email</h4>
                  <p className="text-gray-600 text-sm">customercare@gwmcleaningservices.com</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black">Hours</h4>
                  <p className="text-gray-600 text-sm">Mon-Fri: 8AM-8PM<br/>Sat: 9AM-5PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-12 rounded-sm border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-black mb-8">Direct Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm rounded-sm font-bold">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded-sm font-bold">
                  Oops! Something went wrong. Please try again later or email us directly.
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="user_firstname" placeholder="First Name" required className="w-full px-6 py-4 bg-white border border-gray-300 outline-none focus:border-black text-sm transition-all rounded-sm" />
                  <input type="text" name="user_lastname" placeholder="Last Name" required className="w-full px-6 py-4 bg-white border border-gray-300 outline-none focus:border-black text-sm transition-all rounded-sm" />
                </div>
                <input type="email" name="user_email" placeholder="Work Email" required className="w-full px-6 py-4 bg-white border border-gray-300 outline-none focus:border-black text-sm transition-all rounded-sm" />
                <textarea name="message" rows={4} placeholder="Message" required className="w-full px-6 py-4 bg-white border border-gray-300 outline-none focus:border-black text-sm transition-all rounded-sm resize-none"></textarea>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-black text-white font-bold text-sm hover:bg-white hover:text-black border-2 border-black transition-colors rounded-sm mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
