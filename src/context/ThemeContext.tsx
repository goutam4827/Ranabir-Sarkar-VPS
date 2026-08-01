import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'sapphire' | 'dark' | 'cream' | 'emerald';

export interface ThemeOption {
  id: ThemeMode;
  name: string;
  description: string;
  bgClass: string;
  cardBg: string;
  textPrimary: string;
  textSecondary: string;
  primaryColor: string;
  accentColor: string;
  previewColors: {
    bg: string;
    header: string;
    accent: string;
  };
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'light',
    name: 'Light Executive',
    description: 'Clean slate canvas with deep navy blue & gold accents',
    bgClass: 'bg-slate-50 text-slate-800',
    cardBg: 'bg-white border-slate-200',
    textPrimary: 'text-slate-900',
    textSecondary: 'text-slate-600',
    primaryColor: 'bg-blue-700 text-white',
    accentColor: 'text-amber-600',
    previewColors: {
      bg: '#f8fafc',
      header: '#1e3a8a',
      accent: '#d97706',
    },
  },
  {
    id: 'sapphire',
    name: 'Executive Sapphire',
    description: 'Deep corporate navy & dark sapphire canvas with gold brilliance',
    bgClass: 'bg-[#0a1128] text-slate-100',
    cardBg: 'bg-[#0f1738] border-slate-800',
    textPrimary: 'text-white',
    textSecondary: 'text-slate-300',
    primaryColor: 'bg-amber-400 text-slate-950',
    accentColor: 'text-amber-400',
    previewColors: {
      bg: '#0a1128',
      header: '#121e42',
      accent: '#fbbf24',
    },
  },
  {
    id: 'dark',
    name: 'Midnight Dark',
    description: 'Sophisticated dark slate canvas with gold & emerald contrast',
    bgClass: 'bg-slate-950 text-slate-100',
    cardBg: 'bg-slate-900 border-slate-800',
    textPrimary: 'text-white',
    textSecondary: 'text-slate-400',
    primaryColor: 'bg-amber-500 text-slate-950',
    accentColor: 'text-amber-400',
    previewColors: {
      bg: '#020617',
      header: '#0f172a',
      accent: '#f59e0b',
    },
  },
  {
    id: 'cream',
    name: 'Royal Ivory',
    description: 'Warm cream & ivory luxury background with rich navy tone',
    bgClass: 'bg-[#faf7f2] text-stone-800',
    cardBg: 'bg-white border-stone-200',
    textPrimary: 'text-stone-900',
    textSecondary: 'text-stone-600',
    primaryColor: 'bg-amber-700 text-white',
    accentColor: 'text-amber-700',
    previewColors: {
      bg: '#faf7f2',
      header: '#1e293b',
      accent: '#b45309',
    },
  },
  {
    id: 'emerald',
    name: 'Corporate Emerald',
    description: 'Professional emerald green & crisp light corporate styling',
    bgClass: 'bg-emerald-50/50 text-slate-800',
    cardBg: 'bg-white border-emerald-100',
    textPrimary: 'text-slate-900',
    textSecondary: 'text-slate-600',
    primaryColor: 'bg-emerald-700 text-white',
    accentColor: 'text-emerald-700',
    previewColors: {
      bg: '#ecfdf5',
      header: '#047857',
      accent: '#059669',
    },
  },
];

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  currentThemeConfig: ThemeOption;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('vps_app_theme');
    return (saved as ThemeMode) || 'light';
  });

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem('vps_app_theme', mode);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark' || theme === 'sapphire') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const currentThemeConfig = THEME_OPTIONS.find(t => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentThemeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
