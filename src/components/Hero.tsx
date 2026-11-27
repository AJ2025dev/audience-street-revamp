import { ArrowRight, Workflow, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const offerings = [
  { icon: Workflow, name: "Leadpath", text: "Real-time lead operations", href: "#leadpath" },
  { icon: MessageSquare, name: "ChatStreet", text: "Conversational advertising", href: "#chatstreet" },
  { icon: Target, name: "DSP & Curation", text: "Curated programmatic media", href: "#dsp" },
];

const Hero = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 hero-bg opacity-90"></div>
    </div>
    <div className="relative z-10 container-padding max-w-7xl mx-auto w-full py-16">
      <div className="max-w-4xl animate-fade-in">
        <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-widest mb-5">
          Media & ad-tech · The Audience Street
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Media expertise and ad-tech built around audience outcomes.
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-3xl">
          From curated media and programmatic campaigns to conversational advertising and real-time lead operations, we help teams connect audiences with relevant experiences and measurable activity.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="hero" size="xl" className="group" asChild>
            <a href="#contact">
              Talk to our team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground" asChild>
            <a href="#leadpath">Explore our platforms</a>
          </Button>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-3 mt-12 md:mt-16 max-w-4xl">
        {offerings.map(({ icon: Icon, name, text, href }) => (
          <a key={name} href={href} className="flex items-center p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors">
            <Icon className="w-6 h-6 text-primary-foreground mr-3 flex-shrink-0" />
            <span>
              <span className="block font-semibold text-primary-foreground">{name}</span>
              <span className="block text-sm text-primary-foreground/75">{text}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
