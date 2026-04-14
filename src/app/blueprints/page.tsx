import type { Metadata } from 'next';
import { BLUEPRINTS } from '@/lib/blueprints-data';
import BlueprintGrid from '@/components/blueprints/BlueprintGrid';

export const metadata: Metadata = {
  title: 'Blueprints - CAIO Coach',
  description:
    'Agent development plans, production workflows, and system architecture for building AI-powered one-person companies.',
  openGraph: {
    title: 'Blueprints - CAIO Coach',
    description:
      'Agent development plans, production workflows, and system architecture for building AI-powered one-person companies.',
    url: 'https://www.caiocoach.com/blueprints',
    type: 'website',
  },
};

export default function BlueprintsIndex() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy h-[380px] md:h-[420px] pt-[120px]">
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
              'radial-gradient(ellipse 40% 50% at 50% 0%, rgba(111,242,193,0.06) 0%, transparent 50%)',
          }}
        />
        <div className="relative z-10 w-full max-w-[1080px] mx-auto px-6 md:px-10">
          <p className="text-white/70 text-[11px] font-bold tracking-[0.15em] uppercase mb-3 font-mono">
            -- Blueprints &middot; CAIO Coach
          </p>
          <h1
            className="text-white font-extrabold leading-[1.08] tracking-tight mb-3"
            style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}
          >
            Blueprints<span className="text-mint">.</span>
          </h1>
          <p className="text-white/55 text-[15px] max-w-[560px] leading-relaxed mb-5">
            Agent development plans, production workflows, and system architecture for building AI-powered one-person companies.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-12">
        <BlueprintGrid blueprints={BLUEPRINTS} />
      </div>
    </>
  );
}
