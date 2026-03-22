import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import HorizontalGallery from "@/components/HorizontalGallery";
import ParallaxSection from "@/components/ParallaxSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";

    // Init Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as any);
    };
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      {!loading && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <ClientsSection />
            <HorizontalGallery />
            <ParallaxSection />
            <WhyChooseUs />
            <ContactSection />
          </main>
          <Footer />
          <FloatingWidget />
        </>
      )}
    </>
  );
};

export default Index;
