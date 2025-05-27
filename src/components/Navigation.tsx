
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navigation = ({ darkMode, toggleDarkMode }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl">Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#resume" className="hover:text-blue-600 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Home</a>
            <a href="#about" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">About</a>
            <a href="#projects" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Projects</a>
            <a href="#skills" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Skills</a>
            <a href="#resume" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Resume</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};
