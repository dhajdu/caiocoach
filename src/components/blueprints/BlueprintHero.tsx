import Link from 'next/link';
import type { Blueprint } from '@/lib/types';
import { CATEGORY_META } from '@/lib/blueprints-data';

interface BlueprintHeroProps {
  blueprint: Blueprint;
}

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default function BlueprintHero({ blueprint }: BlueprintHeroProps) {
  const meta = CATEGORY_META[blueprint.category];

  return (
    <section className="relative bg-navy overflow-hidden pt-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(40,123,232,0.14) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 40% at 80% 20%, rgba(111,242,193,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-[920px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="mb-5">
          <Link
            href="/blueprints"
            className="text-white/40 text-[13px] hover:text-white/70 transition-colors font-mono uppercase tracking-[0.08em]"
          >
            &larr; Blueprints
          </Link>
          <span className="text-white/20 mx-2">/</span>
          <span className="text-white/40 text-[13px]">{blueprint.title}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[10px] font-bold tracking-[0.08em] uppercase"
            style={{ background: meta.bg, color: meta.textColor }}
          >
            <span
              className="w-[6px] h-[6px] rounded-full"
              style={{ background: meta.color }}
            />
            {meta.label}
          </span>
          <span className="font-mono text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/15">
            {blueprint.type}
          </span>
        </div>

        <h1
          className="text-white font-extrabold leading-[1.08] tracking-tight mb-4"
          style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
        >
          {blueprint.title}
        </h1>

        {blueprint.subtitle && (
          <p className="text-white/55 max-w-[640px] leading-relaxed text-[16px] md:text-[18px] mb-4">
            {blueprint.subtitle}
          </p>
        )}

        <div className="font-mono text-[11px] text-white/40 uppercase tracking-[0.08em] mt-6">
          Published {formatDate(blueprint.date)}
        </div>
      </div>
    </section>
  );
}
