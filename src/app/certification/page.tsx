import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { GraduationCap, Globe, SatelliteDish, Zap } from "lucide-react";

export const metadata = {
  title: "AI Officer Certification — CAIO Coach",
  description:
    "Earn your AI Officer certification across three tracks — Generative AI, Agentic AI, and AI Leadership (CAIO). $99/month. Live coaching included. Join leaders from 30+ countries.",
  openGraph: {
    title: "Become a Certified CAIO — CAIO Coach",
    description:
      "Earn the credential that proves you can lead AI strategy at the executive level. Three certification tracks, live coaching included. $99/month.",
    type: "website",
    url: "https://www.caiocoach.com/certification",
    images: [
      {
        url: "https://www.caiocoach.com/images/og-certification.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Certified CAIO — CAIO Coach",
    description:
      "Earn the credential that proves you can lead AI strategy at the executive level.",
    images: ["https://www.caiocoach.com/images/og-certification.png"],
  },
};

const ENROLL_URL =
  "https://community.ai-officer.com/checkout/ai-officer-certification-program?affiliate_code=ab0cd6";

const tracks = [
  {
    num: "TRACK 01",
    name: "Generative AI",
    desc: "Master prompt engineering, AI workflows, and the tools reshaping how work gets done. Build fluency with the systems your team is already using.",
    pill: "Generative AI Specialist",
    color: "magenta" as const,
  },
  {
    num: "TRACK 02",
    name: "Agentic AI",
    desc: "Move beyond prompting into building and deploying AI agents. Learn to design multi-step workflows that operate autonomously on your behalf.",
    pill: "Agentic AI Specialist",
    color: "blue" as const,
  },
  {
    num: "TRACK 03",
    name: "AI Leadership",
    desc: "The CAIO track. Org design, change management, AI strategy, and board-level communication. For executives leading the AI transformation of their organisation.",
    pill: "CAIO Certified",
    color: "green" as const,
  },
];

const pillStyles = {
  magenta: "bg-magenta/10 text-magenta border-magenta/20",
  blue: "bg-blue/10 text-blue border-blue/20",
  green: "bg-[rgba(26,158,116,0.1)] text-[#1a9e74] border-[rgba(26,158,116,0.2)]",
};

const earnCards = [
  {
    icon: GraduationCap,
    heading: "Recognised Credentials",
    desc: "Earn your AI Officer certification on completion of each track -- Generative AI Specialist, Agentic AI Specialist, and CAIO Certified. Shareable on LinkedIn and verifiable.",
  },
  {
    icon: Globe,
    heading: "Global Cohort",
    desc: "Learn alongside professionals from across Asia, Southeast Asia, North America, and beyond. The AI Officer Institute community spans 30+ countries.",
  },
  {
    icon: SatelliteDish,
    heading: "Live Coaching Included",
    desc: "Your $99/month subscription includes weekly live coaching sessions with Dave Hajdu. Submit your real AI challenges and get coached in real time.",
  },
  {
    icon: Zap,
    heading: "Practical, Not Theoretical",
    desc: "Every mission ends with a real-world challenge. You don't earn your certification by reading -- you earn it by doing. The work is the learning.",
  },
];

export default function CertificationPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy h-[380px] md:h-[420px] pt-[120px]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(40,123,232,0.14) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 50% at 50% 0%, rgba(111,242,193,0.06) 0%, transparent 50%)' }} />
        <div className="relative z-10 w-full max-w-[920px] mx-auto px-6 md:px-10">
          <p className="text-white/70 text-[11px] font-bold tracking-[0.15em] uppercase mb-3 font-mono">-- Certification &middot; CAIO Coach</p>
          <h1 className="text-white font-extrabold leading-[1.08] tracking-tight mb-3" style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>Be A Certified <span className="text-mint">AI Officer</span></h1>
          <p className="text-white/55 text-[15px] max-w-[480px] leading-relaxed mb-5">Move from AI awareness to AI authority. Three tracks, real-world challenges, and a recognised credential that proves you can lead AI.</p>
          <div className="flex flex-wrap gap-3">
            <Badge
              variant="outline"
              className="bg-magenta/10 text-white/80 border-magenta/30 px-4 py-1.5 text-[12px] font-semibold"
            >
              3 Certification Tracks
            </Badge>
            <Badge
              variant="outline"
              className="bg-navy/50 text-white/80 border-white/15 px-4 py-1.5 text-[12px] font-semibold"
            >
              $99 / month
            </Badge>
            <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer">
              <Badge className="bg-blue text-white px-4 py-1.5 text-[12px] font-semibold hover:bg-blue/90 cursor-pointer">
                Enroll Now &rarr;
              </Badge>
            </a>
          </div>
        </div>
      </section>

      {/* ── PAGE MAIN ── */}
      <div className="max-w-[920px] mx-auto px-6 md:px-10 py-12 md:py-14">
        {/* ── TRACK CARDS ── */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10">
            {tracks.map((track) => (
              <Card key={track.num}>
                <CardContent className="p-6">
                  <p className="font-mono text-[11px] font-bold text-muted-foreground tracking-[0.05em] mb-2.5">
                    {track.num}
                  </p>
                  <h3 className="text-[16px] font-bold text-foreground mb-1.5">{track.name}</h3>
                  <p className="text-[13px] text-muted-foreground leading-[1.6]">{track.desc}</p>
                  <Badge
                    variant="outline"
                    className={`mt-3.5 text-[10px] font-bold tracking-[0.06em] uppercase px-2.5 py-1 ${pillStyles[track.color]}`}
                  >
                    {track.pill}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ── COHORT PHOTO ── */}
        <ScrollReveal>
          <div className="mb-10">
            <div className="relative w-full h-[220px] md:h-[340px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/cert-cohort.webp"
                alt="AI Officer certification cohort group photo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2.5 mt-3.5">
              <span className="font-mono text-[11px] font-bold tracking-[0.08em] uppercase text-muted-foreground">
                The Community
              </span>
              <span className="text-[13px] text-muted-foreground">
                Executives and operators from 30+ countries earning their certification together
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* ── CTA CARD ── */}
        <ScrollReveal>
          <Card className="bg-navy border-0 mb-10 overflow-hidden">
            <CardContent className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-mint mb-2.5">
                  Enroll Now
                </p>
                <h2 className="text-[26px] font-bold text-white tracking-tight leading-[1.2] mb-2.5">
                  AI Officer Certification Program
                </h2>
                <p className="text-[14px] text-white/60 leading-[1.6] max-w-[480px]">
                  Join the AI Officer Institute community. Access all three certification tracks,
                  weekly live coaching sessions, micro-sessions, and a global network of AI leaders.
                  The{" "}
                  <Link
                    href="/blog/four-offices-of-the-future"
                    className="text-mint hover:underline"
                  >
                    Four Offices of the Future
                  </Link>{" "}
                  framework is the foundation of the AI Leadership track -- and the{" "}
                  <Link href="/community" className="text-mint hover:underline">
                    Leadership in the AI Era
                  </Link>{" "}
                  community is where you practice it alongside executives from 30+ countries.
                </p>
              </div>
              <div className="text-center">
                <p className="font-mono text-[36px] font-bold text-white leading-none">$99</p>
                <p className="text-[13px] text-white/50 mt-1 mb-5">per month</p>
                <a
                  href={ENROLL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue text-white text-[15px] font-bold px-7 py-3.5 rounded-[10px] hover:bg-blue/85 hover:-translate-y-px transition-all whitespace-nowrap"
                >
                  Enroll in the Program &rarr;
                </a>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* ── EARN CARDS ── */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-10">
            {earnCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.heading}>
                  <CardContent className="p-6">
                    <Icon className="w-7 h-7 text-blue mb-3" />
                    <h3 className="text-[15px] font-bold text-foreground mb-2">{card.heading}</h3>
                    <p className="text-[13px] text-muted-foreground leading-[1.65]">{card.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
