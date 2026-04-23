import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10"
      style={{ borderTop: '1px solid var(--fg-border)' }}
    >
      <div className="page-container">
        <div className="grid gap-12 mb-12 footer-grid">
          {/* Brand */}
          <div>
            <span className="block font-mono text-[14px] tracking-[0.18em] uppercase text-white mb-4">
              CAIO / Coach
            </span>
            <p className="text-[13px] leading-relaxed text-white/70 max-w-[240px]">
              Expert AI coaching for executives ready to lead the AI era.
            </p>
          </div>
          {/* Menu */}
          <FooterCol
            title="Menu"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Coaching', href: '/coaching' },
              { label: 'Infinite Leverage', href: '/infinite-leverage' },
              { label: 'Blog', href: '/blog' },
              { label: 'Certification', href: '/certification' },
              { label: 'Community', href: '/community' },
              { label: 'Frameworks', href: '/resources/100-business-frameworks' },
              { label: 'Blueprints', href: '/blueprints' },
              { label: 'Retreat', href: 'https://ai-officer.com/retreat', external: true },
              { label: 'Contact', href: '/contact' },
            ]}
          />
          {/* AI-Officer */}
          <FooterCol
            title="AI-Officer"
            items={[
              { label: 'About', href: 'https://www.ai-officer.com/about', external: true },
              { label: 'Keynotes', href: 'https://www.ai-officer.com/keynotes', external: true },
              { label: 'Leadership training', href: 'https://www.ai-officer.com/leadership-training', external: true },
            ]}
          />
          {/* Contact */}
          <FooterCol
            title="Contact"
            items={[
              { label: '+84 90 995 8581 · VN', href: 'tel:+84909958581' },
              { label: '+1 206 395 8872 · US', href: 'tel:+12063958872' },
              { label: 'dave@edge8.ai', href: 'mailto:dave@edge8.ai' },
            ]}
          />
          {/* Social */}
          <FooterCol
            title="Social"
            items={[
              { label: 'Community', href: 'https://community.ai-officer.com/feed', external: true },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aiofficerinstitute/', external: true },
              { label: 'Facebook', href: 'https://www.facebook.com/aiofficerinstitute', external: true },
              { label: 'Instagram', href: 'https://www.instagram.com/aiofficerinstitute/', external: true },
            ]}
          />
        </div>

        <div
          className="flex justify-between flex-wrap gap-4 pt-8 font-mono text-[11px] tracking-[0.1em] uppercase text-white/50"
          style={{ borderTop: '1px solid var(--fg-border)' }}
        >
          <span>© {new Date().getFullYear()} · AI Officer Institute LLC · USA</span>
          <span>v0.1 · Navy system</span>
        </div>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr;
        }
        @media (max-width: 960px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}

type FooterItem = { label: string; href: string; external?: boolean };

function FooterCol({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/50 mb-4 font-normal">
        {title}
      </h4>
      <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.href}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="text-[13px] text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
