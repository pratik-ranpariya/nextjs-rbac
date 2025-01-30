'use client';
import { useState } from 'react';
import LoginPopup from './LoginPopup';

export default function AuthButtons() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  if (isAuthenticated) return null;

  return (
    <>
      <div className="bg-red-600 px-4 py-2">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsLoginOpen(true)}
            className="text-sm text-white hover:text-white/90 transition-colors"
          >
            Login
          </button>
          <span className="text-white/50">|</span>
          <button 
            onClick={() => setIsSignupOpen(true)}
            className="text-sm text-white hover:text-white/90 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>

      <LoginPopup 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        mode="login"
      />

      <LoginPopup 
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        mode="signup"
      />
    </>
  );
} 