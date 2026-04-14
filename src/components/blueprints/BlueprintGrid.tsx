'use client';

import { useMemo, useState } from 'react';
import type { Blueprint, BlueprintCategory } from '@/lib/types';
import { CATEGORY_META } from '@/lib/blueprints-data';
import BlueprintCard from './BlueprintCard';

type CategoryFilter = 'all' | BlueprintCategory;
type SortMode = 'date' | 'name';

interface BlueprintGridProps {
  blueprints: Blueprint[];
}

const CATEGORY_ORDER: BlueprintCategory[] = [
  'leverage',
  'talent',
  'operations',
  'innovation',
  'revenue',
];

export default function BlueprintGrid({ blueprints }: BlueprintGridProps) {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [sort, setSort] = useState<SortMode>('date');

  const visible = useMemo(() => {
    const filtered = filter === 'all' ? blueprints : blueprints.filter((b) => b.category === filter);
    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'date') return b.date.localeCompare(a.date);
      return a.title.localeCompare(b.title);
    });
    return sorted;
  }, [blueprints, filter, sort]);

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
        <div className="flex gap-2 flex-wrap">
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          {CATEGORY_ORDER.map((cat) => {
            const meta = CATEGORY_META[cat];
            return (
              <FilterButton
                key={cat}
                active={filter === cat}
                onClick={() => setFilter(cat)}
              >
                <span
                  className="w-[6px] h-[6px] rounded-full"
                  style={{ background: meta.color }}
                />
                {meta.label}
              </FilterButton>
            );
          })}
        </div>

        <div className="flex gap-1.5">
          <FilterButton active={sort === 'date'} onClick={() => setSort('date')}>
            Newest
          </FilterButton>
          <FilterButton active={sort === 'name'} onClick={() => setSort('name')}>
            A to Z
          </FilterButton>
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground text-[14px]">
          No blueprints in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((bp) => (
            <BlueprintCard key={bp.slug} blueprint={bp} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.04em] px-4 py-2 rounded-lg border transition-colors whitespace-nowrap ${
        active
          ? 'bg-navy text-white border-navy'
          : 'bg-white text-foreground border-border hover:border-blue'
      }`}
    >
      {children}
    </button>
  );
}
