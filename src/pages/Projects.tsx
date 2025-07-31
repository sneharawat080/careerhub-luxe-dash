import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, ExternalLink, Github, Edit, Trash2 } from 'lucide-react';
import { DashboardHeader } from '@/components/DashboardHeader';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with React, Node.js, and PostgreSQL",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      status: "Completed",
      githubUrl: "https://github.com/username/ecommerce",
      liveUrl: "https://myecommerce.com",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      status: "In Progress",
      githubUrl: "https://github.com/username/taskmanager",
      liveUrl: null,
      createdAt: "2024-02-01"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather tracking application with data visualization",
      image: "/placeholder.svg",
      technologies: ["React", "Chart.js", "Weather API"],
      status: "Completed",
      githubUrl: "https://github.com/username/weather",
      liveUrl: "https://weather-dashboard.com",
      createdAt: "2023-12-10"
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-4">My Projects</h1>
            <p className="text-muted-foreground">Showcase your work and track your development progress</p>
          </div>
          <Button variant="default">
            <Plus className="h-4 w-4 mr-2" />
            Add New Project
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-career-md transition-all duration-300">
              <div className="aspect-video bg-muted rounded-t-lg"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground mt-3">
                  Created: {new Date(project.createdAt).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State for New Users */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No projects yet</h3>
            <p className="text-muted-foreground mb-6">Start building your portfolio by adding your first project</p>
            <Button variant="default">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Project
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;