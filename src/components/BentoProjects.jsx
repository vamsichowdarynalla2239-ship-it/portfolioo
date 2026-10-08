import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { ArrowUpRight, Layers } from 'lucide-react';

const BentoProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const filters = ['All', 'AI & ML', 'Full-Stack & P2P'];

  const filtered = projectsData.filter(p => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & ML') return p.category.includes('AI');
    if (activeFilter === 'Full-Stack & P2P') return p.category.includes('Full-Stack') || p.category.includes('P2P');
    return true;
  });

  const tagColors = {
    'React.js': 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    'Python': 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
    'Node.js': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    'Meta LLaMA 3.1': 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    'Meta LLaMA 3.1-70B': 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    'GenAI APIs': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    'FastAPI': 'bg-teal-500/10 text-teal-300 border-teal-500/30',
    'RAG': 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    'MongoDB': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    'Express': 'bg-stone-500/10 text-stone-300 border-stone-500/30',
    'SQL': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    'PostgreSQL': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    default: 'bg-stone-800 text-stone-300 border-stone-700',
  };
  const getTagColor = (t) => tagColors[t] || tagColors.default;

  // Overlap Deck & Split Positioning
  const getCardTransform = (index) => {
    if (!isHovered) {
      // Overlapped State: Cards stacked with slight angle rotation
      if (index === 0) return { x: -35, y: 15, rotate: -7, scale: 0.95, zIndex: 10 };
      if (index === 1) return { x: 0, y: 0, rotate: 0, scale: 1.0, zIndex: 30 }; // Top/Center Card
      return { x: 35, y: 15, rotate: 7, scale: 0.95, zIndex: 20 };
    } else {
      // Split / Fan Out State: Cards glide smoothly into 3 separate side-by-side columns
      if (index === 0) return { x: -380, y: 0, rotate: 0, scale: 1.0, zIndex: 20 };
      if (index === 1) return { x: 0, y: -10, rotate: 0, scale: 1.02, zIndex: 30 };
      return { x: 380, y: 0, rotate: 0, scale: 1.0, zIndex: 20 };
    }
  };

  return (
    <section id="projects" className="bg-cream-dark py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="section-label">Featured Projects</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-amber-800 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-bold">
                <Layers className="w-3 h-3 text-amber-700" />
                <span>Hover to Split Cards</span>
              </span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight">
              Things I've <span className="underline-gold">Built</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-ink text-cream border-ink shadow-sm'
                    : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Overlapped Cards That Split on Hover */}
        <div 
          className="hidden lg:flex relative justify-center items-center h-[520px] select-none my-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {filtered.slice(0, 3).map((p, idx) => {
            const transform = getCardTransform(idx);
            return (
              <motion.div
                key={p.id}
                animate={{
                  x: transform.x,
                  y: transform.y,
                  rotate: transform.rotate,
                  scale: transform.scale,
                  zIndex: transform.zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 22,
                  mass: 0.8,
                }}
                onClick={() => setSelected(p)}
                className="absolute w-[360px] h-[460px] bg-[#1C1917] rounded-3xl p-7 cursor-pointer group flex flex-col justify-between border border-stone-800 shadow-2xl hover:border-gold/80 transition-colors duration-300"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-stone-700 bg-stone-900 text-cream flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:border-gold group-hover:text-ink shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <p className="text-[11px] font-mono font-bold tracking-wider mb-1.5 text-gold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                    {p.badge}
                  </p>

                  <h3 className="font-serif font-black text-2xl leading-snug text-[#FAF8F4] group-hover:text-amber-200 transition-colors mb-3">
                    {p.title}
                  </h3>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.slice(0, 4).map(t => (
                      <span
                        key={t}
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${getTagColor(t)}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Description */}
                <div className="pt-3 border-t border-stone-800">
                  <p className="text-xs leading-relaxed text-stone-400 line-clamp-3 group-hover:text-stone-300 transition-colors mb-3">
                    {p.bullets[0]}
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                    <span className="text-gold font-bold">View Case Study &rarr;</span>
                    <span>#{idx + 1}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Helper Status Text */}
        <p className="hidden lg:block text-center text-xs font-mono text-stone-500 mt-2">
          {isHovered ? '✨ Cards split! Click any card to read technical case study' : '👈 Hover over the cards to split and view each project 👉'}
        </p>

        {/* Mobile / Tablet: Responsive Stacked Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 mt-4">
          {filtered.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelected(p)}
              className="bg-[#1C1917] rounded-3xl p-6 cursor-pointer group flex flex-col justify-between border border-stone-800 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gold" />
                </div>
                <h3 className="font-serif font-black text-2xl text-[#FAF8F4] mb-2">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.slice(0, 3).map(t => (
                    <span key={t} className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${getTagColor(t)}`}>{t}</span>
                  ))}
                </div>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">{p.bullets[0]}</p>
              </div>
              <span className="text-xs font-mono text-gold font-bold">View details &rarr;</span>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup with Full Project Details */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.94, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={e => e.stopPropagation()}
                className="bg-[#FAF8F4] rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl border border-stone-300"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-200 text-stone-600 hover:bg-stone-300 hover:text-ink flex items-center justify-center font-bold text-sm transition-colors"
                >
                  ✕
                </button>

                {/* Category & Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-ink text-cream px-2.5 py-1 rounded-full">
                    {selected.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-gold">
                    {selected.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-black text-3xl sm:text-4xl text-ink mb-4 leading-tight">
                  {selected.title}
                </h3>

                {/* Highlights Grid */}
                {selected.highlights && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-5">
                    {selected.highlights.map((h, i) => (
                      <div key={i} className="bg-white border border-stone-200 rounded-2xl p-3 text-center shadow-sm">
                        <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block mb-0.5">
                          {h.label}
                        </span>
                        <span className="font-mono font-bold text-xs sm:text-sm text-ink">
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                <div className="mt-5 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-2">Key Engineering Accomplishments:</h4>
                  {selected.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 pt-5 border-t border-stone-200">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-2.5">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map(t => (
                      <span key={t} className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-stone-900 text-cream border border-stone-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ink px-6 py-2.5 text-xs gap-2 font-mono"
                  >
                    <GithubIcon className="w-4 h-4" /> View on GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default BentoProjects;
