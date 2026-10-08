import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, X, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

const ContactSection = ({ isOpenModal = false, onCloseModal = () => {} }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        if (isOpenModal) onCloseModal();
      }, 2500);
    }, 1000);
  };

  const content = (
    <div className="bg-[#1C1917] text-cream rounded-3xl p-8 sm:p-12 lg:p-14 border border-stone-800 shadow-2xl relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute -right-24 -top-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase mb-3 bg-amber-500/15 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>LET'S CONNECT</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FAF8F4] font-serif leading-tight">
              Let's Build <br className="hidden sm:block" />Something Great.
            </h3>
            
            <p className="text-sm text-stone-400 mt-4 leading-relaxed font-normal">
              I'm always open to discussing software engineering opportunities, collaborative projects, or innovative AI applications.
            </p>

            {/* Contact Details List */}
            <div className="mt-8 space-y-3.5">
              
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="p-2.5 bg-amber-500/15 border border-amber-500/30 rounded-xl text-gold shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-mono font-bold text-stone-500 uppercase">EMAIL ADDRESS</p>
                    <p className="text-xs font-bold text-stone-200 truncate">{personalData.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalData.email, 'email')}
                  className="btn-ghost text-xs px-3 py-1.5 gap-1 shrink-0 border-stone-700 text-stone-300 hover:text-cream hover:bg-stone-800"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-gold" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="p-2.5 bg-amber-500/15 border border-amber-500/30 rounded-xl text-gold shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold text-stone-500 uppercase">PHONE NUMBER</p>
                    <p className="text-xs font-bold text-stone-200">{personalData.phone}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalData.phone, 'phone')}
                  className="btn-ghost text-xs px-3 py-1.5 gap-1 shrink-0 border-stone-700 text-stone-300 hover:text-cream hover:bg-stone-800"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-gold" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-stone-900/90 border border-stone-800">
                <div className="p-2.5 bg-amber-500/15 border border-amber-500/30 rounded-xl text-gold shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-stone-500 uppercase">LOCATION</p>
                  <p className="text-xs font-bold text-stone-200">{personalData.location}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-6 mt-8 border-t border-stone-800 flex items-center gap-3">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-stone-900 border border-stone-800 text-stone-400 hover:text-gold hover:border-gold/50 rounded-2xl transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-stone-900 border border-stone-800 text-stone-400 hover:text-gold hover:border-gold/50 rounded-2xl transition-all shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 bg-[#121014] p-6 sm:p-8 rounded-3xl border border-stone-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-stone-400 uppercase">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Smith"
                  className="w-full px-4 py-3 bg-stone-900/90 border border-stone-800 rounded-xl text-sm font-medium text-cream placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-stone-400 uppercase">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-3 bg-stone-900/90 border border-stone-800 rounded-xl text-sm font-medium text-cream placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-400 uppercase">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Internship / Collaboration"
                className="w-full px-4 py-3 bg-stone-900/90 border border-stone-800 rounded-xl text-sm font-medium text-cream placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-stone-400 uppercase">Message *</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-stone-900/90 border border-stone-800 rounded-xl text-sm font-medium text-cream placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className="btn-ink w-full py-4 text-xs font-mono font-bold tracking-widest flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 via-gold to-yellow-500 text-ink shadow-lg hover:brightness-110 active:scale-[0.99] transition-all"
            >
              {isSubmitting ? (
                <span>SENDING MESSAGE...</span>
              ) : submitted ? (
                <><Check className="w-4 h-4 text-ink font-bold" /><span>MESSAGE TRANSMITTED!</span></>
              ) : (
                <><Send className="w-4 h-4 text-ink" /><span>TRANSMIT MESSAGE →</span></>
              )}
            </button>

          </form>
        </div>

      </div>
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
        <div className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto">
          <button
            onClick={onCloseModal}
            className="absolute top-5 right-5 z-20 w-9 h-9 bg-stone-800 border border-stone-700 rounded-full text-stone-300 hover:text-cream hover:bg-stone-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {content}
      </div>
    </section>
  );
};

export default ContactSection;
