import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  BookOpen, 
  PlayCircle, 
  Clock, 
  Star, 
  TrendingUp,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';

interface LearningItem {
  id: string;
  title: string;
  type: 'course' | 'article' | 'video' | 'certification';
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  enrollees: number;
  tags: string[];
  progress?: number;
  price?: string;
  description: string;
}

export const LearningCarousel = () => {
  const learningItems: LearningItem[] = [
    {
      id: '1',
      title: 'Advanced React Patterns',
      type: 'course',
      duration: '4h 30m',
      difficulty: 'advanced',
      rating: 4.8,
      enrollees: 12450,
      tags: ['Popular', 'React', 'JavaScript'],
      progress: 60,
      description: 'Master advanced React patterns including render props, HOCs, and hooks'
    },
    {
      id: '2',
      title: 'System Design Interview Prep',
      type: 'course',
      duration: '8h 15m',
      difficulty: 'intermediate',
      rating: 4.9,
      enrollees: 23100,
      tags: ['New', 'Interview', 'System Design'],
      description: 'Comprehensive guide to acing system design interviews at top companies'
    },
    {
      id: '3',
      title: 'TypeScript Fundamentals',
      type: 'video',
      duration: '2h 45m',
      difficulty: 'beginner',
      rating: 4.7,
      enrollees: 8900,
      tags: ['Quick', 'TypeScript', 'Beginner'],
      description: 'Learn TypeScript basics and improve your JavaScript development'
    },
    {
      id: '4',
      title: 'AWS Solutions Architect',
      type: 'certification',
      duration: '12 weeks',
      difficulty: 'advanced',
      rating: 4.9,
      enrollees: 15600,
      tags: ['Certification', 'AWS', 'Cloud'],
      price: '$299',
      description: 'Prepare for AWS Solutions Architect certification exam'
    },
    {
      id: '5',
      title: 'Negotiating Your Salary',
      type: 'article',
      duration: '15 min',
      difficulty: 'intermediate',
      rating: 4.6,
      enrollees: 5400,
      tags: ['Quick', 'Career', 'Salary'],
      description: 'Proven strategies for successful salary negotiations'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="h-4 w-4" />;
      case 'video': return <PlayCircle className="h-4 w-4" />;
      case 'certification': return <Award className="h-4 w-4" />;
      case 'article': return <BookOpen className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-success';
      case 'intermediate': return 'text-warning';
      case 'advanced': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getTagVariant = (tag: string) => {
    if (tag === 'Popular') return 'default';
    if (tag === 'New') return 'destructive';
    if (tag === 'Quick') return 'secondary';
    return 'outline';
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            <span>Recommended Learning</span>
          </CardTitle>
          <Button variant="ghost" size="sm">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-4">
            {learningItems.map((item, index) => (
              <Card
                key={item.id}
                className="flex-shrink-0 w-80 border-border hover:shadow-career-md transition-all duration-smooth hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm leading-tight">
                          {item.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`text-xs capitalize ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty}
                          </span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{item.type}</span>
                        </div>
                      </div>
                    </div>
                    {item.price && (
                      <Badge variant="premium" className="text-xs">
                        {item.price}
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant={getTagVariant(tag) as any}
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current text-warning" />
                        <span>{item.rating}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{(item.enrollees / 1000).toFixed(1)}k</span>
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar (if enrolled) */}
                  {item.progress && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground">Progress</span>
                        <span className="text-xs text-accent font-medium">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-accent h-2 rounded-full transition-all duration-slow animate-progress-fill"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Button 
                    variant={item.progress ? "secondary" : "default"} 
                    size="sm" 
                    className="w-full"
                  >
                    {item.progress ? 'Continue Learning' : 'Start Learning'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};