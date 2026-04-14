type Step = {
  num: string;
  name: string;
  desc: string;
  accent?: 'editorial' | 'seo' | 'gate' | 'images';
};

const BLOG_PHASES: { label: string; key: 'develop' | 'shape' | 'draft' | 'produce'; steps: Step[] }[] = [
  {
    label: 'Develop',
    key: 'develop',
    steps: [
      { num: '01', name: 'Intake', desc: 'Raw idea in any form, voice note, rough note, headline' },
      { num: '02', name: 'Develop', desc: 'Clarifying questions: core insight, audience, takeaway, anchoring story' },
      { num: '03', name: 'Style', desc: 'Recommend 3 to 5 from the 20-style catalogue. Confirm before proceeding' },
    ],
  },
  {
    label: 'Shape',
    key: 'shape',
    steps: [
      { num: '04', name: 'Outline', desc: 'Build outline using confirmed style as structural guide' },
      { num: '05', name: 'Shipper Lens', desc: 'Editorial critique: sharp thinking? Every section earns its place? Cut filler.', accent: 'editorial' },
    ],
  },
  {
    label: 'Draft',
    key: 'draft',
    steps: [
      { num: '06', name: 'First Draft', desc: 'Write blog.md using project context, voice, audience, formatting' },
      { num: '07', name: 'Iterate', desc: 'Revise on feedback. Push back, suggest angles, thought leader mode' },
      { num: '08', name: 'Approve', desc: 'User confirms final. Gate, do not proceed without approval', accent: 'gate' },
    ],
  },
  {
    label: 'Produce',
    key: 'produce',
    steps: [
      { num: '09', name: 'SEO & AI Search', desc: 'seo.md, keywords, meta, structured data, AI search optimization. Patel lens review.', accent: 'seo' },
      { num: '10', name: 'Deliverables', desc: 'social.md, vietnamese.md, circle.html, per project context' },
      { num: '11', name: 'Images', desc: 'Real photos or AI-generated? If AI: pick image style, write generation prompts.', accent: 'images' },
      { num: '12', name: 'Handoff', desc: 'Done. User publishes via the website project.' },
    ],
  },
];

const SOCIAL_STEPS: Step[] = [
  { num: '01', name: 'Intake', desc: 'Idea, hot take, observation' },
  { num: '02', name: 'Channels', desc: "Pick from project's active channels" },
  { num: '03', name: 'Draft', desc: 'All channel drafts in one response' },
  { num: '04', name: 'Iterate', desc: 'Revise until approved' },
  { num: '05', name: 'Save', desc: 'social.md to content folder' },
];

const PHASE_CHIP: Record<'develop' | 'shape' | 'draft' | 'produce', string> = {
  develop: 'bg-blue/10 text-blue',
  shape: 'bg-magenta/10 text-magenta',
  draft: 'bg-mint-dark/10 text-mint-dark',
  produce: 'bg-navy/10 text-navy',
};

function stepClasses(accent?: Step['accent']) {
  switch (accent) {
    case 'editorial':
      return 'border-magenta';
    case 'seo':
      return 'border-blue';
    case 'gate':
      return 'border-mint-dark';
    case 'images':
      return 'border-navy';
    default:
      return 'border-border';
  }
}

function stepNumColor(accent?: Step['accent']) {
  switch (accent) {
    case 'editorial':
      return 'text-magenta';
    case 'seo':
      return 'text-blue';
    case 'gate':
      return 'text-mint-dark';
    case 'images':
      return 'text-navy';
    default:
      return 'text-muted-foreground';
  }
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className={`bg-white border-[1.5px] ${stepClasses(step.accent)} rounded-[10px] p-4 flex-1 min-w-0`}>
      <div className={`font-mono text-[11px] font-medium mb-1 ${stepNumColor(step.accent)}`}>{step.num}</div>
      <div className="text-[13px] font-semibold text-navy mb-0.5">{step.name}</div>
      <div className="text-[12px] text-muted-foreground leading-snug">{step.desc}</div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground mb-4 pl-1">
      {children}
    </div>
  );
}

export default function ContentStudioWorkflow() {
  return (
    <div className="my-10 mx-auto w-full max-w-[920px]">
      <h3 className="text-[1.5rem] font-bold text-navy mb-1">Content Studio</h3>
      <p className="text-[14px] text-muted-foreground mb-10">
        Production workflow, from idea to published deliverables
      </p>

      {/* Entry point */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 mb-8">
        <div className="flex-1 bg-surface border-[1.5px] border-blue rounded-xl px-5 md:px-7 py-4">
          <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-blue mb-1">Invoke</div>
          <div className="text-[14px] text-navy">
            <code className="font-mono bg-blue/10 text-blue px-2 py-0.5 rounded text-[12px]">/studio</code>{' '}
            or{' '}
            <code className="font-mono bg-blue/10 text-blue px-2 py-0.5 rounded text-[12px]">
              /studio blog for caio-coach about...
            </code>
          </div>
        </div>
        <div className="hidden md:block text-border text-xl">&rarr;</div>
        <div className="flex-1 bg-surface border-[1.5px] border-blue rounded-xl px-5 md:px-7 py-4">
          <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-blue mb-1">Determine</div>
          <div className="text-[14px] text-navy">Blog or standalone social? &middot; Which project?</div>
        </div>
      </div>

      {/* Fork */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="flex-1 bg-white border-[1.5px] border-navy shadow-sm rounded-xl px-5 py-4">
          <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-blue mb-1">Path A</div>
          <div className="text-[16px] font-semibold text-navy mb-1">Blog</div>
          <div className="text-[13px] text-muted-foreground leading-snug">
            Full post + SEO + all channel deliverables + images. 4 phases, 12 steps.
          </div>
        </div>
        <div className="flex-1 bg-surface border-[1.5px] border-border rounded-xl px-5 py-4">
          <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground mb-1">Path B</div>
          <div className="text-[16px] font-semibold text-navy mb-1">Standalone Social</div>
          <div className="text-[13px] text-muted-foreground leading-snug">
            Own idea, not derived from a blog. 5 steps.
          </div>
        </div>
      </div>

      {/* Blog Workflow */}
      <SectionLabel>Blog Workflow</SectionLabel>
      <div className="flex flex-col gap-3 mb-10">
        {BLOG_PHASES.map((phase, i) => (
          <div key={phase.label}>
            <div className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-0">
              <div className="md:w-[110px] flex-shrink-0 flex items-center md:justify-end md:pr-4">
                <span
                  className={`font-mono text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded ${PHASE_CHIP[phase.key]}`}
                >
                  {phase.label}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 flex-1">
                {phase.steps.map((s) => (
                  <StepCard key={s.num} step={s} />
                ))}
              </div>
            </div>
            {i < BLOG_PHASES.length - 1 && (
              <div className="hidden md:flex pl-[110px] h-4">
                <div className="w-px h-4 bg-border ml-10" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Social */}
      <SectionLabel>Social Workflow (Standalone)</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-10">
        {SOCIAL_STEPS.map((s) => (
          <StepCard key={s.num} step={s} />
        ))}
      </div>

      {/* Lenses */}
      <SectionLabel>Editorial Lenses</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="bg-white border-[1.5px] border-magenta rounded-xl px-5 py-5">
          <div className="text-[15px] font-semibold text-navy mb-1">Dan Shipper Lens</div>
          <div className="font-mono text-[10px] font-medium tracking-wide uppercase text-magenta mb-2.5">
            Applied at outline, every piece
          </div>
          <div className="text-[12.5px] text-muted-foreground leading-relaxed">
            Is the thinking sharp? Does every section earn its place? Is there filler masquerading as insight? Does the structure build an argument or just list things? Would a smart, busy reader finish this?
          </div>
        </div>
        <div className="bg-white border-[1.5px] border-blue rounded-xl px-5 py-5">
          <div className="text-[15px] font-semibold text-navy mb-1">Neil Patel Lens</div>
          <div className="font-mono text-[10px] font-medium tracking-wide uppercase text-blue mb-2.5">
            Applied to SEO + sales-oriented content
          </div>
          <div className="text-[12.5px] text-muted-foreground leading-relaxed">
            SEO: right keywords, compelling meta, structured for traditional search and AI-powered search (Perplexity, ChatGPT, AI Overviews). Sales: clear value prop, specific CTAs, urgency without manipulation.
          </div>
        </div>
      </div>

      {/* Outputs */}
      <SectionLabel>
        Output Files, <span className="font-mono normal-case tracking-normal">{'{project}/content/{post-slug}/'}</span>
      </SectionLabel>
      <p className="text-[13px] text-muted-foreground mb-4 pl-1">
        Not every project produces every file. Outputs depend on what is defined in the project&apos;s{' '}
        <span className="font-mono text-[12px]">context/</span>, dashed borders are conditional.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-10">
        {[
          { n: 'blog.md', d: 'Full blog post, always', cond: false },
          { n: 'social.md', d: 'Channels defined in project context', cond: false },
          { n: 'seo.md', d: 'SEO + AI search, always', cond: false },
          { n: 'images.md', d: 'If user chooses AI-generated images', cond: true },
          { n: '*.jpg / *.png', d: 'If user chooses real photos', cond: true },
          { n: 'vietnamese.md', d: 'If project context specifies Vietnamese', cond: true },
          { n: 'circle.html', d: 'If project has design-system.md', cond: true },
        ].map((f) => (
          <div
            key={f.n}
            className={`bg-white border-[1.5px] ${f.cond ? 'border-dashed border-border opacity-60' : 'border-border'} rounded-lg px-4 py-3`}
          >
            <div className="font-mono text-[13px] text-navy mb-0.5">{f.n}</div>
            <div className="text-[12px] text-muted-foreground">{f.d}</div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <SectionLabel>Legend</SectionLabel>
      <div className="flex flex-wrap gap-x-6 gap-y-3 px-5 py-4 bg-surface border border-border rounded-xl">
        {[
          { color: 'border-magenta', label: 'Shipper lens, editorial critique' },
          { color: 'border-blue', label: 'Patel lens, SEO & sales review' },
          { color: 'border-mint-dark', label: 'Approval gate' },
          { color: 'border-navy', label: 'Image decision point' },
          { color: 'border-border border-dashed', label: 'Conditional output' },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-2 text-[12.5px] text-muted-foreground">
            <div className={`w-3 h-3 rounded-sm border-[1.5px] ${l.color}`} />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  );
}
