"use client";

import { useState, useMemo, useRef } from "react";

type Video = {
  id: string;
  name: string;
  featured: boolean;
};

const videos: Video[] = [
  { id: "rDBdMsdRTRY", name: "TK Nguyen", featured: true },
  { id: "DbhyzpSFr1w", name: "Rich Pham", featured: true },
  { id: "aIlclgK1nug", name: "Dru Nguyen", featured: true },
  // pool — add more here as YouTube IDs become available
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function TestimonialsCarousel() {
  const slots = useMemo(() => {
    const featured = videos.filter((v) => v.featured);
    const pool = shuffle(videos.filter((v) => !v.featured)).slice(0, 2);
    return [...featured, ...pool];
  }, []);

  const [current, setCurrent] = useState(0);
  const dragStart = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + slots.length) % slots.length);
  const next = () => setCurrent((c) => (c + 1) % slots.length);

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const delta = dragStart.current - e.clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    dragStart.current = null;
  };

  return (
    <div className="relative select-none">
      {/* Track */}
      <div
        className="flex items-center justify-center gap-4 overflow-hidden cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={() => { dragStart.current = null; }}
      >
        {/* Prev peek */}
        {slots.length > 1 && (
          <div
            className="hidden md:block shrink-0 opacity-30 scale-90 transition-all duration-300"
            style={{ width: 180 }}
          >
            <PeekCard video={slots[(current - 1 + slots.length) % slots.length]} onClick={prev} />
          </div>
        )}

        {/* Main video */}
        <div className="shrink-0 transition-all duration-300" style={{ width: 300 }}>
          <MainCard video={slots[current]} />
        </div>

        {/* Next peek */}
        {slots.length > 1 && (
          <div
            className="hidden md:block shrink-0 opacity-30 scale-90 transition-all duration-300"
            style={{ width: 180 }}
          >
            <PeekCard video={slots[(current + 1) % slots.length]} onClick={next} />
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-9 h-9 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors text-lg"
        >
          &#8249;
        </button>

        <div className="flex gap-2">
          {slots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to ${i + 1}`}
              className={`w-[7px] h-[7px] rounded-full border-0 p-0 transition-all ${
                i === current ? "bg-[var(--color-mint)] scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="w-9 h-9 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors text-lg"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

function MainCard({ video }: { video: Video }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-full rounded-xl overflow-hidden border border-white/10"
        style={{ aspectRatio: "9/16" }}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1&mute=1`}
          title={`${video.name} testimonial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/50">
        {video.name}
      </p>
    </div>
  );
}

function PeekCard({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer" onClick={onClick}>
      <div
        className="w-full rounded-xl overflow-hidden border border-white/10 relative"
        style={{ aspectRatio: "9/16" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={`${video.name} testimonial`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
