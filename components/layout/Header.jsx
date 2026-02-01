'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b81] to-[#ffb84d] flex items-center justify-center">
              <span className="text-white font-bold text-lg">SC</span>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-[#ff6b81]">Style</span>Chronicle
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-[#ff6b81] ${
                pathname === '/' ? 'text-[#ff6b81]' : 'text-[#ccccdb]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/eras"
              className={`text-sm font-medium transition-colors hover:text-[#ff6b81] ${
                pathname === '/eras' ? 'text-[#ff6b81]' : 'text-[#ccccdb]'
              }`}
            >
              All Eras
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-[#ff6b81] ${
                pathname === '/about' ? 'text-[#ff6b81]' : 'text-[#ccccdb]'
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a1a2e]/95 backdrop-blur-md border-t border-white/10">
          <div className="container-custom py-6 flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium py-2 hover:text-[#ff6b81] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/eras"
              className="text-lg font-medium py-2 hover:text-[#ff6b81] transition-colors"
            >
              All Eras
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium py-2 hover:text-[#ff6b81] transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
