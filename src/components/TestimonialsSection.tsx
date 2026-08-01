import React, { useState } from 'react';
import { TESTIMONIALS, PERSONAL_INFO } from '../data/portfolioData';
import { Star, MessageSquareQuote, ThumbsUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string>('all');

  const tags = ['all', 'US Visa Assistance', 'Passport Assistance', 'Visa & Status Tracking', 'Visa Slot Securing'];

  const filtered = TESTIMONIALS.filter(t => {
    if (filterTag === 'all') return true;
    return t.tag?.toLowerCase().includes(filterTag.toLowerCase());
  });

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>Verified Google & Justdial Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Testimonials & Feedback
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Real stories from clients who trusted Mr. Ranabir Sarkar and Visa Passport Services (VPS) for US visa slots, fresh passports, document legalizations, and emergency updates.
          </p>
        </ScrollReveal>

        {/* Rating Summary Banner */}
        <ScrollReveal direction="up" delay={0.1} className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 mb-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-6">
            <div className="text-center bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 min-w-[110px]">
              <span className="text-4xl sm:text-5xl font-black text-amber-500">5.0</span>
              <div className="flex justify-center text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                ))}
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">100% Satisfaction</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <span>Visa Passport Services (VPS)</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                1,000+ Visas, Passports & Legalization Applications Handled with Excellence.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Kolkata Office & Doorstep Service Support.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-xs transition-transform hover:scale-105"
          >
            <span>Write a Google Review</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(t => (
            <StaggerItem key={t.id}>
              <div className="h-full bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 relative">
                <MessageSquareQuote className="w-8 h-8 text-slate-100 dark:text-slate-900 absolute top-4 right-4 pointer-events-none" />

                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                    <span className="text-xs text-slate-400 dark:text-slate-500 ml-2 font-medium">{t.timeAgo}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.author}</h4>
                    {t.tag && (
                      <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-amber-300 font-semibold border border-blue-200 dark:border-blue-800">
                        {t.tag}
                      </span>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800 flex items-center justify-center text-xs font-bold text-blue-800 dark:text-amber-400">
                    {t.author.charAt(0)}
                  </div>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
