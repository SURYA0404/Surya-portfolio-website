
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Resume = () => {
  const handleResumeDownload = () => {
    // This would typically link to your actual resume file
    // For now, it shows a message that resume is not available
    window.open('#', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Download my resume to learn more about my experience and qualifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Fresh Computer Science graduate with hands-on experience in Java development 
                  and backend technologies. Completed internship at Besant Technologies and 
                  developed multiple full-stack projects.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-semibold mb-2">Education</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Bachelor's in Computer Science<br/>
                      Recent Graduate
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Experience</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Internship at Besant Technologies<br/>
                      Java Development Focus
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700" 
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume PDF
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Click to download my complete resume
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
