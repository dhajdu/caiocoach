import Link from 'next/link';
import { POSTS } from '@/lib/posts-data';

interface SeriesNavProps {
  series: string;
  currentDay: number;
  totalDays: number;
}

export default function SeriesNav({ series, currentDay, totalDays }: SeriesNavProps) {
  const seriesPosts = POSTS.filter(p => p.series === series);

  return (
    <div className="text-center mb-9">
      <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-blue font-mono mb-3">
        Infinite Leverage Blueprint
      </div>
      <div className="flex gap-1.5 flex-wrap justify-center">
        {Array.from({ length: totalDays }, (_, i) => {
          const day = i + 1;
          const post = seriesPosts.find(p => p.dayNumber === day);
          const isCurrent = day === currentDay;
          const isFuture = !post && !isCurrent;

          if (isCurrent) {
            return (
              <span
                key={day}
                className="w-8 h-8 inline-flex items-center justify-center border-2 border-blue bg-blue/[0.06] rounded-md text-[11px] font-bold text-blue"
              >
                {day}
              </span>
            );
          }

          if (post) {
            return (
              <Link
                key={day}
                href={`/blog/${post.slug}`}
                className="w-8 h-8 inline-flex items-center justify-center border border-border rounded-md text-[11px] font-bold text-foreground bg-white hover:border-blue transition-colors"
              >
                {day}
              </Link>
            );
          }

          return (
            <span
              key={day}
              className="w-8 h-8 inline-flex items-center justify-center border border-dashed border-border rounded-md text-[11px] font-bold text-muted-foreground/40"
            >
              {day}
            </span>
          );
        })}
      </div>
    </div>
  );
}
