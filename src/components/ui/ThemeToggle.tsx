import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center w-8 h-8 rounded-full border border-border-neutral bg-canvas text-text-secondary hover:text-text-primary hover:bg-canvas-card transition-all focus:outline-none focus:ring-2 focus:ring-brand-green/30 ${className}`}
      title={theme === 'light' ? 'Beralih ke Dark Mode' : 'Beralih ke Light Mode'}
      aria-label="Toggle tema tampilan"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-text-secondary transition-transform duration-200 hover:rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-brand-green transition-transform duration-200 hover:rotate-45" />
      )}
    </button>
  );
};
