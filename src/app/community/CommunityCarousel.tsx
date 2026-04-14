"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/community-laughing.webp",
    alt: "Community member energised and learning",
    label: "Community Energy",
    text: "The moment it clicks -- members from 30+ countries in every session",
  },
  {
    src: "/images/community-conversation.webp",
    alt: "Two executives in conversation at a leadership event",
    label: "The Conversations",
    text: "Leaders working through the same questions -- AI strategy, org design, what comes next",
  },
  {
    src: "/images/community-coaching.webp",
    alt: "Dave Hajdu coaching a participant one-on-one",
    label: "Real-Time Coaching",
    text: "Hands-on guidance on your specific challenge -- not theory, not slides",
  },
  {
    src: "/images/community-1on1.webp",
    alt: "Dave Hajdu in a 1-on-1 coaching session",
    label: "Private Coaching",
    text: "When you need focused attention on your specific AI strategy",
  },
  {
    src: "/images/community-session.webp",
    alt: "Dave facilitating a small group coaching session",
    label: "Live Sessions",
    text: "Small groups, real questions, real answers -- every week",
  },
  {
    src: "/images/community-coaching2.webp",
    alt: "Dave Hajdu coaching a participant at their laptop",
    label: "In the Moment",
    text: "Side-by-side coaching -- working through the problem together, right now",
  },
  {
    src: "/images/community-coaching3.webp",
    alt: "Dave coaching a group of executives at a table",
    label: "Group Coaching",
    text: "Different industries, same challenge -- the best insights come from the room",
  },
  {
    src: "/images/community-coaching4.webp",
    alt: "Dave pointing at a screen while coaching a participant",
    label: "Hands-On Practice",
    text: "Not watching someone use AI. Actually using it, with feedback, in real time",
  },
  {
    src: "/images/community-peers.webp",
    alt: "Two community members working through a session together",
    label: "Peer Learning",
    text: "Some of the best coaching happens between members -- the community is the curriculum",
  },
  {
    src: "/images/community-mentoring.webp",
    alt: "One-on-one mentoring at a laptop",
    label: "The Work",
    text: "Real mentoring, real challenges, real progress -- that's what this community is built for",
  },
];

export default function CommunityCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((n: number) => {
    setCurrent((n % slides.length + slides.length) % slides.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handlePrev = () => {
    goTo(current - 1);
    resetTimer();
  };

  const handleNext = () => {
    goTo(current + 1);
    resetTimer();
  };

  const handleDot = (i: number) => {
    goTo(i);
    resetTimer();
  };

  const handleMouseEnter = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleMouseLeave = () => {
    resetTimer();
  };

  return (
    <div
      className="group/carousel relative w-full h-[260px] md:h-[460px] rounded-xl overflow-hidden shadow-[0_4px_32px_rgba(4,16,45,0.15)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-10 md:h-10 rounded-full bg-navy/45 border border-white/20 text-white text-lg flex items-center justify-center cursor-pointer opacity-100 md:opacity-0 hover:bg-navy/75 transition-opacity backdrop-blur-sm group-hover/carousel:opacity-100"
        style={{ fontSize: 18 }}
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-3.5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-10 md:h-10 rounded-full bg-navy/45 border border-white/20 text-white text-lg flex items-center justify-center cursor-pointer opacity-100 md:opacity-0 hover:bg-navy/75 transition-opacity backdrop-blur-sm group-hover/carousel:opacity-100"
        style={{ fontSize: 18 }}
      >
        &#8250;
      </button>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
            i === current
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 920px) 100vw, 920px"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-8 pb-6 pt-12"
            style={{
              background:
                "linear-gradient(to top, rgba(4,16,45,0.75) 0%, transparent 100%)",
            }}
          >
            <p className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-mint mb-1">
              {slide.label}
            </p>
            <p className="text-[14px] md:text-[16px] font-semibold text-white/90 leading-snug">
              {slide.text}
            </p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-[18px] right-6 flex gap-[7px] items-center z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-[7px] h-[7px] rounded-full border-0 p-0 cursor-pointer transition-all ${
              i === current
                ? "bg-mint scale-[1.2]"
                : "bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
