type Step = {
  num: string;
  name: string;
  desc: string;
  accent?: 'image' | 'template' | 'deploy';
};

const PHASES: { label: string; key: 'gather' | 'build' | 'index' | 'ship'; steps: Step[] }[] = [
  {
    label: 'Gather',
    key: 'gather',
    steps: [
      { num: '01', name: 'Locate Content', desc: 'Find blog.md + seo.md in content-studio/{project}/content/{slug}/' },
      { num: '02', name: 'Read & Parse', desc: 'Extract title, body, meta tags, schema, keywords, hero image' },
    ],
  },
  {
    label: 'Build',
    key: 'build',
    steps: [
      { num: '03', name: 'Optimize Image', desc: 'Convert to WebP via sips, max 1200px wide, under 200KB', accent: 'image' },
      { num: '04', name: 'Build Page', desc: 'Build full page using site template + component patterns. OG tags, schema, nav, content, footer.', accent: 'template' },
    ],
  },
  {
    label: 'Index',
    key: 'index',
    steps: [
      { num: '05', name: 'Update Listing', desc: 'Insert new post card at top of blog index page' },
      { num: '06', name: 'Update Nav Chain', desc: 'Add to nav-index.md. Update prev/next links.' },
      { num: '07', name: 'Patch Previous', desc: "Update previous post's next link to point here" },
    ],
  },
  {
    label: 'Ship',
    key: 'ship',
    steps: [
      { num: '08', name: 'Git Commit', desc: 'Stage explicit files only. Commit: blog: publish "{title}"' },
      { num: '09', name: 'Handoff', desc: 'Tell user to run deploy command. Never push automatically.', accent: 'deploy' },
    ],
  },
];

const PHASE_CHIP: Record<'gather' | 'build' | 'index' | 'ship', string> = {
  gather: 'bg-magenta/10 text-magenta',
  build: 'bg-blue/10 text-blue',
  index: 'bg-mint-dark/10 text-mint-dark',
  ship: 'bg-navy/10 text-navy',
};

function stepClasses(accent?: Step['accent']) {
  switch (accent) {
    case 'image':
      return 'border-magenta';
    case 'template':
      return 'border-blue';
    case 'deploy':
      return 'border-mint-dark';
    default:
      return 'border-border';
  }
}

function stepNumColor(accent?: Step['accent']) {
  switch (accent) {
    case 'image':
      return 'text-magenta';
    case 'template':
      return 'text-blue';
    case 'deploy':
      return 'text-mint-dark';
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

const SITES = [
  { name: 'CAIO Coach', stack: 'Next.js 16', desc: 'App Router on Vercel. Inter + JetBrains Mono. shadcn/ui.', status: 'Building now', active: true },
  { name: 'AIO Website', stack: 'Next.js 16', desc: 'App Router, Supabase backend. DM Sans font. Vercel deploy.', status: 'Future', active: false },
  { name: 'Dave Hajdu', stack: 'Next.js 16 + JSON', desc: 'Blog data in JSON, rendered via dynamic routes. Vercel deploy.', status: 'Future', active: false },
  { name: 'Edge8', stack: 'Static HTML', desc: 'Bare HTML in public/. Minimal structure. Vercel deploy.', status: 'Future', active: false },
];

const CONTEXT_FILES = [
  { name: 'site-config.md', desc: 'Tech stack, file paths, domain, git remote, deploy command', why: 'Where to write files and how to ship' },
  { name: 'blog-architecture.md', desc: 'How blog posts work, HTML files? JSON? JSX components?', why: 'Each site has a completely different build process' },
  { name: 'template-reference.html', desc: 'An annotated real blog post from this site', why: 'Study the actual pattern, not a generic template' },
  { name: 'component-patterns.md', desc: "How markdown maps to this site's specific HTML/JSX", why: 'A blockquote becomes different code on every site' },
  { name: 'nav-index.md', desc: 'Ordered list of published posts for prev/next chain', why: 'Single source of truth for navigation' },
  { name: 'style-guide.md', desc: 'Design tokens, CSS classes, brand rules', why: 'Or pointer to existing guide in the website project' },
];

export default function WebDeveloperWorkflow() {
  return (
    <div className="my-10 mx-auto w-full max-w-[920px]">
      <h3 className="text-[1.5rem] font-bold text-navy mb-1">Web Developer</h3>
      <p className="text-[14px] text-muted-foreground mb-10">
        Blog publishing workflow, from content studio output to live website
      </p>

      {/* Pipeline */}
      <SectionLabel>The Pipeline</SectionLabel>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-3 bg-surface border-[1.5px] border-border rounded-xl overflow-hidden">
        {[
          { label: 'Content Studio', title: '/studio produces', desc: 'blog.md, seo.md, social.md, card.png, approved content ready to publish', color: 'text-magenta' },
          { label: 'Web Developer', title: '/publish builds', desc: 'Optimizes images, builds HTML/JSX, updates index + nav, commits to git', color: 'text-blue' },
          { label: 'User', title: 'bash push.sh', desc: 'User runs deploy command from terminal. Vercel auto-deploys from GitHub.', color: 'text-mint-dark' },
        ].map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-5 ${i < 2 ? 'md:border-r border-b md:border-b-0 border-border' : ''}`}
          >
            <div className={`font-mono text-[11px] font-medium tracking-wide uppercase mb-1.5 ${s.color}`}>
              {s.label}
            </div>
            <div className="text-[15px] font-semibold text-navy mb-1">{s.title}</div>
            <div className="text-[12.5px] text-muted-foreground leading-snug">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Entry point */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 mb-10">
        <div className="flex-1 bg-surface border-[1.5px] border-blue rounded-xl px-5 md:px-7 py-4">
          <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-blue mb-1">Invoke</div>
          <div className="text-[14px] text-navy">
            <code className="font-mono bg-blue/10 text-blue px-2 py-0.5 rounded text-[12px]">/publish</code> or{' '}
            <code className="font-mono bg-blue/10 text-blue px-2 py-0.5 rounded text-[12px]">
              /publish caio-coach day-8-the-content-studio
            </code>
          </div>
        </div>
        <div className="hidden md:block text-border text-xl">&rarr;</div>
        <div className="flex-1 bg-surface border-[1.5px] border-blue rounded-xl px-5 md:px-7 py-4">
          <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-blue mb-1">Determine</div>
          <div className="text-[14px] text-navy">Which site? &middot; Which content slug?</div>
        </div>
      </div>

      {/* Publishing Workflow */}
      <SectionLabel>Publishing Workflow</SectionLabel>
      <div className="flex flex-col gap-3 mb-10">
        {PHASES.map((phase, i) => (
          <div key={phase.label}>
            <div className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-0">
              <div className="md:w-[110px] flex-shrink-0 flex items-center md:justify-end md:pr-4">
                <span className={`font-mono text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded ${PHASE_CHIP[phase.key]}`}>
                  {phase.label}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 flex-1">
                {phase.steps.map((s) => (
                  <StepCard key={s.num} step={s} />
                ))}
              </div>
            </div>
            {i < PHASES.length - 1 && (
              <div className="hidden md:flex pl-[110px] h-4">
                <div className="w-px h-4 bg-border ml-10" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Context per site */}
      <SectionLabel>Knowledge Stored Per Site</SectionLabel>
      <p className="text-[13px] text-muted-foreground mb-4 pl-1">
        Each site is different. These context files teach the web developer how to build for that specific site.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-10">
        {CONTEXT_FILES.map((c) => (
          <div key={c.name} className="bg-white border-[1.5px] border-border rounded-[10px] p-4">
            <div className="font-mono text-[13px] text-navy mb-1">{c.name}</div>
            <div className="text-[12px] text-muted-foreground leading-snug">{c.desc}</div>
            <div className="text-[11px] italic text-blue mt-1.5">{c.why}</div>
          </div>
        ))}
      </div>

      {/* Sites */}
      <SectionLabel>Sites</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {SITES.map((s) => (
          <div
            key={s.name}
            className={`bg-white border-[1.5px] rounded-xl p-5 ${s.active ? 'border-navy shadow-sm' : 'border-border'}`}
          >
            <div className="text-[15px] font-semibold text-navy mb-0.5">{s.name}</div>
            <div className={`font-mono text-[11px] font-medium tracking-wide uppercase mb-2 ${s.active ? 'text-blue' : 'text-muted-foreground'}`}>
              {s.stack}
            </div>
            <div className="text-[12.5px] text-muted-foreground leading-snug">{s.desc}</div>
            <div
              className={`inline-block mt-2.5 font-mono text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded ${
                s.active ? 'bg-mint-dark/10 text-mint-dark' : 'bg-surface text-muted-foreground'
              }`}
            >
              {s.status}
            </div>
          </div>
        ))}
      </div>

      {/* Output */}
      <SectionLabel>Output, written to the actual website project</SectionLabel>
      <p className="text-[13px] text-muted-foreground mb-4 pl-1">
        Nothing is saved in the web-developer folder. All output goes to the website project in Code Projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 mb-10">
        {[
          { n: '{slug}.html', d: 'Full blog post page' },
          { n: '{slug}.webp', d: 'Optimized hero image' },
          { n: 'index.html', d: 'Updated blog listing' },
          { n: '{prev-post}.html', d: 'Previous post (next link patched)' },
        ].map((f) => (
          <div key={f.n} className="bg-white border-[1.5px] border-border rounded-lg px-4 py-3">
            <div className="font-mono text-[13px] text-navy mb-0.5">{f.n}</div>
            <div className="text-[12px] text-muted-foreground">{f.d}</div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <SectionLabel>Legend</SectionLabel>
      <div className="flex flex-wrap gap-x-6 gap-y-3 px-5 py-4 bg-surface border border-border rounded-xl">
        {[
          { color: 'border-magenta', label: 'Image optimization step' },
          { color: 'border-blue', label: 'Template-driven build step' },
          { color: 'border-mint-dark', label: 'Deploy handoff' },
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
