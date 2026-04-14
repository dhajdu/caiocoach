import Link from 'next/link';
import type { Blueprint } from '@/lib/types';
import { CATEGORY_META } from '@/lib/blueprints-data';

interface BlueprintCardProps {
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

export default function BlueprintCard({ blueprint }: BlueprintCardProps) {
  const meta = CATEGORY_META[blueprint.category];

  return (
    <Link
      href={`/blueprints/${blueprint.slug}`}
      className="group flex flex-col gap-2 bg-white border border-border rounded-xl p-6 md:p-7 no-underline transition-all hover:border-blue/30 hover:shadow-lg hover:-translate-y-px"
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-[0.06em] uppercase"
          style={{ background: meta.bg, color: meta.textColor }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full"
            style={{ background: meta.color }}
          />
          {meta.label}
        </span>
        <span className="font-mono text-[9px] font-bold tracking-[0.08em] uppercase px-2 py-1 rounded-md bg-surface text-muted-foreground border border-border">
          {blueprint.type}
        </span>
      </div>

      <h3 className="text-[16px] font-bold text-navy leading-[1.3] tracking-tight mt-2">
        {blueprint.title}
      </h3>

      <p className="text-[13px] text-muted-foreground leading-[1.55] flex-1">
        {blueprint.excerpt}
      </p>

      <div className="flex items-center justify-between pt-3 mt-1 border-t border-surface">
        <span className="font-mono text-[11px] text-muted-foreground">
          {formatDate(blueprint.date)}
        </span>
        <span className="text-[13px] text-muted-foreground group-hover:text-blue transition-colors">
          &rarr;
        </span>
      </div>
    </Link>
  );
}
