import { useEffect, useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MapPin, Mail } from "lucide-react";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-anim space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input className={inputClass} placeholder="First name" required />
              <input className={inputClass} placeholder="Last name" />
            </div>
            <input className={inputClass} type="email" placeholder="Email address" required />
            <input className={inputClass} placeholder="Phone number" />
            <textarea
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
