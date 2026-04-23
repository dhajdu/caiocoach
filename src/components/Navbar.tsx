'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type NavItem = { label: string; href: string };

const NAV_LINKS: NavItem[] = [
  { label: 'Coaching', href: '/coaching' },
  { label: 'Infinite Leverage', href: '/infinite-leverage' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6"
      style={{
        background: 'rgba(4,16,45,0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--fg-border)',
      }}
    >
      {/* Brand */}
      <Link
        href="/"
        className="flex items-center gap-3 font-mono text-[13px] tracking-[0.14em] uppercase text-white"
      >
        <span className="relative w-[22px] h-[22px]">
          <span className="absolute inset-0 border border-white" />
          <span className="absolute inset-[5px] bg-white" />
        </span>
        CAIO <span className="text-white/50">/</span> COACH
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] whitespace-nowrap transition-colors ${
                active ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <a
          href="https://ai-officer.com/retreat"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[12px] uppercase tracking-[0.14em] px-4 py-2.5 text-[#04102D] bg-white border border-white whitespace-nowrap hover:bg-white/90 transition-colors"
        >
          Join retreat
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed top-16 left-0 right-0 px-6 py-6 flex flex-col gap-5"
          style={{
            background: 'rgba(4,16,45,0.98)',
            borderBottom: '1px solid var(--fg-border)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-[15px] ${
                isActive(link.href) ? 'text-white' : 'text-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://ai-officer.com/retreat"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="font-mono text-[12px] uppercase tracking-[0.14em] px-4 py-3 text-[#04102D] bg-white text-center"
          >
            Join retreat
          </a>
        </div>
      )}
    </header>
  );
}
