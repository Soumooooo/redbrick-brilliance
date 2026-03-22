import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Clock, Lightbulb, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: ShieldCheck, title: "Quality Assured", desc: "ISO-grade materials and rigorous quality checks at every milestone." },
  { icon: Clock, title: "On-Time Delivery", desc: "Structured timelines with real-time progress tracking for every project." },
  { icon: Lightbulb, title: "Innovative Design", desc: "Award-worthy interiors that blend aesthetics with functional intelligence." },
  { icon: Users, title: "Dedicated Teams", desc: "Cross-functional squads—architects, engineers, and project managers—assigned per project." },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-heading",
        { y: 40, opacity: 0, filter: "blur(4px)" },
        {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".why-heading", start: "top 85%", once: true },
        }
      );

      gsap.fromTo(
        ".why-card",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".why-card", start: "top 90%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="why-heading text-sm font-medium text-primary tracking-widest uppercase mb-4">
          Why Redbrick
        </p>
        <h2 className="why-heading text-display text-3xl md:text-5xl font-bold mb-16 max-w-2xl">
          Built Different,{" "}
          <span className="text-primary">Delivered Better</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="why-card service-card bg-card p-8 rounded-xl border border-border/60"
            >
              <f.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
