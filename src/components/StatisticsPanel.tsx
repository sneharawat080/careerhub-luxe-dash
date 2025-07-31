import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Eye, Calendar, Send, MessageSquare } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trending: 'up' | 'down';
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'accent' | 'success';
}

const StatCard = ({ title, value, change, trending, icon, color }: StatCardProps) => {
  const colorClasses = {
    primary: 'from-primary to-primary-hover',
    secondary: 'from-secondary to-secondary-hover',
    accent: 'from-accent to-accent-glow',
    success: 'from-success to-success'
  };

  return (
    <Card className="relative overflow-hidden hover:shadow-career-md transition-all duration-smooth hover:-translate-y-1 animate-fade-in">
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-5`} />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClasses[color]} bg-opacity-10`}>
            {icon}
          </div>
          <div className={`flex items-center space-x-1 text-sm ${
            trending === 'up' ? 'text-success' : 'text-destructive'
          }`}>
            {trending === 'up' ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span className="font-medium">{change}</span>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-1">{value}</h3>
          <p className="text-muted-foreground text-sm">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export const StatisticsPanel = () => {
  const stats = [
    {
      title: 'Applications Sent',
      value: '47',
      change: '+12%',
      trending: 'up' as const,
      icon: <Send className="h-6 w-6 text-primary" />,
      color: 'primary' as const
    },
    {
      title: 'Resume Views',
      value: '234',
      change: '+8%',
      trending: 'up' as const,
      icon: <Eye className="h-6 w-6 text-accent" />,
      color: 'accent' as const
    },
    {
      title: 'Interviews Scheduled',
      value: '6',
      change: '+2%',
      trending: 'up' as const,
      icon: <Calendar className="h-6 w-6 text-success" />,
      color: 'success' as const
    },
    {
      title: 'Mentor Chats',
      value: '12',
      change: '+5%',
      trending: 'up' as const,
      icon: <MessageSquare className="h-6 w-6 text-secondary" />,
      color: 'secondary' as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={stat.title} style={{ animationDelay: `${index * 100}ms` }}>
          <StatCard {...stat} />
        </div>
      ))}
    </div>
  );
};