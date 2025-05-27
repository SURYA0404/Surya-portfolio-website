
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I am a fresh graduate and self-motivated Software Engineer with a strong passion for backend development. 
            Having recently completed my internship at Besant Technologies, I am eager to learn, grow, and contribute 
            to innovative software solutions. I believe in writing clean, efficient code and am always excited to 
            take on new challenges in the ever-evolving tech landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Professional Qualities</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Self-Motivated</Badge>
              <Badge variant="secondary">Quick Learner</Badge>
              <Badge variant="secondary">Team Collaborator</Badge>
              <Badge variant="secondary">Problem Solver</Badge>
              <Badge variant="secondary">Backend Focused</Badge>
              <Badge variant="secondary">Fresh Graduate</Badge>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Recently completed internship at <strong>Besant Technologies</strong>, where I gained hands-on 
              experience in full-stack development and worked on real-world projects using modern technologies.
            </p>
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
                  <Badge>MySQL</Badge>
                  <Badge>React.js</Badge>
                  <Badge>JavaScript</Badge>
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
                  <li>• Backend Development with Java & Spring Boot</li>
                  <li>• Database Design & Management</li>
                  <li>• REST API Development</li>
                  <li>• Full-Stack Web Applications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
