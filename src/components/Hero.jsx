import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard, MagneticItem } from './TiltCard';
import Interactive3DCanvas from './Interactive3DCanvas';

const Hero = ({ onOpenResume, onOpenContact }) => {
  const stats = [
    { value: '3+',   label: 'Projects\nCompleted' },
    { value: '5+',   label: 'Technologies\nWorked With' },
    { value: '95%+', label: 'Academic\nTrack Record' },
    { value: '∞',    label: 'Always\nLearning' },
  ];

  return (
    <section id="hero" className="min-h-screen bg-cream pt-14 sm:pt-16 flex flex-col overflow-hidden">

      {/* Top breadcrumb label */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full pt-8 pb-2">
        <p className="section-label tracking-[0.2em]">
          Student &nbsp;•&nbsp; Developer &nbsp;•&nbsp; Dreamer
        </p>
      </div>

      {/* Main hero grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pb-10">

        {/* LEFT: Name + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex flex-col"
        >
          {/* Massive serif name with interactive animated waving gesture */}
          <div className="flex items-start gap-3 mt-4">
            <h1 className="font-serif font-black text-[clamp(3.5rem,10vw,6.5rem)] leading-[0.92] tracking-tight text-ink">
              Vamsi<br />Satyadev
            </h1>
            {/* 3D Waving Hand Gesture */}
            <motion.span
              role="img"
              aria-label="Waving hand gesture"
              animate={{ 
                rotate: [0, 24, -14, 22, -6, 18, 0],
                scale: [1, 1.15, 1, 1.15, 1]
              }}
              whileHover={{ scale: 1.35, rotate: 30 }}
              whileTap={{ scale: 0.9, rotate: -20 }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut'
              }}
              className="inline-block text-4xl sm:text-5xl md:text-6xl cursor-pointer origin-[70%_70%] select-none drop-shadow-md hover:drop-shadow-xl"
            >
              👋
            </motion.span>
          </div>

          {/* Gold underline accent */}
          <div className="w-16 h-[3px] bg-gold rounded-full mt-4 mb-5" />

          <p className="text-stone-500 text-base sm:text-lg leading-relaxed font-normal max-w-md">
            Exploring technology, creating opportunities<br className="hidden sm:inline" /> and making ideas work.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <MagneticItem pullStrength={0.25}>
              <a href="#projects"
                className="btn-ink px-6 py-3 text-sm font-semibold gap-2 shadow-lg">
                View My Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </MagneticItem>
            <MagneticItem pullStrength={0.25}>
              <button onClick={onOpenResume}
                className="btn-ghost px-5 py-3 text-sm font-semibold gap-2 shadow-sm">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </button>
            </MagneticItem>
            <MagneticItem pullStrength={0.25}>
              <button onClick={onOpenContact}
                className="flex items-center gap-2 text-sm font-semibold text-ink group">
                <span className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center group-hover:bg-ink group-hover:text-cream transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Let's Connect
              </button>
            </MagneticItem>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 mt-10 pt-8 border-t border-stone-200">
            {stats.map(s => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="stat-block cursor-default p-2 rounded-xl hover:bg-stone-100/60 transition-colors"
              >
                <span className="stat-value">{s.value}</span>
                <span className="stat-label whitespace-pre-line">{s.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <p className="mt-8 text-[10px] font-mono tracking-[0.2em] text-stone-400 uppercase">
            "Discipline today, success tomorrow."
          </p>
        </motion.div>

        {/* CENTER: Photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-4 flex flex-col items-center justify-start relative"
        >
          {/* Polaroid style photo with 3D tilt module animation */}
          <TiltCard
            maxTilt={10}
            glowColor="rgba(201, 168, 76, 0.2)"
            className="bg-white p-3 pb-8 rounded-2xl shadow-card border border-stone-200 rotate-[-2deg] hover:rotate-0 transition-all duration-300 w-full max-w-xs sm:max-w-sm relative cursor-pointer"
          >
            <div className="w-full rounded-xl overflow-hidden bg-cream-dark" style={{height: '520px'}}>
              <img
                src="/vamsi_portrait.jpg"
                alt="Vamsi Satyadev"
                className="w-full h-full object-cover object-[center_15%] hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Bottom info row */}
            <div className="flex items-center justify-between px-2 pt-4">
              <span className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Andhra Pradesh, India
              </span>
              <span className="text-[10px] font-mono font-bold bg-ink text-cream px-2.5 py-1 rounded-full">
                B.Tech '27
              </span>
            </div>
          </TiltCard>

          {/* Handwritten note — top right of photo */}
          <div className="absolute -top-4 right-0 sm:-right-4 text-right select-none pointer-events-none z-30">
            <p className="hand text-gold font-bold text-xl sm:text-2xl leading-tight rotate-[6deg] inline-block">
              Good Ideas<br/>Build<br/>Brighter<br/>Futures.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: Interactive 3D Canvas & Tech Core */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-3 flex flex-col gap-4 justify-start mt-4 lg:mt-2"
        >
          {/* 3D Cyber Polyhedron Widget */}
          <div className="bg-white/80 backdrop-blur-md border border-stone-200/90 rounded-3xl p-4 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2">
              <span className="section-label text-[10px] text-amber-600 flex items-center gap-1.5 font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                3D ALGORITHM CORE
              </span>
              <span className="text-[10px] font-mono text-stone-400">MOVE MOUSE</span>
            </div>

            {/* 3D Polyhedron Canvas */}
            <div className="w-full h-44 sm:h-52 relative">
              <Interactive3DCanvas />
            </div>

            <p className="text-[11px] font-mono text-stone-500 text-center mt-2 border-t border-stone-100 pt-2">
              Interactive 3D Geometry • React + WebGL Canvas
            </p>
          </div>

          {/* Word column */}
          <div className="hidden lg:flex flex-col gap-1 text-right mt-2">
            {['LEARN','BUILD','EXPLORE','GROW','REPEAT'].map(w => (
              <span key={w} className="mono font-bold text-[11px] tracking-[0.2em] text-stone-400">{w}</span>
            ))}
          </div>

          <div className="w-full h-px bg-stone-200 hidden lg:block" />

          <div className="hidden lg:flex flex-col gap-1 text-right">
            {['TECHNOLOGY','PEOPLE','IDEAS','IMPACT'].map(w => (
              <span key={w} className="mono font-bold text-[11px] tracking-[0.2em] text-stone-400">{w}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
