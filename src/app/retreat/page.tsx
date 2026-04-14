import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import RetreatForm from "./RetreatForm";

export const metadata: Metadata = {
  title: "Infinite Leverage Retreat",
  description:
    "An intimate 3-day, 2-night founders retreat in Nha Trang, June 19 to 21, 2026. Get infinite leverage with agentic AI. Capped at 30 seats.",
  openGraph: {
    title: "Infinite Leverage Retreat",
    description:
      "June 19 to 21, 2026 in Nha Trang. Thirty seats. Walk in with an idea, walk out with working agents.",
    type: "website",
    url: "https://www.caiocoach.com/retreat",
    images: [
      {
        url: "https://www.caiocoach.com/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Leverage Retreat",
    description:
      "June 19 to 21, 2026 in Nha Trang. Thirty seats. Walk in with an idea, walk out with working agents.",
    images: ["https://www.caiocoach.com/images/og-image.jpg"],
  },
};

export default function RetreatPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy h-[380px] md:h-[420px] pt-[120px]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(40,123,232,0.14) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 50% at 50% 0%, rgba(111,242,193,0.06) 0%, transparent 50%)' }} />
        <div className="relative z-10 w-full max-w-[920px] mx-auto px-6 md:px-10">
          <p className="text-white/70 text-[11px] font-bold tracking-[0.15em] uppercase mb-3 font-mono">-- Retreat &middot; CAIO Coach</p>
          <h1 className="text-white font-extrabold leading-[1.08] tracking-tight mb-3" style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>You&apos;re Not Stuck, You&apos;re Just <span className="text-magenta">Alone</span></h1>
          <p className="text-white/55 text-[15px] max-w-[480px] leading-relaxed mb-5">The Infinite Leverage Retreat.<br />Walk in with the idea, walk out with working agents.</p>
          <div className="flex flex-wrap gap-3">
            <Badge
              variant="outline"
              className="bg-mint/15 text-mint border-mint/25 px-4 py-1.5 text-[12px] font-semibold"
            >
              Nha Trang &middot; June 19&ndash;21, 2026
            </Badge>
            <Badge
              variant="outline"
              className="bg-navy/50 text-white/80 border-white/15 px-4 py-1.5 text-[12px] font-semibold"
            >
              3 days &middot; 2 nights
            </Badge>
            <Badge
              variant="outline"
              className="bg-navy/50 text-white/80 border-white/15 px-4 py-1.5 text-[12px] font-semibold"
            >
              30 seats
            </Badge>
            <Link href="#waitlist">
              <Badge className="bg-blue text-white px-4 py-1.5 text-[12px] font-semibold hover:bg-blue/90 cursor-pointer">
                Join the waitlist &rarr;
              </Badge>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PAGE MAIN ── */}
      <div className="max-w-[920px] mx-auto px-6 md:px-10 py-12 md:py-14">
        {/* ── WHO IT'S FOR ── */}
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mb-5">
            <Badge
              variant="outline"
              className="bg-blue/10 text-blue border-blue/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-blue" />
              Who It&apos;s For
            </Badge>
            <span className="text-[18px] font-bold text-foreground tracking-tight">
              Two angles, one blueprint
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Angle 01 */}
            <Card>
              <CardContent className="p-7 flex flex-col">
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-blue mb-2.5">
                  Angle 01 &middot; For Founders
                </p>
                <h3 className="text-[18px] font-bold text-foreground tracking-tight mb-2.5">
                  Start a new company
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                  You&apos;re launching an AI-first company. You want the
                  blueprint for designing your agents, shaping how they work
                  together, and shipping your first product with infinite
                  leverage built in from day one.
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "Design your agents and how they work together",
                    "Launch your first working agents",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-baseline gap-2.5 text-[13px] text-muted-foreground"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-blue flex-shrink-0 mt-[6px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Angle 02 */}
            <Card className="border-blue/30 bg-gradient-to-br from-white to-blue/[0.03]">
              <CardContent className="p-7 flex flex-col">
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-blue mb-2.5">
                  Angle 02 &middot; For Executives
                </p>
                <h3 className="text-[18px] font-bold text-foreground tracking-tight mb-2.5">
                  Re-invent Business Operations
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                  You&apos;re bringing agents into marketing, ops, product, or
                  customer success. You want to rewire how your team works, and
                  leave with working agents your team can actually use on Monday.
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "Pick the department, map the workflows",
                    "Build and launch the agents on-site",
                    "A playbook for rolling it out with your team",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-baseline gap-2.5 text-[13px] text-muted-foreground"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-blue flex-shrink-0 mt-[6px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* ── LOCATION STRIP ── */}
        <ScrollReveal>
          <div className="relative w-screen left-1/2 -translate-x-1/2 h-[220px] md:h-[340px] overflow-hidden bg-navy mt-14 mb-12">
            <Image
              src="/images/nha-trang-hero.webp"
              alt="Nha Trang coastline and beach, Vietnam"
              fill
              className="object-cover object-[center_55%]"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(4,16,45,0.35) 0%, rgba(4,16,45,0) 35%, rgba(4,16,45,0) 65%, rgba(4,16,45,0.55) 100%)",
              }}
            />
            <p className="absolute left-0 right-0 bottom-5 text-center text-white text-[14px] tracking-[0.08em] uppercase font-medium drop-shadow">
              Nha Trang, Vietnam
            </p>
          </div>
        </ScrollReveal>

        {/* ── THE DETAILS ── */}
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mb-5">
            <Badge
              variant="outline"
              className="bg-mint-dark/10 text-mint-dark border-mint-dark/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-mint-dark" />
              The Details
            </Badge>
            <span className="text-[18px] font-bold text-foreground tracking-tight">
              What you&apos;re signing up for
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {[
              {
                label: "Location",
                value: "Nha Trang",
                sub: "Vietnam · Cohort 01",
              },
              {
                label: "Dates",
                value: "Jun 19\u201321",
                sub: "3 days · 2 nights",
              },
              {
                label: "Seats",
                value: "30",
                sub: "Intentionally small",
              },
              {
                label: "All-in",
                value: "$3,000",
                sub: "Hotel & meals included",
              },
            ].map((d) => (
              <Card key={d.label}>
                <CardContent className="p-5">
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-2">
                    {d.label}
                  </p>
                  <p className="font-mono text-[20px] font-bold text-foreground tracking-tight leading-tight">
                    {d.value}
                  </p>
                  <p className="text-[12px] text-muted-foreground mt-1">
                    {d.sub}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ── HOW IT WORKS ── */}
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mt-14 mb-5">
            <Badge
              variant="outline"
              className="bg-blue/10 text-blue border-blue/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-blue" />
              How It Works
            </Badge>
            <span className="text-[18px] font-bold text-foreground tracking-tight">
              Three days, 5 working agents
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Day 01 */}
            <Card>
              <CardContent className="p-6 flex flex-col">
                <p className="font-mono text-[11px] font-bold text-blue tracking-[0.08em] uppercase mb-1.5">
                  Day 01 &middot; Half day
                </p>
                <h3 className="text-[16px] font-bold text-foreground tracking-tight mb-1">
                  Foundations &amp; Blueprint Sprint
                </h3>
                <p className="font-mono text-[12px] text-muted-foreground mb-3.5">
                  Thu Jun 19 &middot; starts 2:00 PM
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "Framework, three-layer company model, margin mechanics",
                    "Agent Org Chart mapping across your five core functions",
                    "Pod work with engineers to draft your blueprint",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-baseline gap-2.5 text-[13px] text-muted-foreground leading-relaxed"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-blue flex-shrink-0 mt-[6px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-dashed border-border text-[12px] font-semibold text-mint-dark flex items-center gap-1.5">
                  &#9679; Light social at Sailing Club
                </div>
              </CardContent>
            </Card>

            {/* Day 02 */}
            <Card>
              <CardContent className="p-6 flex flex-col">
                <p className="font-mono text-[11px] font-bold text-blue tracking-[0.08em] uppercase mb-1.5">
                  Day 02 &middot; Full day
                </p>
                <h3 className="text-[16px] font-bold text-foreground tracking-tight mb-1">
                  Build Day
                </h3>
                <p className="font-mono text-[12px] text-muted-foreground mb-3.5">
                  Fri Jun 20 &middot; 9:00 AM &ndash; 6:00 PM
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "Four 2-hour build sessions across the day",
                    "One engineer per three founders to help guide you through the process",
                    "Goal: at least one live agent running on your real data",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-baseline gap-2.5 text-[13px] text-muted-foreground leading-relaxed"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-blue flex-shrink-0 mt-[6px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-dashed border-border text-[12px] font-semibold text-mint-dark flex items-center gap-1.5">
                  &#9679; Social at Skylight
                </div>
              </CardContent>
            </Card>

            {/* Day 03 */}
            <Card>
              <CardContent className="p-6 flex flex-col">
                <p className="font-mono text-[11px] font-bold text-blue tracking-[0.08em] uppercase mb-1.5">
                  Day 03 &middot; Half day
                </p>
                <h3 className="text-[16px] font-bold text-foreground tracking-tight mb-1">
                  Polish &amp; Awards
                </h3>
                <p className="font-mono text-[12px] text-muted-foreground mb-3.5">
                  Sat Jun 21 &middot; morning
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "Final build session: refine, polish, finish",
                    "Engineers on-site through the morning to help you across the finish line",
                    "Awards ceremony: celebrate what your cohort shipped",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-baseline gap-2.5 text-[13px] text-muted-foreground leading-relaxed"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-blue flex-shrink-0 mt-[6px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fun callout */}
          <div className="bg-navy rounded-xl p-5 md:p-6 mt-3.5 flex flex-wrap items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-mint flex-shrink-0">
              We won&apos;t forget the fun
            </span>
            <span className="text-[14px] text-white/80 leading-relaxed flex-1 min-w-[240px]">
              <strong className="text-white font-bold">Two social nights</strong>{" "}
              bookend the work. A light welcome at{" "}
              <strong className="text-white font-bold">Sailing Club</strong> on
              Day 01 and a proper evening at{" "}
              <strong className="text-white font-bold">Skylight</strong> on Day
              02. Nha Trang at its best, with the only 29 people who&apos;ll
              actually get what you just built.
            </span>
          </div>
        </ScrollReveal>

        {/* ── STUDENT GALLERY ── */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 mb-2">
            {[
              {
                src: "/images/community-coaching.webp",
                alt: "Founders working together in a live coaching session",
              },
              {
                src: "/images/L01 - Group Photo.webp",
                alt: "Full cohort group photo from a past CAIO retreat",
              },
              {
                src: "/images/K01-Danang-Smiling.webp",
                alt: "Cohort members smiling during a break",
              },
              {
                src: "/images/community-session.webp",
                alt: "Group session in the CAIO community",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/5] rounded-xl overflow-hidden bg-navy shadow-sm group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── OUTCOMES ── */}
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mt-14 mb-5">
            <Badge
              variant="outline"
              className="bg-magenta/10 text-magenta border-magenta/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-magenta" />
              Outcomes
            </Badge>
            <span className="text-[18px] font-bold text-foreground tracking-tight">
              What you leave with
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: "01 · Working Agents",
                heading: "Real working agents, not a deck",
                desc: "You don't leave with slides. You leave with real agents running on your real work. Built, tested, and ready to use.",
              },
              {
                label: "02 · Engineers On-site",
                heading: "AI engineers building alongside you",
                desc: "AI engineers will be on site to help you build your agents in real time, so you can focus on the ideas while they handle the hard parts.",
              },
              {
                label: "03 · A Cohort of 30",
                heading: "Peers solving the same problem",
                desc: "Capped at 30 for a reason. You'll debate, pressure-test, and share pipelines with 29 other operators as far along as you are, or further.",
              },
              {
                label: "04 · Hiring Pipeline",
                heading: "Meet your next AI hire",
                desc: "The engineers who unblock you during the retreat are hireable. If you want to bring one home, we'll help make that happen.",
              },
            ].map((o) => (
              <Card key={o.label}>
                <CardContent className="p-7">
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-blue mb-2.5">
                    {o.label}
                  </p>
                  <h3 className="text-[18px] font-bold text-foreground tracking-tight mb-2.5">
                    {o.heading}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {o.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ── WAITLIST FORM ── */}
        <ScrollReveal>
          <div
            id="waitlist"
            className="scroll-mt-20 flex items-center gap-2.5 mt-14 mb-5"
          >
            <Badge
              variant="outline"
              className="bg-blue/10 text-blue border-blue/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-blue" />
              Waitlist &amp; Survey
            </Badge>
            <span className="text-[18px] font-bold text-foreground tracking-tight">
              Tell us you&apos;re interested
            </span>
          </div>

          <RetreatForm />
        </ScrollReveal>
      </div>
    </>
  );
}
