'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(220,199,150,0.18)] bg-[#121212] text-[#f6efe4]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo1.png"
                alt="Al-Arbi Jewellers logo"
                width={120}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#eee5d8]">
              Premium jewellery with black and gold elegance. Discover our exclusive collection of fine pieces crafted with precision and style.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#d5b46c]">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-[#eee5d8] hover:text-[#d5b46c] transition-colors">
                Home
              </Link>
              <Link href="/privacy-policy" className="text-sm text-[#eee5d8] hover:text-[#d5b46c] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-condition" className="text-sm text-[#eee5d8] hover:text-[#d5b46c] transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#d5b46c]">Contact Us</h3>
            <div className="space-y-2 text-sm text-[#eee5d8]">
              <p>Al-Arbi Jewellers</p>
              <p>Shop no.5 Shri Sai Apartment, near Kalam Collection,</p>
              <p>Sanjiv Nagar, Ambad Link Road, 422010</p>
              <p>Phone: 02534043265</p>
              <p>Email: al.arbijewellers012024@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-[rgba(220,199,150,0.18)] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[#eee5d8]">
              © {new Date().getFullYear()} Al-Arbi Jewellers. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {/* Social Media Links - placeholders */}
              <a href="#" className="text-[#eee5d8] hover:text-[#d5b46c] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-[#eee5d8] hover:text-[#d5b46c] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.609.043 6.298.099c-1.31.057-2.205.22-2.99.47a5.902 5.902 0 00-2.13.87 5.902 5.902 0 00-.87 2.13c-.25.785-.413 1.68-.47 2.99C.043 7.609 0 8.396 0 12.017s.043 4.408.099 5.719c.057 1.31.22 2.205.47 2.99a5.902 5.902 0 002.13.87 5.902 5.902 0 002.13.87c.785.25 1.68.413 2.99.47 1.31.057 2.098.099 5.719.099s4.408-.043 5.719-.099c1.31-.057 2.205-.22 2.99-.47a5.902 5.902 0 002.13-.87 5.902 5.902 0 00.87-2.13c.25-.785.413-1.68.47-2.99.057-1.31.099-2.098.099-5.719s-.043-4.408-.099-5.719c-.057-1.31-.22-2.205-.47-2.99a5.902 5.902 0 00-.87-2.13 5.902 5.902 0 00-2.13-.87c-.785-.25-1.68-.413-2.99-.47C16.425.043 15.638 0 12.017 0zm0 2.187c3.583 0 4.005.014 5.417.08.698.034 1.084.148 1.342.246.328.126.563.276.826.54.263.263.414.498.54.826.098.258.212.644.246 1.342.066 1.412.08 1.834.08 5.417s-.014 4.005-.08 5.417c-.034.698-.148 1.084-.246 1.342-.126.328-.276.563-.54.826-.263.263-.498.414-.826.54-.258.098-.644.212-1.342.246-1.412.066-1.834.08-5.417.08s-4.005-.014-5.417-.08c-.698-.034-1.084-.148-1.342-.246-.328-.126-.563-.276-.826-.54-.263-.263-.414-.498-.54-.826-.098-.258-.212-.644-.246-1.342C2.201 16.422 2.187 16 2.187 12.017s.014-4.005.08-5.417c.034-.698.148-1.084.246-1.342.126-.328.276-.563.54-.826.263-.263.498-.414.826-.54.258-.098.644-.212 1.342-.246 1.412-.066 1.834-.08 5.417-.08zM12.017 6.187c-3.583 0-6.5 2.917-6.5 6.5s2.917 6.5 6.5 6.5 6.5-2.917 6.5-6.5-2.917-6.5-6.5-6.5zm0 10.75c-2.344 0-4.25-1.906-4.25-4.25s1.906-4.25 4.25-4.25 4.25 1.906 4.25 4.25-1.906 4.25-4.25 4.25zm6.406-11.719c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}