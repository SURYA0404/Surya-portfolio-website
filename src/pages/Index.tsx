import { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Github, Linkedin, ExternalLink, Menu, X, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Load resume from localStorage on component mount
    const savedResumeUrl = localStorage.getItem('resumeUrl');
    if (savedResumeUrl) {
      setResumeUrl(savedResumeUrl);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const skills = {
    Frontend: ['React.js', 'JSP', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    Backend: ['Core Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Maven'],
    Database: ['MySQL', 'JDBC', 'Hibernate', 'Database Design'],
    Tools: ['Postman', 'GitHub', 'Cloudinary', 'VS Code', 'IntelliJ IDEA', 'Git']
  };

  const projects = [
    {
      title: "E-Waste Facility Locator",
      description: "The project tackles the increasing issue of electronic waste by providing a solution for proper disposal. It links users to authorized e-waste disposal centers, ensuring safe and responsible handling of electronic waste. By encouraging proper disposal, the initiative supports environmentally sustainable e-waste practices.",
      tech: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs', 'Full Stack'],
      github: "#",
      live: "#"
    },
    {
      title: "Online Voting System",
      description: "The system allows registered users to vote remotely in a controlled and secure environment. It eliminates manual errors, long queues, and geographical barriers, making voting more efficient. The platform maintains transparency and accuracy while safeguarding the election process.",
      tech: ['Full Stack', 'Spring Boot', 'React.js', 'MySQL', 'Security'],
      github: "#",
      live: "#"
    },
    {
      title: "Library Management System",
      description: "Developed a system using Java, MySQL, and JDBC to handle book inventory, user registrations, and track borrowing/returns. Ensured smooth and intuitive functionality for seamless library management.",
      tech: ['Core Java', 'MySQL', 'JDBC', 'Database Design'],
      github: "#",
      live: "#"
    },
    {
      title: "Bank Application",
      description: "A comprehensive banking application developed with Core Java and MySQL. Features account management, transaction processing, and secure banking operations with JDBC connectivity.",
      tech: ['Core Java', 'MySQL', 'JDBC', 'Banking System'],
      github: "#",
      live: "#"
    },
    {
      title: "Food Ordering System",
      description: "A food ordering application built with Core Java and MySQL. Enables customers to browse menus, place orders, and manage food delivery services with efficient database management using JDBC.",
      tech: ['Core Java', 'MySQL', 'JDBC', 'Order Management'],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
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

        {/* Hero Section */}
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
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleResumeDownload}>
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

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                I am a dedicated and detail-oriented software engineer with a strong passion for building efficient and user-friendly applications. 
                As a developer, I enjoy solving problems, learning new technologies, and contributing to impactful projects through clean and maintainable code.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solver</Badge>
                  <Badge variant="secondary">Team Player</Badge>
                  <Badge variant="secondary">Continuous Learner</Badge>
                  <Badge variant="secondary">Innovation Focused</Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Core Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <Badge>Core Java</Badge>
                      <Badge>Spring Boot</Badge>
                      <Badge>React.js</Badge>
                      <Badge>MySQL</Badge>
                      <Badge>REST APIs</Badge>
                      <Badge>JSP</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Focus Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Full Stack Web Development</li>
                      <li>• Database Design & Optimization</li>
                      <li>• API Development & Integration</li>
                      <li>• Responsive UI/UX Design</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Here are some of my recent projects that showcase my technical skills
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Technologies and tools I work with
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillList.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="w-full justify-center">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section with Upload Functionality */}
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

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Let's discuss your next project or opportunity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:savioursurya2001@gmail.com" className="text-blue-600 hover:underline">
                        savioursurya2001@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <Linkedin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/surya-c-992b38232/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        linkedin.com/in/surya-c-992b38232
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <Github className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a href="https://github.com/SURYA0404" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        github.com/SURYA0404
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://www.linkedin.com/in/surya-c-992b38232/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/SURYA0404" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="mailto:savioursurya2001@gmail.com">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Send Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you soon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                    />
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 Full Stack Developer Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
