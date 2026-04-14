import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlueprintHero from '@/components/blueprints/BlueprintHero';
import BlueprintRenderer from '@/components/blueprints/BlueprintRenderer';
import {
  BLOCKS_BY_SLUG,
  BLUEPRINTS,
  getAllSlugs,
  getBlueprintBySlug,
} from '@/lib/blueprints-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blueprint = getBlueprintBySlug(slug);
  if (!blueprint) return { title: 'Blueprint Not Found' };

  return {
    title: `${blueprint.title} - CAIO Coach`,
    description: blueprint.excerpt,
    openGraph: {
      title: blueprint.title,
      description: blueprint.excerpt,
      type: 'article',
      url: `https://www.caiocoach.com/blueprints/${blueprint.slug}`,
      images: blueprint.image ? [{ url: `https://www.caiocoach.com${blueprint.image}` }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blueprint.title,
      description: blueprint.excerpt,
      images: blueprint.image ? [`https://www.caiocoach.com${blueprint.image}`] : [],
    },
  };
}

export default async function BlueprintPage({ params }: Props) {
  const { slug } = await params;
  const blueprint = getBlueprintBySlug(slug);
  if (!blueprint) notFound();

  const blocks = BLOCKS_BY_SLUG[slug] || [];

  const index = BLUEPRINTS.findIndex((b) => b.slug === slug);
  const prev = index > 0 ? BLUEPRINTS[index - 1] : null;
  const next = index >= 0 && index < BLUEPRINTS.length - 1 ? BLUEPRINTS[index + 1] : null;

  return (
    <>
      <BlueprintHero blueprint={blueprint} />

      <article className="max-w-[920px] mx-auto px-6 md:px-10 py-12 md:py-16">
        {blocks.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-surface p-10 text-center">
            <p className="text-muted-foreground text-[14px] font-mono uppercase tracking-[0.08em]">
              Content coming soon
            </p>
            <p className="text-muted-foreground text-[13px] mt-2">
              This blueprint is being migrated. Check back shortly.
            </p>
          </div>
        ) : (
          <BlueprintRenderer blocks={blocks} />
        )}

        <div className="border-t border-border pt-8 mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prev && (
            <Link
              href={`/blueprints/${prev.slug}`}
              className="border border-border rounded-xl p-5 no-underline hover:border-blue transition-colors bg-white"
            >
              <div className="text-[0.75rem] text-muted-foreground uppercase tracking-[0.1em] mb-1.5">
                &larr; Previous
              </div>
              <div className="text-[0.95rem] font-semibold text-foreground">{prev.title}</div>
            </Link>
          )}
          {next && (
            <Link
              href={`/blueprints/${next.slug}`}
              className="border border-border rounded-xl p-5 no-underline hover:border-blue transition-colors bg-white md:text-right"
            >
              <div className="text-[0.75rem] text-muted-foreground uppercase tracking-[0.1em] mb-1.5">
                Next &rarr;
              </div>
              <div className="text-[0.95rem] font-semibold text-foreground">{next.title}</div>
            </Link>
          )}
        </div>
      </article>
    </>
  );
}
