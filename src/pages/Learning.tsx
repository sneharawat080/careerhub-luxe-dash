import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Clock, Star, BookOpen, Award } from 'lucide-react';
import { DashboardHeader } from '@/components/DashboardHeader';

const Learning = () => {
  const courses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "John Doe",
      duration: "8 hours",
      progress: 65,
      rating: 4.8,
      thumbnail: "/placeholder.svg",
      level: "Advanced",
      price: "Free",
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 2,
      title: "System Design Fundamentals",
      instructor: "Jane Smith",
      duration: "12 hours",
      progress: 30,
      rating: 4.9,
      thumbnail: "/placeholder.svg",
      level: "Intermediate",
      price: "$49",
      tags: ["System Design", "Architecture", "Backend"]
    },
    {
      id: 3,
      title: "TypeScript Masterclass",
      instructor: "Mike Johnson",
      duration: "6 hours",
      progress: 100,
      rating: 4.7,
      thumbnail: "/placeholder.svg",
      level: "Beginner",
      price: "Free",
      tags: ["TypeScript", "JavaScript", "Web Development"]
    }
  ];

  const achievements = [
    { title: "React Expert", description: "Completed 5 React courses", icon: Award },
    { title: "Fast Learner", description: "Finished 3 courses this month", icon: Star },
    { title: "Consistent", description: "7-day learning streak", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Learning Center</h1>
          <p className="text-muted-foreground">Expand your skills with curated courses and tutorials</p>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">12</div>
              <p className="text-sm text-muted-foreground">Courses Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">45h</div>
              <p className="text-sm text-muted-foreground">Learning Hours</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">8</div>
              <p className="text-sm text-muted-foreground">Certificates Earned</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Courses */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Courses</h2>
              <Button variant="outline">Browse All Courses</Button>
            </div>
            
            <div className="space-y-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-career-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-48 aspect-video bg-muted"></div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        </div>
                        <Badge variant={course.price === 'Free' ? 'secondary' : 'default'}>
                          {course.price}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {course.rating}
                        </div>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} />
                        </div>
                        
                        <Button 
                          variant={course.progress === 100 ? "outline" : "default"} 
                          className="w-full md:w-auto"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          {course.progress === 100 ? "Review Course" : "Continue Learning"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements & Recommendations */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Docker for Developers</h4>
                    <p className="text-xs text-muted-foreground mb-2">Based on your backend interests</p>
                    <Button size="sm" variant="outline" className="w-full">View Course</Button>
                  </div>
                  
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Advanced CSS Animations</h4>
                    <p className="text-xs text-muted-foreground mb-2">Perfect for frontend developers</p>
                    <Button size="sm" variant="outline" className="w-full">View Course</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;