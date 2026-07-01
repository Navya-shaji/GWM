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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" aria-label="GWM Home" className="transition-transform hover:scale-105 active:scale-95">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-primary ${
                location.pathname === link.href
                  ? 'text-primary'
                  : 'text-brand/50 hover:text-brand'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/dashboard"
            className="ml-4 px-8 py-3 bg-brand text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary transition-all shadow-2xl shadow-brand/10 active:scale-95"
          >
            Portal
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-brand"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen
            ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" /></svg>
          }
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-50 px-8 py-12 space-y-6 animate-in slide-in-from-top duration-500">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={`block text-[10px] font-black uppercase tracking-[0.4em] ${
                location.pathname === link.href
                  ? 'text-primary'
                  : 'text-brand/50 hover:text-brand'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/dashboard"
            className="block pt-8 text-[10px] font-black uppercase tracking-[0.4em] text-primary"
          >
            Client Portal &rarr;
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
