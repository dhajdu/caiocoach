'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavItem =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string }[] };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks: NavItem[] = [
    { label: 'Coaching', href: '/coaching' },
    { label: 'Blog', href: '/blog' },
    { label: 'Certification', href: '/certification' },
    { label: 'Community', href: '/community' },
    {
      label: 'Resources',
      children: [
        { label: '100 Frameworks', href: '/resources/100-business-frameworks' },
        { label: 'Blueprints', href: '/blueprints' },
      ],
    },
  ];

  const isChildActive = (children: { href: string }[]) =>
    children.some((c) => pathname === c.href || pathname.startsWith(c.href + '/'));

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
          {navLinks.map((link) => {
            if ('children' in link) {
              const active = isChildActive(link.children);
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                      active
                        ? scrolled
                          ? 'text-blue opacity-100'
                          : 'text-mint opacity-100'
                        : scrolled
                          ? 'text-navy opacity-70 hover:text-blue'
                          : 'text-white/80 hover:text-white'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={resourcesOpen}
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </button>
                  {resourcesOpen && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="bg-white border border-border rounded-md shadow-lg py-2 min-w-[180px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-[13px] text-navy hover:bg-surface hover:text-blue transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-colors hover:opacity-100 ${
                  isActive
                    ? scrolled
                      ? 'text-blue opacity-100'
                      : 'text-mint opacity-100'
                    : scrolled
                      ? 'text-navy opacity-70 hover:text-blue'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/retreat"
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
            {navLinks.map((link) => {
              if ('children' in link) {
                return (
                  <div key={link.label} className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-navy/50">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`text-sm font-medium transition-colors pl-3 ${
                          pathname === child.href || pathname.startsWith(child.href + '/')
                            ? 'text-blue'
                            : 'text-navy hover:text-blue'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-blue'
                      : 'text-navy hover:text-blue'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/retreat"
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
