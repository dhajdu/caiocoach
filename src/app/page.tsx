import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy h-[380px] md:h-[420px] pt-[120px]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(40,123,232,0.14) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 50% at 50% 0%, rgba(111,242,193,0.06) 0%, transparent 50%)' }} />
        <div className="relative z-10 w-full max-w-[920px] mx-auto px-6 md:px-10">
          <p className="text-white/70 text-[11px] font-bold tracking-[0.15em] uppercase mb-3 font-mono">-- CAIO Coach &middot; Dave Hajdu</p>
          <h1 className="text-white font-extrabold leading-[1.08] tracking-tight mb-3" style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>Leadership Has <span className="text-mint">Changed</span></h1>
          <p className="text-white/55 text-[15px] max-w-[480px] leading-relaxed mb-5">Half the job is still people. The other half is now AI. We coach you on both.</p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="bg-navy/50 text-white/80 border-white/15 px-4 py-1.5 text-[12px] font-semibold">Weekly Live Sessions</Badge>
            <Badge variant="outline" className="bg-navy/50 text-white/80 border-white/15 px-4 py-1.5 text-[12px] font-semibold">$99 / month</Badge>
            <Link href="/coaching"><Badge className="bg-blue text-white px-4 py-1.5 text-[12px] font-semibold hover:bg-blue/90 cursor-pointer">Start Coaching &rarr;</Badge></Link>
          </div>
        </div>
      </section>

      {/* ── PAGE MAIN ── */}
      <div className="max-w-[920px] mx-auto px-6 md:px-10 py-12 md:py-14">

        {/* ── ABOUT DAVE ── */}
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mb-5">
            <Badge variant="outline" className="bg-blue/10 text-blue border-blue/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5">
              <span className="w-[5px] h-[5px] rounded-full bg-blue" />
              Your Coach
            </Badge>
          </div>

          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
              <div className="relative min-h-[240px] md:min-h-[280px]">
                <Image
                  src="/images/dave-portrait.webp"
                  alt="Dave Hajdu — CAIO Coach"
                  fill
                  className="object-cover object-[center_top]"
                />
              </div>
              <CardContent className="p-6 md:p-9">
                <h3 className="text-[20px] font-bold text-foreground tracking-tight mb-1">Dave Hajdu</h3>
                <p className="text-blue text-[13px] font-semibold mb-4">Founder &amp; Chief AI Officer, Edge8 AI</p>
                <div className="text-muted-foreground text-[14px] leading-[1.7] space-y-2.5">
                  <p>
                    We raised $9.5 million for TINYpulse. Had{' '}
                    <a href="https://www.baselinevc.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Baseline Venture Capital</a>{' '}
                    behind us, a real board, and a real team. And for most of that journey, I couldn&apos;t tell you the difference between a repository and a folder.
                  </p>
                  <p>
                    That wasn&apos;t laziness. That was just how it worked until AI made it inefficient. Now every executive faces the same inflection point I did. The wall between leadership and the technical side of the business is coming down, whether you&apos;re ready or not.
                  </p>
                  <p>
                    I coach leaders to get ready. Not to code. Not to become data scientists. To lead the AI half of every workflow they&apos;re already responsible for. The organizational framework I use for that work is the{' '}
                    <Link href="/blog/four-offices-of-the-future" className="text-blue hover:underline">Four Offices of the Future</Link>{' '}
                    &mdash; Revenue, Talent, Operations, and Innovation. That&apos;s where the ROI lives. Join the{' '}
                    <Link href="/community" className="text-blue hover:underline">Leadership in the AI Era</Link>{' '}
                    community and work through it with a global cohort of executives.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['TINYpulse · $9.5M raised', 'Microsoft Alumni', 'Founder, Edge8 AI', 'Global Faculty, EOVietnam'].map((chip) => (
                    <span key={chip} className="font-mono text-[11px] font-semibold text-muted-foreground bg-surface border border-border rounded-md px-2.5 py-1">
                      {chip}
                    </span>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </ScrollReveal>

        {/* ── COACHING OFFER ── */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-2.5 mt-14 mb-5">
            <Badge variant="outline" className="bg-blue/10 text-blue border-blue/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5">
              <span className="w-[5px] h-[5px] rounded-full bg-blue" />
              How It Works
            </Badge>
            <span className="text-[18px] font-bold text-foreground tracking-tight">The Coaching Program</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Group Coaching */}
            <Card className="border-blue/30 bg-gradient-to-br from-white to-blue/[0.03] flex flex-col">
              <CardContent className="p-7 flex flex-col flex-1">
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-blue mb-2.5">Group Coaching</p>
                <h3 className="text-[18px] font-bold text-foreground tracking-tight mb-2.5">Weekly Live Sessions</h3>
                <div className="flex items-baseline gap-1.5 mb-3.5">
                  <span className="font-mono text-[28px] font-bold text-foreground">$99</span>
                  <span className="text-[13px] text-muted-foreground">/ month</span>
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                  Each week, members submit the AI challenges they&apos;re facing. Dave coaches the top topics live. Anyone can join, ask questions, and get real-time guidance on their specific situation.
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  {[
                    'Weekly live coaching sessions',
                    'Submit your topics and questions',
                    'Access to all micro-sessions and thought leadership',
                    'Community of global AI leaders',
                    'Certification program included',
                  ].map((item) => (
                    <div key={item} className="flex items-baseline gap-2.5 text-[13px] text-muted-foreground">
                      <span className="w-[5px] h-[5px] rounded-full bg-blue flex-shrink-0 mt-[6px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/coaching"
                  className="mt-auto inline-flex items-center gap-1.5 bg-navy text-white text-[14px] font-semibold px-5 py-2.5 rounded-lg hover:bg-blue transition-colors"
                >
                  Join for $99/month &rarr;
                </Link>
              </CardContent>
            </Card>

            {/* Private Coaching */}
            <Card className="flex flex-col">
              <CardContent className="p-7 flex flex-col flex-1">
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-blue mb-2.5">Private Coaching</p>
                <h3 className="text-[18px] font-bold text-foreground tracking-tight mb-2.5">One-on-One Sessions</h3>
                <div className="flex items-baseline gap-1.5 mb-3.5">
                  <span className="font-mono text-[20px] font-bold text-muted-foreground">By arrangement</span>
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                  For executives who want focused, private attention on their AI strategy. Dave works directly with you on your roadmap, your team, and your specific business context.
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  {[
                    { text: 'Dedicated 1:1 sessions with Dave', muted: false },
                    { text: 'Custom AI roadmap for your organisation', muted: false },
                    { text: 'Team coaching and enablement', muted: false },
                    { text: 'Limited availability', muted: true },
                  ].map((item) => (
                    <div key={item.text} className={`flex items-baseline gap-2.5 text-[13px] ${item.muted ? 'text-muted-foreground/60' : 'text-muted-foreground'}`}>
                      <span className={`w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[6px] ${item.muted ? 'bg-muted-foreground/40' : 'bg-blue'}`} />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/coaching"
                  className="mt-auto inline-flex items-center gap-1.5 bg-surface text-muted-foreground text-[14px] font-semibold px-5 py-2.5 rounded-lg border border-border hover:border-blue hover:text-blue transition-colors"
                >
                  Enquire About Private Coaching &rarr;
                </Link>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* ── BLOG PREVIEW ── */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-2.5 mt-14 mb-5">
            <Badge variant="outline" className="bg-mint-dark/10 text-mint-dark border-mint-dark/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5">
              <span className="w-[5px] h-[5px] rounded-full bg-mint-dark" />
              Blog
            </Badge>
            <span className="text-[18px] font-bold text-foreground tracking-tight">Latest Insights</span>
            <span className="ml-auto text-[13px] text-muted-foreground hover:text-blue transition-colors">
              <Link href="/blog">View all &rarr;</Link>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {[
              {
                date: 'Apr 2, 2026',
                title: 'I Raised $9.5M and Still Couldn\'t Read My Own Codebase. Then AI Happened.',
                excerpt: 'The gap between a founder and the developer stack was never a skill gap. It was a guide gap. That guide exists now.',
                href: '/blog/i-raised-9-5m-and-couldnt-read-my-own-codebase',
              },
              {
                date: 'Apr 1, 2026',
                title: 'The CMS Is Dead. AI Killed It.',
                excerpt: 'Non-technical founders can now control their content and ship like engineers. No WordPress. No plugins. No waiting on developers.',
                href: '/blog/the-cms-is-dead-ai-killed-it',
              },
              {
                date: 'Mar 30, 2026',
                title: 'The Hotel AI Personalization Gap',
                excerpt: 'Hotels have more guest data than ever before. They just don\'t know how to activate it. This is a leadership problem, not a technology problem.',
                href: '/blog/hotel-ai-personalization-guest-experience',
              },
            ].map((post) => (
              <Link key={post.href} href={post.href}>
                <Card className="h-full hover:border-blue/30 hover:shadow-lg hover:-translate-y-px transition-all cursor-pointer">
                  <CardContent className="p-5 flex flex-col gap-2.5 h-full">
                    <span className="font-mono text-[11px] text-muted-foreground">{post.date}</span>
                    <h3 className="text-[15px] font-bold text-foreground leading-tight tracking-tight flex-1">
                      {post.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <span className="text-[13px] text-muted-foreground group-hover:text-blue">Read &rarr;</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </>
  );
}
