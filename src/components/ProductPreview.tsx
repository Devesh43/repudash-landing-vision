
import { useState, useEffect, useRef } from "react";

const ProductPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="product" className="section-padding bg-gradient-to-b from-repulens-black to-repulens-darkgray">
      <div ref={sectionRef} className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            The <span className="text-repulens-yellow">Repulens</span> Dashboard
          </h2>
          <p className="section-subheading">
            Visualize corporate reputation data with comprehensive insights at your fingertips.
          </p>
        </div>
        
        <div className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="relative p-2 bg-repulens-darkgray rounded-xl border border-gray-800 shadow-xl overflow-hidden">
            {/* Dashboard Preview Image */}
            <img 
              src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1200&auto=format&fit=crop&q=80" 
              alt="Repulens Dashboard" 
              className="w-full h-auto rounded-lg"
            />
            
            {/* Feature Callouts */}
            <div className="absolute top-[20%] left-[15%] bg-black/80 border border-repulens-yellow/50 px-3 py-1 rounded-full text-xs text-white">
              Sentiment Graph
            </div>
            
            <div className="absolute top-[30%] right-[25%] bg-black/80 border border-repulens-yellow/50 px-3 py-1 rounded-full text-xs text-white">
              Trending News
            </div>
            
            <div className="absolute bottom-[25%] left-[30%] bg-black/80 border border-repulens-yellow/50 px-3 py-1 rounded-full text-xs text-white">
              Risk Analysis
            </div>
            
            <div className="absolute bottom-[40%] right-[15%] bg-black/80 border border-repulens-yellow/50 px-3 py-1 rounded-full text-xs text-white">
              Competitor Tracker
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-repulens-yellow/10 rounded-2xl blur-xl -z-10"></div>
        </div>
        
        {/* Additional info below the dashboard */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`text-center p-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="text-4xl font-bold text-repulens-yellow mb-2">24/7</div>
            <p className="text-gray-300">Continuous monitoring across all media channels</p>
          </div>
          
          <div className={`text-center p-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
            <div className="text-4xl font-bold text-repulens-yellow mb-2">95%</div>
            <p className="text-gray-300">Sentiment analysis accuracy with our AI algorithms</p>
          </div>
          
          <div className={`text-center p-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "600ms" }}>
            <div className="text-4xl font-bold text-repulens-yellow mb-2">10K+</div>
            <p className="text-gray-300">Data sources analyzed for comprehensive coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
