'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        {isOpen ? (
          <FaTimes className="h-6 w-6" />
        ) : (
          <FaBars className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-[104px] left-0 right-0 bg-white border-b border-gray-200 py-4 px-4 space-y-4">
          <div className="space-y-2">
            <Link 
              href="/" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/read" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Read
            </Link>
            <Link 
              href="/write" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Write
            </Link>
            <Link 
              href="/advertise" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Advertise
            </Link>
            <Link 
              href="/tools" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Tools
            </Link>
            <Link 
              href="/learn" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Learn
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6 py-4 border-t">
            <Link href="https://instagram.com" target="_blank" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 