import Link from 'next/link';
import AuthButtons from './AuthButtons';
import MobileMenu from './MobileMenu';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4 border-b">
          <Link href="/" className="text-3xl font-bold text-gray-900">
            Dynamic Business
          </Link>
        </div>

        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex items-center space-x-5">
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

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Home
            </Link>
            <Link href="/read" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Read
            </Link>
            <Link href="/write" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Write
            </Link>
            <Link href="/advertise" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Advertise
            </Link>
            <Link href="/tools" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Tools
            </Link>
            <Link href="/learn" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Learn
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
              <FaSearch className="w-5 h-5" />
            </button>
            <div className="hidden md:block">
              <AuthButtons />
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 