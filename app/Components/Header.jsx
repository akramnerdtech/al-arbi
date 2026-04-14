'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-condition', label: 'Terms & Conditions' },

];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed z-50 w-full border-b border-[rgba(220,199,150,0.18)] bg-[#121212] text-[#f6efe4] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-4 sm:min-h-20 sm:gap-6">
          <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/logo1.png"
              alt="Al-Arbi Jewellers logo"
              width={150}
              height={60}
              priority
              className="h-12 w-auto object-contain sm:h-16 lg:h-20"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={`group text-sm transition ${
                  pathname === item.href ? 'text-[#d5b46c]' : 'text-[#eee5d8] hover:text-[#d5b46c]'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`mt-1 block h-px bg-[#d5b46c] transition-all duration-300 ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

     

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(220,199,150,0.22)] text-[#d7bb7d] lg:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.7}
                d={isMenuOpen ? 'M6 18 18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
              />
            </svg>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-[rgba(220,199,150,0.12)] py-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={`${item.href}-${item.label}-mobile`}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm transition hover:bg-[rgba(220,199,150,0.08)] ${
                    pathname === item.href ? 'text-[#d5b46c]' : 'text-[#f0e8db]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
