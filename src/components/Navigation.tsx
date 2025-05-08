
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-repulens-black/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo animated={isScrolled} />
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-repulens-yellow transition-colors">
            Features
          </a>
          <a href="#product" className="text-gray-300 hover:text-repulens-yellow transition-colors">
            Product
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-repulens-yellow transition-colors">
            How It Works
          </a>
          <a href="#use-cases" className="text-gray-300 hover:text-repulens-yellow transition-colors">
            Use Cases
          </a>
          <Button className="bg-repulens-yellow text-repulens-black hover:bg-repulens-gold">
            Get Started
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-repulens-black/95 backdrop-blur-md transition-transform duration-300 ${
        mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="container mx-auto py-4 flex flex-col gap-4">
          <a href="#features" className="text-gray-300 hover:text-repulens-yellow transition-colors py-2">
            Features
          </a>
          <a href="#product" className="text-gray-300 hover:text-repulens-yellow transition-colors py-2">
            Product
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-repulens-yellow transition-colors py-2">
            How It Works
          </a>
          <a href="#use-cases" className="text-gray-300 hover:text-repulens-yellow transition-colors py-2">
            Use Cases
          </a>
          <Button className="bg-repulens-yellow text-repulens-black hover:bg-repulens-gold w-full">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
