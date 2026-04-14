'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: 'Coaching', href: '/coaching' },
    { label: 'Blog', href: '/blog' },
    { label: 'Certification', href: '/certification' },
    { label: 'Community', href: '/community' },
    { label: 'Retreat', href: '/retreat' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[920px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className={`font-bold text-[17px] tracking-tight transition-colors ${
            scrolled ? 'text-navy' : 'text-white'
          }`}
        >
          CAIO <span className={scrolled ? 'text-blue' : 'text-mint'}>COACH</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-colors hover:opacity-100 ${
                scrolled
                  ? 'text-navy opacity-70 hover:text-blue'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/retreat#waitlist"
          className={`hidden md:inline-block px-5 py-2.5 rounded-md text-[11px] font-bold tracking-[0.07em] uppercase transition-colors ${
            scrolled
              ? 'bg-blue text-white hover:bg-blue/90'
              : 'bg-mint text-navy hover:bg-[#5de8b3]'
          }`}
        >
          Join the Retreat
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={22} className={scrolled ? 'text-navy' : 'text-white'} />
          ) : (
            <Menu size={22} className={scrolled ? 'text-navy' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-5">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-navy font-medium hover:text-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/retreat#waitlist"
              className="bg-blue text-white px-5 py-3 rounded-md text-xs font-bold tracking-[0.07em] uppercase text-center hover:bg-blue/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Join the Retreat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
