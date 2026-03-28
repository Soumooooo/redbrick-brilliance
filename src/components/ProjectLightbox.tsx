import { useEffect, useCallback, useState, useRef } from "react";
import gsap from "gsap";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
}

const ProjectLightbox = ({ images, currentIndex, onClose }: ProjectLightboxProps) => {
  const [index, setIndex] = useState(currentIndex);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const animateImage = useCallback(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" });
    }
  }, []);

  useEffect(() => {
    if (overlayRef.current) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    }
    animateImage();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [animateImage]);

  useEffect(() => { animateImage(); }, [index, animateImage]);

  const goNext = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const goPrev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goNext, goPrev]);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999] flex items-center justify-center bg-foreground/95" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors z-10">
        <X size={28} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-4 md:left-8 p-3 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <img
        ref={imageRef}
        src={images[index]}
        alt={`Gallery image ${index + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-4 md:right-8 p-3 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors z-10"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIndex(i); }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === index ? "bg-primary-foreground scale-125" : "bg-primary-foreground/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectLightbox;
