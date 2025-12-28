import { Home, Users, MessageCircle, Calendar, FileText, BarChart3, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from './ui/utils';

interface SideNavProps {
  role: 'student' | 'alumni' | 'management';
}

export default function SideNav({ role }: SideNavProps) {
  const location = useLocation();

  const studentLinks = [
    { icon: Home, label: 'Dashboard', path: '/student/dashboard' },
    { icon: Users, label: 'Alumni Network', path: '/alumni-listing' },
    { icon: MessageCircle, label: 'Mentorship', path: '/mentorship' },
    { icon: FileText, label: 'Resume Analysis', path: '/resume-analysis' },
    { icon: Calendar, label: 'Events', path: '/events' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const alumniLinks = [
    { icon: Home, label: 'Dashboard', path: '/alumni/dashboard' },
    { icon: Users, label: 'Alumni Network', path: '/alumni-listing' },
    { icon: MessageCircle, label: 'Mentorship', path: '/mentorship' },
    { icon: Calendar, label: 'Events', path: '/events' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const managementLinks = [
    { icon: Home, label: 'Dashboard', path: '/management/dashboard' },
    { icon: Users, label: 'Alumni Network', path: '/alumni-listing' },
    { icon: MessageCircle, label: 'Mentorship', path: '/mentorship' },
    { icon: Calendar, label: 'Events', path: '/events' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const links = role === 'student' ? studentLinks : role === 'alumni' ? alumniLinks : managementLinks;

  return (
    <div className="w-64 bg-white h-full overflow-y-auto">
      <nav className="p-4 space-y-1">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                isActive
                  ? 'bg-gradient-to-r from-[#1e3a8a] to-[#0891b2] text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <link.icon className={cn('w-5 h-5', isActive ? 'text-white' : 'text-gray-500')} />
              <span className="font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
