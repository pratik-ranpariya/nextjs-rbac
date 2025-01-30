'use client';
import { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchPopup({ isOpen, onClose }: SearchPopupProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Search Panel */}
      <div 
        className={`relative bg-white w-full max-w-2xl mx-4 shadow-2xl transform transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Search Articles</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSearch} className="flex gap-3 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for articles, topics, or authors..."
                className="w-full px-5 py-4 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
                autoFocus
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors text-lg font-semibold"
            >
              Search
            </button>
          </form>

          {/* Quick Links */}
          <div className="text-sm text-gray-500">
            <span className="mr-2">Popular:</span>
            {['Business', 'Technology', 'Finance'].map((term) => (
              <button 
                key={term}
                onClick={() => setSearchQuery(term)} 
                className="mr-3 hover:text-red-600"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 