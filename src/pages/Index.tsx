
import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleResumeDownload = () => {
    const resumeUrl = localStorage.getItem('resumeUrl');
    if (resumeUrl) {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = localStorage.getItem('resumeName') || 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({
        title: "Download Started",
        description: "Your resume is being downloaded.",
      });
    } else {
      toast({
        title: "No Resume Available",
        description: "Please upload your resume first.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero onResumeDownload={handleResumeDownload} />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
