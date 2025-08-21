import { Brain, Target, BarChart3, Zap, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiIllustration from "@/assets/ai-illustration.jpg";
import adtechIllustration from "@/assets/adtech-illustration.jpg";

const Services = () => {
  const aiFeatures = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced algorithms that learn and adapt to your business needs"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with confidence"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline operations with intelligent workflow automation"
    }
  ];

  const adtechFeatures = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach the right audience at the perfect moment with laser precision"
    },
    {
      icon: Users,
      title: "Audience Insights",
      description: "Deep understanding of your customers' behaviors and preferences"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Maximize ROI with continuous campaign optimization"
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
            We drive business performance with passionate specialists, cutting-edge AI technology, and advanced ad-tech solutions.
          </p>
        </div>

        {/* AI Services */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
                <Brain className="w-5 h-5 mr-2 text-accent" />
                <span className="text-accent font-semibold">Artificial Intelligence</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                Next-Generation AI Solutions
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8">
                Harness the power of artificial intelligence to transform your business operations, enhance customer experiences, and unlock new growth opportunities.
              </p>

              <div className="space-y-6 mb-8">
                {aiFeatures.map((feature, index) => {
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
                Explore AI Solutions
              </Button>
            </div>

            <div className="animate-scale-in">
              <div className="card-elegant rounded-2xl p-8">
                <img 
                  src={aiIllustration} 
                  alt="AI Solutions" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ad-Tech Services */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Target className="w-5 h-5 mr-2 text-primary" />
                <span className="text-primary font-semibold">Ad-Tech</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                Advanced Ad-Tech Platform
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8">
                Maximize your advertising impact with our sophisticated ad-tech solutions. From programmatic buying to real-time optimization, we've got you covered.
              </p>

              <div className="space-y-6 mb-8">
                {adtechFeatures.map((feature, index) => {
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
                Discover Ad-Tech
              </Button>
            </div>

            <div className="lg:order-1 animate-scale-in">
              <div className="card-elegant rounded-2xl p-8">
                <img 
                  src={adtechIllustration} 
                  alt="Ad-Tech Solutions" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;