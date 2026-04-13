'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black text-white border-b border-yellow-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="/arbi.jpg"
                alt="Arbi Jewellers Logo"
                width={60}
                height={40}
                className="object-contain"
              />
              {/* <span className="text-2xl font-black text-yellow-400 hidden sm:inline tracking-wider drop-shadow-lg group-hover:text-yellow-300 transition-colors duration-300">
                ARBI JEWELLERS
              </span> */}
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-10">
            <Link
              href="/"
              className="text-yellow-100 hover:text-yellow-300 font-bold text-lg tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="text-yellow-100 hover:text-yellow-300 font-bold text-lg tracking-wide"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-condition"
              className="text-yellow-100 hover:text-yellow-300 font-bold text-lg tracking-wide"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
  