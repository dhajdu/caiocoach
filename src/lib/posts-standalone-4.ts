import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Standalone batch 4                                                 */
/* ------------------------------------------------------------------ */

export const POSTS_STANDALONE_4: Post[] = [
  {
    slug: 'founder-built-product-5-days-instead-3-months',
    title: 'How a Founder Built His Product in 5 Days Instead of 3 Months',
    titleAccent: '5 Days Instead of 3 Months',
    subtitle: 'James, the founder of Janet.Care, was quoted $300,000 AUD and three to six months by an agency. He flew to Vietnam instead. Five days later he was 70% done. He coded it himself.',
    excerpt: 'James, the founder of Janet.Care, was quoted $300,000 AUD and three to six months for the next phase of his longevity platform. He flew to Vietnam instead. Five days later he was 70% done. He coded it himself.',
    date: 'May 2, 2026',
    readTime: '6 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership', 'Infinite Leverage'],
    tags: [
      'build software with AI instead of an agency',
      'AI pod for founders',
      'how founders use AI to ship faster',
      'founder coding with AI agents',
      'developer as unblocker',
      'AI MVP without agency',
      'Janet.Care case study',
      'Infinite Leverage Blueprint',
    ],
    image: '/blog/images/founder-built-product-5-days-instead-3-months.webp',
    author: 'Dave Hajdu',
  },
  {
    slug: 'founder-stack-you-dont-need-to-become-technical',
    title: 'You Don\'t Need to Become Technical You Need a Stack',
    titleAccent: 'You Need a Stack',
    subtitle: 'The non-technical founder myth is dead. Four tools (Claude, Vercel, Supabase, GitHub) and the judgment to direct them. That\'s the new bar.',
    excerpt: 'You\'ve been nodding in meetings about AI, code, and MVPs for years. You\'re not going to learn Python this quarter. You don\'t need to. You need a stack.',
    date: 'Apr 18, 2026',
    readTime: '5 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership', 'Claude Code'],
    tags: [
      'non-technical founder',
      'founder tech stack',
      'AI tools for founders',
      'Claude Code',
      'Vercel',
      'Supabase',
      'GitHub',
      'AI leadership',
      'Infinite Leverage Retreat',
      'no-code vs AI-code',
    ],
    image: '/blog/images/founder-stack-you-dont-need-to-become-technical.webp',
    author: 'Dave Hajdu',
  },
];

export const BLOCKS_STANDALONE_4: Record<string, Block[]> = {
  'founder-built-product-5-days-instead-3-months': [
    // Opening hook
    { tag: 'p', text: 'You have been handed a quote. There is a comma in the number. Maybe two. You read it twice, hoping the second pass softens the figure. It does not. You have not started anything yet, and you already feel behind.' },
    { tag: 'p', text: 'A founder named James knows that feeling. He runs Janet.Care, a longevity coach that tracks people\'s health data and helps them plan for a longer life through supplement protocols, exercise, and diet. He has spent ten years in the domain. An Australian company quoted him $300,000 AUD and three to six months for the next phase of the build.' },
    { tag: 'p', text: 'He booked a flight to Vietnam instead.' },

    // Five days versus six months
    { tag: 'h2', text: 'Five days versus six months' },
    { tag: 'p', text: 'Here is what James actually did in five days.' },
    { tag: 'p', text: 'He coded it. Himself. With one part-time product manager, one full-time engineer, and the Infinite Leverage Blueprint guiding the day. By the end of day five, roughly 70 percent of the build was done. The remaining 30 percent will polish over the next 30 days.' },
    { tag: 'stat-callout', stats: [
      { value: '$300K AUD', label: 'Agency Quote', color: 'magenta' },
      { value: '5 Days', label: 'Actual Sprint', color: 'mint' },
      { value: '70%', label: 'Shipped', color: 'blue' },
    ] },
    { tag: 'p', text: 'That is the headline. Sit with it for a second before we get to how.' },
    { tag: 'p', text: 'Three to six months collapsed into about five weeks of total elapsed time. One agency invoice replaced by a tiny pod and a lot of focus. The cost difference is not the point of this post. The leverage difference is. This is what it actually looks like to build software with AI instead of an agency.' },

    // Day two
    { tag: 'h2', text: 'Day two is when it broke open' },
    { tag: 'p', text: 'Day one was a setup day. Tools, repos, a shared picture of what we were trying to ship. The kind of work that has to happen and never feels like progress.' },
    { tag: 'p', text: 'Day two we kept tripping over the same friction. The team would finish a thread and stand around waiting. Nobody could see what was safe to start next, what was blocked, what was already someone else\'s problem. The bottleneck was not coding speed. The bottleneck was <a href="/blog/day-13-coordination-tax">knowing where to point</a>.' },
    { tag: 'p', text: 'So we built the thing that fixed it.' },
    { tag: 'p', text: 'Days three, four, and five were a different project. The team was no longer guessing. James was making decisions in the morning that paid off by lunch. The output curve bent.' },

    // The Blueprint
    { tag: 'h2', text: 'The Infinite Leverage Blueprint' },
    { tag: 'p', text: 'The thing we built has three layers.' },
    { tag: 'shipped-list', title: 'The three layers', items: [
      '<strong>The product doc</strong> sits on top. One document. The thesis, what we are building, who it is for. If a question cannot be answered by reading this document, it is not yet a question worth asking.',
      '<strong>The epics</strong> sit in the middle. Each epic is a chunk of work that moves the product doc forward. Not tasks, not tickets. The size of thing a small pod can ship in a week or two.',
      '<strong>The epic status board</strong> sits at the bottom, and this is the layer most teams miss. It is the live state of who is doing what, what is blocked, what is parallelizable, and which AI agents are mid-flight on which threads. It treats agents and humans as the same kind of resource, because for the leader running the day, they are.',
    ] },
    { tag: 'p', text: 'The product manager runs the board every morning and surfaces two or three threads that do not depend on each other. The leader picks. Multi-delegation becomes a thirty second decision instead of a meeting.' },
    { tag: 'p', text: 'That is the Blueprint. Product doc, epics, status board with dependencies surfaced. Boring on paper. Transformative in practice.' },

    // The reframe
    { tag: 'h2', text: 'A developer is not there to do your work' },
    { tag: 'p', text: 'Here is the part that reframed the whole project for me, and I think will reframe it for you.' },
    { tag: 'p', text: 'If you watched James through the week, he was coding. He was shipping commits. He was pairing with the agents. He was not sitting in a corner approving things while someone else did the work. By the back half of the week, James was moving through the codebase at roughly the same pace as the full-time engineer.' },
    { tag: 'p', text: 'So why was the engineer there?' },
    { tag: 'p', text: 'The engineer was there to clear the runway. To unblock James the moment James got stuck. To handle the gnarly hour of debugging that would have cost James half a day. To take the threads that needed deep technical context and move them quietly, so James could keep building the parts only he could build.' },
    { tag: 'pull-quote', text: 'A developer is not there to do your work for you. A developer is there to unblock your creativity.' },
    { tag: 'p', text: 'That is a different deal. It is the deal almost no leader I coach is currently making.' },

    // Two ingredients
    { tag: 'h2', text: 'Two ingredients, multiplied' },
    { tag: 'p', text: 'Infinite leverage is not a slogan. It is a multiplication.' },
    { tag: 'p', text: 'The first ingredient is your accumulated knowledge. James has ten years of conversations with customers, ten years of pattern recognition about what longevity coaching actually needs to do. Nobody on the planet can copy this. It is not in a repo.' },
    { tag: 'p', text: 'The second ingredient is <a href="/blog/day-12-two-track-business-model">a small pod that can ship</a>. One product manager part time. One engineer full time. <a href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener noreferrer">AI agents</a> doing the kind of work that <a href="/blog/day-14-world-has-moved">used to need a team of five</a>.' },
    { tag: 'p', text: 'Either alone gets you nothing. Knowledge without execution is a slide deck nobody reads. Execution without knowledge ships the wrong product faster than anyone can correct it. Pair them, and the output curve bends in a way that does not look like a 10 percent improvement. It looks like an order of magnitude.' },
    { tag: 'p', text: 'That is the leverage. When you build software with AI instead of an agency, the ceiling is no longer set by your team\'s headcount. It is set by <a href="/blog/founder-stack-you-dont-need-to-become-technical">how much you, the leader, are willing to bring to the table</a>.' },

    // Conclusion
    { tag: 'conclusion-box', title: 'The question I would ask you', paragraphs: [
      'James flew home with three things. A marketing team ready to launch. A product manager running the Blueprint daily. A project manager keeping the wheels on for the 30 days of polish ahead. Janet.Care will go live soon, and we will tell you when it does.',
      'That is James\'s story. Here is yours.',
      'What would you build in the next five days if a developer was clearing your runway instead of standing between you and the work?',
      'That is the question I would ask you, sitting across from you with two coffees, if you came to Vietnam tomorrow.',
      'Sit with it for a minute before you scroll on. If the answer keeps coming back, <a href="/contact">book a call</a> and we will figure out the first five days together.',
    ] },

    // FAQ
    { tag: 'faq', question: 'How can a founder build software with AI instead of an agency?', answer: 'A founder builds software with AI instead of an agency by pairing themselves (the domain expert) with one part-time product manager and one full-time engineer, then using AI agents to do the work that used to require a team of five. The founder codes alongside the engineer. The engineer\'s job is to clear the runway. The product manager runs a daily board that surfaces parallelizable work.' },
    { tag: 'faq', question: 'What is The Infinite Leverage Blueprint?', answer: 'The Infinite Leverage Blueprint is a three-layer operating system for AI-enabled product teams. Layer one is a product doc that defines the thesis. Layer two is epics that move the doc forward. Layer three is an epic status board that tracks both AI agents and humans, surfaces dependencies, and lets the leader multi-delegate every morning.' },
    { tag: 'faq', question: 'How fast can a small AI pod ship a product?', answer: 'A founder coding alongside one part-time product manager and one full-time engineer, supported by AI agents and the Infinite Leverage Blueprint, shipped roughly 70% of a longevity coaching platform (Janet.Care) in five days. The remaining 30% will polish over the following 30 days. Total elapsed time: about five weeks. The same scope was quoted by an Australian company at $300,000 AUD over three to six months.' },
    { tag: 'faq', question: 'What is the role of a developer when a founder is coding with AI?', answer: 'The developer\'s role shifts from "build the product" to "unblock the founder." The developer handles the gnarly hour of debugging that would cost the founder half a day, takes the threads that need deep technical context, and clears the runway so the founder can keep building the parts only they can build. A developer is not there to do the founder\'s work. A developer is there to unblock the founder\'s creativity.' },
    { tag: 'faq', question: 'What is Janet.Care?', answer: 'Janet.Care is a longevity coach that tracks people\'s health data and helps them plan for a longer life through supplement protocols, exercise, and diet. It was founded by James, who has spent ten years in the longevity domain.' },
  ],

  'founder-stack-you-dont-need-to-become-technical': [
    // Opening
    { tag: 'p', text: 'You\'ve been in the meeting. Someone on your team mentions spinning up an internal tool, shipping an MVP, or pulling data from a database. You nod along. You\'ve been nodding for years. And somewhere in the back of your mind, there\'s a quiet voice that says, <em>I should really learn this stuff.</em>' },
    { tag: 'p', text: 'You won\'t. You probably won\'t ever sit down and become an engineer. That\'s fine.' },
    { tag: 'p', text: 'Because you don\'t need to.' },

    // The claim
    { tag: 'h2', text: 'The claim' },
    { tag: 'p', text: 'Here\'s what I want you to sit with for a second.' },
    { tag: 'emphasis-box', text: '<strong>You don\'t need to become technical. You need a stack.</strong>' },
    { tag: 'p', text: 'Read that again. The thing you\'ve been beating yourself up about, the reason you\'ve been outsourcing ideas that should be in your hands, the block that keeps you in strategy and out of building, isn\'t a skill gap. It\'s an infrastructure gap.' },
    { tag: 'p', text: '"Technical" isn\'t a personality trait. It isn\'t a degree. It\'s a setup. Engineers aren\'t smarter than founders. They just have a configuration of tools that lets them turn an idea into a live thing. Once you have the same configuration, the output is indistinguishable.' },
    { tag: 'p', text: 'So let me show you the configuration.' },

    // The Founder Stack
    { tag: 'h2', text: 'The Founder Stack' },
    { tag: 'p', text: 'Four tools. That\'s it.' },
    { tag: 'p', text: '<strong>Claude.</strong> Your coding engine. You describe what you want in plain English, and it writes the code. Not a gimmick, not a toy. This is the tool that quietly became better at code than <a href="/blog/i-raised-9-5m-and-couldnt-read-my-own-codebase">most of the engineers I\'ve hired</a> in my career. You talk, it builds.' },
    { tag: 'p', text: '<strong><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>.</strong> Your publishing button. You hand it your code, it puts it on the internet. Domain, hosting, updates, all of it. What used to require a server admin, a DNS config, and a three-hour tutorial now takes one click. I\'m not exaggerating.' },
    { tag: 'p', text: '<strong><a href="https://supabase.com" target="_blank" rel="noopener noreferrer">Supabase</a>.</strong> Your database. If Claude is the engine and Vercel is the road, Supabase is the warehouse where everything lives. Users, orders, content, whatever your thing needs to remember. It comes pre-built so you don\'t have to design it from scratch.' },
    { tag: 'p', text: '<strong>GitHub.</strong> The one people think is for engineers. It isn\'t. Strip the jargon and GitHub is a folder structure in the cloud with a memory. It remembers every change you make, and it lets you undo anything. Engineers made it sound holy. It\'s Dropbox that never forgets.' },
    { tag: 'pull-quote', text: 'Claude to build. Vercel to publish. Supabase to store. GitHub to remember.' },
    { tag: 'p', text: 'Notice what\'s not on the list. Not a bootcamp. Not a CS degree. Not learning Python. Not spending six months in tutorials. You don\'t need any of it.' },
    { tag: 'stat-callout', stats: [
      { value: '4', label: 'Tools in the Stack', color: 'blue' },
      { value: '0', label: 'Lines of Code You Write', color: 'mint' },
      { value: '1', label: 'Weekend to Learn', color: 'magenta' },
    ] },

    // Why this works now
    { tag: 'h2', text: 'Why this works now' },
    { tag: 'p', text: 'None of this worked two years ago. A non-technical founder trying this stack in 2023 would have been lost inside an hour. What changed is that the tools got so good the interface became the job. You don\'t write code anymore. You direct it. And directing is something leaders already know how to do.' },

    // What you can actually build
    { tag: 'h2', text: 'What you can actually build' },
    { tag: 'p', text: 'Let me show you what I mean.' },
    { tag: 'p', text: 'Over a weekend, I built something I\'m calling <a href="/blog/day-8-the-content-studio">my content studio</a>. It\'s three agents working together. The first develops blog ideas with me, conversationally. It asks questions, sharpens the thesis, drafts the post. The second generates the images. The third, a little web developer agent, takes the finished piece and publishes it straight to this site. No copy-paste, no CMS, no hand-off.' },
    { tag: 'p', text: 'I didn\'t hire anyone. I didn\'t write a line of code. I described what I wanted, and I let the stack do the work.' },
    { tag: 'pull-quote', text: 'The ceiling isn\'t capacity anymore. The ceiling is your taste and your judgment.' },
    { tag: 'p', text: 'The point isn\'t the studio. The point is that a non-technical founder, using only the four tools above, can now build software that used to require a team. What should this thing do? What\'s worth building? What would make my customer\'s life easier? Those are the questions that matter now, and those have always been your questions to answer.' },

    // So what do you do with this
    { tag: 'h2', text: 'So what do you do with this?' },
    { tag: 'p', text: 'Here\'s the honest part. You can read this, nod, and go back to the meeting. Many will. You\'ll keep outsourcing the ideas in your head. You\'ll keep feeling one layer removed from the thing you\'re trying to build.' },
    { tag: 'p', text: 'Or you can get the stack in place.' },
    { tag: 'p', text: 'If you want to fumble through it alone, you can. The tools are there. But if you want to compress the learning curve from months to a weekend, that\'s why I built the <a href="/retreat">Infinite Leverage Retreat</a>. Two days. <a href="/blog/day-7-infinite-leverage-blueprint">We pair you with an engineer</a> who gets you set up on the whole stack, live. You bring an idea you\'ve been carrying. You leave with the setup, the fluency, and the confidence to use it.' },
    { tag: 'emphasis-box', text: 'What would change in your business if you weren\'t waiting on someone else to build the thing in your head? That\'s the question. <strong>The stack is the answer.</strong>' },

    // Conclusion
    { tag: 'conclusion-box', title: 'Ready to Get Your Stack in Place?', paragraphs: [
      'The Infinite Leverage Retreat is two days, in person. You and a small cohort of founders, paired with an engineer who walks you through the whole stack live. Come with an idea. Leave with the setup, the fluency, and the confidence to use it.',
      'Learn more at <a href="/retreat">caiocoach.com/retreat</a>.',
      'Read next: <a href="/blog/day-8-the-content-studio">How I Built a Content Studio With Claude Code in One Conversation</a> &middot; <a href="/blog/i-raised-9-5m-and-couldnt-read-my-own-codebase">I Raised $9.5M and Still Couldn\'t Read My Own Codebase</a>',
    ] },

    // FAQ
    { tag: 'faq', question: 'Do non-technical founders need to learn to code in 2026?', answer: 'No. The old advice to learn Python or take a bootcamp is outdated. Non-technical founders now need a stack of four tools (Claude, Vercel, Supabase, GitHub) and the judgment to direct them. Directing AI code generation is a different skill than writing code, and it is one leaders already have the instincts for.' },
    { tag: 'faq', question: 'What is the founder tech stack?', answer: 'The founder tech stack is a minimal set of tools that lets a non-technical founder build and ship software without hiring engineers: Claude for generating code from plain-English descriptions, Vercel for one-click publishing to the web, Supabase for the database, and GitHub for version control and file storage. Together they replace the traditional engineering team for most early-stage software projects.' },
    { tag: 'faq', question: 'Is this the same as no-code?', answer: 'No. No-code platforms like Webflow or Bubble limit you to the features their platform offers. The founder stack generates actual code, which means there is no ceiling on what you can build. You get the flexibility of a custom-built product with the speed of no-code.' },
    { tag: 'faq', question: 'How long does it take to set up the founder stack?', answer: 'Alone, expect two to four weeks of fumbling through documentation before the stack feels natural. With a paired engineer guiding you through the setup live, it takes a weekend. The Infinite Leverage Retreat is a two-day format built specifically to compress the learning curve.' },
    { tag: 'faq', question: 'Do I still need engineers if I have the stack?', answer: 'For most early-stage founder projects, no. For production systems at scale, deep infrastructure work, or security-sensitive applications, engineers remain essential. The stack changes the question from who can build this for me to what is worth building, which is the founder\'s job regardless.' },
  ],
};
