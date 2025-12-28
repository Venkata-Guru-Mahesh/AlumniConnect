import { Bell, User, ChevronDown, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface TopNavProps {
  userRole: string;
  userName: string;
}

export default function TopNav({ userRole, userName }: TopNavProps) {
  return (
    <div className="h-16 border-b bg-white px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a8a] to-[#0891b2] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <div>
            <h1 className="font-['Poppins'] font-bold text-[#1e3a8a]">AlumniConnect</h1>
            <p className="text-xs text-gray-500">SIH25017</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
        </div>

        <div className="h-8 w-px bg-gray-200"></div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0891b2] to-[#10b981] rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">{userName}</p>
                <p className="text-xs text-gray-500 capitalize">{userRole}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link to="/settings" className="cursor-pointer">
                <User className="w-4 h-4 mr-2" />
                Profile Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/" className="cursor-pointer text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
