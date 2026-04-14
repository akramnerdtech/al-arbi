'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white border-b border-yellow-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-4 ">
<Image
  src="/logo1.png"
  alt="Arbi Jewellers Logo"
  width={90}
  height={40}
  className="object-contain "
/>
              {/* <span className="text-2xl font-black text-yellow-400 hidden sm:inline tracking-wider drop-shadow-lg group-hover:text-yellow-300 transition-colors duration-300">
                ARBI JEWELLERS
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className=" hover:text-yellow-300 font-bold text-lg tracking-wide transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="text-yellow-100 hover:text-yellow-300 font-bold text-lg tracking-wide transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-condition"
              className="text-yellow-100 hover:text-yellow-300 font-bold text-lg tracking-wide transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-yellow-500/30">
            <nav className="flex flex-col space-y-4 py-6">
              <Link
                href="/"
                className="text-yellow-100 hover:text-yellow-300 font-bold text-lg tracking-wide transition-colors duration-300 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/privacy-policy"
                className="text-yellow-100 hover:text-yellow-300 font-bold text-lg tracking-wide transition-colors duration-300 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-condition"
                className="text-yellow-100 hover:text-yellow-300 font-bold text-lg tracking-wide transition-colors duration-300 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
  