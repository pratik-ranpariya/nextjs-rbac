'use client';
import { useState, useEffect } from 'react';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

export default function ProgressBar() {
  const [showBar, setShowBar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Wait 10 seconds before showing the bar
    const showTimer = setTimeout(() => {
      setShowBar(true);
    }, 100);

    // Increment progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearTimeout(showTimer);
      clearInterval(progressTimer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email submitted:', email);
    setShowBar(false);
  };

  if (!showBar) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Progress Bar */}
      {/* <div className="h-1.5 bg-gray-100">
        <div 
          className="h-full bg-[#22c55e] transition-all duration-300 shadow-sm"
          style={{ width: `${progress}%` }}
        />
      </div> */}

      {/* Notification with Email Subscription */}
      <div className="bg-green-500 shadow-lg ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                AI Powered Daily Business News Summary
              </h3>
              <p className="text-sm text-gray-600">
                Get daily insights delivered to your inbox
              </p>
            </div>

            <form 
              onSubmit={handleSubmit}
              className="flex-1 flex items-center gap-2 w-full sm:w-auto"
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-2  hover:bg-gray-600 transition-colors flex items-center gap-2"
              >
                <span>Go</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </form>

            <button 
              onClick={() => setShowBar(false)}
              className="text-gray-900 hover:text-gray-600 transition-colors sm:ml-4"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 