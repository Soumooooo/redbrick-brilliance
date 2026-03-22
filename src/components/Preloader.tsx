import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLSpanElement>(null);
  const brickRef = useRef<HTMLSpanElement>(null);
  const infraRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    tl.set([redRef.current, brickRef.current, infraRef.current], {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    })
      .set(lineRef.current, { scaleX: 0 })
      .to(redRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        brickRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.35"
      )
      .to(
        infraRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: "power2.in",
      });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="preloader">
      <div className="flex flex-col items-center gap-3">
        <div className="preloader-text">
          <span ref={redRef} className="accent inline-block">Red</span>
          <span ref={brickRef} className="inline-block">brick</span>{" "}
          <span ref={infraRef} className="inline-block opacity-70">Infrastructure</span>
        </div>
        <div
          ref={lineRef}
          className="h-[2px] w-24 origin-left"
          style={{ backgroundColor: "hsl(var(--primary))" }}
        />
      </div>
    </div>
  );
};

export default Preloader;
