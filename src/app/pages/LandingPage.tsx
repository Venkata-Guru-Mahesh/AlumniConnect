import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, Building2, TrendingUp, Target, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-900" />
            <span className="font-semibold text-xl text-slate-900">AlumniConnect</span>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button onClick={() => navigate('/register')}>
              Register
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl mb-6 text-slate-900">
            Digital Platform for Centralized Alumni Data Management and Engagement
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            SIH25017 - Connecting Students, Alumni, and Institutions
          </p>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            A comprehensive platform for managing alumni data, facilitating mentorship, 
            analyzing career progression, and fostering meaningful connections.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          <Card className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-blue-900 group" 
                onClick={() => navigate('/student/dashboard')}>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-900 transition-colors">
              <GraduationCap className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl mb-3 text-slate-900">Student</h3>
            <p className="text-slate-600 mb-6">
              Connect with alumni mentors, get career guidance, and improve your resume
            </p>
            <Button className="w-full bg-blue-900 hover:bg-blue-800">
              Access Student Portal
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-teal-600 group" 
                onClick={() => navigate('/alumni/dashboard')}>
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors">
              <Users className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl mb-3 text-slate-900">Alumni</h3>
            <p className="text-slate-600 mb-6">
              Give back to your alma mater, mentor students, and stay connected with your network
            </p>
            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              Access Alumni Portal
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-green-600 group" 
                onClick={() => navigate('/management/dashboard')}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
              <Building2 className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl mb-3 text-slate-900">College Management</h3>
            <p className="text-slate-600 mb-6">
              Track alumni engagement, generate reports, and manage institutional data
            </p>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Access Management Portal
            </Button>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-4 text-slate-900">Platform Benefits</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Comprehensive tools designed to strengthen the connection between students, 
            alumni, and institutions
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-slate-900">Mentorship Matching</h3>
              <p className="text-slate-600">
                AI-powered system connects students with relevant alumni mentors based on career goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-slate-900">Resume Analysis</h3>
              <p className="text-slate-600">
                Advanced ATS score generation with detailed feedback and career suggestions
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-slate-900">Engagement Tracking</h3>
              <p className="text-slate-600">
                Comprehensive analytics and reporting for institutional decision-making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6" />
            <span className="font-semibold text-lg">AlumniConnect</span>
          </div>
          <p className="text-slate-400 mb-2">Smart India Hackathon 2025 - Problem Statement SIH25017</p>
          <p className="text-slate-500 text-sm">
            © 2025 AlumniConnect. All rights reserved. | Built for educational institutions
          </p>
        </div>
      </footer>
    </div>
  );
}
