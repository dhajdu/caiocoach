import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "AI Executive Coaching - CAIO Coach",
  description:
    "Weekly live AI coaching sessions with Dave Hajdu. Bring your real AI challenges and get coached in real time. Included with CAIO Coach certification.",
  openGraph: {
    title: "AI Coaching for Executives - CAIO Coach",
    description:
      "Weekly live AI coaching with Dave Hajdu. Group sessions for $99/month or private 1:1. Bring your real challenges and get coached in real time.",
    type: "website",
    url: "https://www.caiocoach.com/coaching",
    images: [
      {
        url: "https://www.caiocoach.com/images/og-coaching.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Coaching for Executives - CAIO Coach",
    description:
      "Weekly live AI coaching with Dave Hajdu. Group sessions for $99/month or private 1:1.",
    images: ["https://www.caiocoach.com/images/og-coaching.png"],
  },
};

export default function CoachingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy h-[380px] md:h-[420px] pt-[120px]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(40,123,232,0.14) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 50% at 50% 0%, rgba(111,242,193,0.06) 0%, transparent 50%)' }} />
        <div className="relative z-10 w-full max-w-[920px] mx-auto px-6 md:px-10">
          <p className="text-white/70 text-[11px] font-bold tracking-[0.15em] uppercase mb-3 font-mono">-- Coaching &middot; CAIO Coach</p>
          <h1 className="text-white font-extrabold leading-[1.08] tracking-tight mb-3" style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>Your Toughest AI Problems <span className="text-mint">Solved</span></h1>
          <p className="text-white/55 text-[15px] max-w-[480px] leading-relaxed mb-5">Bring your real challenges. Every week, Dave works through submitted problems live. Submit yours before the session.</p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="bg-navy/50 text-white/80 border-white/15 px-4 py-1.5 text-[12px] font-semibold">Live Coaching</Badge>
            <Badge variant="outline" className="bg-navy/50 text-white/80 border-white/15 px-4 py-1.5 text-[12px] font-semibold">Every Thursday</Badge>
            <Badge variant="outline" className="bg-navy/50 text-white/80 border-white/15 px-4 py-1.5 text-[12px] font-semibold">11:30 AM - 1:30 PM GMT+7</Badge>
          </div>
        </div>
      </section>

      {/* ── PAGE MAIN ── */}
      <div className="max-w-[920px] mx-auto px-6 md:px-10 py-12 md:py-14">
        {/* ── UP NEXT HEADER ── */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[18px] font-bold text-foreground tracking-[-0.2px]">
            Up Next
          </span>
        </div>

        {/* ── TWO-COLUMN BODY ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-7 items-start">
          {/* ═══ Main column ═══ */}
          <div>
            {/* ── Upcoming Session Banner ── */}
            <ScrollReveal>
              <Card className="border-blue/25 border-2">
                <CardContent className="p-6">
                  <Badge
                    variant="outline"
                    className="bg-blue/8 text-blue border-blue/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-0.5 gap-1.5 mb-3.5"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-blue animate-pulse" />
                    Next Session
                  </Badge>

                  <p className="font-mono text-[12px] font-bold text-muted-foreground tracking-[0.05em] uppercase mb-2">
                    Thursday, 9 Apr 2026 &middot; 11:30 AM GMT+7
                  </p>

                  <h2 className="text-[20px] font-bold text-foreground tracking-[-0.3px] leading-[1.25] mb-2.5">
                    Setting Up My Folder Structure in Cowork + Automating Social
                    Media
                  </h2>

                  <p className="text-[14px] text-muted-foreground leading-[1.65] mb-4.5">
                    How to organise a Cowork project with the right folder
                    structure and instructions so Claude stays on-brand, then
                    building a workflow to automate social media content end to
                    end.
                  </p>

                  <div className="flex items-center gap-2.5 pt-3.5 border-t border-surface">
                    <span className="text-[11px] text-muted-foreground mr-1">
                      Submitted by
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-[34px] h-[34px] rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/dru-nguyen-headshot.webp"
                          alt="Dru"
                          width={34}
                          height={34}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold text-muted-foreground">
                          Dru
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          Founder &middot; Skylight
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* ── Past Sessions ── */}
            <ScrollReveal>
              <div className="flex items-center justify-between mt-10 mb-4">
                <span className="text-[18px] font-bold text-foreground tracking-[-0.2px]">
                  Past Sessions
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {/* Session 1 - CAIO multi-topic card */}
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-muted-foreground bg-surface border border-border rounded-[5px] px-2 py-0.5 whitespace-nowrap">
                          2 Apr 2026
                        </span>
                        <span className="text-[12px] font-semibold text-muted-foreground">
                          Dave Hajdu
                        </span>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.05em] uppercase bg-navy/8 text-navy rounded-[5px] px-2 py-0.5">
                        CAIO &middot; Session 1
                      </span>
                    </div>

                    {/* Topic rows */}
                    <div className="flex flex-col mt-1">
                      {/* Eric topic */}
                      <Link
                        href="/coaching-sessions/C01/C01-Eric-Bhutan-Project"
                        className="flex items-start gap-3 py-3 border-t border-surface no-underline text-inherit group"
                      >
                        <div className="w-[34px] h-[34px] rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                          <Image
                            src="/images/eric-enriquez-headshot.webp"
                            alt="Eric"
                            width={34}
                            height={34}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-mono text-[10px] font-bold tracking-[0.08em] uppercase text-muted-foreground mb-0.5">
                            Eric
                          </div>
                          <div className="text-[14px] font-semibold text-foreground leading-[1.3] mb-1 group-hover:text-blue transition-colors">
                            Building a Website with AI: Bhutan Travel Project
                          </div>
                          <div className="text-[12px] text-muted-foreground leading-[1.55]">
                            Used Cowork to plan, brand, and build a full project
                            website from scratch, starting with a strategy brief
                            in chat and ending with a live Gantt chart for
                            tracking milestones.
                          </div>
                        </div>
                        <span className="text-[13px] text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-blue transition-colors">
                          &rarr;
                        </span>
                      </Link>

                      {/* Julien topic */}
                      <Link
                        href="/coaching-sessions/C01/C01-Julien-PowerBI-Cowork"
                        className="flex items-start gap-3 py-3 border-t border-surface no-underline text-inherit group"
                      >
                        <div className="w-[34px] h-[34px] rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                          <Image
                            src="/images/julien-head-shot.webp"
                            alt="Julien"
                            width={34}
                            height={34}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-mono text-[10px] font-bold tracking-[0.08em] uppercase text-muted-foreground mb-0.5">
                            Julien
                          </div>
                          <div className="text-[14px] font-semibold text-foreground leading-[1.3] mb-1 group-hover:text-blue transition-colors">
                            Power BI Dashboard Migration with Cowork
                          </div>
                          <div className="text-[12px] text-muted-foreground leading-[1.55]">
                            Walked through using Claude to accelerate a Power BI
                            migration, setting up data context, writing DAX with
                            AI assistance, and building a repeatable Cowork
                            workflow for future reports.
                          </div>
                        </div>
                        <span className="text-[13px] text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-blue transition-colors">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>

          {/* ═══ Sidebar ═══ */}
          <div className="flex flex-col gap-4 md:sticky md:top-[76px]">
            {/* Card 1: Submit header */}
            <ScrollReveal>
              <Card>
                <CardContent className="p-5">
                  <p className="text-[14px] font-bold text-foreground tracking-tight mb-1.5">
                    Submit Your Problem
                  </p>
                  <p className="text-[13px] text-muted-foreground leading-[1.55]">
                    Every submission gets reviewed. The most applicable problems
                    get worked live on Thursday.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Card 2: Typeform embed */}
            <ScrollReveal>
              <Card>
                <CardContent className="p-5">
                  <div data-tf-live="01KN6N41MG69GD68FBMCC87BJ9" />
                  <Script
                    src="//embed.typeform.com/next/embed.js"
                    strategy="lazyOnload"
                  />
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Card 3: Session details */}
            <ScrollReveal>
              <Card>
                <CardContent className="p-5 bg-surface rounded-xl">
                  <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground mb-3.5">
                    Session Details
                  </p>

                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-start gap-2.5 text-[13px]">
                      <span className="text-[14px] flex-shrink-0 mt-px">
                        &#x1F4C5;
                      </span>
                      <div className="text-muted-foreground leading-[1.5]">
                        <strong className="text-foreground font-bold">
                          Every Thursday
                        </strong>
                        <br />
                        Weekly, no breaks
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-[13px]">
                      <span className="text-[14px] flex-shrink-0 mt-px">
                        &#x1F552;
                      </span>
                      <div className="text-muted-foreground leading-[1.5]">
                        <strong className="text-foreground font-bold">
                          11:30 AM - 1:30 PM
                        </strong>
                        <br />
                        GMT+7 (Bangkok / Hanoi / Jakarta)
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-[13px]">
                      <span className="text-[14px] flex-shrink-0 mt-px">
                        &#x1F3A4;
                      </span>
                      <div className="text-muted-foreground leading-[1.5]">
                        <strong className="text-foreground font-bold">
                          Live on AIO Labs
                        </strong>
                        <br />
                        Recorded, watch back anytime
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-[13px]">
                      <span className="text-[14px] flex-shrink-0 mt-px">
                        &#x2709;
                      </span>
                      <div className="text-muted-foreground leading-[1.5]">
                        <strong className="text-foreground font-bold">
                          Submit by Tue 4pm
                        </strong>
                        <br />
                        GMT+7 to be considered
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}
