import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { 
  Globe, FileText, Award, UserCheck, ShieldCheck, Plane, DollarSign, 
  Search, CheckCircle2, Clock, ArrowRight, X, PhoneCall, HelpCircle, FileCheck
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-blue-700 dark:text-amber-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Award': return <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Plane': return <Plane className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />;
      default: return <Globe className="w-6 h-6 text-blue-700 dark:text-amber-400" />;
    }
  };

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleInquire = (serviceTitle: string) => {
    setSelectedService(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const selectEl = document.getElementById('contact-service-type') as HTMLSelectElement;
        if (selectEl) {
          selectEl.value = serviceTitle;
        }
      }, 300);
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-blue-700 dark:text-amber-400" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Visa, Passport & Travel Services
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            From fresh passport filings in Kolkata to global visa applications, MEA document apostille, and travel insurance — VPS manages your entire travel documentation journey with precision.
          </p>
        </ScrollReveal>

        {/* Filter Controls & Search */}
        <ScrollReveal direction="up" delay={0.1} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-50 dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'visa', label: 'Visas' },
              { id: 'passport', label: 'Passport' },
              { id: 'attestation', label: 'Attestation & Apostille' },
              { id: 'travel', label: 'Travel & Forex' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-blue-700 dark:bg-amber-500 text-white dark:text-slate-950 shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services, e.g. Schengen, PCC..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-amber-400"
            />
          </div>

        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <StaggerItem key={service.id}>
              <div
                onClick={() => setSelectedService(service)}
                className="group h-full bg-white dark:bg-slate-900 hover:bg-slate-50/80 dark:hover:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-amber-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Header Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlights preview */}
                  <ul className="space-y-1.5 pt-2">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Bottom Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>{service.turnaroundTime.split('(')[0]}</span>
                  </span>

                  <span className="inline-flex items-center space-x-1 font-bold text-blue-700 dark:text-amber-400 group-hover:text-blue-800 dark:group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                    <span>View Checklist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Modal Detail View */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800 shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-start space-x-4 pr-8">
                <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedService.title}</h3>
                  <p className="text-xs text-blue-700 font-bold mt-0.5">{selectedService.turnaroundTime}</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Overview</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Scope & Key Features */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Key Offerings & Assistance Included</span>
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-xs">
                  {selectedService.features.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Documents Checklist */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                  <FileCheck className="w-4 h-4 text-blue-700" />
                  <span>Standard Document Checklist</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedService.requiredDocs.map((doc, i) => (
                    <li key={i} className="flex items-start space-x-2 text-slate-700">
                      <span className="text-emerald-600 font-bold">&check;</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700"
                >
                  Close
                </button>
                <button
                  onClick={() => handleInquire(selectedService.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-xs font-semibold text-white shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Inquire for {selectedService.title}</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
