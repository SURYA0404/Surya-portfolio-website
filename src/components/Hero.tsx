
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1hGrSI5tJPLQPZ_vthUodh6Ne1ukm_eJT/view', '_blank');
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/dcdce18c-48df-4272-8768-55df0abfb9e0.png"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-700 shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Software Engineer
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Java Full Stack Developer (Fresher)
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Hello! I'm an enthusiastic and motivated individual aspiring to build a successful career as a Full Stack Developer. 
            I'm passionate about learning, exploring new technologies, and solving real-world problems through innovative web applications. 
            As a fresher, I bring a strong commitment to growth, teamwork, and continuous improvement. I look forward to contributing to 
            impactful projects and evolving as a professional in the tech industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={handleResumeDownload}>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
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
