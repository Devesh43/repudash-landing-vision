
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-repulens-black text-white overflow-x-hidden">
      {/* Custom cursor glow effect */}
      <div className="fixed w-40 h-40 rounded-full bg-repulens-yellow/10 blur-3xl pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block" />
      
      <Navigation />
      
      <main className="container mx-auto pt-32 pb-20 px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Simple, Transparent <span className="text-repulens-yellow">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Whether you're an individual researcher or an enterprise company, 
            Repulens has a plan that fits your needs.
          </p>
          
          <div className="inline-block">
            <Tabs 
              defaultValue="monthly" 
              value={billingPeriod}
              onValueChange={(value) => setBillingPeriod(value as "monthly" | "annually")}
              className="w-full max-w-sm mx-auto"
            >
              <TabsList className="grid w-full grid-cols-2 bg-repulens-black border border-gray-700">
                <TabsTrigger value="monthly" className="data-[state=active]:bg-repulens-yellow data-[state=active]:text-black">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annually" className="data-[state=active]:bg-repulens-yellow data-[state=active]:text-black">
                  Annually <span className="ml-1 text-xs font-normal text-green-400">Save 20%</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Individual Plan */}
          <motion.div 
            className="relative rounded-xl border border-gray-800 bg-black p-6 flex flex-col h-full hover:border-repulens-yellow/50 transition-colors duration-300 overflow-hidden group"
            variants={fadeIn}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-medium mb-2 text-white">Individual</h3>
              <div className="text-repulens-yellow text-4xl font-bold mb-2">Free</div>
              <p className="text-gray-400 mb-6">Perfect for researchers and students</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic reputation tracking for up to 3 companies</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Historical data for the past 30 days</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Weekly summary reports</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Limited API access</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto relative z-10">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Get Started
              </Button>
            </div>
            
            {/* Animated gradient border on hover */}
            <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-repulens-yellow via-yellow-500 to-repulens-yellow blur-sm"></div>
          </motion.div>
          
          {/* Business Plan */}
          <motion.div 
            className="relative rounded-xl border border-repulens-yellow/50 bg-black p-6 flex flex-col h-full hover:border-repulens-yellow transition-colors duration-300 overflow-hidden group"
            variants={fadeIn}
          >
            <div className="absolute top-0 right-0 bg-repulens-yellow text-black px-3 py-1 text-sm font-medium">
              Popular
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-medium mb-2 text-white">Business</h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-repulens-yellow text-4xl font-bold">
                  {billingPeriod === "monthly" ? "$99" : "$948"}
                </span>
                <span className="text-gray-400 mb-1">
                  /{billingPeriod === "monthly" ? "month" : "year"}
                </span>
              </div>
              <p className="text-gray-400 mb-6">For growing businesses and PR teams</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reputation tracking for up to 10 companies</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Historical data for the past 12 months</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Daily reports and alerts</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Competitor analysis dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Crisis detection alerts</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full API access</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto relative z-10">
              <Button className="w-full bg-repulens-yellow hover:bg-repulens-gold text-black">
                Start 14-Day Trial
              </Button>
            </div>
            
            {/* Animated gradient background on hover */}
            <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-repulens-yellow via-yellow-500 to-repulens-yellow blur-sm"></div>
          </motion.div>
          
          {/* Enterprise Plan */}
          <motion.div 
            className="relative rounded-xl border border-gray-800 bg-black p-6 flex flex-col h-full hover:border-repulens-yellow/50 transition-colors duration-300 overflow-hidden group"
            variants={fadeIn}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-medium mb-2 text-white">Enterprise</h3>
              <div className="text-repulens-yellow text-4xl font-bold mb-2">Custom</div>
              <p className="text-gray-400 mb-6">For large organizations with advanced needs</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Unlimited reputation tracking</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full historical data access</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time alerts and notifications</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Advanced sentiment analysis</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom dashboard and integrations</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-repulens-yellow mr-2 mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto relative z-10">
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Contact Sales
              </Button>
            </div>
            
            {/* Animated gradient border on hover */}
            <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-repulens-yellow via-yellow-500 to-repulens-yellow blur-sm"></div>
          </motion.div>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div 
          className="mt-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-repulens-yellow/30 transition-colors">
              <h3 className="text-xl font-medium mb-2">Can I upgrade or downgrade my plan later?</h3>
              <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-repulens-yellow/30 transition-colors">
              <h3 className="text-xl font-medium mb-2">Do you offer discounts for non-profits?</h3>
              <p className="text-gray-400">Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information.</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-repulens-yellow/30 transition-colors">
              <h3 className="text-xl font-medium mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-repulens-yellow/30 transition-colors">
              <h3 className="text-xl font-medium mb-2">Is there a free trial for paid plans?</h3>
              <p className="text-gray-400">Yes, we offer a 14-day free trial for our Business plan with no credit card required. Enterprise plans include a custom demo and trial period.</p>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-gray-800 relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-repulens-yellow/20 to-transparent opacity-30"></div>
              <div className="absolute -inset-[100%] animate-[spin_20s_linear_infinite] bg-repulens-yellow/5 blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Reputation Intelligence?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of researchers, agencies, and enterprises who trust Repulens for reputation monitoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-repulens-yellow hover:bg-repulens-gold text-black text-lg px-8 py-6 h-auto">
                  Start Your Free Trial
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white text-lg px-8 py-6 h-auto">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
