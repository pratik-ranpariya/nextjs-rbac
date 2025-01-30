import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[400px] bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
          alt="Business District"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Your Gateway to<br />
          Business Excellence
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl">
          Stay ahead of the curve with our cutting-edge insights, expert analysis, and comprehensive business coverage.
        </p>
      </div>
    </div>
  );
};

export default Banner;