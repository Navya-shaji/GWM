import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { name: 'Home',     href: '/' },
  { name: 'About',    href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing',  href: '/pricing' },
  { name: 'Gallery',  href: '/gallery' },
  { name: 'Quote',    href: '/booking' },
  { name: 'Contact',  href: '/contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex flex-col">
      {/* Top Utility Bar */}
      <div className="bg-black text-white py-2 text-xs font-bold tracking-wide border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              1-800-GWM-CLEAN
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              support@gwmcleaning.com
            </span>
          </div>
          <div className="hidden md:block text-gray-300">
            Available 24/7 for Commercial Clients
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 bg-white ${scrolled ? 'shadow-sm py-3 border-b border-gray-200' : 'border-b border-gray-200 py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" aria-label="GWM Home" className="flex items-center scale-110 grayscale">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[13px] font-bold tracking-wider transition-colors py-2 border-b-2 ${
                    isActive
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-black hover:border-black'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="ml-4 flex gap-4">
              <Link
                to="/booking"
                className="px-6 py-2.5 bg-black text-white text-[13px] font-bold rounded-sm hover:bg-white hover:text-black border-2 border-black transition-colors"
              >
                Get Quote
              </Link>
              <Link
                to="/admin"
                className="px-6 py-2.5 border-2 border-black text-black text-[13px] font-bold rounded-sm hover:bg-black hover:text-white transition-colors"
              >
                Portal
              </Link>
            </div>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen
              ? <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" /></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-8 space-y-4 shadow-xl">
          {navLinks.map(link => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`block text-[14px] font-bold tracking-widest ${
                  isActive ? 'text-black underline' : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6 flex flex-col gap-4">
            <Link
              to="/booking"
              className="w-full text-center px-6 py-3 bg-black text-white border-2 border-black hover:bg-white hover:text-black text-[14px] font-bold rounded-sm transition-colors"
            >
              Get Custom Quote
            </Link>
            <Link
              to="/admin"
              className="w-full text-center px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white text-[14px] font-bold rounded-sm transition-colors"
            >
              Client Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
