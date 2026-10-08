import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- LOGOS MATCHING EXACTLY THE SCREENSHOT ---

// 1. HTML5: Orange shield with bold white "5"
export const Html5Logo = ({ className = "w-12 h-12 sm:w-14 sm:h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Outer Shield */}
    <path d="M16 12 L84 12 L78 78 L50 88 L22 78 Z" fill="#E44D26"/>
    {/* Right Facet Highlight */}
    <path d="M50 16 L76 16 L71 73 L50 82 Z" fill="#F16529"/>
    {/* Bold 5 numeral */}
    <text
      x="50"
      y="64"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="900"
      fontSize="46"
    >
      5
    </text>
  </svg>
);

// 2. CSS3: Blue shield with bold white "3"
export const Css3Logo = ({ className = "w-12 h-12 sm:w-14 sm:h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Outer Shield */}
    <path d="M16 12 L84 12 L78 78 L50 88 L22 78 Z" fill="#1572B6"/>
    {/* Right Facet Highlight */}
    <path d="M50 16 L76 16 L71 73 L50 82 Z" fill="#33A9DC"/>
    {/* Bold 3 numeral */}
    <text
      x="50"
      y="64"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="900"
      fontSize="46"
    >
      3
    </text>
  </svg>
);

// 3. JavaScript: Yellow rounded square with bold black "JS"
export const JavaScriptLogo = ({ className = "w-12 h-12 sm:w-14 sm:h-14" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="16" fill="#F7DF1E"/>
    <text
      x="50"
      y="66"
      textAnchor="middle"
      fill="#000000"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="900"
      fontSize="46"
      letterSpacing="-2"
    >
      JS
    </text>
  </svg>
);

// 4. React: Cyan atom with center dot and 3 orbit ellipses
export const ReactLogo = ({ className = "w-12 h-12 sm:w-14 sm:h-14" }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
    <circle cx="0" cy="0" r="2.15" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1.15" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

// 5. Angular: Red shield with white "A"
export const AngularLogo = ({ className = "w-12 h-12 sm:w-14 sm:h-14" }) => (
  <svg viewBox="0 0 250 250" className={className}>
    <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031"/>
    <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2" fill="#C3002F"/>
    <polygon points="125,52.1 66,182.6 90.6,182.6 103.4,151.8 125,151.8 125,133.8 110.8,133.8 125,99.3" fill="#FFFFFF"/>
    <polygon points="125,52.1 125,99.3 139.2,133.8 125,133.8 125,151.8 146.6,151.8 159.4,182.6 184,182.6" fill="#FFFFFF"/>
  </svg>
);

// 6. Node.js: Green hexagon with white "JS"
export const NodejsLogo = ({ className = "w-12 h-12 sm:w-14 sm:h-14" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="#339933"/>
    <text
      x="50"
      y="62"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="900"
      fontSize="35"
      letterSpacing="-1"
    >
      JS
    </text>
  </svg>
);

// 7. FastAPI: Teal circle with white lightning bolt
export const FastApiLogo = ({ className = "w-12 h-12 sm:w-14 sm:h-14" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="44" fill="#009688"/>
    <path d="M53 16 L31 52 L48 52 L43 84 L71 44 L53 44 Z" fill="#FFFFFF"/>
  </svg>
);

// 8. MongoDB: Green leaf with center division
export const MongoDbLogo = ({ className = "w-12 h-12 sm:w-14 sm:h-14" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 10 C50 10, 68 28, 68 54 C68 76, 52 88, 50 92 C48 88, 32 76, 32 54 C32 28, 50 10, 50 10 Z" fill="#13AA52"/>
    <path d="M50 10 C50 10, 68 28, 68 54 C68 76, 52 88, 50 92 L50 10 Z" fill="#10AA50"/>
    <path d="M50 18 L50 86 C50 86, 48 82, 48 54 C48 34, 50 18, 50 18 Z" fill="#116149"/>
  </svg>
);

// --- ADDITIONAL SKILLS LOGOS ---

// Additional 1: Java (dark badge with white JAVA)
export const JavaLogo = ({ className = "w-8 h-8 sm:w-9 sm:h-9" }) => (
  <svg viewBox="0 0 80 50" className={className}>
    <rect width="80" height="50" rx="10" fill="#293548"/>
    <text
      x="40"
      y="33"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="900"
      fontSize="20"
      letterSpacing="0.5"
    >
      JAVA
    </text>
  </svg>
);

// Additional 2: Python (interlocking blue and yellow snakes)
export const PythonLogo = ({ className = "w-8 h-8 sm:w-9 sm:h-9" }) => (
  <svg viewBox="0 0 110 110" className={className}>
    <path d="M54.5 9.5c-24.5 0-23 10.6-23 10.6l.03 11h23.5v3.3H22.4S7.9 32.7 7.9 57.2s12.6 23.6 12.6 23.6h7.5v-10.5s-.4-12.6 12.4-12.6h23.3s11.9.2 11.9-11.6V21.1s1.7-11.6-21.1-11.6zm-12.8 7.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z" fill="#3776AB"/>
    <path d="M55.5 100.5c24.5 0 23-10.6 23-10.6l-.03-11H55v-3.3h32.6s14.5 1.7 14.5-22.8-12.6-23.6-12.6-23.6h-7.5v10.5s.4 12.6-12.4 12.6H43.8s-11.9-.2-11.9 11.6v25s-1.7 11.6 21.1 11.6zm12.8-7.2a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z" fill="#FFD438"/>
  </svg>
);

// Additional 3: Target Rings (concentric rings for C / SQL / Tests)
export const TargetRingsLogo = ({ className = "w-8 h-8 sm:w-9 sm:h-9" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="42" fill="none" stroke="#38BDF8" strokeWidth="8"/>
    <circle cx="50" cy="50" r="24" fill="none" stroke="#38BDF8" strokeWidth="8"/>
    <circle cx="50" cy="50" r="8" fill="#38BDF8"/>
  </svg>
);

// Additional 4: Git (orange diamond with branch nodes)
export const GitLogo = ({ className = "w-8 h-8 sm:w-9 sm:h-9" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <g transform="translate(50,50) rotate(-45) translate(-50,-50)">
      <rect x="15" y="15" width="70" height="70" rx="14" fill="#F05032"/>
      <circle cx="35" cy="50" r="7" fill="#FFFFFF"/>
      <circle cx="65" cy="35" r="7" fill="#FFFFFF"/>
      <circle cx="65" cy="65" r="7" fill="#FFFFFF"/>
      <path d="M35 50 L65 50" stroke="#FFFFFF" strokeWidth="6"/>
      <path d="M65 35 L65 65" stroke="#FFFFFF" strokeWidth="6"/>
    </g>
  </svg>
);

// Additional 5: AWS (orange badge with black AWS)
export const AwsLogo = ({ className = "w-8 h-8 sm:w-9 sm:h-9" }) => (
  <svg viewBox="0 0 90 60" className={className}>
    <rect width="90" height="60" rx="12" fill="#FF9900"/>
    <text
      x="45"
      y="37"
      textAnchor="middle"
      fill="#000000"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="900"
      fontSize="22"
      letterSpacing="0.5"
    >
      aws
    </text>
  </svg>
);

// Additional 6: Redux / Cluster (purple cluster icon)
export const ClusterLogo = ({ className = "w-8 h-8 sm:w-9 sm:h-9" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="30" r="14" fill="#8B5CF6"/>
    <circle cx="28" cy="68" r="14" fill="#8B5CF6"/>
    <circle cx="72" cy="68" r="14" fill="#8B5CF6"/>
    <circle cx="50" cy="55" r="6" fill="#C4B5FD"/>
  </svg>
);

// Additional 7: Bootstrap (purple rounded square with white B)
export const BootstrapLogo = ({ className = "w-8 h-8 sm:w-9 sm:h-9" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect width="100" height="100" rx="20" fill="#7952B3"/>
    <text
      x="50"
      y="73"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Georgia, serif"
      fontWeight="900"
      fontSize="64"
    >
      B
    </text>
  </svg>
);

// --- MAIN SKILLS SECTION COMPONENT ---

const SkillsSection = ({ onOpenResume }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // 8 Main skill cards matching the 4x2 grid in user's image
  const primarySkills = [
    {
      id: 'html5',
      name: 'HTML5',
      category: 'Semantic Markup',
      icon: <Html5Logo />,
      description: 'Modern HTML5 semantics, accessibility & page structure'
    },
    {
      id: 'css3',
      name: 'CSS3',
      category: 'Modern Styling',
      icon: <Css3Logo />,
      description: 'Responsive CSS3, Flexbox, Grid, transitions & animations'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Core Language',
      icon: <JavaScriptLogo />,
      description: 'ES6+ standards, async APIs, event loop & DOM manipulation'
    },
    {
      id: 'react',
      name: 'React',
      category: 'Frontend Library',
      icon: <ReactLogo />,
      description: 'React.js component trees, hooks, custom state & reactive UI'
    },
    {
      id: 'angular',
      name: 'Angular',
      category: 'Frontend Framework',
      icon: <AngularLogo />,
      description: 'Angular architecture, TypeScript, services & reactive forms'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'Backend Runtime',
      icon: <NodejsLogo />,
      description: 'Event-driven Node.js runtime, Express & scalable REST APIs'
    },
    {
      id: 'fastapi',
      name: 'FastAPI',
      category: 'Python APIs',
      icon: <FastApiLogo />,
      description: 'High-performance async Python backend endpoints & AI services'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      category: 'NoSQL Database',
      icon: <MongoDbLogo />,
      description: 'Document collections, schemas & aggregation pipelines'
    },
  ];

  // Additional skills in the bottom container
  const additionalSkills = [
    { id: 'java', name: 'Java', role: 'OOP & Core Logic', icon: <JavaLogo /> },
    { id: 'python', name: 'Python', role: 'AI, LLMs & Scripting', icon: <PythonLogo /> },
    { id: 'target', name: 'C / SQL', role: 'Systems & Relational Queries', icon: <TargetRingsLogo /> },
    { id: 'git', name: 'Git', role: 'Version Control & GitHub', icon: <GitLogo /> },
    { id: 'aws', name: 'AWS', role: 'Cloud Foundations & Deployments', icon: <AwsLogo /> },
    { id: 'redux', name: 'Redux / State', role: 'Centralized State Management', icon: <ClusterLogo /> },
    { id: 'bootstrap', name: 'Bootstrap', role: 'Rapid Responsive Components', icon: <BootstrapLogo /> },
  ];

  return (
    <section id="skills" className="relative bg-[#0B0F19] py-20 sm:py-28 text-white overflow-hidden selection:bg-[#C6F824] selection:text-black">
      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-[#C6F824]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Title: "MY SKILLS" in bright neon lime green */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#C6F824] font-black text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase drop-shadow-[0_0_25px_rgba(198,248,36,0.4)]"
          >
            MY SKILLS
          </motion.h2>
        </div>

        {/* Main Grid: 8 Skill Cards (4x2) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {primarySkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.04 }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative bg-[#101726]/90 backdrop-blur-sm border border-[#1E293B] hover:border-[#C6F824]/60 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px] cursor-pointer shadow-lg shadow-black/40 hover:shadow-[0_0_25px_rgba(198,248,36,0.22)] transition-all duration-300"
            >
              {/* Logo centered */}
              <div className="transition-transform duration-300 group-hover:scale-110 drop-shadow-md flex items-center justify-center">
                {skill.icon}
              </div>

              {/* Subtle border shine effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#C6F824]/40 pointer-events-none transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Skill Tooltip / Info Toast (visible on hover) */}
        <div className="h-7 mb-3 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {hoveredSkill && (
              <motion.div
                key={hoveredSkill.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-center px-4 py-1 rounded-full bg-[#162033] border border-[#C6F824]/40 text-xs text-stone-200 font-mono flex items-center gap-2 shadow-sm"
              >
                <span className="font-bold text-[#C6F824]">{hoveredSkill.name}</span>
                <span className="text-stone-500">•</span>
                <span className="text-stone-300">{hoveredSkill.category}</span>
                <span className="text-stone-500 hidden sm:inline">•</span>
                <span className="text-stone-400 hidden sm:inline">{hoveredSkill.description}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Card: "ADDITIONAL SKILLS" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-[#101726]/90 backdrop-blur-md border border-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40"
        >
          {/* Subheading centered */}
          <h3 className="text-[#C6F824] font-black text-xs sm:text-sm tracking-[0.25em] uppercase text-center mb-6 drop-shadow-[0_0_12px_rgba(198,248,36,0.25)]">
            ADDITIONAL SKILLS
          </h3>

          {/* Row of centered icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-11">
            {additionalSkills.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.2, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="relative group p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer flex flex-col items-center"
                title={`${item.name} (${item.role})`}
              >
                <div className="drop-shadow-sm group-hover:drop-shadow-md">
                  {item.icon}
                </div>

                {/* Micro tooltip on hover */}
                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 whitespace-nowrap bg-black/95 border border-stone-700 text-[11px] text-[#C6F824] px-2.5 py-0.5 rounded-md font-mono shadow-lg">
                  {item.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
