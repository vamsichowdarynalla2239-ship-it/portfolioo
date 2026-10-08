import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  Building2,
  Sparkles
} from 'lucide-react';
import { TiltCard } from './TiltCard';
import { experienceData, educationData } from '../data/portfolioData';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase mb-3 bg-amber-500/10 text-amber-800 border border-amber-500/20 px-3 py-1 rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>THE ROAD SO FAR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-ink tracking-tight font-serif">
              Experience &amp; <span className="underline-gold">Education</span>
            </h2>
            <p className="text-stone-500 text-base mt-3 max-w-xl font-normal">
              Chronological milestones covering industry software engineering internships and academic excellence.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 bg-white p-1.5 rounded-full border border-stone-200 shadow-sm w-fit">
            {['All', 'Experience', 'Education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs font-bold rounded-full transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-ink text-cream shadow-sm'
                    : 'text-stone-500 hover:text-ink hover:bg-stone-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left: Work Experience */}
          {(activeTab === 'All' || activeTab === 'Experience') && (
            <div id="experience" className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white border border-stone-200 rounded-2xl shadow-sm text-gold">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-ink font-serif">Professional Experience</h3>
                  <p className="text-xs text-stone-400 font-mono">Industry internships &amp; engineering roles</p>
                </div>
              </div>

              {experienceData.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <TiltCard
                    maxTilt={6}
                    glowColor="rgba(201, 168, 76, 0.2)"
                    className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden cursor-default"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <span className="pill-ink text-[11px] font-mono">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono font-bold text-stone-500 flex items-center gap-1.5 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-black text-ink font-serif mt-1">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-bold text-gold flex items-center gap-1.5 mt-1 font-mono">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-stone-300">•</span>
                      <span className="text-xs text-stone-400 font-normal">{exp.location}</span>
                    </p>

                    <div className="mt-5 space-y-2.5 text-sm text-stone-600 leading-relaxed">
                      {exp.contributions.map((c, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap gap-1.5">
                      {exp.skillsUsed.map((s) => (
                        <span key={s} className="text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-stone-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          )}

          {/* Right: Education */}
          {(activeTab === 'All' || activeTab === 'Education') && (
            <div id="education" className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white border border-stone-200 rounded-2xl shadow-sm text-gold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-ink font-serif">Academic Foundations</h3>
                  <p className="text-xs text-stone-400 font-mono">Top academic performance &amp; milestones</p>
                </div>
              </div>

              {educationData.map((edu, idx) => {
                const isTopper = edu.scorePercentage && parseFloat(edu.scorePercentage) > 95;
                
                return (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <TiltCard
                      maxTilt={6}
                      glowColor="rgba(201, 168, 76, 0.22)"
                      className={`bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 relative cursor-default ${
                        isTopper ? 'border-gold/60 ring-1 ring-gold/20' : ''
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
                          {edu.period}
                        </span>
                        {edu.scorePercentage && (
                          <span className="pill-ink font-bold font-mono text-[11px]">
                            ★ {edu.scorePercentage} ({edu.score})
                          </span>
                        )}
                      </div>

                      <h4 className="text-xl font-black text-ink font-serif">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-bold text-gold font-mono mt-0.5">
                        {edu.stream}
                      </p>
                      <p className="text-xs text-stone-400 flex items-center gap-1 mt-1 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        <span>{edu.institution}, {edu.location}</span>
                      </p>

                      <div className="mt-3.5 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-stone-600">
                        <Award className="w-4 h-4 text-gold shrink-0" />
                        <span>{edu.highlight}</span>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Timeline;
