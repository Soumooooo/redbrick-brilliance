import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 0.3, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 section-padding ${
        scrolled
          ? "py-3 bg-background/90 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))]"
          : "py-6"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="font-display text-xl font-semibold tracking-tight">
          <span className="text-primary">Red</span> Brick Infrastructure
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="relative text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-5 h-[1.5px] bg-foreground transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-foreground transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden mt-4 pb-4 flex flex-col gap-3 max-w-7xl mx-auto"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
