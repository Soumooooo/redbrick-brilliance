import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Store, Briefcase, Home, PlusCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Store, title: "Mall & Showroom Interiors", desc: "Premium retail spaces designed to maximize customer engagement and brand presence." },
  { icon: Building2, title: "Commercial Store Interiors", desc: "Functional, visually striking commercial environments that drive footfall." },
  { icon: Briefcase, title: "Office Space Design", desc: "Workplaces that boost productivity through thoughtful layout and ergonomic design." },
  { icon: Home, title: "Residential Interiors", desc: "Elegant living spaces crafted around your lifestyle and personal aesthetic." },
  { icon: PlusCircle, title: "Pharmacy & Retail Setup", desc: "Turnkey retail and pharmacy fit-outs with compliance-ready infrastructure." },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-heading",
        { y: 40, opacity: 0, filter: "blur(4px)" },
        {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".services-heading", start: "top 85%", once: true },
        }
      );

      gsap.fromTo(
        ".service-card-anim",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".service-card-anim", start: "top 90%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="services-heading text-sm font-medium text-primary tracking-widest uppercase mb-4">
          What We Do
        </p>
        <h2 className="services-heading text-display text-3xl md:text-5xl font-bold mb-16 max-w-2xl">
          End-to-End Design & Build Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="service-card service-card-anim bg-card p-7 rounded-xl border border-border/60"
            >
              <svc.icon className="w-7 h-7 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-semibold mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
