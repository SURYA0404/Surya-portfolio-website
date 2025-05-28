
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Projects = () => {
  const projects = [
    {
      title: "Online Voting System",
      description: "The system allows registered users to vote remotely in a controlled and secure environment. It eliminates manual errors, long queues, and geographical barriers, making voting more efficient. The platform maintains transparency and accuracy while safeguarding the election process.",
      tech: ['Full Stack Development', 'Spring Boot', 'React.js', 'MySQL', 'Security Features'],
      github: "#",
      live: "#",
      category: "Full-Stack Project"
    },
    {
      title: "Food Ordering System",
      description: "A comprehensive food ordering application that allows users to browse menus, place orders, and manage their food delivery experience. Built with robust backend architecture using Core Java and MySQL database for efficient data management.",
      tech: ['Core Java', 'MySQL', 'JDBC', 'Database Design'],
      github: "#",
      live: "#",
      category: "Backend Project"
    },
    {
      title: "Library Management System",
      description: "Developed a system using Java, MySQL, and JDBC to handle book inventory, user registrations, and track borrowing/returns. Ensured smooth and intuitive functionality for seamless library management.",
      tech: ['Core Java', 'MySQL', 'JDBC', 'Database Design'],
      github: "#",
      live: "#",
      category: "Backend Project"
    },
    {
      title: "Bank Application",
      description: "A robust banking application built with Core Java and MySQL. The system provides essential banking functionalities with secure data management and efficient transaction processing.",
      tech: ['Core Java', 'MySQL', 'JDBC', 'Database Management'],
      github: "#",
      live: "#",
      category: "Backend Project"
    },
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
