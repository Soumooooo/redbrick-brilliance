import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, categories, type ProjectCategory } from "@/data/projects";
import ProjectDetailModal from "./ProjectDetailModal";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  const selectedProject = selectedIndex !== null ? filtered[selectedIndex] : null;

  const handleCategoryChange = useCallback((cat: ProjectCategory) => {
    setActiveCategory(cat);
    // Re-animate cards on filter
    requestAnimationFrame(() => {
      gsap.fromTo(".project-card-anim", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.06 });
    });
  }, []);

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
          y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.08,
          scrollTrigger: { trigger: ".project-card-anim", start: "top 92%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 md:py-32 section-padding bg-warm-sand">
      <div className="max-w-6xl mx-auto">
        <p className="projects-heading text-sm font-medium text-primary tracking-widest uppercase mb-4">Our Work</p>
        <h2 className="projects-heading text-display text-3xl md:text-5xl font-bold mb-8">Featured Projects</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-muted-foreground hover:text-foreground hover:shadow-sm border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="project-card project-card-anim aspect-[4/5] cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <img src={project.images[0]} alt={project.name} loading="lazy" />
              <div className="overlay">
                <div>
                  <span className="text-xs uppercase tracking-wider text-primary-foreground/70 mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">{project.name}</h3>
                  <p className="text-primary-foreground/60 text-xs mt-1">Click to explore →</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedIndex(null)}
          onNext={selectedIndex !== null && selectedIndex < filtered.length - 1 ? () => setSelectedIndex(selectedIndex + 1) : undefined}
          onPrev={selectedIndex !== null && selectedIndex > 0 ? () => setSelectedIndex(selectedIndex - 1) : undefined}
          hasNext={selectedIndex !== null && selectedIndex < filtered.length - 1}
          hasPrev={selectedIndex !== null && selectedIndex > 0}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
