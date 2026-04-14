import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy border-t border-mint/10">
      <div className="max-w-[920px] mx-auto px-6 md:px-10 py-14">
        <div className="flex flex-col md:flex-row gap-9 mb-11">
          {/* Brand */}
          <div className="md:flex-[1.8]">
            <h4 className="text-[15px] font-bold text-mint tracking-tight mb-2">CAIO Coach</h4>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[200px]">
              Expert AI coaching for executives ready to lead the AI era.
            </p>
          </div>
          {/* Menu */}
          <div>
            <h5 className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/40 mb-4">Menu</h5>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Coaching', href: '/coaching' },
                { label: 'Blog', href: '/blog' },
                { label: 'Certification', href: '/certification' },
                { label: 'Community', href: '/community' },
                { label: '100 Frameworks', href: '/resources/100-business-frameworks' },
                { label: 'Workflows', href: '/workflows' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/60 hover:text-mint transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* AI-Officer */}
          <div>
            <h5 className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/40 mb-4">AI-Officer</h5>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: 'https://www.ai-officer.com/about' },
                { label: 'Keynotes', href: 'https://www.ai-officer.com/keynotes' },
                { label: 'Leadership Training', href: 'https://www.ai-officer.com/leadership-training' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/60 hover:text-mint transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h5 className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/40 mb-4">Contact</h5>
            <div className="space-y-2 text-[13px] text-white/60">
              <p><a href="tel:+84909958581" className="hover:text-mint transition-colors">+84 90 995 8581</a> (VN)</p>
              <p><a href="tel:+12063958872" className="hover:text-mint transition-colors">+1 206 395 8872</a> (US)</p>
              <p><a href="mailto:dave@edge8.ai" className="hover:text-mint transition-colors">dave@edge8.ai</a></p>
            </div>
          </div>
          {/* Social */}
          <div>
            <h5 className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/40 mb-4">Social</h5>
            <ul className="space-y-2.5">
              {[
                { label: 'Community', href: 'https://community.ai-officer.com' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aiofficerinstitute/' },
                { label: 'Facebook', href: 'https://www.facebook.com/aiofficerinstitute' },
                { label: 'Instagram', href: 'https://www.instagram.com/aiofficerinstitute/' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/60 hover:text-mint transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.07] pt-6">
          <p className="text-[11.5px] text-white/30 tracking-wide">
            Copyright, 2025 | AI Officer Institute LLC | USA
          </p>
        </div>
      </div>
    </footer>
  );
}
