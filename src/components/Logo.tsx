
import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const Logo = ({ size = "md", animated = false }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center overflow-hidden rounded-full ${animated ? "group" : ""}`}>
        {/* Logo Background */}
        <div className="absolute inset-0 bg-repulens-yellow rounded-full"></div>
        
        {/* The "R" letter */}
        <span className={`relative font-bold text-repulens-black ${
          size === "sm" ? "text-xl" : size === "md" ? "text-2xl" : "text-3xl"
        }`}>
          R
        </span>

        {/* Animated glow effect */}
        {animated && (
          <div className="absolute inset-0 bg-repulens-yellow/60 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        )}
        
        {/* Animated pulse ring */}
        {animated && (
          <div className="absolute inset-0 scale-0 bg-repulens-yellow/30 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
        )}
      </div>
      
      <span className={`font-bold text-white ${
        size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl"
      }`}>
        Repulens
      </span>
    </div>
  );
};

export default Logo;
