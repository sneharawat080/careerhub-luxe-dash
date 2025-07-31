import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Crown, 
  Sparkles, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  FileText,
  Star,
  CheckCircle,
  X
} from 'lucide-react';

export const MonetizationPanel = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const proFeatures = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'AI Resume Optimization',
      description: 'Get personalized suggestions to improve your resume',
      current: 'Basic analysis',
      pro: 'Advanced AI recommendations'
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: 'Premium Job Matches',
      description: 'Access exclusive job opportunities',
      current: '5 matches/day',
      pro: 'Unlimited matches'
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: 'Advanced Analytics',
      description: 'Detailed insights into your job search performance',
      current: 'Basic stats',
      pro: 'Comprehensive analytics'
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Priority Support',
      description: '1-on-1 career coaching sessions',
      current: 'Email support',
      pro: 'Live chat + coaching'
    }
  ];

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic job search',
        'Resume builder',
        'Email support',
        '5 applications/month'
      ],
      current: true
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'month',
      features: [
        'Everything in Free',
        'AI resume optimization',
        'Premium job matches',
        'Advanced analytics',
        'Priority support',
        'Unlimited applications'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$39',
      period: 'month',
      features: [
        'Everything in Pro',
        '1-on-1 career coaching',
        'Salary negotiation help',
        'Interview preparation',
        'LinkedIn optimization',
        'Job guarantee program'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Upgrade Banner */}
      <Card className="bg-gradient-premium text-white border-0 relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 opacity-20"></div>
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Crown className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Unlock Your Career Potential</h3>
                <p className="text-white/80">Join 50,000+ professionals who accelerated their careers with CareerHub Pro</p>
              </div>
            </div>
            <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
              <DialogTrigger asChild>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Crown className="mr-2 h-4 w-4" />
                  Upgrade Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-card">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center">
                    Choose Your Career Growth Plan
                  </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {plans.map((plan) => (
                    <Card 
                      key={plan.name}
                      className={`relative ${
                        plan.popular 
                          ? 'border-accent ring-2 ring-accent/20 shadow-career-glow' 
                          : plan.current
                          ? 'border-muted bg-muted/30'
                          : 'border-border'
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-gradient-accent text-accent-foreground">
                            <Star className="mr-1 h-3 w-3" />
                            Most Popular
                          </Badge>
                        </div>
                      )}
                      {plan.current && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge variant="secondary">
                            Current Plan
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="text-3xl font-bold text-foreground">
                          {plan.price}
                          <span className="text-sm font-normal text-muted-foreground">
                            /{plan.period}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                              <span className="text-sm text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant={plan.popular ? "accent" : plan.current ? "outline" : "default"}
                          className="w-full"
                          disabled={plan.current}
                        >
                          {plan.current ? 'Current Plan' : `Choose ${plan.name}`}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-6 text-sm text-muted-foreground">
                  <p>All plans include a 14-day free trial. Cancel anytime.</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Feature Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {proFeatures.map((feature, index) => (
          <Card 
            key={feature.title}
            className="relative border-accent/20 hover:shadow-career-md transition-all duration-smooth animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
                <Badge variant="premium" className="text-xs">
                  Pro
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Current:</span>
                  <span className="text-foreground">{feature.current}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-medium">With Pro:</span>
                  <span className="text-accent font-medium">{feature.pro}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};