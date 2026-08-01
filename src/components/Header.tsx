import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Phone, MessageSquare, Menu, X, Compass, Bot, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenThemeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenThemeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentThemeConfig } = useTheme();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Compass className="w-6 h-6 text-blue-700 dark:text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-amber-400 transition-colors">
                Visa Passport Services
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                VPS
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Ranabir Sarkar &bull; {PERSONAL_INFO.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-5 text-sm font-semibold">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-amber-400 transition-colors px-2 py-1"
          >
            About & Resume
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-amber-400 transition-colors px-2 py-1"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-amber-400 transition-colors px-2 py-1"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('ai-assistant')}
            className="flex items-center space-x-1 text-blue-700 dark:text-amber-300 hover:text-blue-800 transition-colors px-3 py-1 bg-blue-50 dark:bg-blue-950/60 rounded-full border border-blue-200 dark:border-blue-800 font-bold text-xs"
          >
            <Bot className="w-4 h-4 text-blue-600 dark:text-amber-400" />
            <span>AI Visa Help</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-amber-400 transition-colors px-2 py-1"
          >
            Contact
          </button>

          {/* Theme Selector Button in Nav */}
          <button
            onClick={onOpenThemeModal}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all font-bold text-xs"
            title="Change Theme & Color Palette"
          >
            <Palette className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Theme</span>
          </button>
        </nav>

        {/* Quick Contact CTAs */}
        <div className="hidden lg:flex items-center space-x-2.5">
          <a
            href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hello%20Ranabir%20Sir,%20I%20would%20like%20to%20inquire%20about%20Visa/Passport%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${PERSONAL_INFO.mobile}`}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold shadow-xs transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={onOpenThemeModal}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            aria-label="Change Theme"
            title="Change Theme"
          >
            <Palette className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 px-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium"
          >
            About & Resume
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left py-2 px-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="block w-full text-left py-2 px-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium"
          >
            Testimonials & Reviews
          </button>
          <button
            onClick={() => scrollToSection('ai-assistant')}
            className="flex items-center justify-between w-full text-left py-2 px-3 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-lg font-semibold"
          >
            <span className="flex items-center space-x-2">
              <Bot className="w-4 h-4" />
              <span>AI Visa Assistant</span>
            </span>
            <span className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded text-blue-800 dark:text-blue-200 font-bold">24/7</span>
          </button>
          <button
            onClick={() => scrollToSection('doc-scanner')}
            className="block w-full text-left py-2 px-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium"
          >
            Document Readiness Scanner
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left py-2 px-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium"
          >
            Contact & Office Location
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenThemeModal();
            }}
            className="flex items-center justify-between w-full text-left py-2.5 px-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-lg font-bold text-xs"
          >
            <span className="flex items-center space-x-2">
              <Palette className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Change Theme Color ({currentThemeConfig.name})</span>
            </span>
            <span className="text-[10px] bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded uppercase font-bold">4 Options</span>
          </button>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold text-xs text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${PERSONAL_INFO.mobile}`}
              className="flex items-center justify-center space-x-2 py-2.5 bg-blue-700 text-white rounded-lg font-semibold text-xs text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

