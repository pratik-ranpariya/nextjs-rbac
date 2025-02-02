import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[400px] bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/banner.jpg"
          alt="Banner"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Your Gateway to
          <br />
          Business Excellence
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl">
          Stay ahead of the curve with our cutting-edge insights, expert
          analysis, and comprehensive business coverage.
        </p>
      </div>
    </div>
  );
};

export default Banner;
