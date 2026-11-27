import { Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductVideo from "./ProductVideo";

interface Cta { label: string; href: string; external?: boolean; primary?: boolean }

interface ProductSectionProps {
  id: string;
  icon: LucideIcon;
  name: string;
  status?: string;
  headline: string;
  copy: string;
  features: string[];
  ctas: Cta[];
  video: { src?: string; poster?: string; description: string };
  reverse?: boolean;
  muted?: boolean;
}

const ProductSection = ({ id, icon: Icon, name, status, headline, copy, features, ctas, video, reverse, muted }: ProductSectionProps) => (
  <section id={id} className={`py-16 md:py-24 scroll-mt-16 relative overflow-hidden ${muted ? "bg-card/40 border-y border-border/60" : "bg-background"}`}>
    <div className="container-padding max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="inline-flex items-center px-3 py-1.5 glass rounded-full text-foreground font-medium text-sm">
            <Icon className="w-4 h-4 mr-2 text-primary" />
            {name}
          </span>
          {status && (
            <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide">
              {status}
            </span>
          )}
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-5 leading-[1.08]">{headline}</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-6">{copy}</p>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-start text-foreground/90">
              <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mr-2.5 mt-0.5 flex-shrink-0"><Check className="w-3 h-3 text-primary" /></span>
              <span className="text-sm sm:text-base">{f}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-3">
          {ctas.map((c) => (
            <Button key={c.label} variant={c.primary ? "hero" : "outline"} size="lg" className="group" asChild>
              <a href={c.href} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {c.label}
                {c.primary && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
              </a>
            </Button>
          ))}
        </div>
      </div>
      <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
        <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full" aria-hidden="true" />
        <ProductVideo title={`${name} overview video`} {...video} />
      </div>
    </div>
  </section>
);

export default ProductSection;
