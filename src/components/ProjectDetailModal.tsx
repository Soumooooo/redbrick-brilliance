import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Maximize2, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import ProjectLightbox from "./ProjectLightbox";

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

const ProjectDetailModal = ({ project, onClose, onNext, onPrev, hasNext, hasPrev }: ProjectDetailModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    tl.fromTo(contentRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.15");

    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    setActiveImage(0);
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, { opacity: 0.5, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
    }
  }, [project.id]);

  const handleClose = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: onClose,
    });
    tl.to(contentRef.current, { y: 40, opacity: 0, duration: 0.3, ease: "power2.in" });
    tl.to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.15");
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose]);

  const categoryColors: Record<string, string> = {
    Commercial: "bg-blue-500/15 text-blue-700 border-blue-200",
    Retail: "bg-emerald-500/15 text-emerald-700 border-emerald-200",
    Logistics: "bg-amber-500/15 text-amber-700 border-amber-200",
    "F&B": "bg-rose-500/15 text-rose-700 border-rose-200",
  };

  return (
    <>
      <div ref={overlayRef} className="fixed inset-0 z-[100] bg-foreground/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="fixed inset-0 z-[101] flex items-start justify-center overflow-y-auto py-8 px-4 md:py-12">
        <div
          ref={contentRef}
          className="relative w-full max-w-4xl bg-background rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors shadow-md"
          >
            <X size={20} />
          </button>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] overflow-hidden group cursor-pointer" onClick={() => setLightboxIndex(activeImage)}>
            <img
              src={project.images[activeImage]}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 right-4 p-2 rounded-full bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={18} />
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 px-6 -mt-6 relative z-10">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  i === activeImage ? "border-primary shadow-lg scale-105" : "border-background/80 opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category] || ""}`}>
                  {project.category}
                </span>
                <h2 className="text-display text-2xl md:text-4xl font-bold mt-3">{project.name}</h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">{project.description}</p>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin size={15} /> {project.location}</span>
              <span className="flex items-center gap-1.5"><Calendar size={15} /> {project.year}</span>
              <span className="flex items-center gap-1.5"><Maximize2 size={15} /> {project.area}</span>
            </div>

            {/* Divider */}
            <hr className="border-border" />

            {/* Details */}
            <div>
              <h3 className="text-display text-lg font-semibold mb-3">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed">{project.details}</p>
            </div>

            {/* Gallery Grid */}
            <div>
              <h3 className="text-display text-lg font-semibold mb-3">Gallery</h3>
              {/* Mobile: horizontal swipe carousel */}
              <div
                className="md:hidden -mx-6 px-6 flex gap-2 overflow-x-auto snap-x snap-mandatory overscroll-x-contain touch-pan-x scrollbar-none"
                style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
              >
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="relative w-[80%] flex-shrink-0 aspect-[4/3] rounded-lg overflow-hidden snap-center"
                  >
                    <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              {/* Tablet/Desktop: original grid */}
              <div className="hidden md:grid grid-cols-3 gap-2">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden group"
                  >
                    <img src={img} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                      <Maximize2 size={20} className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4 border-t border-border">
              {hasPrev ? (
                <button onClick={onPrev} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                  <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Previous Project
                </button>
              ) : <div />}
              {hasNext ? (
                <button onClick={onNext} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
                  Next Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <ProjectLightbox images={project.images} currentIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  );
};

export default ProjectDetailModal;
