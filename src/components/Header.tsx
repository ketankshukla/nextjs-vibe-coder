"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className="fixed top-0 left-0 w-full bg-[#3C7A3E]/95 shadow-md z-50"
    >
      <div className="w-[90%] max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="logo text-2xl font-bold">
            Python<span className="text-[#FFD43B]">VibeCoder</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#home" 
              className="relative hover:text-[#FFE873] transition-colors"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#FFD43B] transition-all duration-300" />
            </Link>
            <Link 
              href="#about" 
              className="relative hover:text-[#FFE873] transition-colors"
            >
              <span className="relative z-10">About</span>
              <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#FFD43B] transition-all duration-300" />
            </Link>
            <Link 
              href="#projects" 
              className="relative hover:text-[#FFE873] transition-colors"
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#FFD43B] transition-all duration-300" />
            </Link>
            <Link 
              href="#blog" 
              className="relative hover:text-[#FFE873] transition-colors"
            >
              <span className="relative z-10">Blog</span>
              <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#FFD43B] transition-all duration-300" />
            </Link>
            <Link 
              href="#contact" 
              className="relative hover:text-[#FFE873] transition-colors"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#FFD43B] transition-all duration-300" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#home"
                  className="block text-lg hover:text-[#FFE873] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block text-lg hover:text-[#FFE873] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="block text-lg hover:text-[#FFE873] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="block text-lg hover:text-[#FFE873] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block text-lg hover:text-[#FFE873] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
