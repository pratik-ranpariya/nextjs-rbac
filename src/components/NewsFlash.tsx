"use client";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const newsItems = [
  "Latest: Australian businesses see 25% growth in digital adoption",
  "Breaking: New government initiatives for SMEs announced",
  "Trending: Sustainable business practices drive profit growth",
  "Update: AI implementation in small businesses up by 40%",
  "New: Changes to business tax regulations coming in 2024",
  "Report: Remote work boosts productivity in Australian companies",
];

export default function NewsFlash() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-10 flex items-center">
          {/* Fixed Latest Badge */}
          <div className="absolute left-4 z-10 bg-red-600 px-2 py-0.5 text-xs font-medium h-6 flex items-center">
            LATEST
          </div>

          {/* Sliding Content */}
          <div className="flex-1 overflow-hidden pl-24">
            <div
              className={`whitespace-nowrap transition-transform duration-500 ease-in-out ${
                isAnimating
                  ? "translate-y-[-100%] opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <p className="text-sm inline-block">{newsItems[currentIndex]}</p>
            </div>
          </div>

          {/* View All Link */}
          <div className="absolute right-4 z-10">
            <Link
              href="/blog/"
              className="hidden sm:flex items-center text-sm text-red-400 hover:text-red-300 transition-colors"
            >
              View All News
              <FaArrowRight className="ml-2 w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
