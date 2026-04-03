import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "270+", label: "Projects Delivered" },
  { value: "4+", label: "Years Experience" },
  { value: "37+", label: "Active Clients" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-heading",
        { y: 40, opacity: 0, filter: "blur(4px)" },
        {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-heading", start: "top 85%", once: true },
        }
      );

      gsap.fromTo(
        ".about-text",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".about-text", start: "top 85%", once: true },
          delay: 0.15,
        }
      );

      gsap.fromTo(
        ".stat-item",
        { y: 25, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".stat-item", start: "top 90%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 section-padding bg-warm-sand"
    >
      <div className="max-w-6xl mx-auto">
        <p className="about-heading text-sm font-medium text-primary tracking-widest uppercase mb-4">
          About Us
        </p>
        <h2 className="about-heading text-display text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
          Building With Purpose,{" "}
          <span className="text-primary">Designing With Intent</span>
        </h2>
        <p className="about-text text-muted-foreground text-base md:text-lg max-w-2xl mb-16 text-pretty leading-relaxed">
          Redbrick Infrastructure brings together architecture, interior design,
          and construction expertise to deliver commercial and residential spaces
          that stand apart. Every project is a partnership—rooted in understanding
          your vision and realizing it with precision.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="text-display text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
