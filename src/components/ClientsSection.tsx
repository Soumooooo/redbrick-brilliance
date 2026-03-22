import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import client1mg from "@/assets/client-1mg.png";
import clientApollo from "@/assets/client-apollo.jpg";
import clientBlinkit from "@/assets/client-blinkit.png";
import clientDava from "@/assets/client-dava.jpeg";
import clientZepto from "@/assets/client-zepto.png";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "Tata 1MG", logo: client1mg },
  { name: "Apollo Pharmacy", logo: clientApollo },
  { name: "Blinkit", logo: clientBlinkit },
  { name: "Dava India", logo: clientDava },
  { name: "Zepto", logo: clientZepto },
];

const ClientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".clients-heading",
        { y: 40, opacity: 0, filter: "blur(4px)" },
        {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".clients-heading", start: "top 85%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Duplicate logos for seamless loop
  const marqueeLogos = [...clients, ...clients, ...clients, ...clients];

  return (
    <section ref={sectionRef} id="clients" className="py-24 md:py-32 section-padding bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="clients-heading text-sm font-medium text-primary tracking-widest uppercase mb-4">
          Our Clients
        </p>
        <h2 className="clients-heading text-display text-3xl md:text-5xl font-bold mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="clients-heading text-muted-foreground max-w-xl mx-auto" style={{ textWrap: "pretty" }}>
          We've partnered with leading brands across retail, logistics, and healthcare to deliver exceptional spaces.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 — left */}
        <div className="flex mb-8 marquee-row">
          <div className="flex shrink-0 animate-marquee-left gap-12 items-center">
            {marqueeLogos.map((client, i) => (
              <div
                key={`r1-${i}`}
                className="shrink-0 w-36 h-24 md:w-44 md:h-28 rounded-xl bg-card flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-[filter] duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="flex marquee-row">
          <div className="flex shrink-0 animate-marquee-right gap-12 items-center">
            {[...marqueeLogos].reverse().map((client, i) => (
              <div
                key={`r2-${i}`}
                className="shrink-0 w-36 h-24 md:w-44 md:h-28 rounded-xl bg-card flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-[filter] duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
