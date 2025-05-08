
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductPreview from "@/components/ProductPreview";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Custom cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        
        // Add a slight delay for smooth effect
        requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.left = `${x}px`;
            cursorRef.current.style.top = `${y}px`;
          }
        });
      }
    };
    
    // Reveal animation using Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-repulens-black text-white overflow-x-hidden">
      {/* Custom cursor glow effect */}
      <div 
        ref={cursorRef} 
        className="fixed w-40 h-40 rounded-full bg-repulens-yellow/10 blur-3xl pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block"
      />
      
      <Navigation />
      <Hero />
      <Features />
      <ProductPreview />
      <HowItWorks />
      <UseCases />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
