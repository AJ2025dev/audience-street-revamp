import { Layers, Users, LineChart } from "lucide-react";

const pillars = [
  { icon: Layers, title: "Programmatic expertise", text: "Hands-on media planning and trading across digital channels." },
  { icon: Users, title: "Audience curation", text: "Selecting the right audiences and inventory for each campaign goal." },
  { icon: LineChart, title: "Technology & execution", text: "Platforms and managed workflows that connect campaigns to measurable activity." },
];

const About = () => (
  <section id="about" className="py-16 md:py-24 bg-card/40 border-y border-border/60 scroll-mt-16">
    <div className="container-padding max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14">
      <div>
        <p className="eyebrow mb-3">About</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">About The Audience Street</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-4">
          The Audience Street is a media and ad-tech company combining programmatic expertise, audience curation, campaign execution, and technology.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground">
          We work with advertisers, publishers and lead-generation teams from offices in the United States, India and the UAE.
        </p>
      </div>
      <div className="space-y-4">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start p-5 rounded-2xl card-elegant">
            <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
