import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin,
  Code2,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Award
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { CobaltStarburst } from './Doodles';
import { personalData, technicalSkillsSummary, projectsData, experienceData, educationData, certificationsData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
NALLA VAMSI SATYADEV
Location: ${personalData.location} | Phone: ${personalData.phone} | Email: ${personalData.email} | LinkedIn: ${personalData.linkedin}

PROFESSIONAL SUMMARY
${personalData.summary}

TECHNICAL SKILLS
• Languages: ${technicalSkillsSummary.languages.join(', ')}
• Frontend: ${technicalSkillsSummary.frontend.join(', ')}
• Backend & Tools: ${technicalSkillsSummary.backendAndTools.join(', ')}

EXPERIENCE
${experienceData.map(exp => `${exp.company} (${exp.location})\n${exp.role}\n${exp.contributions.map(c => `• ${c}`).join('\n')}`).join('\n\n')}

PROJECTS
${projectsData.map(p => `${p.title} [${p.stack.join(', ')}]\n${p.bullets.map(b => `• ${b}`).join('\n')}`).join('\n\n')}

EDUCATION
${educationData.map(e => `${e.institution} (${e.location})\n${e.degree} in ${e.stream} (${e.period})${e.score ? ` – Score: ${e.score}` : ''}`).join('\n\n')}

CERTIFICATIONS & AWARDS
• Certifications: ${certificationsData.filter(c => !c.highlight).map(c => `${c.title} (${c.issuer})`).join(', ')}
• Awards: ${certificationsData.filter(c => c.highlight).map(c => `${c.title}, ${c.issuer}`).join(', ')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-white border border-stone-200 shadow-2xl rounded-3xl p-6 sm:p-10 my-8 max-h-[92vh] overflow-y-auto text-slate-800 print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black print:p-0"
        >
          {/* Header Action Controls */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-stone-200 print:hidden">
            <div className="flex items-center gap-2">
              <CobaltStarburst className="w-5 h-5" color="#C9A84C" />
              <span className="font-mono font-bold text-xs sm:text-sm text-stone-800 uppercase tracking-wider">
                Resume / Curriculum Vitae
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handleCopyText}
                className="btn-ghost px-3.5 py-1.5 text-xs flex items-center gap-1.5 border-stone-300 hover:bg-stone-100"
                title="Copy Resume Plaintext"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="btn-ink px-4 py-1.5 text-xs flex items-center gap-1.5 bg-ink text-cream hover:bg-stone-800"
              >
                <Printer className="w-4 h-4 text-gold" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 bg-stone-100 border border-stone-200 rounded-full text-stone-500 hover:text-ink hover:bg-stone-200 transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Formatted Printable Resume Body */}
          <div className="space-y-6 text-sm">
            {/* Header */}
            <div className="border-b border-stone-200 pb-5 print:border-black">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-ink tracking-tight font-serif uppercase print:text-black">
                  {personalData.name}
                </h1>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 mt-2.5 text-xs font-mono text-stone-600 print:text-black">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    {personalData.location}
                  </span>
                  <span className="text-stone-300 print:hidden">•</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    {personalData.phone}
                  </span>
                  <span className="text-stone-300 print:hidden">•</span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-gold" />
                    <a href={`mailto:${personalData.email}`} className="hover:underline">{personalData.email}</a>
                  </span>
                  <span className="text-stone-300 print:hidden">•</span>
                  <span className="flex items-center gap-1">
                    <LinkedinIcon className="w-3.5 h-3.5 text-gold" />
                    <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/vamsi-satyadev-nalla</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider mb-2 font-serif border-b border-stone-200 pb-1 print:border-black">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed print:text-black text-justify">
                {personalData.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider mb-2.5 font-serif border-b border-stone-200 pb-1 print:border-black flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-gold print:hidden" />
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs sm:text-[13px] text-stone-700 print:text-black">
                <p>
                  <strong className="font-bold text-ink print:text-black">• Languages:</strong> {technicalSkillsSummary.languages.join(', ')}
                </p>
                <p>
                  <strong className="font-bold text-ink print:text-black">• Frontend:</strong> {technicalSkillsSummary.frontend.join(', ')}
                </p>
                <p>
                  <strong className="font-bold text-ink print:text-black">• Backend &amp; Tools:</strong> {technicalSkillsSummary.backendAndTools.join(', ')}
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider mb-3 font-serif border-b border-stone-200 pb-1 print:border-black flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-gold print:hidden" />
                Experience
              </h2>
              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.company} className="text-xs sm:text-[13px]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                      <h3 className="font-bold text-ink text-sm sm:text-base print:text-black">
                        {exp.company} <span className="font-normal text-xs text-stone-500 print:text-black">({exp.location})</span>
                      </h3>
                      <span className="font-mono font-bold text-xs text-stone-600 print:text-black">{exp.location}</span>
                    </div>
                    <div className="text-xs font-semibold text-amber-700 print:text-black italic mb-1.5">
                      {exp.role}
                    </div>
                    <ul className="space-y-1 text-stone-700 print:text-black ml-4 list-disc">
                      {exp.contributions.map((c, i) => (
                        <li key={i} className="leading-relaxed">{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider mb-3 font-serif border-b border-stone-200 pb-1 print:border-black flex items-center gap-1.5">
                <FolderGit2 className="w-4 h-4 text-gold print:hidden" />
                Projects
              </h2>
              <div className="space-y-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="text-xs sm:text-[13px]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <h3 className="font-bold text-ink text-sm sm:text-base print:text-black">
                        {proj.title}
                      </h3>
                      <span className="font-mono text-xs text-stone-600 font-semibold print:text-black">
                        {proj.stack.join(', ')}
                      </span>
                    </div>
                    <ul className="space-y-1 text-stone-700 print:text-black ml-4 list-disc">
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider mb-3 font-serif border-b border-stone-200 pb-1 print:border-black flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-gold print:hidden" />
                Education
              </h2>
              <div className="space-y-3">
                {educationData.map((edu) => (
                  <div key={edu.institution} className="text-xs sm:text-[13px]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                      <h3 className="font-bold text-ink print:text-black">
                        {edu.institution}
                      </h3>
                      <span className="font-mono font-bold text-xs text-stone-600 print:text-black">{edu.location}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-stone-600 print:text-black">
                      <span>{edu.degree}{edu.stream && edu.stream !== 'Class 10 Board' && edu.stream !== 'Mathematics, Physics, Chemistry' && !edu.degree.includes('Information Technology') ? ` in ${edu.stream}` : ''}{edu.score ? ` – Score: ${edu.score}` : ''}</span>
                      <span className="font-mono text-xs">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Awards */}
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider mb-2.5 font-serif border-b border-stone-200 pb-1 print:border-black flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold print:hidden" />
                Certifications &amp; Awards
              </h2>
              <div className="space-y-1.5 text-xs sm:text-[13px] text-stone-700 print:text-black">
                <p>
                  <strong className="font-bold text-ink print:text-black">• Certifications:</strong> {certificationsData.filter(c => !c.highlight).map(c => `${c.title} (${c.issuer})`).join(', ')}
                </p>
                <p>
                  <strong className="font-bold text-ink print:text-black">• Awards:</strong> {certificationsData.filter(c => c.highlight).map(c => `${c.title}, ${c.issuer}`).join(', ')}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;

