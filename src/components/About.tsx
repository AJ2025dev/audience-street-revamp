import { CheckCircle, Users, Lightbulb, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Lightbulb },
    { number: "99%", label: "Success Rate", icon: CheckCircle },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge AI and ad-tech solutions."
    },
    {
      title: "Results Driven",
      description: "Every strategy is designed to deliver measurable business outcomes."
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to your growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Welcome to The Audience Street
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help advertisers find new audiences and grow their brands with cutting-edge technology. Our platform connects you to premium inventory across all digital channels.
          </p>
        </div>

        {/* AI-Powered DSP Capabilities */}
        <div className="card-elegant rounded-2xl p-8 mb-20 animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              AI-Powered Campaign Optimization
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our DSP leverages advanced AI algorithms to automatically optimize your campaigns in real-time, ensuring maximum ROI and KPI achievement across all digital channels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Smart Bidding</h4>
              <p className="text-muted-foreground text-sm">
                AI analyzes bid landscapes and adjusts strategies to maximize campaign performance while meeting your target CPA and ROAS goals.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Audience Intelligence</h4>
              <p className="text-muted-foreground text-sm">
                Machine learning identifies high-value audience segments and predicts user behavior to optimize targeting and reduce acquisition costs.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">KPI Tracking</h4>
              <p className="text-muted-foreground text-sm">
                Real-time AI monitoring ensures campaigns stay on track to meet your specific KPIs, with automatic adjustments when performance deviates.
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Passionate Specialists Delivering Excellence
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              We provide an objectively better way to advertise. Our platform gives you access to premium inventory across connected TV, audio, mobile, display, and digital out-of-home - all from one unified solution that measures results both online and in-store.
            </p>

            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content */}
          <div className="animate-scale-in">
            <div className="card-elegant rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Expert Team
                  </h4>
                  <p className="text-muted-foreground">
                    Dedicated professionals committed to your success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;