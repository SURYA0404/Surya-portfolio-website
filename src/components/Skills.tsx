
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Skills = () => {
  const skills = {
    Frontend: ['React.js', 'JSP', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    Backend: ['Core Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Maven'],
    Database: ['MySQL', 'JDBC', 'Hibernate', 'Database Design'],
    Tools: ['Postman', 'GitHub', 'Cloudinary', 'VS Code', 'IntelliJ IDEA', 'Git']
  };

  return (
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
  );
};
