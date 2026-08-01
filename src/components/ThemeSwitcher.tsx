import React, { useState } from 'react';
import { useTheme, THEME_OPTIONS, ThemeMode } from '../context/ThemeContext';
import { Palette, Check, Sun, Moon, Sparkles, X } from 'lucide-react';

export const ThemeSwitcherModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close theme selector"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5" />
            <span>Visual Customizer</span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Choose Your Theme
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Select a professional color theme designed for Visa & Passport Services. Your choice persists across sessions.
          </p>
        </div>

        {/* Theme Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          {THEME_OPTIONS.map((t) => {
            const isSelected = theme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                }}
                className={`text-left p-4 rounded-2xl border-2 transition-all flex flex-col justify-between space-y-3 relative group ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50'
                }`}
              >
                {/* Active Badge */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* Color Swatch Preview */}
                <div className="flex items-center space-x-2">
                  <div
                    className="w-10 h-7 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs flex overflow-hidden"
                    style={{ backgroundColor: t.previewColors.bg }}
                  >
                    <div 
                      className="w-1/2 h-full" 
                      style={{ backgroundColor: t.previewColors.header }} 
                    />
                    <div 
                      className="w-1/2 h-full" 
                      style={{ backgroundColor: t.previewColors.accent }} 
                    />
                  </div>
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    {t.name}
                  </span>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                  {t.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Quick Quick Dark/Light Toggle Bar */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="font-medium">Quick mode:</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTheme('light')}
              className={`px-3 py-1.5 rounded-lg border font-semibold flex items-center space-x-1.5 transition-colors ${
                theme === 'light'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Light</span>
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`px-3 py-1.5 rounded-lg border font-semibold flex items-center space-x-1.5 transition-colors ${
                theme === 'dark'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Dark</span>
            </button>
          </div>
        </div>

        {/* Apply CTA */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-xs shadow-md transition-all"
        >
          Done & Apply Theme
        </button>
      </div>
    </div>
  );
};

export const FloatingThemeButton: React.FC<{ onOpenModal?: () => void; onOpenThemeModal?: () => void }> = ({ onOpenModal, onOpenThemeModal }) => {
  const { currentThemeConfig } = useTheme();
  const handleOpen = onOpenModal || onOpenThemeModal || (() => {});

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
      <button
        onClick={handleOpen}
        className="group inline-flex items-center space-x-2 px-4 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl border border-slate-700 transition-all hover:scale-105 cursor-pointer"
        title="Change Theme & Appearance"
      >
        <Palette className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">Theme: {currentThemeConfig.name}</span>
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
      </button>
    </div>
  );
};
