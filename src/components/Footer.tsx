import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    label: "Facebook",
    href: "#",
    color: "#3b5999",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 relative z-[3] transition-all duration-500 group-hover:[transform:rotateY(360deg)]">
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98H9.198V21.5Z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    color: "#55acee",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 relative z-[3] transition-all duration-500 group-hover:[transform:rotateY(360deg)]">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.32 3.91A12.16 12.16 0 0 1 3 4.79a4.28 4.28 0 0 0 1.32 5.72 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.27 4.27 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.59 8.59 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 22.46 6Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    color: "#0077b5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 relative z-[3] transition-all duration-500 group-hover:[transform:rotateY(360deg)]">
        <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.25 8.5h3.5v12h-3.5v-12Zm5.75 0h3.36v1.64h.05a3.68 3.68 0 0 1 3.32-1.82c3.55 0 4.21 2.34 4.21 5.38v6.3h-3.5v-5.59c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.68H9V8.5Z" />
      </svg>
    ),
  },
  {
    label: "Google",
    href: "#",
    color: "#dd4b39",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 relative z-[3] transition-all duration-500 group-hover:[transform:rotateY(360deg)]">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48Z" />
      </svg>
    ),
  },
];

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
      <div className="footer-content max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
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

        {/* Social media icons with hover effect */}
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="group relative w-12 h-12 rounded-full border-2 border-border bg-card flex items-center justify-center overflow-hidden text-foreground hover:text-white transition-colors duration-500"
            >
              <span
                className="absolute left-0 w-full h-full top-full transition-[top] duration-500 z-[2] group-hover:top-0"
                style={{ backgroundColor: s.color }}
              />
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
