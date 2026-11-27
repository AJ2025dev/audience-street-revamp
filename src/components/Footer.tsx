import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import tasLogo from "@/assets/tas-logo.png";

const Footer = () => {
  const footerLinks = {
    Platforms: [
      { name: "Leadpath", href: "/#leadpath" },
      { name: "ChatStreet", href: "/#chatstreet" },
      { name: "DSP & Curation", href: "/#dsp" },
      { name: "DSP Login", href: "https://dsp.audiencestreet.ai/login" }
    ],
    Company: [
      { name: "About Us", href: "/#about" },
      { name: "How We Work", href: "/#how-we-work" }
    ],
    Support: [
      { name: "Contact", href: "/#contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" }
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container-padding max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={tasLogo} 
                alt="The Audience Street" 
                className="h-9 w-9 mr-3 rounded-lg bg-card border border-border p-1"
              />
              <span className="text-xl font-bold">
                The Audience Street
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Media expertise and ad-tech built around audience outcomes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-3" />
                support@theaudiencestreet.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-3" />
                +91 9014426692
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3" />
                Wework Krishemerald, Hyderabad 500081
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Governing Law Disclosure (Card scheme compliance) */}
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-muted-foreground text-xs md:text-sm text-center mb-6 max-w-4xl mx-auto">
            The Audience Street is registered at 220 Davidson Avenue, Somerset, NJ 08873, United States.
            All orders and transactions processed through this website are governed by the laws of the
            State of New Jersey, United States. Payments are processed in USD unless otherwise stated at checkout.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2026 The Audience Street. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;