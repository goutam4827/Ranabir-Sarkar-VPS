import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutResume } from './components/AboutResume';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AiAssistant } from './components/AiAssistant';
import { DocumentScanner } from './components/DocumentScanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThemeSwitcherModal, FloatingThemeButton } from './components/ThemeSwitcher';
import { ScrollProgress } from './components/ScrollProgress';

function MainApp() {
  const [themeModalOpen, setThemeModalOpen] = useState(false);
  const { currentThemeConfig } = useTheme();

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-blue-700 selection:text-white transition-colors duration-300 ${currentThemeConfig.bgClass}`}>
      <ScrollProgress />
      <Header onOpenThemeModal={() => setThemeModalOpen(true)} />
      <main>
        <Hero />
        <AboutResume />
        <ServicesSection />
        <TestimonialsSection />
        <AiAssistant />
        <DocumentScanner />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating Quick Theme Selector Button */}
      <FloatingThemeButton onOpenThemeModal={() => setThemeModalOpen(true)} />

      {/* Theme Choice Modal */}
      <ThemeSwitcherModal
        isOpen={themeModalOpen}
        onClose={() => setThemeModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

