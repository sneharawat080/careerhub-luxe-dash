import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Clock, Bookmark, ExternalLink } from 'lucide-react';
import { DashboardHeader } from '@/components/DashboardHeader';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago",
      tags: ["React", "TypeScript", "Remote"],
      saved: false
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "New York, NY",
      type: "Contract",
      salary: "$80k - $100k",
      posted: "1 week ago",
      tags: ["Figma", "Prototyping", "User Research"],
      saved: true
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$90k - $130k",
      posted: "3 days ago",
      tags: ["Node.js", "React", "AWS"],
      saved: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Find Your Next Opportunity</h1>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="default">Search Jobs</Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-career-md transition-all duration-300 hover:border-accent/50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <p className="text-lg font-semibold text-accent">{job.company}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Bookmark className={`h-5 w-5 ${job.saved ? 'fill-current text-accent' : ''}`} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {job.posted}
                  </div>
                  <Badge variant="outline">{job.type}</Badge>
                  <span className="font-semibold text-foreground">{job.salary}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="default" className="flex-1">
                    Apply Now
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;