import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, Cloud, Award, BadgeCheck } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':      return <Trophy     className="w-5 h-5 text-gold" />;
      case 'Cloud':       return <Cloud      className="w-5 h-5 text-amber-500" />;
      case 'CheckCircle2':return <BadgeCheck className="w-5 h-5 text-gold" />;
      case 'Sparkles':    return <Sparkles   className="w-5 h-5 text-amber-400" />;
      default:            return <Award      className="w-5 h-5 text-gold" />;
    }
  };

  const highlightAward = certificationsData.find(c => c.highlight);
  const otherCerts = certificationsData.filter(c => !c.highlight);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-cream border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase mb-3 bg-amber-500/10 text-amber-800 border border-amber-500/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>HONORS &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-ink tracking-tight font-serif">
            Awards &amp; <span className="underline-gold">Certifications</span>
          </h2>
          <p className="text-stone-500 text-base mt-4 font-normal">
            National hackathon contest honors, industry cloud credentials, and specialized engineering certifications.
          </p>
        </div>

        {/* Featured Stepcone 2k24 Winner Spotlight */}
        {highlightAward && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <TiltCard
              maxTilt={5}
              glowColor="rgba(201, 168, 76, 0.35)"
              className="p-8 sm:p-10 rounded-3xl bg-[#1C1917] text-cream border border-stone-800 shadow-2xl relative overflow-hidden cursor-default group"
            >
              {/* Gold Top Accent Beam */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-gold to-yellow-400" />
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none" />

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-amber-500/15 border border-gold/40 rounded-2xl text-gold shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                    <Trophy className="w-9 h-9 text-gold" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-gold text-ink px-3 py-1 rounded-full shadow-sm">
                        {highlightAward.badgeText}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400 bg-stone-900 px-3 py-1 rounded-full border border-stone-800">
                        National Level Contest
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#FAF8F4] font-serif tracking-tight mt-1">
                      {highlightAward.title}
                    </h3>
                    <p className="text-sm font-mono font-bold text-gold mt-1.5">
                      {highlightAward.issuer} • {highlightAward.date}
                    </p>
                    <p className="text-sm text-stone-400 mt-3 max-w-2xl leading-relaxed">
                      {highlightAward.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 lg:text-right">
                  <span className="hand text-3xl font-bold text-gold rotate-[-3deg] inline-block">
                    Stepcone 2k24 🏆
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        )}

        {/* Other Certifications Grid with Overlapping Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherCerts.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <TiltCard
                maxTilt={8}
                glowColor="rgba(201, 168, 76, 0.2)"
                className="bg-white rounded-3xl p-7 flex flex-col justify-between h-full border border-stone-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden cursor-default group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="pill-ink text-[11px] font-mono">
                      {cert.badgeText}
                    </span>
                    <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-gold group-hover:scale-110 transition-transform">
                      {getIcon(cert.icon)}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-ink font-serif mb-1 group-hover:text-amber-700 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono font-bold text-gold mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400">
                  <span className="truncate mr-2">{cert.type}</span>
                  <span className="font-bold text-gold shrink-0">{cert.date}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
