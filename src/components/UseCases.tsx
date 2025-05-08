
import { useRef, useEffect, useState } from "react";
import { Users, Building, GraduationCap } from "lucide-react";

const useCases = [
  {
    icon: <Users size={36} />,
    title: "Investors",
    description: "Research smarter before buying shares with in-depth reputation analysis that traditional research misses.",
    backgroundColor: "bg-blue-500/10",
    textColor: "text-blue-400"
  },
  {
    icon: <Building size={36} />,
    title: "PR & Brand Teams",
    description: "Monitor and manage public sentiment with real-time data and predictive crisis alerts.",
    backgroundColor: "bg-repulens-yellow/10",
    textColor: "text-repulens-yellow"
  },
  {
    icon: <GraduationCap size={36} />,
    title: "Students & Analysts",
    description: "Study company behavior in real time with comprehensive data visualizations and trend tracking.",
    backgroundColor: "bg-green-500/10",
    textColor: "text-green-400"
  }
];

const UseCases = () => {
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
    <section id="use-cases" className="section-padding bg-gradient-to-b from-repulens-darkgray to-repulens-black">
      <div ref={sectionRef} className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Who Is It For?</h2>
          <p className="section-subheading">
            Repulens helps various professionals make data-driven decisions with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`p-8 rounded-xl border border-gray-800 bg-card-gradient card-hover ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 ${useCase.backgroundColor} rounded-lg flex items-center justify-center ${useCase.textColor} mb-6`}>
                {useCase.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
              <p className="text-gray-300">{useCase.description}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Perfect match
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
