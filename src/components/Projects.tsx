
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Projects = () => {
  const projects = [
    {
      title: "E-Waste Facility Locator",
      description: "A full-stack web application designed to help users locate nearby e-waste drop-off points. The system promotes environmental sustainability by connecting users with authorized e-waste disposal centers, ensuring safe and responsible handling of electronic waste.",
      tech: ['Core Java', 'Spring Boot', 'MySQL', 'React.js', 'HTML/CSS', 'JavaScript'],
      github: "#",
      live: "#",
      category: "Full-Stack Project"
    },
    {
      title: "Job & Internship Portal",
      description: "Comprehensive full-stack application featuring user authentication, Excel data upload functionality, real-time analytics dashboard, and separate admin panels. Built to streamline the job application process for both candidates and recruiters.",
      tech: ['Spring Boot', 'MySQL', 'React.js', 'Excel Integration', 'Authentication', 'Admin Dashboard'],
      github: "#",
      live: "#",
      category: "Full-Stack Project"
    },
    {
      title: "Library Management System",
      description: "Academic project developed using Core Java and MySQL with JDBC connectivity. Features include book inventory management, user registration system, and automated tracking of borrowing and return processes.",
      tech: ['Core Java', 'MySQL', 'JDBC', 'Database Design'],
      github: "#",
      live: "#",
      category: "Academic Project"
    },
    {
      title: "Banking Application",
      description: "Console-based banking system demonstrating object-oriented programming concepts. Implements account management, transaction processing, and secure banking operations with proper data persistence.",
      tech: ['Core Java', 'MySQL', 'JDBC', 'OOP Concepts'],
      github: "#",
      live: "#",
      category: "Academic Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here are some key projects that showcase my technical skills and learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">{project.category}</Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">{tech}</Badge>
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
  );
};
