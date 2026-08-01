import React, { useState } from 'react';
import { PERSONAL_INFO, RESUME_HIGHLIGHTS } from '../data/portfolioData';
import { Award, Briefcase, CheckCircle2, User, Building, ExternalLink, Printer, ShieldCheck } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const AboutResume: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `
RANABIR SARKAR - Founder & Lead Visa Specialist at Visa Passport Services (VPS)
Experience: 10+ Years | Location: Kolkata, West Bengal
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.mobile}
Website: ${PERSONAL_INFO.website}

SUMMARY:
${RESUME_HIGHLIGHTS.summary}

SPECIALTIES:
${RESUME_HIGHLIGHTS.specialties.map(s => `- ${s}`).join('\n')}

OFFICE ADDRESS:
${PERSONAL_INFO.address}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <User className="w-3.5 h-3.5 text-blue-700 dark:text-amber-400" />
            <span>Profile & Professional Resume</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Mr. Ranabir Sarkar & VPS
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            A trusted leader in travel, visa, passport, and document attestation consulting in Eastern India. Bringing transparency, reliability, and doorstep support to every client.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Profile Card & Core Philosophy */}
          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
              
              <div className="flex items-center space-x-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 shadow-sm flex-shrink-0">
                  <div className="w-full h-full bg-blue-50 dark:bg-slate-900 rounded-[10px] flex items-center justify-center font-bold text-blue-800 dark:text-amber-400 text-xl">
                    RS
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-blue-700 dark:text-amber-400 font-bold">{PERSONAL_INFO.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{PERSONAL_INFO.company}</p>
                </div>
              </div>

              {/* Bio Statement */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Executive Overview</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {PERSONAL_INFO.aboutText}
                </p>
              </div>

              {/* Quick Resume Actions */}
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={handleCopySummary}
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                >
                  <Briefcase className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  <span>{copied ? "Copied Resume!" : "Copy Resume Summary"}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                  title="Print / Save PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  <span>Print</span>
                </button>
              </div>

              {/* External Profile Links */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <a
                  href={PERSONAL_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-amber-400 font-medium py-1"
                >
                  <span className="flex items-center space-x-2">
                    <Building className="w-3.5 h-3.5 text-blue-600 dark:text-amber-400" />
                    <span>Official VPS Global Website</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.justdialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-amber-400 font-medium py-1"
                >
                  <span className="flex items-center space-x-2">
                    <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Justdial Verified Page</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Specialties & Professional Career Experience */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-7 space-y-8">
            
            {/* Specialties Box */}
            <div className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="flex items-center space-x-2 text-blue-800 dark:text-amber-400 font-bold text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-blue-700 dark:text-amber-400" />
                <span>Domain Expertise & Key Competencies</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Over a decade of hands-on expertise navigating foreign embassies, passport offices, and state home departments:
              </p>

              <StaggerContainer staggerDelay={0.05} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {RESUME_HIGHLIGHTS.specialties.map((spec, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{spec}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Work History Timeline */}
            <div className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
              <div className="flex items-center space-x-2 text-blue-800 dark:text-amber-400 font-bold text-sm uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-blue-700 dark:text-amber-400" />
                <span>Professional Career History</span>
              </div>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                {RESUME_HIGHLIGHTS.educationExperience.map((exp, index) => (
                  <div key={index} className="relative space-y-1">
                    <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-blue-700 dark:bg-amber-400 border-2 border-white dark:border-slate-900" />
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{exp.title}</h4>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-amber-300 font-bold border border-blue-200 dark:border-blue-800">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-blue-700 dark:text-amber-400 font-bold">{exp.organization}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose VPS Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-blue-200 dark:border-slate-800 text-xs space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <span className="text-blue-800 dark:text-amber-400">The VPS Service Guarantee in Kolkata</span>
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Unlike unverified agents or online aggregators, Visa Passport Services (VPS) operates from a physical, permanent office at James Long Sarani, Kolkata. Clients receive direct mobile updates from Mr. Ranabir Sarkar, clear receipts, and personalized door-step assistance.
              </p>
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

