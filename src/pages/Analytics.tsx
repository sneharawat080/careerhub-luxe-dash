import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Eye, Send, Calendar, Users } from 'lucide-react';
import { DashboardHeader } from '@/components/DashboardHeader';

const Analytics = () => {
  const metrics = [
    { title: 'Applications Sent', value: 45, change: '+12%', trend: 'up', icon: Send },
    { title: 'Profile Views', value: 234, change: '+8%', trend: 'up', icon: Eye },
    { title: 'Interviews Scheduled', value: 8, change: '-2%', trend: 'down', icon: Calendar },
    { title: 'Network Connections', value: 156, change: '+15%', trend: 'up', icon: Users }
  ];

  const recentActivity = [
    { action: 'Applied to Senior Developer at Google', date: '2 hours ago', status: 'pending' },
    { action: 'Profile viewed by Meta recruiter', date: '5 hours ago', status: 'positive' },
    { action: 'Interview scheduled with Netflix', date: '1 day ago', status: 'positive' },
    { action: 'Application rejected by Apple', date: '2 days ago', status: 'negative' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Career Analytics</h1>
          <p className="text-muted-foreground">Track your job search progress and optimization opportunities</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                    </div>
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex items-center mt-2">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.change}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Applications Goal</span>
                  <span>45/50</span>
                </div>
                <Progress value={90} />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Interview Target</span>
                  <span>8/10</span>
                </div>
                <Progress value={80} />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Profile Optimization</span>
                  <span>85%</span>
                </div>
                <Progress value={85} />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Skill Development</span>
                  <span>70%</span>
                </div>
                <Progress value={70} />
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.date}</p>
                    </div>
                    <Badge 
                      variant={
                        activity.status === 'positive' ? 'default' :
                        activity.status === 'negative' ? 'destructive' :
                        'secondary'
                      }
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Rate Chart */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Application Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <p className="text-muted-foreground">Chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;