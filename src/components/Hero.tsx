
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onResumeDownload: () => void;
}

export const Hero = ({ onResumeDownload }: HeroProps) => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Specialized in Core Java, Spring Boot, MySQL, and React.js. 
            Building scalable web applications and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={onResumeDownload}>
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
