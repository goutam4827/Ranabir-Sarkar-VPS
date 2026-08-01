import React, { useState } from 'react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';
import { InquiryFormState } from '../types';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Clock, Globe, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<InquiryFormState>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: 'Visa Assistance',
    destinationCountry: '',
    message: '',
    submitted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone) return;

    setForm(prev => ({ ...prev, submitted: true }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>Direct Assistance in Kolkata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Mr. Ranabir Sarkar & VPS
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Visit our office at James Long Sarani, Kolkata, or request personalized doorstep assistance for visa applications, passport filings, and document legalizations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Office Contact Details */}
          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
              
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Visa Passport Services (VPS)</h3>
                <p className="text-xs text-amber-600 dark:text-amber-400 font-bold">Proprietor: Mr. Ranabir Sarkar</p>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 text-xs">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-950 text-blue-700 dark:text-amber-400 border border-slate-200 dark:border-slate-800 flex-shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Kolkata Office Address</span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    127C James Long Sarani, Kolkata - 700008.<br />
                    (Opposite Samar Roychowdhury Sishu Uddyan)
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start space-x-3 text-xs">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-950 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-800 flex-shrink-0 mt-0.5 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Phone & Voice Contact</span>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    Office Landline: <a href={`tel:${PERSONAL_INFO.landline}`} className="font-bold text-slate-900 dark:text-white hover:text-blue-700 dark:hover:text-amber-400">{PERSONAL_INFO.landline}</a>
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mt-1">
                    Direct Mobile/Voice: <a href={`tel:${PERSONAL_INFO.mobile}`} className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline">{PERSONAL_INFO.mobile}</a>
                  </p>
                </div>
              </div>

              {/* Email & Web */}
              <div className="flex items-start space-x-3 text-xs">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-950 text-amber-600 dark:text-amber-400 border border-slate-200 dark:border-slate-800 flex-shrink-0 mt-0.5 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Email & Official Portal</span>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-amber-400">{PERSONAL_INFO.email}</a>
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mt-1">
                    Website: <a href={PERSONAL_INFO.website} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 dark:text-amber-400 hover:underline">{PERSONAL_INFO.website}</a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1 shadow-xs">
                <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Office Consultation Hours</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium">Monday &ndash; Saturday: 10:00 AM &ndash; 7:30 PM IST</p>
                <p className="text-slate-500 dark:text-slate-400 text-[11px]">Doorstep visits in Kolkata available upon prior appointment.</p>
              </div>

              {/* Quick Contact CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hi%20Ranabir%20Sir,%20I%20have%20a%20visa/passport%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition-transform hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.mobile}`}
                  className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs transition-transform hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>

            </div>
          </ScrollReveal>

          {/* Form Column */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Book a Consultation / Send Inquiry</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-medium">
                Fill out your requirement below to receive direct callbacks and custom document guidance from Mr. Ranabir Sarkar.
              </p>

              {form.submitted ? (
                <div className="p-8 bg-white dark:bg-slate-950 rounded-xl border border-emerald-300 dark:border-emerald-800 text-center space-y-4 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Inquiry Received Successfully!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you <strong className="text-slate-900 dark:text-white">{form.fullName}</strong>. Mr. Ranabir Sarkar will contact you shortly at <strong className="text-emerald-700 dark:text-emerald-400">{form.phone}</strong> regarding your <strong className="text-blue-700 dark:text-amber-400">{form.serviceType}</strong> inquiry.
                  </p>
                  <button
                    onClick={() => setForm(prev => ({ ...prev, submitted: false }))}
                    className="mt-4 px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-bold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Subrata Mukherjee"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-700 dark:focus:border-amber-400 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Phone / Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98300 00000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-700 dark:focus:border-amber-400 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. client@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-700 dark:focus:border-amber-400 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Service Required</label>
                      <select
                        id="contact-service-type"
                        value={form.serviceType}
                        onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-blue-700 dark:focus:border-amber-400 font-medium"
                      >
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Destination Country (if applicable)</label>
                    <input
                      type="text"
                      placeholder="e.g. United States, Germany, United Kingdom, Canada, Dubai"
                      value={form.destinationCountry}
                      onChange={(e) => setForm({ ...form, destinationCountry: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-700 dark:focus:border-amber-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">Inquiry / Special Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your travel dates, visa urgency, doorstep request, or passport queries..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-700 dark:focus:border-amber-400 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-bold shadow-xs transition-transform hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Consultation Request</span>
                  </button>

                </form>
              )}

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
