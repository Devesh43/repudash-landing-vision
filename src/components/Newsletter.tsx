
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
      });
    }, 1500);
  };

  return (
    <section className="section-padding bg-repulens-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-repulens-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-repulens-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-repulens-darkgray rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Stay updated
              </h2>
              <p className="text-gray-300">
                Join our newsletter for updates on new features, industry insights, and reputation management tips.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-repulens-black/50 border-gray-700 placeholder:text-gray-500"
                required
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-repulens-yellow hover:bg-repulens-gold text-repulens-black whitespace-nowrap"
              >
                {isLoading ? "Subscribing..." : "Notify Me"}
              </Button>
            </form>
            
            <div className="mt-6 text-xs text-gray-500 text-center">
              We respect your privacy. Unsubscribe at any time.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
