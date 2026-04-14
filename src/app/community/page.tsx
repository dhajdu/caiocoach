import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import CommunityCarousel from "./CommunityCarousel";

export const metadata: Metadata = {
  title: "AI Leadership Community - CAIO Coach",
  description:
    "Join a global community of AI leaders from 30+ countries. Weekly coaching sessions, certification tracks, peer accountability, and AI leadership resources.",
  openGraph: {
    title: "Join the CAIO Coach Community",
    description:
      "A global community of executives navigating AI strategy together. Weekly live sessions, peer accountability, and certification -- all for $99/month.",
    type: "website",
    url: "https://www.caiocoach.com/community",
    images: [
      {
        url: "https://www.caiocoach.com/images/og-community.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the CAIO Coach Community",
    description:
      "A global community of executives navigating AI strategy together.",
    images: ["https://www.caiocoach.com/images/og-community.webp"],
  },
};

const advisors = [
  {
    name: "Dr. Brooks Holtom",
    image: "/images/advisor-brooks.webp",
    role: "Professor of Management, Georgetown University McDonough School of Business",
    bio: "Brooks is a leading researcher in organisational behaviour and human capital development. His consulting work spans Microsoft, Capital One, and the U.S. Air Force. He brings deep expertise in talent strategy and how organisations build capability at scale.",
    tag: "Leadership & Talent",
  },
  {
    name: "David Nilssen",
    image: "/images/advisor-david.webp",
    role: "CEO, DOXA Talent · Co-founder & Chairman, Guidant Financial",
    bio: "David co-founded Guidant Financial, which has helped 30,000 entrepreneurs secure $7 billion in funding. He now leads DOXA Talent, a global HR platform. Named SBA National Young Entrepreneur of the Year, he has built companies that have appeared on the Inc 500/5000 list six times.",
    tag: "Entrepreneurship & Talent",
  },
  {
    name: "Dato' George Lim",
    image: "/images/advisor-george.webp",
    role: "Chair, Vistage Malaysia · Founder & CEO, G&A Group",
    bio: "George leads Vistage Malaysia and has spent 28+ years in business advisory, building G&A Group to 100+ team members. He founded GA Space to mentor over 200,000 entrepreneurs and is a Chartered Accountant with credentials from Malaysia and New Zealand. A 15+ year Rotary International member.",
    tag: "Executive Coaching",
  },
  {
    name: "TK Nguyen",
    image: "/images/advisor-tk.webp",
    role: "CEO, GAM Esports Vietnam",
    bio: "TK leads GAM Esports, one of Vietnam's top competitive gaming organisations, and has been instrumental in building the country's esports ecosystem. A serial entrepreneur who moved from Hollywood's nightlife scene to become a major figure in Vietnam's emerging tech and entertainment sector.",
    tag: "Entrepreneurship · Vietnam",
  },
  {
    name: "Dru Nguyen",
    image: "/images/advisor-dru.webp",
    role: "Co-Founder, Skylight · Advisor, AI Officer Institute",
    bio: "With a decade of operational leadership across hospitality, entertainment, and technology, Dru specialises in scaling businesses across Southeast Asia.",
    tag: "AI & Operations · SEA",
  },
  {
    name: "Tommy Dan",
    image: "/images/advisor-tommy.webp",
    role: "Entrepreneur & Community Leader",
    bio: "Tommy is an entrepreneur and active member of the CAIO Coach community. His experience spans business operations and leadership development, and he contributes to the community as a practitioner bringing real-world context to the conversations.",
    tag: "Entrepreneurship",
  },
];

const expectItems = [
  {
    icon: "📡",
    heading: "Weekly Live Coaching",
    desc: "Every week, Dave coaches the topics members are actually wrestling with. Submit your challenge, join live, and get real answers in real time.",
  },
  {
    icon: "🎬",
    heading: "Micro-Sessions Library",
    desc: "Short, practical sessions on the AI tools and strategies making a difference right now. New sessions released regularly, all available to free members.",
  },
  {
    icon: "✏️",
    heading: "AI Leadership Blog",
    desc: "Dave's writing on AI leadership, strategy, and the real-world implications of the 50/50 era. Direct, practical, and globally relevant.",
  },
  {
    icon: "🌍",
    heading: "Global Peers",
    desc: "Connect with executives and operators from 30+ countries who are navigating the same transition. The community is the curriculum.",
  },
  {
    icon: "🎓",
    heading: "Certification Path",
    desc: "Premium members get full access to the AI Officer Certification program -- three tracks, from Generative AI to CAIO Certified.",
  },
  {
    icon: "🤝",
    heading: "Advisor Access",
    desc: "Guest sessions with community advisors -- practitioners, investors, and domain experts who bring real context to the coaching conversations.",
  },
];

const freeTierItems = [
  "All thought leadership articles",
  "Full micro-session library",
  "Community forum access",
  "Weekly newsletter",
];

const premiumTierItems = [
  "Everything in Free",
  "Weekly live group coaching with Dave",
  "Submit topics and ask questions live",
  "AI Officer Certification program",
  "Access to guest advisor sessions",
  "Private coaching available separately",
];

export default function CommunityPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy h-[380px] md:h-[420px] pt-[120px]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(40,123,232,0.14) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 50% at 50% 0%, rgba(111,242,193,0.06) 0%, transparent 50%)' }} />
        <div className="relative z-10 w-full max-w-[920px] mx-auto px-6 md:px-10">
          <p className="text-white/70 text-[11px] font-bold tracking-[0.15em] uppercase mb-3 font-mono">-- Community &middot; CAIO Coach</p>
          <h1 className="text-white font-extrabold leading-[1.08] tracking-tight mb-3" style={{ fontSize: 'clamp(28px, 4.5vw, 42px)' }}>AI Is Better With <span className="text-mint">People</span></h1>
          <p className="text-white/55 text-[15px] max-w-[480px] leading-relaxed mb-5">A global community of founders, executives, and advisors navigating the ever-changing world of AI together.</p>
          <div className="flex flex-wrap gap-3">
            <Badge
              variant="outline"
              className="bg-navy/50 text-white/80 border-white/15 px-4 py-1.5 text-[12px] font-semibold"
            >
              Free Tier Available
            </Badge>
            <Badge
              variant="outline"
              className="bg-navy/50 text-white/80 border-white/15 px-4 py-1.5 text-[12px] font-semibold"
            >
              30+ Countries
            </Badge>
            <a
              href="https://community.ai-officer.com/checkout/ai-officer-certification-program?affiliate_code=ab0cd6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge className="bg-blue text-white px-4 py-1.5 text-[12px] font-semibold hover:bg-blue/90 cursor-pointer">
                Join the Community &rarr;
              </Badge>
            </a>
          </div>
        </div>
      </section>

      {/* ── PAGE MAIN ── */}
      <div className="max-w-[920px] mx-auto px-6 md:px-10 py-12 md:py-14">
        {/* ── ADVISORS ── */}
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mb-5">
            <Badge
              variant="outline"
              className="bg-mint-dark/10 text-mint-dark border-mint-dark/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-mint-dark" />
              The Network
            </Badge>
            <span className="text-[18px] font-bold text-foreground tracking-tight">
              Advisors &amp; Community Leaders
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {advisors.map((advisor) => (
              <Card
                key={advisor.name}
                className="hover:border-mint-dark/30 hover:shadow-lg hover:-translate-y-px transition-all"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3.5 flex-shrink-0">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover object-[center_top]"
                    />
                  </div>
                  <h3 className="text-[15px] font-bold text-foreground tracking-tight mb-0.5">
                    {advisor.name}
                  </h3>
                  <p className="text-[12px] font-semibold text-blue mb-3 leading-snug">
                    {advisor.role}
                  </p>
                  <p className="text-[13px] text-muted-foreground leading-[1.65]">
                    {advisor.bio}
                  </p>
                  <Badge
                    variant="outline"
                    className="mt-3 bg-mint-dark/10 text-mint-dark border-mint-dark/20 text-[10px] font-bold tracking-[0.06em] uppercase px-2.5 py-0.5 rounded-[5px]"
                  >
                    {advisor.tag}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ── WHAT TO EXPECT ── */}
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mt-14 mb-5">
            <Badge
              variant="outline"
              className="bg-blue/10 text-blue border-blue/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-blue" />
              Inside the Community
            </Badge>
            <span className="text-[18px] font-bold text-foreground tracking-tight">
              What You Get
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {expectItems.map((item) => (
              <Card key={item.heading}>
                <CardContent className="p-5">
                  <div className="text-[24px] mb-2.5">{item.icon}</div>
                  <h3 className="text-[14px] font-bold text-foreground mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-[1.65]">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ── CAROUSEL ── */}
        <ScrollReveal>
          <div className="mt-12">
            <CommunityCarousel />
          </div>
        </ScrollReveal>

        {/* ── MEMBERSHIP TIERS ── */}
        <ScrollReveal>
          <div className="flex items-center gap-2.5 mt-14 mb-5">
            <Badge
              variant="outline"
              className="bg-blue/10 text-blue border-blue/20 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 gap-1.5"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-blue" />
              Membership
            </Badge>
            <span className="text-[18px] font-bold text-foreground tracking-tight">
              Free and Premium Access
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Free Tier */}
            <Card>
              <CardContent className="p-7">
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-mint-dark mb-2">
                  Free
                </p>
                <h3 className="text-[20px] font-bold text-foreground tracking-tight mb-1.5">
                  Community Member
                </h3>
                <div className="flex items-baseline gap-1.5 mb-3.5">
                  <span className="font-mono text-[24px] font-bold text-foreground">
                    $0
                  </span>
                  <span className="text-[13px] text-muted-foreground">
                    forever
                  </span>
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                  Everything you need to follow along, learn at your own pace,
                  and engage with the community. No credit card required.
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  {freeTierItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-baseline gap-2.5 text-[13px] text-muted-foreground"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-mint-dark flex-shrink-0 mt-[6px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://community.ai-officer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-surface text-muted-foreground text-[14px] font-semibold px-5 py-2.5 rounded-lg border border-border hover:border-blue hover:text-blue transition-colors"
                >
                  Join Free &rarr;
                </a>
              </CardContent>
            </Card>

            {/* Premium Tier */}
            <Card className="border-blue/30 bg-gradient-to-br from-white to-blue/[0.03]">
              <CardContent className="p-7">
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-blue mb-2">
                  Premium
                </p>
                <h3 className="text-[20px] font-bold text-foreground tracking-tight mb-1.5">
                  Coached Member
                </h3>
                <div className="flex items-baseline gap-1.5 mb-3.5">
                  <span className="font-mono text-[24px] font-bold text-foreground">
                    $99
                  </span>
                  <span className="text-[13px] text-muted-foreground">
                    / month
                  </span>
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                  Live weekly coaching, certification access, and direct
                  connection to Dave and the advisor network. Built for leaders
                  who want to move faster.
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  {premiumTierItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-baseline gap-2.5 text-[13px] text-muted-foreground"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-blue flex-shrink-0 mt-[6px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://community.ai-officer.com/checkout/ai-officer-certification-program?affiliate_code=ab0cd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-navy text-white text-[14px] font-semibold px-5 py-2.5 rounded-lg hover:bg-blue transition-colors"
                >
                  Join for $99/month &rarr;
                </a>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
