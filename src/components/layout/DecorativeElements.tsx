import React from 'react';

interface DecorativeCirclesProps {
  className?: string;
}

export const DecorativeCircles: React.FC<DecorativeCirclesProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      {/* Decorative Circles - Hidden on mobile, visible on larger screens */}
      <div className="hidden sm:block absolute top-20 left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary-200 rounded-full opacity-60 float" aria-hidden="true"></div>
      <div className="hidden sm:block absolute top-40 right-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-warning-200 rounded-full opacity-50 float" style={{ animationDelay: '1s' }} aria-hidden="true"></div>
      <div className="hidden md:block absolute bottom-40 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-success-200 rounded-full opacity-40 float" style={{ animationDelay: '2s' }} aria-hidden="true"></div>
    </div>
  );
};

export const WavyBackground: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="relative block w-full h-20"
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          className="fill-white"
        ></path>
      </svg>
    </div>
  );
};
