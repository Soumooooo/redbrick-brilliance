import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import parallaxImg from "@/assets/parallax-construction.jpg";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0, filter: "blur(4px)" },
        {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: textRef.current, start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="parallax-section">
      <img ref={imgRef} src={parallaxImg} alt="Construction in progress" loading="lazy" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div ref={textRef} className="parallax-overlay">
        <h2 className="text-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
          From Blueprint to Reality
        </h2>
        <p className="text-primary-foreground/80 text-base md:text-lg max-w-lg mx-auto">
          Every detail matters. We manage every phase of construction with precision and care.
        </p>
      </div>
    </section>
  );
};

export default ParallaxSection;
