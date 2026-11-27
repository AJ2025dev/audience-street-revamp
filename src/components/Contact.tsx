import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const locations = [
  { country: "United States", address: "220 Davidson Avenue, Somerset, NJ 08873" },
  { country: "India", address: "Wework Krishemerald, Hyderabad 500081" },
  { country: "UAE", address: "18th Floor, Creative Tower, Hamad Ben Mohammed St., P.O Box 4422. Fujairah. UAE" },
];

const interests = ["Leadpath", "ChatStreet", "TAS DSP & Audience Curation Platform", "Something else"];

/** The form opens the visitor's email app with a pre-filled message to support@ (no server storage). */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: interests[0], message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry: ${form.interest} — ${form.company || form.name}`;
    const body = `Name: ${form.name}\nWork email: ${form.email}\nCompany: ${form.company}\nInterested in: ${form.interest}\n\n${form.message}`;
    window.location.href = `mailto:support@theaudiencestreet.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 hero-bg relative scroll-mt-16">
      <div className="relative z-10 container-padding max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Talk to our team</h2>
          <p className="text-lg text-primary-foreground/85 mb-8">
            Tell us about your goals and which offering you're interested in. We'll get back to you.
          </p>
          <div className="space-y-3 mb-8">
            <a href="mailto:support@theaudiencestreet.com" className="flex items-center text-primary-foreground hover:underline">
              <Mail className="w-5 h-5 mr-3" /> support@theaudiencestreet.com
            </a>
            <a href="tel:+919014426692" className="flex items-center text-primary-foreground hover:underline">
              <Phone className="w-5 h-5 mr-3" /> +91 9014426692
            </a>
          </div>
          <div className="space-y-4">
            {locations.map((l) => (
              <div key={l.country} className="flex items-start">
                <MapPin className="w-4 h-4 text-primary-foreground mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground text-sm">{l.country}</p>
                  <p className="text-primary-foreground/75 text-sm">{l.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={submit} className="bg-card rounded-2xl p-6 md:p-8 shadow-lg space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="c-name">Name</Label>
              <Input id="c-name" required maxLength={100} value={form.name} onChange={set("name")} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="c-email">Work email</Label>
              <Input id="c-email" type="email" required maxLength={255} value={form.email} onChange={set("email")} />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="c-company">Company</Label>
            <Input id="c-company" maxLength={150} value={form.company} onChange={set("company")} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="c-interest">Interested in</Label>
            <select
              id="c-interest"
              value={form.interest}
              onChange={set("interest")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {interests.map((i) => <option key={i}>{i}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="c-message">Message</Label>
            <Textarea id="c-message" rows={4} maxLength={2000} value={form.message} onChange={set("message")} />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">
            Send message <Send className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-xs text-muted-foreground text-center">Opens your email app with your message ready to send.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
