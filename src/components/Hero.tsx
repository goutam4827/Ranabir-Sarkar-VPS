import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Star, ShieldCheck, MapPin, ArrowRight, Clock, CheckCircle2, Bot } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white overflow-hidden py-16 lg:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-400/10 dark:bg-amber-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-amber-400/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Value Proposition */}
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-7 space-y-6">
            
            {/* Top Rating & Verification Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-xs">
              <div className="flex items-center text-amber-500 dark:text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                ))}
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-200">5.0 Star Google & Justdial Rating</span>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <span className="text-blue-700 dark:text-amber-400 font-semibold">{PERSONAL_INFO.clientsSatisfied} Satisfied Clients</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Seamless Global Visas & Passport Services in Kolkata
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Led by founder <strong className="text-slate-900 dark:text-white font-semibold">Mr. Ranabir Sarkar</strong> ({PERSONAL_INFO.yearsExperience} Experience), <strong className="text-blue-800 dark:text-amber-400 font-semibold">Visa Passport Services (VPS)</strong> provides reliable, hassle-free solutions for Tourist, Business, Student Visas, Fresh Passports, MEA Apostille, and FRRO Extensions.
            </p>

            {/* Key Service Highlights Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-800 dark:text-slate-200 font-semibold">Door-Step Kolkata Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-amber-400 flex-shrink-0" />
                <span className="text-xs text-slate-800 dark:text-slate-200 font-semibold">100% Verified Filings</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <span className="text-xs text-slate-800 dark:text-slate-200 font-semibold">Urgent Slot Securing</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-semibold shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('ai-assistant')}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-700 dark:text-amber-400 font-semibold shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Bot className="w-4 h-4 text-blue-600 dark:text-amber-400" />
                <span>Ask AI Visa Consultant</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Right Card - Founder Profile & Office Card */}
          <ScrollReveal direction="left" delay={0.25} className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              
              {/* Profile Header */}
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 shadow-sm flex-shrink-0">
                  <div className="w-full h-full bg-blue-50 dark:bg-slate-900 rounded-[14px] flex items-center justify-center text-blue-800 dark:text-amber-400 font-extrabold text-2xl">
                    RS
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Ranabir Sarkar</h2>
                  <p className="text-xs text-blue-700 dark:text-amber-400 font-semibold">Proprietor & Founder, VPS</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Kolkata, West Bengal</span>
                  </p>
                </div>
              </div>

              {/* Bio summary */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                <p>
                  &ldquo;Our vision at VPS is to make international travel, study, and relocation smooth and transparent. Whether you need an emergency passport renewal or complex US/Schengen visa filing, we treat every case with individual dedication.&rdquo;
                </p>
                <p className="font-bold text-blue-800 dark:text-amber-400 text-right">
                  — Ranabir Sarkar
                </p>
              </div>

              {/* Quick Contact & Address Card */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Office Phone:</span>
                  <a href={`tel:${PERSONAL_INFO.landline}`} className="font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-amber-400">
                    {PERSONAL_INFO.landline}
                  </a>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Direct Voice/WhatsApp:</span>
                  <a href={`tel:${PERSONAL_INFO.mobile}`} className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
                    {PERSONAL_INFO.mobile}
                  </a>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Email Inquiry:</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-amber-400">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="py-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium block mb-1">Office Address:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium leading-normal block bg-slate-50 dark:bg-slate-950 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                    {PERSONAL_INFO.address}
                  </span>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

