
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Projects = () => {
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
  );
};
