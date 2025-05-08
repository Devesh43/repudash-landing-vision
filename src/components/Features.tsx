
import { useState, useEffect, useRef } from "react";
import { Activity, TrendingUp, AlertTriangle, BarChart2 } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-repulens-darkgray rounded-xl p-6 border border-gray-800 card-hover transition-all duration-700 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-12 h-12 bg-repulens-yellow/20 rounded-lg flex items-center justify-center text-repulens-yellow mb-4 transition-all duration-500 group-hover:bg-repulens-yellow/30 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-repulens-yellow/50 transition-all duration-500 group-hover:w-3/4"></span>
      </h3>
      <p className="text-gray-400">{description}</p>
      
      {/* Subtle corner accent */}
      <div className="absolute bottom-2 right-2 w-0 h-0 border-b-8 border-r-8 border-repulens-yellow/0 group-hover:border-repulens-yellow/30 transition-all duration-500"></div>
    </div>
  );
};

const Features = () => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="section-padding bg-repulens-black" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`section-heading transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Key Features
          </h2>
          <p className={`section-subheading transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Harness the power of AI to understand corporate reputation like never before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line between cards (visible only on larger screens) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-repulens-yellow/20 to-transparent hidden lg:block"></div>
          
          <FeatureCard 
            icon={<Activity size={24} className="group-hover:animate-pulse" />}
            title="AI-Powered Sentiment Analysis"
            description="Understand how people really feel about companies with our advanced NLP algorithms."
            index={0}
          />
          <FeatureCard 
            icon={<TrendingUp size={24} className="group-hover:animate-bounce" />}
            title="Live Media Feed & Trends"
            description="Get a pulse on real-time buzz with continuous monitoring of all media channels."
            index={1}
          />
          <FeatureCard 
            icon={<AlertTriangle size={24} className="group-hover:animate-pulse" />}
            title="Controversy Radar"
            description="Visualize PR shocks before they escalate with early warning indicators."
            index={2}
          />
          <FeatureCard 
            icon={<BarChart2 size={24} className="group-hover:animate-bounce" />}
            title="Competitor Insights"
            description="Compare industry players side-by-side to benchmark against the market."
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
