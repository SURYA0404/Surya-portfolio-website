
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Skills = () => {
  const skills = {
    'Programming Languages': ['Core Java', 'JavaScript'],
    'Frameworks & Libraries': ['Spring Boot', 'React.js (Basic)'],
    'Frontend Technologies': ['HTML5', 'CSS3', 'JSP', 'Bootstrap'],
    'Database & Tools': ['MySQL', 'JDBC', 'Postman', 'GitHub', 'Cloudinary']
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Technologies and tools I work with as a Software Engineer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-center">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skillList.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="w-full justify-center py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center space-x-4">
                <Badge variant="outline" className="text-sm">Internship at Besant Technologies</Badge>
                <Badge variant="outline" className="text-sm">Fresh Graduate</Badge>
                <Badge variant="outline" className="text-sm">Ready to Learn & Grow</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
