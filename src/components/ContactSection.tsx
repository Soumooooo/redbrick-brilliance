import { useEffect, useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MapPin, Mail, ExternalLink } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-anim",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".contact-anim", start: "top 88%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
    };
    
    console.log('[v0] Contact form submission:', data);
    
    // TODO: Replace with actual backend API call
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow";

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 section-padding bg-warm-sand">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="contact-anim text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="contact-anim text-display text-3xl md:text-5xl font-bold mb-8">
              Let's Build Something <span className="text-primary">Together</span>
            </h2>

            <div className="space-y-5">
              <div className="contact-anim flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-sm font-medium mb-0.5">Phone</div>
                  <a href="tel:+918981452003" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 8981452003
                  </a>
                </div>
              </div>

              <div className="contact-anim flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-sm font-medium mb-0.5">Email</div>
                  <a href="mailto:info@redbrickinfrastructure.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@redbrickinfrastructure.in
                  </a>
                </div>
              </div>

              <div className="contact-anim flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-sm font-medium mb-0.5">Address</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    KIT Building Block E Room 17,<br />
                    Shyam Bose Road, Chetla,<br />
                    Kolkata 700027
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=KIT+Building+Block+E+Room+17+Shyam+Bose+Road+Chetla+Kolkata+700027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-anim space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input name="firstName" className={inputClass} placeholder="First name" required />
              <input name="lastName" className={inputClass} placeholder="Last name" />
            </div>
            <input name="email" className={inputClass} type="email" placeholder="Email address" required />
            <input name="phone" className={inputClass} placeholder="Phone number" />
            <Select name="service">
              <SelectTrigger className="w-full bg-background border border-border rounded-lg px-4 py-3 h-auto text-sm text-foreground focus:ring-2 focus:ring-primary/30">
                <SelectValue placeholder="Select a service…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mall-showroom">Mall & Showroom Design</SelectItem>
                <SelectItem value="dark-store">Dark Store Fit-out</SelectItem>
                <SelectItem value="pharmacy">Retail Pharmacy Design</SelectItem>
                <SelectItem value="office">Office Interiors</SelectItem>
                <SelectItem value="fnb">F&B & Cafeteria</SelectItem>
                <SelectItem value="residential">Residential Home</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <textarea
              name="message"
              className={`${inputClass} min-h-[120px] resize-none`}
              placeholder="Tell us about your project…"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.98]"
            >
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
