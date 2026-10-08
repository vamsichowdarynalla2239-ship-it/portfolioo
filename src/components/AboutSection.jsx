import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TiltCard } from './TiltCard';
import { aboutLensesData } from '../data/portfolioData';

const AboutSection = ({ onOpenResume }) => {
  const [activeLens, setActiveLens] = useState(0);
  const lens = aboutLensesData[activeLens];

  const info = [
    { icon: '👤', label: 'Name',     value: 'Vamsi Satyadev' },
    { icon: '🎓', label: 'College',  value: 'GMR Institute of Technology' },
    { icon: '💻', label: 'Branch',   value: 'Information Technology' },
    { icon: '📍', label: 'Location', value: 'Andhra Pradesh, India' },
  ];

  const whatIDo = [
    { icon: '🖥️', label: 'Web Development' },
    { icon: '🧠', label: 'AI / ML' },
    { icon: '💡', label: 'Problem Solving' },
    { icon: '📈', label: 'Continuous Learning' },
  ];

  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Section header */}
        <div className="mb-14">
          <p className="section-label mb-3">About Me</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left: Text */}
            <div className="lg:col-span-5">
              <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight mb-2">
                A <span className="underline-gold">Curious</span><br />Developer
              </h2>

              {/* Lens switcher tabs */}
              <div className="flex gap-2 mt-6 mb-5 flex-wrap">
                {aboutLensesData.map((l, i) => (
                  <button key={l.id} onClick={() => setActiveLens(i)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                      i === activeLens
                        ? 'bg-ink text-cream border-ink'
                        : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-400'
                    }`}>
                    {l.shortTag}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={lens.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                >
                  <p className="text-stone-500 text-sm sm:text-base leading-relaxed font-normal mb-3">
                    {lens.narrative}
                  </p>
                  <p className="text-xs font-mono text-gold italic">"{lens.philosophy}"</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center gap-3">
                <button onClick={onOpenResume}
                  className="btn-ink px-6 py-3 text-sm gap-2">
                  More About Me
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Handwritten annotation */}
              <p className="hand text-gold font-bold text-2xl mt-6 rotate-[-2deg] inline-block">
                Turning Ideas<br/>into Impact
              </p>
            </div>

            {/* Right: Info cards + quote */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">

              {/* Info list card */}
              <TiltCard
                maxTilt={6}
                glowColor="rgba(201, 168, 76, 0.12)"
                className="card-cream p-6 space-y-4 cursor-default"
              >
                {info.map(item => (
                  <div key={item.label} className="flex items-center gap-3 group">
                    <span className="text-xl transition-transform group-hover:scale-125 duration-200">{item.icon}</span>
                    <div>
                      <p className="text-[10px] font-mono font-bold tracking-wider text-stone-400 uppercase">{item.label}</p>
                      <p className="text-sm font-semibold text-ink">{item.value}</p>
                    </div>
                  </div>
                ))}
              </TiltCard>

              {/* Quote card */}
              <TiltCard
                maxTilt={8}
                glowColor="rgba(201, 168, 76, 0.25)"
                className="card-ink p-6 flex flex-col justify-between min-h-[180px] cursor-default"
              >
                <span className="font-serif text-5xl text-cream/30 leading-none select-none">"</span>
                <p className="font-serif text-lg text-cream font-bold leading-snug -mt-4">
                  Technology is not just what I learn, but how I create a better tomorrow.
                </p>
                <p className="hand text-gold text-xl mt-4">— Vamsi</p>
              </TiltCard>

              {/* Lens key stats */}
              <div className="sm:col-span-2 grid grid-cols-3 gap-3">
                {lens.keyStats.map((s, i) => (
                  <TiltCard
                    key={i}
                    maxTilt={8}
                    glowColor="rgba(201, 168, 76, 0.15)"
                    className="card-cream p-4 text-center cursor-default"
                  >
                    <p className="font-serif font-black text-2xl text-ink">{s.value}</p>
                    <p className="text-[10px] font-mono text-stone-400 mt-1 uppercase tracking-wide">{s.label}</p>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WHAT I DO bar */}
        <div className="border-t border-stone-200 pt-8 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div>
            <p className="section-label mb-4">What I Do</p>
            <div className="flex flex-wrap gap-3">
              {whatIDo.map(w => (
                <span key={w.label} className="flex items-center gap-2 pill-cream text-sm">
                  <span>{w.icon}</span>
                  <span className="font-medium">{w.label}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="sm:text-right">
            <p className="section-label mb-3">My Approach</p>
            <p className="font-serif text-2xl sm:text-3xl font-black text-ink">
              Learn &nbsp;<span className="text-stone-300">·</span>&nbsp; Build &nbsp;<span className="text-stone-300">·</span>&nbsp; Improve &nbsp;<span className="text-stone-300">·</span>&nbsp; <span className="underline-gold">Repeat</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
