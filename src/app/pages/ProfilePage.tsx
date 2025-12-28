import DashboardLayout from '../components/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { MapPin, Briefcase, GraduationCap, Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function ProfilePage() {
  return (
    <DashboardLayout role="student" userName="Alex Kumar">
      <div className="space-y-6">
        <Card className="p-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl">
              AK
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl mb-2 text-slate-900">Alex Kumar</h1>
                  <p className="text-lg text-slate-600">B.Tech Computer Science • 3rd Year</p>
                </div>
                <Button>Edit Profile</Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail className="w-4 h-4" />
                  <span>alex.kumar@college.edu</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone className="w-4 h-4" />
                  <span>+1 555-123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <GraduationCap className="w-4 h-4" />
                  <span>Expected Graduation: 2026</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl mb-4 text-slate-900">About</h2>
            <p className="text-slate-600 mb-4">
              Passionate computer science student with interests in machine learning and data science. 
              Currently seeking mentorship to explore career paths in AI and software engineering.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl mb-4 text-slate-900">Skills & Interests</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-slate-700">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'Machine Learning'].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-slate-700">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {['AI/ML', 'Web Development', 'Data Science', 'Cloud Computing'].map((interest) => (
                    <Badge key={interest} className="bg-blue-100 text-blue-700 border-0">{interest}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl mb-4 text-slate-900">Academic Background</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b last:border-0">
              <GraduationCap className="w-5 h-5 text-blue-900 mt-1" />
              <div className="flex-1">
                <h3 className="font-medium text-slate-900">Bachelor of Technology - Computer Science</h3>
                <p className="text-sm text-slate-600">XYZ College of Engineering</p>
                <p className="text-sm text-slate-500">2023 - 2026 (Expected)</p>
                <p className="text-sm text-slate-600 mt-1">CGPA: 8.5/10</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl mb-4 text-slate-900">Mentorship Goals</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-900 mt-1">•</span>
              <span>Learn about career paths in machine learning and AI</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-900 mt-1">•</span>
              <span>Improve resume and interview skills</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-900 mt-1">•</span>
              <span>Gain insights into working at top tech companies</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-900 mt-1">•</span>
              <span>Understand graduate school vs industry trade-offs</span>
            </li>
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  );
}
