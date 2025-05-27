
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const About = () => {
  return (
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
  );
};
