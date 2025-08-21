import { Target, BarChart3, Zap, Users, TrendingUp, Globe, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import adtechIllustration from "@/assets/adtech-illustration.jpg";

const Services = () => {
  const dspFeatures = [
    {
      icon: Target,
      title: "Cross-Channel Reach",
      description: "Connect TV, audio, mobile, display, and digital out-of-home from one platform"
    },
    {
      icon: Users,
      title: "Objective Measurement",
      description: "Measure results both online and in-store with marketplace of measurement partners"
    },
    {
      icon: TrendingUp,
      title: "All From One Platform",
      description: "Unified advertising platform with cutting-edge technology and premium inventory"
    }
  ];

  const tradingFeatures = [
    {
      icon: Globe,
      title: "Programmatic Buying",
      description: "Access premium inventory across all digital channels with real-time bidding"
    },
    {
      icon: Monitor,
      title: "Connected TV & Audio",
      description: "Reach audiences on streaming platforms and connected TV environments"
    },
    {
      icon: Smartphone,
      title: "Mobile & Display",
      description: "Comprehensive mobile advertising with native, video, and display formats"
    }
  ];

  return (
    <section id="services" className="py-20 section-bg">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Driving Digital Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We drive business performance with passionate specialists and advanced programmatic advertising solutions.
          </p>
        </div>

        {/* DSP Services */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Target className="w-5 h-5 mr-2 text-primary" />
                <span className="text-primary font-semibold">DSP Platform</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                An Objectively Better Way to Advertise
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8">
                Our advertising platform helps you find new audiences and grow your brand with cutting-edge technology and access to the world's best content across all channels.
              </p>

              <div className="space-y-6 mb-8">
                {dspFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button variant="default" size="lg">
                Discover Our Platform
              </Button>
            </div>

            <div className="animate-scale-in">
              <div className="card-elegant rounded-2xl p-8">
                <img 
                  src={adtechIllustration} 
                  alt="DSP Platform Solutions" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trading Desk Services */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
                <Globe className="w-5 h-5 mr-2 text-accent" />
                <span className="text-accent font-semibold">Trading Desk</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                Programmatic Excellence
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8">
                Access premium inventory across all digital channels with our advanced trading desk. From programmatic buying to real-time optimization, we deliver results that matter.
              </p>

              <div className="space-y-6 mb-8">
                {tradingFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button variant="hero" size="lg">
                Start Trading
              </Button>
            </div>

            <div className="lg:order-1 animate-scale-in">
              <div className="card-elegant rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Performance Analytics
                    </h4>
                    <p className="text-muted-foreground">
                      Real-time insights and optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;