"use client";
import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Real Home</div>
        {/* Mobile navigation button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-blue-500 text-white">
            <ul className="p-4">
              <li>
                <a
                  href="/"
                  className="block text-white hover:text-gray-300 py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white hover:text-gray-300 py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white hover:text-gray-300 py-2"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block text-white hover:text-gray-300 py-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop navigation menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
