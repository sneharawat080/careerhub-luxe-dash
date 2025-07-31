import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Upload, Download, Eye, Star, AlertCircle } from 'lucide-react';
import { DashboardHeader } from '@/components/DashboardHeader';

const Resume = () => {
  const resumeScore = 85;
  
  const suggestions = [
    { type: 'warning', text: 'Add more technical skills', priority: 'high' },
    { type: 'info', text: 'Include project descriptions', priority: 'medium' },
    { type: 'success', text: 'Good work experience section', priority: 'low' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Resume Builder</h1>
          <p className="text-muted-foreground">Create and optimize your resume for better job opportunities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Score & Actions */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent" />
                  Resume Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-accent mb-2">{resumeScore}%</div>
                  <Progress value={resumeScore} className="w-full" />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Your resume is performing well! Follow the suggestions below to improve.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="default">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Resume
                </Button>
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button className="w-full" variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Resume Editor & Suggestions */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Improvement Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <AlertCircle className={`h-5 w-5 mt-0.5 ${
                        suggestion.priority === 'high' ? 'text-destructive' :
                        suggestion.priority === 'medium' ? 'text-yellow-500' :
                        'text-green-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{suggestion.text}</p>
                        <Badge variant="outline" className="mt-2">
                          {suggestion.priority} priority
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resume Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((template) => (
                    <div key={template} className="border border-border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer">
                      <div className="aspect-[3/4] bg-muted rounded mb-3"></div>
                      <h3 className="font-semibold mb-1">Professional Template {template}</h3>
                      <p className="text-sm text-muted-foreground">Clean and modern design</p>
                      <Button size="sm" className="w-full mt-3">Use Template</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;