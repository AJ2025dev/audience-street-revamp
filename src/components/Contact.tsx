import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import lenovoLogo from "@/assets/logos/lenovo-logo.png";
import mashreqLogo from "@/assets/logos/mashreq-logo.png";
import centrepointLogo from "@/assets/logos/centrepoint-logo.png";
import emaarLogo from "@/assets/logos/emaar-logo.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@theaudiencestreet.com",
      action: "mailto:support@theaudiencestreet.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9014426692",
      action: "tel:+919014426692"
    }
  ];

  const locations = [
    {
      country: "India",
      address: "Wework Krishemerald, Hyderabad 500081"
    },
    {
      country: "United States",
      address: "220 Davidson Avenue, Somerset, NJ 08873"
    },
    {
      country: "UAE",
      address: "18th Floor, Creative Tower, Hamad Ben Mohammed St., P.O Box 4422. Fujairah. UAE"
    }
  ];

  return (
    <section id="contact" className="py-20 hero-bg relative">
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="relative z-10 container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Get in touch with our experts today and discover how AI and advanced ad-tech can revolutionize your digital performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-primary-foreground mb-8">
              Let's Start a Conversation
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-1">{info.title}</h4>
                      <p className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">
                        {info.details}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
              <h4 className="font-semibold text-primary-foreground mb-4">
                Our Locations
              </h4>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start">
                    <MapPin className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-primary-foreground text-sm">{location.country}</h5>
                      <p className="text-primary-foreground/70 text-sm">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="animate-scale-in">
            <div className="card-elegant bg-card/95 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get Your Free Consultation
              </h3>
              
              <p className="text-muted-foreground mb-8">
                Schedule a complimentary strategy session with our experts and discover how we can help scale your business with AI and advanced ad-tech solutions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Free 30-minute consultation
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Custom strategy roadmap
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  No commitment required
                </div>
              </div>

              <Button 
                variant="hero" 
                size="xl" 
                className="w-full group"
                onClick={() => window.open('https://form.theaudiencestreet.com', '_blank')}
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="text-center mt-6">
                <p className="text-xs text-muted-foreground mb-4">
                  Trusted by leading brands
                </p>
                <div className="flex items-center justify-center gap-8 opacity-60">
                  <img src={lenovoLogo} alt="Lenovo" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                  <img src={mashreqLogo} alt="Mashreq" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                  <img src={centrepointLogo} alt="Centrepoint" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                  <img src={emaarLogo} alt="Emaar" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;