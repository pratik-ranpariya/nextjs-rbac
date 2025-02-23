"use client";
import { useState } from "react";
import Link from "next/link";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";
import Logo from "@/Icon/Logo";
import { usePathname } from "next/navigation";
import SearchPopup from "./SearchPopup";
import CategoryDropdown from "./CategoryDropdown";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const linkStyle = (path: string) => {
    return `text-sm transition-colors duration-200 ${
      isActive(path)
        ? "text-red-600 font-bold"
        : "text-gray-700 hover:text-gray-900 font-semibold"
    }`;
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center py-4 border-b px-4 md:px-6 lg:px-8">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
      <nav className="bg-white border-b border-gray-200 sticky top-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="hidden md:flex items-center space-x-5">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-500 hover:text-red-600 transition-colors duration-200"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-500 hover:text-red-600 transition-colors duration-200"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-500 hover:text-red-600 transition-colors duration-200"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-500 hover:text-red-600 transition-colors duration-200"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={linkStyle("/")}>
                HOME
              </Link>
              <CategoryDropdown />
              <Link href="/write" className={linkStyle("/write")}>
                WRITE
              </Link>
              <Link href="/advertise" className={linkStyle("/advertise")}>
                ADVERTISE
              </Link>
              <Link href="/tools" className={linkStyle("/tools")}>
                TOOLS
              </Link>
              <Link href="/learn" className={linkStyle("/learn")}>
                LEARN
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-500 hover:text-red-600 transition-colors duration-200"
              >
                <FaSearch className="w-5 h-5" />
              </button>
              <div className="hidden md:block -mr-4">
                <AuthButtons />
              </div>
              <div className="md:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
