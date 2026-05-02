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
              <h2
                key={i}
                className="font-sans font-normal text-white text-[28px] leading-[1.2] tracking-[-0.01em] mt-14 mb-5"
              >
                {renderInlineHtml(block.text)}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={i}
                className="font-sans font-medium text-white text-[20px] leading-[1.3] mt-10 mb-3"
              >
                {renderInlineHtml(block.text)}
              </h3>
            );
          case 'h4':
            return (
              <h4
                key={i}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 mt-8 mb-3"
              >
                {renderInlineHtml(block.text)}
              </h4>
            );
          case 'p':
            return (
              <p
                key={i}
                className="text-[16px] text-white/70 leading-[1.7] mb-5 [&_a]:text-white [&_a]:border-b [&_a]:border-white/30 [&_a]:pb-px [&_a:hover]:text-white/70 [&_strong]:text-white [&_strong]:font-medium"
              >
                {renderInlineHtml(block.text)}
              </p>
            );
          case 'blockquote':
            return (
              <blockquote
                key={i}
                className="border-l-2 border-white/40 pl-6 py-2 my-7 italic text-white/80 text-[17px] leading-[1.55]"
              >
                {renderInlineHtml(block.text)}
              </blockquote>
            );
          case 'li':
            return (
              <div
                key={i}
                className="flex gap-3 mb-2 text-[16px] text-white/70 leading-[1.7] [&_a]:text-white [&_a]:underline [&_strong]:text-white [&_strong]:font-medium"
              >
                <span className="w-[10px] h-px bg-white/30 flex-shrink-0 mt-[13px]" />
                <span>{renderInlineHtml(block.text)}</span>
              </div>
            );
          case 'ol-item':
            return (
              <div
                key={i}
                className="flex gap-3 mb-2 text-[16px] text-white/70 leading-[1.7] [&_a]:text-white [&_a]:underline [&_strong]:text-white [&_strong]:font-medium"
              >
                <span className="text-white/50 font-mono text-[12px] tracking-[0.1em] flex-shrink-0 mt-[6px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{renderInlineHtml(block.text)}</span>
              </div>
            );
          case 'pull-quote':
            return (
              <div
                key={i}
                className="font-mono font-light text-white text-[24px] leading-[1.3] tracking-[-0.01em] text-center py-10 my-12 border-t border-b border-white/20"
              >
                {renderInlineHtml(block.text)}
              </div>
            );
          case 'emphasis-box':
            return (
              <div
                key={i}
                className="border border-white/10 bg-white/[0.03] p-7 my-8"
              >
                <p className="text-white leading-[1.7] text-[16px] [&_strong]:text-white [&_strong]:font-medium m-0">
                  {renderInlineHtml(block.text)}
                </p>
              </div>
            );
          case 'tl-dr':
            return (
              <div key={i} className="border border-white/10 bg-white/[0.03] p-7 my-8">
                <h3 className="font-mono text-white/50 text-[11px] uppercase tracking-[0.18em] mb-4">
                  TL;DR
                </h3>
                <ul className="space-y-2.5 list-none p-0 m-0">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[15px] text-white/70 leading-[1.6]"
                    >
                      <span className="w-[10px] h-px bg-white/30 flex-shrink-0 mt-[11px]" />
                      <span>{renderInlineHtml(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case 'stat-callout':
            return (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-3 border border-white/10 my-8"
              >
                {block.stats.map((stat, j) => (
                  <div
                    key={j}
                    className={`p-6 text-center ${j < block.stats.length - 1 ? 'sm:border-r border-white/10' : ''}`}
                  >
                    <div className="font-mono font-light text-white text-[40px] leading-none tracking-[-0.02em]">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] text-white/50 uppercase tracking-[0.18em] mt-3">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            );
          case 'callout':
            return (
              <div
                key={i}
                className="border-l-2 border-white/40 pl-6 py-2 my-7"
              >
                <div className="font-mono text-[10px] font-normal uppercase tracking-[0.18em] text-white/50 mb-2">
                  {block.label}
                </div>
                <p className="text-[15px] text-white/80 leading-[1.7] m-0">
                  {renderInlineHtml(block.text)}
                </p>
              </div>
            );
          case 'shipped-list':
            return (
              <div key={i} className="border border-white/10 bg-white/[0.03] p-7 my-8">
                <div className="font-mono text-[10px] font-normal uppercase tracking-[0.18em] text-white/50 mb-4">
                  {block.title}
                </div>
                <ul className="space-y-2.5 list-none p-0 m-0">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[15px] text-white/70 leading-[1.6] [&_strong]:text-white [&_strong]:font-medium"
                    >
                      <span className="w-[10px] h-px bg-white/30 flex-shrink-0 mt-[11px]" />
                      <span>{renderInlineHtml(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case 'conclusion-box':
            return (
              <div
                key={i}
                className="border border-white/15 bg-white/[0.05] p-10 my-12"
              >
                <h2 className="font-sans font-normal text-white text-[24px] leading-[1.2] tracking-[-0.01em] mb-5">
                  {block.title}
                </h2>
                {block.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className="text-white/80 leading-[1.7] text-[15px] mb-4 last:mb-0 [&_a]:text-white [&_a]:border-b [&_a]:border-white/30 [&_strong]:text-white [&_strong]:font-medium"
                  >
                    {renderInlineHtml(para)}
                  </p>
                ))}
              </div>
            );
          case 'faq':
            return (
              <div key={i} className="border border-white/10 mb-3 overflow-hidden">
                <details className="group">
                  <summary className="px-6 py-5 text-[15px] font-medium text-white cursor-pointer flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                    {block.question}
                    <span className="text-white/50 text-[20px] group-open:hidden">
                      +
                    </span>
                    <span className="text-white/50 text-[20px] hidden group-open:inline">
                      −
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-[14px] text-white/70 leading-[1.7]">
                    {renderInlineHtml(block.answer)}
                  </div>
                </details>
              </div>
            );
          case 'image':
            return (
              <figure key={i} className="my-10">
                <div className="border border-white/10 overflow-hidden">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-[13px] text-white/55 italic text-center leading-snug">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case 'html':
            return (
              <div
                key={i}
                className="my-7"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
