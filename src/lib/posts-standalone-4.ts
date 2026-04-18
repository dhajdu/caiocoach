import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Standalone batch 4                                                 */
/* ------------------------------------------------------------------ */

export const POSTS_STANDALONE_4: Post[] = [
  {
    slug: 'founder-stack-you-dont-need-to-become-technical',
    title: 'You Don\'t Need to Become Technical. You Need a Stack.',
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
