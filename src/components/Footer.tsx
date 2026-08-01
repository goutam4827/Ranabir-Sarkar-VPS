import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import vpsLogo from '../assets/images/vps_logo_1785592197948.jpg';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 text-xs py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2.5">
              <img 
                src={vpsLogo} 
                alt="Visa Passport Services Logo" 
                className="w-8 h-8 rounded-lg object-cover border border-slate-200 dark:border-slate-700 shadow-xs flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-slate-900 dark:text-white text-base">Visa Passport Services</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Proprietor: Mr. Ranabir Sarkar.<br />
              Your trusted travel & migration partner for visa applications, passport filings, MEA apostille, and FRRO registration in Kolkata.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider text-[11px]">Quick Navigation</h4>
            <ul className="space-y-1.5 font-medium text-slate-600 dark:text-slate-400">
              <li><button onClick={() => scrollTo('hero')} className="hover:text-blue-700 dark:hover:text-amber-400 transition-colors">Overview</button></li>
              <li><button onClick={() => scrollTo('about')} className="hover:text-blue-700 dark:hover:text-amber-400 transition-colors">About & Resume</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-blue-700 dark:hover:text-amber-400 transition-colors">Services Catalog</button></li>
              <li><button onClick={() => scrollTo('testimonials')} className="hover:text-blue-700 dark:hover:text-amber-400 transition-colors">Client Reviews</button></li>
              <li><button onClick={() => scrollTo('ai-assistant')} className="hover:text-blue-800 dark:hover:text-amber-300 text-blue-700 dark:text-amber-400 font-bold">AI Visa Assistant</button></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider text-[11px]">Core Offerings</h4>
            <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 font-medium">
              <li>Visa Assistance (US, UK, Schengen, Canada)</li>
              <li>Passport Fresh & Renewal (PCC)</li>
              <li>MEA Apostille & HRD Legalization</li>
              <li>Indian Visa Extension & FRRO</li>
              <li>Travel Insurance & FOREX</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider text-[11px]">Kolkata Office</h4>
            <p className="text-slate-700 dark:text-slate-300 flex items-start space-x-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-blue-700 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <span>{PERSONAL_INFO.address}</span>
            </p>
            <p className="text-slate-700 dark:text-slate-300 flex items-center space-x-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 flex-shrink-0" />
              <span>{PERSONAL_INFO.landline} / {PERSONAL_INFO.mobile}</span>
            </p>
            <p className="text-slate-700 dark:text-slate-300 flex items-center space-x-1.5 font-medium">
              <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
              <span>{PERSONAL_INFO.email}</span>
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Visa Passport Services (VPS Global). All rights reserved.</p>
          <div className="flex items-center space-x-4 font-medium">
            <a href={PERSONAL_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 dark:hover:text-amber-400 flex items-center space-x-1">
              <span>www.vpsglobal.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href={PERSONAL_INFO.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 dark:hover:text-amber-400">
              Google Reviews
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
