import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import tasLogo from "@/assets/tas-logo.png";

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "AI Solutions", href: "#services" },
      { name: "Ad-Tech Platform", href: "#services" },
      { name: "Machine Learning", href: "#services" },
      { name: "Predictive Analytics", href: "#services" }
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" }
    ],
    Support: [
      { name: "Contact", href: "#contact" },
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-padding max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={tasLogo} 
                alt="The Audience Street" 
                className="h-10 w-10 mr-3 brightness-0 invert"
              />
              <span className="text-xl font-bold">
                The Audience Street
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Leading the future of digital marketing with AI-powered solutions and advanced ad-tech platforms.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 mr-3" />
                hello@theaudiencestreet.com
              </div>
              <div className="flex items-center text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 mr-3" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mr-3" />
                New York, NY 10001
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-primary-foreground mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm mb-4 md:mb-0">
              © 2024 The Audience Street. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-200"
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