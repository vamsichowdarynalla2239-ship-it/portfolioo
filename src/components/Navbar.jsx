import React, { useState } from 'react';
import { MagneticItem } from './TiltCard';

const Navbar = ({ onOpenResume, onOpenContact }) => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'About',    href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey',  href: '#journey' },
    { name: 'Awards',   href: '#certifications' },
    { name: 'Contact',  href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F4]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 h-14 sm:h-16 flex items-center justify-between">

          {/* Logo */}
          <MagneticItem pullStrength={0.2}>
            <a href="#hero" className="flex items-center gap-2 group">
              <span className="w-8 h-8 sm:w-9 sm:h-9 bg-ink text-cream font-serif font-black text-sm sm:text-base rounded-lg flex items-center justify-center select-none group-hover:bg-gold transition-colors duration-200 shadow-sm">
                VS
              </span>
              <span className="hidden sm:block font-mono font-bold text-xs tracking-widest text-stone-600 uppercase">
                Vamsi Satyadev
              </span>
            </a>
          </MagneticItem>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <a key={l.name} href={l.href}
                className="text-sm font-medium text-stone-500 hover:text-ink transition-colors relative group py-1">
                {l.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <MagneticItem pullStrength={0.25}>
              <button onClick={onOpenResume}
                className="btn-ghost text-xs px-4 py-2 gap-1.5 shadow-sm">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </button>
            </MagneticItem>
            <MagneticItem pullStrength={0.25}>
              <button onClick={onOpenContact}
                className="btn-ink text-xs px-5 py-2 gap-1.5 shadow-md">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Let's Talk
              </button>
            </MagneticItem>
          </div>

          {/* Mobile toggle */}
          <button className="sm:hidden p-2 text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open
              ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-x-0 top-14 z-40 bg-[#FAF8F4]/98 border-b border-stone-200 shadow-card p-6 sm:hidden">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map(l => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)}
                className="text-base font-semibold text-ink hover:text-gold transition-colors">
                {l.name}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <button onClick={() => { setOpen(false); onOpenResume(); }} className="btn-ghost text-xs px-4 py-2 flex-1 justify-center">Resume</button>
            <button onClick={() => { setOpen(false); onOpenContact(); }} className="btn-ink text-xs px-5 py-2 flex-1 justify-center">Let's Talk</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
