'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AuthButtons() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  if (isAuthenticated) return null;

  return (
    <div className="flex items-center space-x-4">
      <Link 
        href="/login" 
        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
      >
        Login
      </Link>
      <Link 
        href="/signup" 
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Sign Up
      </Link>
    </div>
  );
} 