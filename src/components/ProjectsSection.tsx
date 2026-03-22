import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import projectOffice from "@/assets/project-office.jpg";
import projectPharmacy from "@/assets/project-pharmacy.jpg";
import projectDarkstore from "@/assets/project-darkstore.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectCafeteria from "@/assets/project-cafeteria.jpg";
import projectMall from "@/assets/project-mall.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { name: "Apollo Office Space", category: "Commercial", image: projectOffice },
  { name: "Dava India Pharmacy", category: "Retail", image: projectPharmacy },
  { name: "Blinkit Dark Store", category: "Logistics", image: projectDarkstore },
  { name: "Zepto Dark Store", category: "Logistics", image: projectMall },
  { name: "Tata 1MG Pharmacy", category: "Retail", image: projectPharmacy },
  { name: "Broaster Chicken", category: "F&B", image: projectRestaurant },
  { name: "Cafeteria", category: "F&B", image: projectCafeteria },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-heading",
        { y: 40, opacity: 0, filter: "blur(4px)" },
        {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".projects-heading", start: "top 85%", once: true },
        }
      );

      gsap.fromTo(
        ".project-card-anim",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".project-card-anim", start: "top 92%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 md:py-32 section-padding bg-warm-sand">
      <div className="max-w-6xl mx-auto">
        <p className="projects-heading text-sm font-medium text-primary tracking-widest uppercase mb-4">
          Our Work
        </p>
        <h2 className="projects-heading text-display text-3xl md:text-5xl font-bold mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="project-card project-card-anim aspect-[4/5]"
            >
              <img src={project.image} alt={project.name} loading="lazy" />
              <div className="overlay">
                <div>
                  <span className="text-xs uppercase tracking-wider text-primary-foreground/70 mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">
                    {project.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
