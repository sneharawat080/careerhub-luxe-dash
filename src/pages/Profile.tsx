import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, MapPin, Mail, Phone, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { DashboardHeader } from '@/components/DashboardHeader';

const Profile = () => {
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'];
  
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your personal information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Picture & Basic Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <Button variant="outline" className="mb-4">Change Photo</Button>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">Alex Johnson</h3>
                  <p className="text-muted-foreground">Senior Developer</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input defaultValue="Alex" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input defaultValue="Johnson" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" defaultValue="alex@example.com" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input defaultValue="San Francisco, CA" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Bio</label>
                  <Textarea 
                    placeholder="Tell us about yourself..."
                    defaultValue="Passionate software developer with 5+ years of experience in full-stack development."
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Professional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Current Role</label>
                    <Input defaultValue="Senior Frontend Developer" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input defaultValue="TechCorp Inc." />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Career Goal</label>
                  <Input defaultValue="Lead Developer / Technical Architect" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Skills</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                  <Input placeholder="Add new skill..." />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button variant="default">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;