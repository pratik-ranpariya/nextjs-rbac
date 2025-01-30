import Link from 'next/link';

export default function SubscribeBanner() {
  return (
    <div className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/advertise" 
          className="flex items-center justify-center py-2 hover:bg-red-700 transition-colors group"
        >
          <span className="text-sm font-medium">
            Subscribe to Dynamic Business for exclusive content and updates
          </span>
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 