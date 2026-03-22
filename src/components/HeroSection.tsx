import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.2 });

    tl.fromTo(
      imgRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    )
      .fromTo(
        headlineRef.current,
        { y: 60, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

    // Parallax on scroll
    gsap.to(imgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-end overflow-hidden"
    >
      <img
        ref={imgRef}
        src={heroBg}
        alt="Modern office interior designed by Redbrick Infrastructure"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="relative z-10 section-padding pb-16 md:pb-24 max-w-4xl">
        <h1
          ref={headlineRef}
          className="text-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4"
        >
          Crafting Spaces
          <br />
          That <span className="text-primary">Inspire</span>
        </h1>
        <p
          ref={subRef}
          className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 text-pretty"
        >
          From concept to completion, we design and build interior spaces
          that transform how people work, shop, and live.
        </p>
        <div ref={ctaRef} className="flex gap-4 flex-wrap">
          <button
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Start Your Project
          </button>
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-foreground/20 text-foreground px-7 py-3.5 rounded-full font-medium text-sm hover:bg-foreground/5 transition-colors active:scale-[0.97]"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
