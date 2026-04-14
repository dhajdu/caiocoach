import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { POSTS } from '@/lib/posts-data';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'AI Leadership Blog — CAIO Coach',
  description: 'Practical AI leadership insights for executives and HR leaders. How to lead AI, build AI-ready teams, and stay ahead in the age of generative and agentic AI.',
};

const CATEGORIES = [
  'All Posts',
  'Claude Code',
  'Infinite Leverage',
  'AI Leadership',
];

export default function BlogIndex() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy h-[380px] md:h-[420px] pt-[120px]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(40,123,232,0.14) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 50% at 50% 0%, rgba(111,242,193,0.06) 0%, transparent 50%)' }} />
        <div className="relative z-10 w-full max-w-[920px] mx-auto px-6 md:px-10">
          <p className="text-white/70 text-[11px] font-bold tracking-[0.15em] uppercase mb-3 font-mono">-- Blog &middot; CAIO Coach</p>
          <h1 className="text-white font-extrabold leading-[1.08] tracking-tight mb-3" style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>AI Leadership <span className="text-mint">Insights</span></h1>
          <p className="text-white/55 text-[15px] max-w-[480px] leading-relaxed mb-5">Practical frameworks, real-world case studies, and actionable insights for leaders navigating the 50/50 era of human + AI work.</p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[920px] mx-auto px-6 md:px-10 py-3 overflow-x-auto no-scrollbar">
          <div className="flex gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="text-[12px] font-semibold px-4 py-1.5 rounded-full border border-border text-muted-foreground hover:border-blue hover:text-blue transition-colors whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-[920px] mx-auto px-6 md:px-10 py-12">
        {POSTS.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-[16px]">Blog posts are being migrated. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {POSTS.map((post) => (
              <ScrollReveal key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-blue/30 hover:shadow-lg hover:-translate-y-px transition-all cursor-pointer">
                    {post.image && (
                      <div className="relative h-[180px] overflow-hidden rounded-t-xl">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-5 flex flex-col gap-2.5">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                          {post.category}
                        </Badge>
                        {post.dayNumber && (
                          <span className="text-[10px] font-bold text-blue font-mono">
                            Day {post.dayNumber}
                          </span>
                        )}
                      </div>
                      <h3 className="text-[15px] font-bold text-foreground leading-tight tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-mono text-[11px] text-muted-foreground">{post.date}</span>
                        <span className="text-[13px] text-muted-foreground">Read &rarr;</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
