import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import BlockRenderer from '@/components/BlockRenderer';
import SeriesNav from '@/components/SeriesNav';
import { POSTS, BLOCKS_BY_SLUG } from '@/lib/posts-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} — CAIO Coach`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://www.caiocoach.com/blog/${post.slug}`,
      images: post.image ? [{ url: `https://www.caiocoach.com${post.image}` }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [`https://www.caiocoach.com${post.image}`] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const blocks = BLOCKS_BY_SLUG[slug] || [];
  const postIndex = POSTS.indexOf(post);
  const prevPost = postIndex < POSTS.length - 1 ? POSTS[postIndex + 1] : null;
  const nextPost = postIndex > 0 ? POSTS[postIndex - 1] : null;

  // Related posts: 2 most recent that aren't this one
  const relatedPosts = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  // FAQ blocks for structured data
  const faqBlocks = blocks.filter((b): b is { tag: 'faq'; question: string; answer: string } => b.tag === 'faq');

  return (
    <>
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            image: post.image ? `https://www.caiocoach.com${post.image}` : undefined,
            author: {
              '@type': 'Person',
              name: post.author || 'Dave Hajdu',
              jobTitle: 'Founder & Chief AI Officer',
              worksFor: { '@type': 'Organization', name: 'AI Officer Institute' },
            },
            publisher: {
              '@type': 'Organization',
              name: 'AI Officer Institute',
              url: 'https://www.caiocoach.com',
            },
            articleSection: post.category,
            keywords: post.tags,
          }),
        }}
      />

      {/* FAQ Schema */}
      {faqBlocks.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqBlocks.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            }),
          }}
        />
      )}

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(40,123,232,0.14) 0%, transparent 60%)' }} />
        <div className="relative max-w-[920px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="mb-4">
            <Link href="/blog" className="text-white/40 text-[13px] hover:text-white/60 transition-colors">
              Blog
            </Link>
            <span className="text-white/20 mx-2">/</span>
            <span className="text-white/40 text-[13px]">{post.title}</span>
          </div>
          <Badge variant="outline" className="bg-white/5 text-white/70 border-white/15 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 mb-4">
            {post.category}
          </Badge>
          <h1 className="text-white font-extrabold leading-[1.1] tracking-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="text-white/50 text-[16px] max-w-[600px] leading-relaxed">{post.subtitle}</p>
          )}
        </div>
      </section>

      {/* Meta bar */}
      <div className="border-b border-border">
        <div className="max-w-[720px] mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center gap-4 text-[0.85rem]">
          <div>
            <span className="text-muted-foreground/60 text-[11px] uppercase tracking-[0.08em] font-mono">Published</span>
            <span className="text-foreground ml-2">{post.date}</span>
          </div>
          <div>
            <span className="text-muted-foreground/60 text-[11px] uppercase tracking-[0.08em] font-mono">Reading Time</span>
            <span className="text-foreground ml-2">{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-[720px] mx-auto px-6 md:px-10 py-10">
        {/* Series navigation */}
        {post.series && post.dayNumber && post.seriesTotal && (
          <SeriesNav series={post.series} currentDay={post.dayNumber} totalDays={post.seriesTotal} />
        )}

        {/* Hero image */}
        {post.image && (
          <div className="mb-10 rounded-xl overflow-hidden border border-border shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        {/* Block content */}
        <BlockRenderer blocks={blocks} />

        {/* Author note */}
        <div className="grid grid-cols-[auto_1fr] gap-5 items-start bg-surface border border-border rounded-xl p-6 my-12">
          <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-blue to-mint-dark flex items-center justify-center text-white font-extrabold text-[1.2rem] flex-shrink-0">
            DH
          </div>
          <p className="text-[0.88rem] text-muted-foreground leading-[1.7] m-0">
            <strong className="text-foreground">Dave Hajdu</strong> is the founder of the AI Officer Institute and Edge8 AI. He works with founders and executives across more than 20 countries to build the leadership capabilities the AI era demands. Learn how to build your own AI team at <a href="https://www.caiocoach.com" className="text-blue hover:underline">caiocoach.com</a>.
          </p>
        </div>

        {/* CTA */}
        <div className="my-12">
          <Link href="/certification" className="block bg-navy rounded-xl p-7 no-underline">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-mint mb-2.5">CAIO Coach</div>
            <div className="text-[20px] font-bold text-white leading-tight mb-2">Ready to lead AI, not just use it?</div>
            <div className="text-[14px] text-white/60 mb-4">Explore the Certified AI Officer program and start building the skills the AI era demands.</div>
            <span className="inline-flex items-center gap-1.5 bg-blue text-white text-[14px] font-bold px-5 py-2.5 rounded-lg">
              View the Certification Program &rarr;
            </span>
          </Link>
        </div>

        {/* Prev/Next */}
        <div className="border-t border-border pt-8 mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} className="border border-border rounded-xl p-5 no-underline hover:border-blue transition-colors bg-white">
              <div className="text-[0.75rem] text-muted-foreground uppercase tracking-[0.1em] mb-1.5">&larr; Previous Post</div>
              <div className="text-[0.95rem] font-semibold text-foreground">{prevPost.title}</div>
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="border border-border rounded-xl p-5 no-underline hover:border-blue transition-colors bg-white">
              <div className="text-[0.75rem] text-muted-foreground uppercase tracking-[0.1em] mb-1.5">Next Post &rarr;</div>
              <div className="text-[0.95rem] font-semibold text-foreground">{nextPost.title}</div>
            </Link>
          )}
        </div>

        {/* Related reads */}
        {relatedPosts.length > 0 && (
          <div className="mt-14">
            <h2 className="text-[1.1rem] font-bold text-foreground mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="border border-border rounded-xl p-5 no-underline hover:border-blue transition-colors bg-white">
                  <div className="text-[0.92rem] font-semibold text-foreground mb-1.5">{rp.title}</div>
                  <div className="text-[0.75rem] text-muted-foreground">{rp.date}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
