import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  FileText, 
  PlusCircle, 
  MessageCircle, 
  BarChart3, 
  Bookmark,
  Sparkles,
  Upload,
  Target,
  TrendingUp
} from 'lucide-react';

export const QuickActions = () => {
  const [resumeProgress] = useState(85);
  const [profileStrength] = useState(78);

  const quickActionButtons = [
    {
      icon: <Search className="h-5 w-5" />,
      label: 'Apply to Jobs',
      description: '15 new matches',
      variant: 'accent' as const,
      action: () => console.log('Apply to jobs')
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: 'Update Resume',
      description: 'Last updated 3 days ago',
      variant: 'secondary' as const,
      action: () => console.log('Update resume')
    },
    {
      icon: <PlusCircle className="h-5 w-5" />,
      label: 'Add Project',
      description: 'Showcase your work',
      variant: 'default' as const,
      action: () => console.log('Add project')
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'Chat with Mentor',
      description: 'Get career advice',
      variant: 'success' as const,
      action: () => console.log('Chat with mentor')
    }
  ];

  const secondaryActions = [
    {
      icon: <BarChart3 className="h-4 w-4" />,
      label: 'View Analytics',
      count: null
    },
    {
      icon: <Bookmark className="h-4 w-4" />,
      label: 'Saved Jobs',
      count: 12
    }
  ];

  return (
    <div className="space-y-6">
      {/* Main Quick Actions */}
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActionButtons.map((action, index) => (
              <Button
                key={action.label}
                variant={action.variant}
                className="h-auto p-4 flex flex-col items-start space-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={action.action}
              >
                <div className="flex items-center space-x-2">
                  {action.icon}
                  <span className="font-medium">{action.label}</span>
                </div>
                <span className="text-xs opacity-80">{action.description}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resume & Profile Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resume Update Suggestion */}
        <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Upload className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Resume Enhancement</h3>
                  <p className="text-sm text-muted-foreground">Boost your visibility</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                {resumeProgress}% Complete
              </Badge>
            </div>
            <Progress value={resumeProgress} className="mb-4" />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="accent" size="sm" className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Enhance Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Resume Enhancement</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Our AI will analyze your resume and suggest improvements to increase your match rate.
                  </div>
                  <Button variant="premium" className="w-full">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Upgrade to Pro for AI Analysis
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Profile Strength */}
        <Card className="animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Target className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Profile Strength</h3>
                  <p className="text-sm text-muted-foreground">Complete your profile</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-success">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">+5%</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Overall Score</span>
                <span className="text-2xl font-bold text-foreground">{profileStrength}%</span>
              </div>
              <Progress value={profileStrength} className="mb-4" />
              <div className="flex space-x-2">
                <Badge variant="outline" className="text-xs">Skills ✓</Badge>
                <Badge variant="outline" className="text-xs border-muted">Portfolio</Badge>
                <Badge variant="outline" className="text-xs border-muted">Certifications</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Actions */}
      <Card className="animate-fade-in">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-3">
            {secondaryActions.map((action) => (
              <Button
                key={action.label}
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2"
              >
                {action.icon}
                <span>{action.label}</span>
                {action.count && (
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {action.count}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};