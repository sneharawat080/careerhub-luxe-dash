import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Video, Users, ArrowRight } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  type: 'interview' | 'networking' | 'webinar' | 'deadline';
  date: string;
  time: string;
  location?: string;
  priority: 'high' | 'medium' | 'low';
  company?: string;
  attendees?: number;
}

export const UpcomingEvents = () => {
  const events: Event[] = [
    {
      id: '1',
      title: 'Technical Interview',
      type: 'interview',
      date: 'Tomorrow',
      time: '2:00 PM',
      location: 'Google Office',
      priority: 'high',
      company: 'Google'
    },
    {
      id: '2',
      title: 'React Developer Webinar',
      type: 'webinar',
      date: 'March 15',
      time: '11:00 AM',
      priority: 'medium',
      attendees: 234
    },
    {
      id: '3',
      title: 'Application Deadline',
      type: 'deadline',
      date: 'March 18',
      time: '11:59 PM',
      priority: 'high',
      company: 'Microsoft'
    },
    {
      id: '4',
      title: 'Tech Networking Event',
      type: 'networking',
      date: 'March 20',
      time: '6:00 PM',
      location: 'Tech Hub Downtown',
      priority: 'low',
      attendees: 45
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'warning';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'interview': return <Users className="h-4 w-4" />;
      case 'webinar': return <Video className="h-4 w-4" />;
      case 'networking': return <Users className="h-4 w-4" />;
      case 'deadline': return <Clock className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getActionButton = (event: Event) => {
    switch (event.type) {
      case 'interview':
        return (
          <Button variant="accent" size="sm">
            <Video className="mr-2 h-4 w-4" />
            Join Call
          </Button>
        );
      case 'webinar':
        return (
          <Button variant="secondary" size="sm">
            Register
          </Button>
        );
      case 'networking':
        return (
          <Button variant="outline" size="sm">
            View Details
          </Button>
        );
      case 'deadline':
        return (
          <Button variant="default" size="sm">
            Apply Now
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-accent" />
            <span>Upcoming Events</span>
          </CardTitle>
          <Button variant="ghost" size="sm">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-career-sm transition-all duration-smooth hover:border-accent/30 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  {getTypeIcon(event.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-foreground">{event.title}</h4>
                    <Badge 
                      variant={getPriorityColor(event.priority) as any}
                      className="text-xs"
                    >
                      {event.priority}
                    </Badge>
                  </div>
                  {event.company && (
                    <p className="text-sm text-muted-foreground mb-1">{event.company}</p>
                  )}
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{event.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{event.time}</span>
                    </span>
                    {event.location && (
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </span>
                    )}
                    {event.attendees && (
                      <span className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{event.attendees} attending</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getActionButton(event)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};