import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-12">
            <Logo />
            <div className="hidden lg:flex gap-8 border-l border-slate-100 pl-12">
              {['Home', 'Services', 'Pricing', 'Gallery', 'Booking', 'Contact'].map((link) => (
                <Link 
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} 
                  className="text-slate-400 hover:text-brand transition-colors text-[10px] font-black uppercase tracking-widest"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <p className="text-slate-300 text-[10px] font-black uppercase tracking-widest">
              &copy; {new Date().getFullYear()} GWM Cleaning.
            </p>
            <div className="h-4 w-[1px] bg-slate-100"></div>
            <div className="flex space-x-6 text-[10px] font-black uppercase tracking-widest text-slate-300">
              <a href="#" className="hover:text-brand transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
