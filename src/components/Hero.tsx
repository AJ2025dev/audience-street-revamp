import { ArrowRight, Workflow, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const offerings = [
  { icon: Workflow, name: "Leadpath", text: "Real-time lead operations", href: "#leadpath" },
  { icon: MessageSquare, name: "ChatStreet", text: "Conversational advertising", href: "#chatstreet" },
  { icon: Target, name: "DSP & Curation", text: "Curated programmatic media", href: "#dsp" },
];

const Hero = () => (
  <section id="home" className="relative hero-bg overflow-hidden pt-16">
    <div className="absolute inset-0 grid-bg" aria-hidden="true" />
    <div className="relative z-10 container-padding max-w-7xl mx-auto pt-24 md:pt-32 pb-20 md:pb-28">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Media & ad-tech · The Audience Street
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] mb-7">
          Media expertise and ad-tech built around{" "}
          <span className="font-serif italic font-normal text-gradient pr-2">audience outcomes.</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
          From curated media and programmatic campaigns to conversational advertising and real-time lead operations, we help teams connect audiences with relevant experiences and measurable activity.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="hero" size="xl" className="group" asChild>
            <a href="#contact">
              Talk to our team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="#leadpath">Explore our platforms</a>
          </Button>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-16 md:mt-24 max-w-5xl mx-auto">
        {offerings.map(({ icon: Icon, name, text, href }) => (
          <a key={name} href={href} className="glass glow-frame group rounded-2xl p-5 flex items-center gap-4 transition-transform hover:-translate-y-1">
            <span className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </span>
            <span className="flex-1">
              <span className="block font-display font-semibold">{name}</span>
              <span className="block text-sm text-muted-foreground">{text}</span>
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
