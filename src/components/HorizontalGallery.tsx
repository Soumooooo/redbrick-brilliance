import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import projectOffice from "@/assets/project-office.jpg";
import projectPharmacy from "@/assets/project-pharmacy.jpg";
import projectDarkstore from "@/assets/project-darkstore.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectCafeteria from "@/assets/project-cafeteria.jpg";
import projectMall from "@/assets/project-mall.jpg";
import heroBg from "@/assets/hero-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: heroBg, label: "Executive Suite" },
  { src: projectOffice, label: "Open Workspace" },
  { src: projectMall, label: "Retail Atrium" },
  { src: projectPharmacy, label: "Pharmacy Interior" },
  { src: projectRestaurant, label: "Restaurant Ambiance" },
  { src: projectDarkstore, label: "Logistics Hub" },
  { src: projectCafeteria, label: "Cafeteria Design" },
];

const HorizontalGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current;
      if (!track) return;

      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="horizontal-scroll-section md:h-screen md:overflow-hidden">
      <div className="h-full flex items-center section-padding">
        <div ref={trackRef} className="flex flex-col gap-4 md:flex-row md:gap-0 horizontal-scroll-track-desktop">
          {images.map((img, i) => (
            <div key={i} className="gallery-card group relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-auto">
              <img src={img.src} alt={img.label} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-display text-sm font-medium text-primary-foreground">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
