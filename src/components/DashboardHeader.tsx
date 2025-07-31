import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, Bell, Target, User, Settings, LogOut, Briefcase, FileText, BarChart3, FolderOpen, BookOpen } from 'lucide-react';

export const DashboardHeader = () => {
  const location = useLocation();
  const [notifications] = useState([
    { id: 1, text: "New job match: Senior Developer", type: "job", time: "2m ago" },
    { id: 2, text: "Resume viewed by Google", type: "view", time: "1h ago" },
    { id: 3, text: "Interview reminder: Tomorrow 2PM", type: "interview", time: "3h ago" }
  ]);

  const navItems = [
    { path: '/jobs', label: 'Jobs', icon: Briefcase },
    { path: '/resume', label: 'Resume', icon: FileText },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/learning', label: 'Learning', icon: BookOpen }
  ];

  return (
    <div className="bg-card border-b border-border sticky top-0 z-50 shadow-career-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Welcome & Goal */}
          <div className="flex items-center space-x-6">
            <div>
              <Link to="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
                CareerHub
              </Link>
              <Button variant="outline" size="sm" className="mt-2 animate-fade-in">
                <Target className="mr-2 h-4 w-4" />
                Career Goal: Senior Developer
              </Button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button 
                    variant={isActive ? "default" : "ghost"} 
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Center - Search */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies, or skills..."
                className="pl-10 bg-background border-input hover:border-accent transition-colors"
              />
            </div>
          </div>

          {/* Right Section - Notifications & Profile */}
          <div className="flex items-center space-x-4">
            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative animate-pulse-glow">
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs">
                      {notifications.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-card shadow-career-lg border-border">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold text-foreground">Notifications</h3>
                </div>
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="p-4 cursor-pointer hover:bg-muted">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm text-foreground">{notification.text}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-accent">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card shadow-career-lg border-border">
                <Link to="/profile">
                  <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};