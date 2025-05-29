
import { Award, Calendar, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Certificates = () => {
  const certificates = [
    {
      title: "Java Full Stack Training",
      institution: "Besant Technologies",
      date: "January 2025",
      description: "Comprehensive training in Java Full Stack development covering Core Java, Spring Boot, MySQL, and web technologies.",
      image: "/lovable-uploads/eb060a6a-8530-40dc-bba8-8a67a29f57a4.png",
      category: "Professional Training",
      skills: ["Core Java", "Spring Boot", "MySQL", "Full Stack Development"]
    },
    {
      title: "Web Development Internship",
      institution: "Global Tech Computer Education",
      date: "January 2023 - February 2023",
      description: "Certificate of Internship in Web Development Technologies, Chennai. Demonstrated enthusiastic attitude for learning and dependable work ethic.",
      image: "/lovable-uploads/4da2bca5-dbee-40ea-a471-ed53ba014d60.png",
      category: "Internship",
      skills: ["Web Development", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "C for Beginners",
      institution: "Great Learning Academy",
      date: "February 2023",
      description: "Successfully completed free online course covering fundamentals of C programming language.",
      image: "/lovable-uploads/e9b0016c-1771-41aa-8089-f358b29f689a.png",
      category: "Online Course",
      skills: ["C Programming", "Programming Fundamentals"]
    },
    {
      title: "Introduction to JavaScript",
      institution: "Great Learning Academy",
      date: "February 2023",
      description: "Completed comprehensive JavaScript course covering core concepts and practical applications.",
      image: "/lovable-uploads/08b1ffe3-f0e5-481b-a7c0-ac32ab681121.png",
      category: "Online Course",
      skills: ["JavaScript", "Web Development", "Programming"]
    },
    {
      title: "React JS Tutorial",
      institution: "Great Learning Academy",
      date: "February 2023",
      description: "Mastered React.js fundamentals and component-based development through hands-on tutorial.",
      image: "/lovable-uploads/51cd5c95-01c3-45e4-92c7-aeeecdeed376.png",
      category: "Online Course",
      skills: ["React.js", "Frontend Development", "JavaScript"]
    },
    {
      title: "Google Data Analytics Professional Certificate",
      institution: "Coursera",
      date: "March 2023",
      description: "Completed 8-course professional certificate program covering data analytics tools including spreadsheets, SQL, Tableau, and R programming.",
      image: "/lovable-uploads/c791e84c-bf59-49c4-ac04-c42cc59fb0d0.png",
      category: "Professional Certificate",
      skills: ["Data Analytics", "SQL", "Tableau", "R Programming", "Data Visualization"]
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Achievements</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My educational journey and professional certifications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">{cert.category}</Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Building className="h-4 w-4" />
                  <span>{cert.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
            <CardHeader>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl">Achievement Summary</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">6</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Certificates Earned</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Professional Training</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Industry Internship</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
