
import { useState, useEffect } from "react";
import { Activity, TrendingUp, AlertTriangle, BarChart2 } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 * index);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`bg-repulens-darkgray rounded-xl p-6 border border-gray-800 card-hover ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 bg-repulens-yellow/20 rounded-lg flex items-center justify-center text-repulens-yellow mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="section-padding bg-repulens-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Key Features</h2>
          <p className="section-subheading">
            Harness the power of AI to understand corporate reputation like never before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Activity size={24} />}
            title="AI-Powered Sentiment Analysis"
            description="Understand how people really feel about companies with our advanced NLP algorithms."
            index={0}
          />
          <FeatureCard 
            icon={<TrendingUp size={24} />}
            title="Live Media Feed & Trends"
            description="Get a pulse on real-time buzz with continuous monitoring of all media channels."
            index={1}
          />
          <FeatureCard 
            icon={<AlertTriangle size={24} />}
            title="Controversy Radar"
            description="Visualize PR shocks before they escalate with early warning indicators."
            index={2}
          />
          <FeatureCard 
            icon={<BarChart2 size={24} />}
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
