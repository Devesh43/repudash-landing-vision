
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-repulens-black">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-hero-gradient"></div>
        
        {/* Animated Circle */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-repulens-yellow/20 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="absolute bottom-0 left-0 w-[300%] h-full animate-wave"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,150.83,65.31,213.4,55.63A422.62,422.62,0,0,1,321.39,56.44Z" 
              className="fill-repulens-yellow/30"
            ></path>
          </svg>
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="absolute bottom-0 left-0 w-[300%] h-[70%] animate-wave animation-delay-200"
            style={{animationDelay: "2s"}}
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,150.83,65.31,213.4,55.63A422.62,422.62,0,0,1,321.39,56.44Z" 
              className="fill-repulens-yellow/20"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in">
          See Beyond the Buzz —{" "}
          <span className="text-repulens-yellow">Decode Company Reputation</span> with AI.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in animate-delay-200">
          Repulens lets you track sentiment trends, controversies, and media perception of companies — all in one live dashboard.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400">
          <Button size="lg" className="bg-repulens-yellow text-repulens-black hover:bg-repulens-gold text-lg">
            Start Exploring
          </Button>
          <Button size="lg" variant="outline" className="border-repulens-yellow text-repulens-yellow hover:bg-repulens-yellow/10 text-lg">
            See How It Works
          </Button>
        </div>
        
        {/* Dashboard Preview */}
        <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto animate-fade-in animate-delay-500">
          <div className="bg-repulens-darkgray rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="h-10 bg-black/30 flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-4">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80" 
                alt="Dashboard Preview" 
                className="w-full h-auto rounded-lg opacity-80"
              />
            </div>
          </div>
          
          {/* Dashboard Glow */}
          <div className="absolute -inset-2 bg-repulens-yellow/20 rounded-2xl blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
