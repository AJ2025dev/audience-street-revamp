import { ArrowRight, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-bg opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-padding max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-card/20 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-8">
            <Zap className="w-4 h-4 mr-2 text-accent" />
            <span className="text-primary-foreground text-sm font-medium">
              Next-Generation AI & Ad-Tech Solutions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight px-4 sm:px-0">
            We'll Help{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
              Scale Your Business
            </span>{" "}
            with AI
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
            Grow your business by finding out what customers really want & turn good results into great ones across all digital channels with cutting-edge AI and Ad-Tech solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4 sm:px-0">
            <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
              <a href="https://dsp.audiencestreet.ai/signup" target="_blank" rel="noopener noreferrer">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 w-full sm:w-auto">
              <Target className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 animate-scale-in px-4 sm:px-0">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-6">
              Trusted by leading brands worldwide
            </p>
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 opacity-60 overflow-x-auto">
              <div className="h-6 sm:h-8 w-16 sm:w-20 bg-primary-foreground/20 rounded flex-shrink-0"></div>
              <div className="h-6 sm:h-8 w-18 sm:w-24 bg-primary-foreground/20 rounded flex-shrink-0"></div>
              <div className="h-6 sm:h-8 w-12 sm:w-16 bg-primary-foreground/20 rounded flex-shrink-0"></div>
              <div className="h-6 sm:h-8 w-20 sm:w-28 bg-primary-foreground/20 rounded flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;