'use client';
import { useEffect, useState } from 'react';

interface AdvertisementProps {
  type: 'banner' | 'sidebar' | 'in-article' | 'leaderboard';
  className?: string;
}

export default function Advertisement({ type, className = '' }: AdvertisementProps) {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    // Simulate ad loading
    setTimeout(() => setAdLoaded(true), 500);
  }, []);

  const getAdDimensions = () => {
    switch (type) {
      case 'banner':
        return 'h-[90px] w-full';
      case 'sidebar':
        return 'h-[600px] w-[300px]';
      case 'in-article':
        return 'h-[250px] w-full';
      case 'leaderboard':
        return 'h-[90px] w-full';
      default:
        return 'h-[250px] w-full';
    }
  };

  return (
    <div className={`bg-gray-100 flex items-center justify-center ${getAdDimensions()} ${className}`}>
      <div className="text-center">
        <span className="text-xs text-gray-400 uppercase mb-2 block">Advertisement</span>
        {!adLoaded && (
          <div className="animate-pulse bg-gray-200 h-full w-full" />
        )}
      </div>
    </div>
  );
} 