import React from 'react';
import { ArrowUp, FileText, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

const Footer = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer className="pt-16 pb-20 border-t border-stone-200/90 relative overflow-hidden bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-stone-200">
          
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-8 h-8 bg-ink text-cream font-serif font-black text-xs rounded-lg flex items-center justify-center select-none shadow-sm">
                VS
              </span>
              <span className="font-serif font-black text-2xl sm:text-3xl text-ink tracking-tight">
                Nalla Vamsi Satyadev
              </span>
            </div>
            <p className="text-sm font-normal text-stone-500 max-w-md mt-1 leading-relaxed">
              Information Technology Student @ GMRIT &amp; Full-Stack Engineer crafting thoughtful, responsive web applications &amp; AI tools.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenResume}
              className="btn-ghost text-xs px-4 py-2.5 flex items-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-gold" />
              <span>Resume</span>
            </button>

            <button
              onClick={onOpenContact}
              className="btn-ink text-xs px-5 py-2.5 flex items-center gap-1.5 shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-white border border-stone-200 text-stone-400 hover:text-ink hover:border-stone-400 rounded-full transition-all shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400">
          <p>© {new Date().getFullYear()} Nalla Vamsi Satyadev. Built with precision.</p>
          
          <div className="flex items-center gap-5">
            <a 
              href={personalData.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5 inline" /> LinkedIn
            </a>
            <a 
              href={personalData.github} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5 inline" /> GitHub
            </a>
            <a 
              href={`mailto:${personalData.email}`}
              className="hover:text-gold transition-colors"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
