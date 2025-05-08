
import { useRef, useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "We Crawl & Analyze",
    description: "Data from social media, news, blogs, and forums are constantly gathered and processed."
  },
  {
    number: "02",
    title: "AI Decodes Sentiment & Topics",
    description: "Using NLP & trend tracking to understand the context and feeling behind every mention."
  },
  {
    number: "03",
    title: "You See It All on a Dashboard",
    description: "Clear visuals, timelines, and alerts make complex data instantly understandable."
  },
  {
    number: "04",
    title: "Stay Ahead",
    description: "Spot crises, compare companies, and gain insights before your competitors do."
  }
];

const HowItWorks = () => {
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
    <section id="how-it-works" className="section-padding bg-repulens-darkgray relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-repulens-black to-transparent"></div>
      
      <div ref={sectionRef} className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading">
            Our streamlined process delivers comprehensive reputation analytics through four key steps.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-repulens-yellow/30 -translate-x-1/2 hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center gap-8 md:gap-16 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step number */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-repulens-yellow/10 rounded-full">
                      <span className="text-4xl md:text-5xl font-bold text-repulens-yellow">{step.number}</span>
                    </div>
                    <div className="absolute -inset-4 bg-repulens-yellow/5 rounded-full blur-lg -z-10"></div>
                  </div>
                </div>
                
                {/* Step content */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
