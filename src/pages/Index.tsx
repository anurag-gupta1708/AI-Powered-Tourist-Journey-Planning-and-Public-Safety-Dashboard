import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, Shield, Sparkles, Upload, Map, Users } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [userType, setUserType] = useState<"tourist" | "government" | null>(null);

  if (userType === "tourist") {
    return <TouristDashboard onBack={() => setUserType(null)} />;
  }

  if (userType === "government") {
    return <GovernmentDashboard onBack={() => setUserType(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Smart Tourism Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Plan Your Perfect Journey
              <br />
              <span className="text-white/90">With AI Intelligence</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Verify your travel, generate personalized itineraries, and experience seamless journey planning powered by artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                onClick={() => setUserType("tourist")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated transition-smooth text-lg px-8"
              >
                <Plane className="mr-2 h-5 w-5" />
                Start Planning
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setUserType("government")}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm transition-smooth text-lg px-8"
              >
                <Shield className="mr-2 h-5 w-5" />
                Government Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need for Smart Travel
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform combines AI technology with privacy-first design to revolutionize tourism planning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Upload className="w-8 h-8" />}
              title="Smart Ticket Verification"
              description="Upload your flight, train, or bus tickets and let AI extract your journey details instantly."
            />
            <FeatureCard
              icon={<Map className="w-8 h-8" />}
              title="AI Itinerary Planning"
              description="Get personalized day-by-day itineraries with intelligent recommendations based on your preferences."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Privacy-First Design"
              description="Your data is encrypted and anonymized. Full control over what you share with consent tracking."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Public Safety Dashboard"
              description="Government agencies can view aggregated, anonymized tourist flow data for crowd management."
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Conversational Planning"
              description="Chat with AI to refine your itinerary, get suggestions, and make real-time adjustments."
            />
            <FeatureCard
              icon={<Plane className="w-8 h-8" />}
              title="Multi-Modal Support"
              description="Plan journeys across flights, trains, and buses with seamless integration."
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Privacy by Design</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Your Privacy is Our Priority
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We implement end-to-end encryption, consent-based data sharing, and strict anonymization protocols. 
            Government agencies only access aggregated, non-identifiable tourist flow data for public safety purposes.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">256-bit</div>
              <div className="text-sm text-muted-foreground">Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">User Consent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">GDPR</div>
              <div className="text-sm text-muted-foreground">Compliant</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="p-6 border-border shadow-soft hover:shadow-elevated transition-smooth bg-gradient-card">
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-3 rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </Card>
);

const TouristDashboard = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-screen bg-background">
    <nav className="border-b border-border bg-card shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Plane className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold text-foreground">Smart Tourism</span>
        </div>
        <Button variant="ghost" onClick={onBack}>Back to Home</Button>
      </div>
    </nav>
    
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Welcome, Traveler!</h1>
        <p className="text-muted-foreground text-lg">Start by uploading your travel ticket to begin your journey planning.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 border-border shadow-soft bg-gradient-card">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-card-foreground">Upload Travel Ticket</h2>
            </div>
            <p className="text-muted-foreground">
              Upload your flight, train, or bus ticket. Our AI will extract journey details and verify your travel information.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth" onClick={() => window.location.href = '/ticket-upload'}>
              <Upload className="mr-2 h-5 w-5" />
              Choose Ticket File
            </Button>
            <div className="text-xs text-muted-foreground text-center">
              Supports PDF, JPG, PNG • Max 10MB
            </div>
          </div>
        </Card>

        <Card className="p-8 border-border shadow-soft bg-gradient-card">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-semibold text-card-foreground">AI Itinerary Planner</h2>
            </div>
            <p className="text-muted-foreground">
              Get personalized recommendations and day-by-day itineraries powered by AI. Chat to refine your plans.
            </p>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-smooth" onClick={() => window.location.href = '/location-selection'}>
              <Sparkles className="mr-2 h-5 w-5" />
              Generate Itinerary
            </Button>
            <div className="text-xs text-muted-foreground text-center">
              Requires uploaded ticket • AI-powered suggestions
            </div>
          </div>
        </Card>
      </div>

      <Card className="mt-8 p-8 border-border shadow-soft bg-gradient-card">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-success/10">
            <Shield className="w-6 h-6 text-success" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Privacy Controls</h3>
            <p className="text-muted-foreground mb-4">
              Manage your data sharing preferences. You have full control over what information is shared with public safety systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm">View Privacy Settings</Button>
              <Button variant="outline" size="sm">Data Sharing Consent</Button>
              <Button variant="outline" size="sm">Export My Data</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const GovernmentDashboard = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-screen bg-background">
    <nav className="border-b border-border bg-card shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-secondary" />
          <span className="text-xl font-bold text-foreground">Public Safety Dashboard</span>
        </div>
        <Button variant="ghost" onClick={onBack}>Back to Home</Button>
      </div>
    </nav>
    
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Public Safety Dashboard</h1>
        <p className="text-muted-foreground text-lg">Monitor aggregated, anonymized tourist flow data for crowd management and emergency response.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 border-border shadow-soft bg-gradient-card">
          <div className="text-sm text-muted-foreground mb-1">Active Tourists Today</div>
          <div className="text-3xl font-bold text-foreground">12,458</div>
          <div className="text-xs text-success mt-1">+8% from yesterday</div>
        </Card>
        <Card className="p-6 border-border shadow-soft bg-gradient-card">
          <div className="text-sm text-muted-foreground mb-1">High Density Zones</div>
          <div className="text-3xl font-bold text-foreground">7</div>
          <div className="text-xs text-warning mt-1">2 require monitoring</div>
        </Card>
        <Card className="p-6 border-border shadow-soft bg-gradient-card">
          <div className="text-sm text-muted-foreground mb-1">Data Privacy Status</div>
          <div className="text-3xl font-bold text-success">100%</div>
          <div className="text-xs text-muted-foreground mt-1">Fully anonymized</div>
        </Card>
      </div>

      <Card className="p-8 border-border shadow-soft bg-gradient-card mb-8">
        <h2 className="text-2xl font-semibold text-card-foreground mb-6">Tourist Flow Heat Map</h2>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Map className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Interactive heat map visualization</p>
            <p className="text-sm mt-2">Showing anonymized tourist density across regions</p>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 border-border shadow-soft bg-gradient-card">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Recent Alerts</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
              <div className="w-2 h-2 rounded-full bg-warning mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">High density at Central Station</div>
                <div className="text-xs text-muted-foreground">2 minutes ago • Crowd management suggested</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
              <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">Tourist flow normalized at Beach Area</div>
                <div className="text-xs text-muted-foreground">15 minutes ago • No action required</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border shadow-soft bg-gradient-card">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Privacy Compliance</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Data Anonymization</span>
              <span className="text-sm font-medium text-success">Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Consent Tracking</span>
              <span className="text-sm font-medium text-success">Verified</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Audit Trail</span>
              <span className="text-sm font-medium text-success">Compliant</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">GDPR Status</span>
              <span className="text-sm font-medium text-success">Certified</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export default Index;