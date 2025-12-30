import { Gamepad2, Sparkles, Rocket, Users, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Games = () => {
  const games = [
    {
      icon: Sparkles,
      title: "Casual Puzzle Games",
      description: "Engaging puzzle games designed for quick sessions with satisfying progression mechanics",
      status: "In Development"
    },
    {
      icon: Rocket,
      title: "Hyper-Casual Arcade",
      description: "Fast-paced arcade experiences with simple controls and addictive gameplay loops",
      status: "Coming Soon"
    },
    {
      icon: Users,
      title: "Social Gaming",
      description: "Multiplayer experiences that bring players together through fun, competitive gameplay",
      status: "In Development"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Ad-Monetized",
      description: "Smart ad integration that respects player experience while maximizing revenue"
    },
    {
      icon: Star,
      title: "Data-Driven Design",
      description: "Leveraging our adtech expertise to build games that players love and keep coming back to"
    },
    {
      icon: Gamepad2,
      title: "Cross-Platform",
      description: "Available on iOS and Android with seamless cross-device progression"
    }
  ];

  return (
    <section id="games" className="py-20 bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in px-4 sm:px-0">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Gamepad2 className="w-5 h-5 mr-2 text-primary" />
            <span className="text-primary font-semibold">O&O Gaming</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Building the Future of Mobile Gaming
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're developing our own portfolio of owned & operated mobile games, combining our deep adtech expertise with engaging gameplay experiences.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <div 
                key={index} 
                className="card-elegant rounded-2xl p-6 md:p-8 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full mb-4">
                  <span className="text-xs font-medium text-accent">{game.status}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{game.title}</h3>
                <p className="text-muted-foreground">{game.description}</p>
              </div>
            );
          })}
        </div>

        {/* Why O&O Gaming */}
        <div className="card-elegant rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why We're Building Games
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our adtech background gives us unique insights into what makes mobile games successful. We're applying this knowledge to create games that are both fun to play and built for sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Partner With Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
