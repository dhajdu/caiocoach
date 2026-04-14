'use client';

import { Block } from '@/lib/types';
import Image from 'next/image';

function renderInlineHtml(text: string) {
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.tag) {
          case 'h2':
            return (
              <h2 key={i} className="text-[1.4rem] font-extrabold text-foreground tracking-tight mt-12 mb-5">
                {renderInlineHtml(block.text)}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className="text-[1.1rem] font-bold text-foreground mt-8 mb-3">
                {renderInlineHtml(block.text)}
              </h3>
            );
          case 'h4':
            return (
              <h4 key={i} className="text-[0.85rem] font-bold uppercase tracking-[0.08em] text-muted-foreground mt-8 mb-3 font-mono">
                {renderInlineHtml(block.text)}
              </h4>
            );
          case 'p':
            return (
              <p key={i} className="text-[0.97rem] text-muted-foreground leading-[1.75] mb-4 [&_a]:text-blue [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground [&_strong]:font-semibold">
                {renderInlineHtml(block.text)}
              </p>
            );
          case 'blockquote':
            return (
              <blockquote key={i} className="border-l-4 border-blue pl-5 py-1 my-6 italic text-muted-foreground text-[0.95rem] leading-relaxed bg-blue/[0.04] rounded-r-lg pr-5">
                {renderInlineHtml(block.text)}
              </blockquote>
            );
          case 'li':
            return (
              <div key={i} className="flex gap-3 mb-2 text-[0.97rem] text-muted-foreground leading-[1.75] [&_a]:text-blue [&_a]:underline [&_strong]:text-foreground [&_strong]:font-semibold">
                <span className="w-[6px] h-[6px] rounded-full bg-mint-dark flex-shrink-0 mt-[10px]" />
                <span>{renderInlineHtml(block.text)}</span>
              </div>
            );
          case 'ol-item':
            return (
              <div key={i} className="flex gap-3 mb-2 text-[0.97rem] text-muted-foreground leading-[1.75] [&_a]:text-blue [&_a]:underline [&_strong]:text-foreground [&_strong]:font-semibold">
                <span className="text-blue font-semibold text-[0.85rem] flex-shrink-0 mt-[2px] font-mono">{i + 1}.</span>
                <span>{renderInlineHtml(block.text)}</span>
              </div>
            );
          case 'pull-quote':
            return (
              <div key={i} className="text-[1.25rem] font-bold leading-[1.4] text-foreground text-center py-7 my-9 border-t-[3px] border-b-[3px] border-blue relative">
                <span className="absolute top-[-20px] left-0 text-[5rem] text-blue/15 leading-none">&ldquo;</span>
                {renderInlineHtml(block.text)}
              </div>
            );
          case 'emphasis-box':
            return (
              <div key={i} className="bg-navy rounded-xl p-7 my-7">
                <p className="text-white/90 leading-[1.75] text-[1rem] [&_strong]:text-mint [&_strong]:font-semibold m-0">
                  {renderInlineHtml(block.text)}
                </p>
              </div>
            );
          case 'tl-dr':
            return (
              <div key={i} className="bg-blue/[0.06] border border-blue/20 rounded-xl p-6 my-7">
                <h3 className="text-blue text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-4 font-mono">Quick Summary</h3>
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-[0.9rem] text-muted-foreground leading-relaxed">
                      <span className="w-[5px] h-[5px] rounded-full bg-blue flex-shrink-0 mt-[8px]" />
                      <span>{renderInlineHtml(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case 'stat-callout':
            return (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                {block.stats.map((stat, j) => {
                  const colorClass = stat.color === 'mint' ? 'text-mint-dark' : stat.color === 'magenta' ? 'text-magenta' : 'text-blue';
                  return (
                    <div key={j} className="bg-white border border-border rounded-xl p-5 text-center">
                      <div className={`text-[2rem] font-extrabold ${colorClass}`}>{stat.value}</div>
                      <div className="text-[0.75rem] text-muted-foreground uppercase tracking-[0.08em] mt-1">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            );
          case 'callout':
            return (
              <div key={i} className="border-l-4 border-mint-dark bg-mint-dark/[0.06] rounded-r-xl p-5 my-7">
                <div className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-mint-dark mb-2 font-mono">{block.label}</div>
                <p className="text-[0.95rem] text-muted-foreground leading-[1.7] m-0">
                  {renderInlineHtml(block.text)}
                </p>
              </div>
            );
          case 'shipped-list':
            return (
              <div key={i} className="bg-white border border-border rounded-xl p-6 my-7 shadow-sm">
                <div className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-blue mb-4 font-mono">{block.title}</div>
                <ul className="space-y-2.5">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-[0.92rem] text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold">
                      <span className="w-[5px] h-[5px] rounded-full bg-blue flex-shrink-0 mt-[8px]" />
                      <span>{renderInlineHtml(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case 'conclusion-box':
            return (
              <div key={i} className="bg-gradient-to-br from-navy to-[#0d1f4a] rounded-2xl p-10 my-12">
                <h2 className="text-mint text-[1.3rem] font-extrabold mb-4">{block.title}</h2>
                {block.paragraphs.map((para, j) => (
                  <p key={j} className="text-white/85 leading-[1.75] text-[0.97rem] mb-3.5 last:mb-0 [&_a]:text-mint [&_a]:underline">
                    {renderInlineHtml(para)}
                  </p>
                ))}
              </div>
            );
          case 'faq':
            return (
              <div key={i} className="border border-border rounded-xl mb-3 overflow-hidden bg-white">
                <details className="group">
                  <summary className="px-6 py-5 text-[0.95rem] font-bold text-foreground cursor-pointer flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                    {block.question}
                    <span className="text-muted-foreground text-[1.2rem] group-open:hidden">+</span>
                    <span className="text-muted-foreground text-[1.2rem] hidden group-open:inline">&minus;</span>
                  </summary>
                  <div className="px-6 pb-5 text-[0.9rem] text-muted-foreground leading-[1.7]">
                    {renderInlineHtml(block.answer)}
                  </div>
                </details>
              </div>
            );
          case 'image':
            return (
              <div key={i} className="my-8 rounded-xl overflow-hidden border border-border shadow-md">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            );
          case 'html':
            return (
              <div key={i} className="my-6" dangerouslySetInnerHTML={{ __html: block.html }} />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
