import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: ".footer-content", start: "top 95%", once: true },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="py-12 section-padding border-t border-border">
      <div className="footer-content max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-lg font-semibold tracking-tight">
          <span className="text-primary">Red</span>brick Infrastructure
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Redbrick Infrastructure. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["About", "Services", "Projects", "Contact"].map((l) => (
            <button
              key={l}
              onClick={() => document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
