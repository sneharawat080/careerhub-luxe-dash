import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Activity, 
  Send, 
  Eye, 
  Calendar, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'application' | 'view' | 'interview' | 'message' | 'achievement';
  title: string;
  description: string;
  timestamp: string;
  company?: string;
  status?: 'success' | 'pending' | 'info';
}

export const ActivityFeed = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'application',
      title: 'Applied to Senior React Developer',
      description: 'Your application was successfully submitted',
      timestamp: '2 hours ago',
      company: 'Google',
      status: 'success'
    },
    {
      id: '2',
      type: 'view',
      title: 'Resume viewed',
      description: 'Microsoft recruiter viewed your profile',
      timestamp: '4 hours ago',
      company: 'Microsoft',
      status: 'info'
    },
    {
      id: '3',
      type: 'interview',
      title: 'Interview scheduled',
      description: 'Technical interview confirmed for tomorrow',
      timestamp: '6 hours ago',
      company: 'Amazon',
      status: 'pending'
    },
    {
      id: '4',
      type: 'message',
      title: 'New mentor message',
      description: 'Sarah from Tech Mentors sent you feedback',
      timestamp: '1 day ago',
      status: 'info'
    },
    {
      id: '5',
      type: 'achievement',
      title: 'Profile milestone reached',
      description: 'Your profile is now 85% complete!',
      timestamp: '2 days ago',
      status: 'success'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'application': return <Send className="h-4 w-4" />;
      case 'view': return <Eye className="h-4 w-4" />;
      case 'interview': return <Calendar className="h-4 w-4" />;
      case 'message': return <MessageSquare className="h-4 w-4" />;
      case 'achievement': return <TrendingUp className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-success';
      case 'pending': return 'text-warning';
      case 'info': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'success': return 'default';
      case 'pending': return 'secondary';
      case 'info': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-accent" />
            <span>Recent Activity</span>
          </CardTitle>
          <Button variant="ghost" size="sm">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-smooth animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline indicator */}
              <div className="relative">
                <div className={`p-2 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 ${getStatusColor(activity.status || 'info')}`}>
                  {getActivityIcon(activity.type)}
                </div>
                {index !== activities.length - 1 && (
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-border"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-foreground truncate">
                    {activity.title}
                  </h4>
                  <div className="flex items-center space-x-2">
                    {activity.status && (
                      <Badge variant={getBadgeVariant(activity.status)} className="text-xs">
                        {activity.status}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {activity.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{activity.timestamp}</span>
                    {activity.company && (
                      <>
                        <span>•</span>
                        <span className="font-medium">{activity.company}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Company Avatar */}
              {activity.company && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs bg-gradient-primary text-primary-foreground">
                    {activity.company.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center pt-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Load more activities
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};