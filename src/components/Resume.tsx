
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

export const Resume = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  useEffect(() => {
    // Load resume from localStorage on component mount
    const savedResumeUrl = localStorage.getItem('resumeUrl');
    if (savedResumeUrl) {
      setResumeUrl(savedResumeUrl);
    }
  }, []);

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      const url = URL.createObjectURL(file);
      setResumeUrl(url);
      // Save to localStorage for persistence
      localStorage.setItem('resumeUrl', url);
      localStorage.setItem('resumeName', file.name);
      toast({
        title: "Resume Uploaded!",
        description: "Your resume has been successfully uploaded and is now available for download.",
      });
    } else {
      toast({
        title: "Invalid File",
        description: "Please upload a PDF file only.",
        variant: "destructive",
      });
    }
  };

  const handleResumeDownload = () => {
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

  const handleRemoveResume = () => {
    setResumeFile(null);
    setResumeUrl(null);
    localStorage.removeItem('resumeUrl');
    localStorage.removeItem('resumeName');
    toast({
      title: "Resume Removed",
      description: "Your resume has been removed successfully.",
    });
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {resumeUrl ? 'Download my resume or upload a new version' : 'Upload your resume to make it available for download'}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Resume Management</CardTitle>
              <CardDescription className="text-center">
                Upload your PDF resume to make it available for visitors to download
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={handleResumeUpload}
                  className="max-w-md"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Only PDF files are accepted
                </p>
              </div>
              
              {resumeUrl && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-700 dark:text-green-300 font-medium">
                        Resume uploaded successfully
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleRemoveResume}
                      className="text-red-600 border-red-300 hover:bg-red-50"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700" 
              onClick={handleResumeDownload}
              disabled={!resumeUrl}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume PDF
            </Button>
            {resumeUrl && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Resume file: {localStorage.getItem('resumeName') || 'resume.pdf'}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
