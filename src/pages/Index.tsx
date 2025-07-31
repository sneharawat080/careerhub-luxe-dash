import { DashboardHeader } from '@/components/DashboardHeader';
import { StatisticsPanel } from '@/components/StatisticsPanel';
import { QuickActions } from '@/components/QuickActions';
import { UpcomingEvents } from '@/components/UpcomingEvents';
import { ActivityFeed } from '@/components/ActivityFeed';
import { MonetizationPanel } from '@/components/MonetizationPanel';
import { LearningCarousel } from '@/components/LearningCarousel';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import heroImage from '@/assets/career-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <DashboardHeader />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Career Growth" 
            className="w-full h-64 object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Accelerate Your Career Journey
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Track applications, optimize your resume, and connect with opportunities that match your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Button variant="secondary" size="lg">
              Find Jobs
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Update Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Statistics Panel */}
        <div className="mb-8">
          <StatisticsPanel />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <QuickActions />
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Events */}
          <div className="lg:col-span-2">
            <UpcomingEvents />
          </div>
          
          {/* Right Column - Activity Feed */}
          <div>
            <ActivityFeed />
          </div>
        </div>

        {/* Monetization Panel */}
        <div className="mb-8">
          <MonetizationPanel />
        </div>

        {/* Learning Carousel */}
        <div className="mb-8">
          <LearningCarousel />
        </div>
      </div>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <Button 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-career-lg animate-pulse-glow"
          variant="accent"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
