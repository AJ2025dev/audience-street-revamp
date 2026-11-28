import { ArrowRight, Workflow, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroArt from "@/assets/hero-art.jpg";

const offerings = [
  { icon: Workflow, name: "Leadpath", text: "Real-time lead operations", href: "#leadpath", surface: "offering-growth" },
  { icon: MessageSquare, name: "ChatStreet", text: "Conversational advertising", href: "#chatstreet", surface: "offering-conversation" },
  { icon: Target, name: "DSP & Curation", text: "Curated programmatic media", href: "#dsp", surface: "offering-media" },
];

const Hero = () => (
  <section id="home" className="relative bg-background overflow-hidden pt-16">
    <div className="relative z-10 container-padding max-w-7xl mx-auto pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Media & ad-tech · The Audience Street
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-wide leading-[1.1] text-primary mb-7">
          Media expertise and ad-tech built around{" "}
          audience outcomes.
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
      <img src={heroArt} alt="Abstract ivory forms flecked with cobalt" className="mt-12 md:mt-16 w-full max-w-6xl mx-auto aspect-[16/8] object-cover rounded-lg" />
      <div className="grid sm:grid-cols-3 gap-3 mt-12 md:mt-16 max-w-5xl mx-auto">
        {offerings.map(({ icon: Icon, name, text, href, surface }) => (
          <a key={name} href={href} className={`${surface} text-foreground group rounded-lg p-5 flex items-center gap-4 transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`}>
            <span className="w-11 h-11 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-display font-semibold">{name}</span>
              <span className="block text-sm text-muted-foreground">{text}</span>
            </span>
            <ArrowRight className="w-4 h-4 shrink-0 text-foreground transition-transform group-hover:translate-x-1" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
