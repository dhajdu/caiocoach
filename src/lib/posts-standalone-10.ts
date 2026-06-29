import type { Post, Block } from './types';

/* ------------------------------------------------------------------ */
/*  Standalone batch 10                                                */
/* ------------------------------------------------------------------ */

export const POSTS_STANDALONE_10: Post[] = [
  {
    slug: 'leadership-skills-for-the-ai-era',
    title: "The Other Half of Leadership You Haven't Built Yet",
    titleAccent: "You Haven't Built Yet",
    subtitle:
      "An honest coach's take on the half of leadership most of us teach but never build: workflow design, information architecture, and writing for AI. Plus the number I am not proud of.",
    excerpt:
      "The half of leadership most of us teach but never build: workflow design, information architecture, writing for AI. An honest coach's take, plus the number I am not proud of.",
    date: 'Jun 29, 2026',
    readTime: '5 min read',
    category: 'AI Leadership',
    categories: ['AI Leadership'],
    tags: [
      'leadership skills for the AI era',
      'what skills do leaders need for AI',
      "AI leadership skills you can't fake",
      'teaching AI but not doing it',
      'workflow design for AI',
      'the other 50%',
      'CAIO Coach',
    ],
    featured: true,
    image: '/blog/images/leadership-skills-for-the-ai-era.webp',
    author: 'Dave Hajdu',
  },
];

export const BLOCKS_STANDALONE_10: Record<string, Block[]> = {
  'leadership-skills-for-the-ai-era': [
    // Opening
    {
      tag: 'p',
      text: `You teach this. Or you nod along in meetings when AI comes up, say the right things, maybe even repeat them to your team. But somewhere quieter, you know you haven't actually built the thing yourself.`,
    },
    {
      tag: 'p',
      text: `I want to name that feeling first, because it is more common than anyone admits, and there is no judgement in it. The gap between knowing about something and having done it is not a character flaw. The question is whether you are willing to look at it.`,
    },

    // I caught myself
    { tag: 'h2', text: 'I caught myself becoming what I always hated' },
    { tag: 'p', text: `Let me go first.` },
    {
      tag: 'p',
      text: `For a while there I was teaching ideas I had not practiced. Telling leaders how AI changes the work, while my own work stayed the way it had always been. I caught myself becoming the thing I have always quietly disliked: someone who teaches but cannot do.`,
    },
    {
      tag: 'p',
      text: `That was a worse sentence to sit with than it is to write. So I did the only thing that fixes it. I went and did the work myself.`,
    },

    // What I had to practice
    { tag: 'h2', text: 'What I actually had to practice' },
    { tag: 'p', text: `Here is what I had been pointing at without holding.` },
    {
      tag: 'p',
      text: `The half everyone already knows stays exactly where it is. Hire well, build culture, hold people accountable. But the AI era asks for a second half, resting on three skills I had been describing more than using.`,
    },
    {
      tag: 'p',
      text: `Workflow design: mapping who does what, in what order, who owns the result, and where AI sits on the team alongside people. Information architecture: organizing what you know so it can be found and used, because if your AI cannot find it, it does not exist. Writing instructions for AI and for code: turning your vision into something a machine can run, since prompts and scripts are just instructions you direct and AI writes.`,
    },
    {
      tag: 'p',
      text: `Then there is the shape of the company itself. I reorganized around four offices: Revenue, Operations, Talent, Innovation, with one central database underneath all of them. And I changed how I measure value. Not vague effort anymore. Real things shipped, measured against goals. That is what infinite leverage means: one person's effort, multiplied, showing up as concrete output.`,
    },
    {
      tag: 'html',
      html: `<figure style="margin:32px 0"><svg width="100%" viewBox="0 0 680 540" xmlns="http://www.w3.org/2000/svg" role="img" style="display:block"><title>The Four Offices of the Future</title><desc>Four offices, Revenue, Operations, Talent and Innovation, resting on one central database.</desc><style>.ff{font-family:'Inter',system-ui,-apple-system,sans-serif}.eb{letter-spacing:3px}</style><rect x="0" y="0" width="680" height="540" rx="20" fill="#04102D" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><text class="ff eb" x="340" y="60" text-anchor="middle" fill="#6FF2C1" font-size="12" font-weight="500">THE OPERATING MODEL FOR THE AI ERA</text><text class="ff" x="340" y="100" text-anchor="middle" fill="#FFFFFF" font-size="28" font-weight="600">The Four Offices of the Future</text><g class="ff"><rect x="80" y="140" width="250" height="118" rx="14" fill="#0A1A38" stroke="#287BE8" stroke-width="2"/><text x="104" y="194" fill="#5AA0F5" font-size="20" font-weight="600">Revenue</text><text x="104" y="220" fill="rgba(255,255,255,0.55)" font-size="13">Everything that brings money in</text><rect x="350" y="140" width="250" height="118" rx="14" fill="#0A1A38" stroke="#6FF2C1" stroke-width="2"/><text x="374" y="194" fill="#6FF2C1" font-size="20" font-weight="600">Operations</text><text x="374" y="220" fill="rgba(255,255,255,0.55)" font-size="13">Everything that delivers the work</text><rect x="80" y="278" width="250" height="118" rx="14" fill="#0A1A38" stroke="#D1458B" stroke-width="2"/><text x="104" y="332" fill="#E06AA6" font-size="20" font-weight="600">Talent</text><text x="104" y="358" fill="rgba(255,255,255,0.55)" font-size="13">Builds the team, human and AI</text><rect x="350" y="278" width="250" height="118" rx="14" fill="#0A1A38" stroke="#FF6B35" stroke-width="2"/><text x="374" y="332" fill="#FF8B5E" font-size="20" font-weight="600">Innovation</text><text x="374" y="358" fill="rgba(255,255,255,0.55)" font-size="13">Creates what comes next</text></g><path d="M340 396 V430" stroke="rgba(255,255,255,0.22)" stroke-width="2"/><rect x="140" y="430" width="400" height="72" rx="12" fill="#0B2247" stroke="rgba(111,242,193,0.35)" stroke-width="1"/><rect x="152" y="430" width="376" height="3" rx="1.5" fill="#6FF2C1"/><text class="ff" x="340" y="470" text-anchor="middle" fill="#FFFFFF" font-size="17" font-weight="600">Central database</text><text class="ff" x="340" y="490" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="12.5">the foundation everything rests on</text></svg><figcaption style="text-align:center;color:rgba(255,255,255,0.5);font-size:13px;margin-top:10px">Four offices, one central database underneath. The database is the floor everything stands on.</figcaption></figure>`,
    },
    {
      tag: 'p',
      text: `I am keeping this light on purpose. But I had to live inside all of it before I could say it honestly. I have also watched this second half keep growing rather than shrinking, which I wrote about in <a href="/blog/does-automation-create-more-work">when the other 50% got bigger</a>.`,
    },

    // The number
    { tag: 'h2', text: 'The number I am not proud of' },
    { tag: 'p', text: `Here is the part I owe you straight.` },
    {
      tag: 'p',
      text: `Edge8 is about twenty percent smaller in 2026 than it was. Most of that was attrition, people choosing to leave, not a downsizing. I only actually let two people go. The rest walked on their own, and I am not proud of the losses. I think about them.`,
    },
    { tag: 'p', text: `And revenue is up sixty percent since January.` },
    {
      tag: 'html',
      html: `<figure style="margin:32px 0"><svg width="100%" viewBox="0 0 680 470" xmlns="http://www.w3.org/2000/svg" role="img" style="display:block"><title>The proof: 20% smaller team, 60% more revenue</title><desc>People down twenty percent, mostly attrition. Revenue up sixty percent over the same window. The gain is the proof; the loss is carried with humility.</desc><style>.ff{font-family:'Inter',system-ui,-apple-system,sans-serif}.eb{letter-spacing:3px}</style><rect width="680" height="470" rx="20" fill="#04102D" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><text class="ff eb" x="56" y="54" fill="#6FF2C1" font-size="12" font-weight="500">A REAL COMPANY · CARRIED WITH HUMILITY</text><text class="ff" x="56" y="92" fill="#FFFFFF" font-size="26" font-weight="600">The gap is the leverage</text><line x1="150" y1="372" x2="540" y2="372" stroke="rgba(255,255,255,0.2)" stroke-width="1"/><rect x="190" y="250" width="120" height="122" rx="6" fill="#37496E"/><text class="ff" x="250" y="232" text-anchor="middle" fill="#FFFFFF" font-size="20" font-weight="600">20% smaller</text><text class="ff" x="250" y="394" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="13" font-weight="500">People</text><text class="ff" x="250" y="414" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="12">mostly people who chose to leave</text><rect x="390" y="148" width="120" height="224" rx="6" fill="#6FF2C1"/><rect x="390" y="148" width="120" height="4" rx="2" fill="#FF6B35"/><text class="ff" x="450" y="130" text-anchor="middle" fill="#6FF2C1" font-size="22" font-weight="600">60% larger</text><text class="ff" x="450" y="394" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="13" font-weight="500">Revenue</text><text class="ff" x="450" y="414" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="12">over the same window</text><text class="ff" x="340" y="450" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="14">The 60% is the proof. The 20% is carried with humility</text></svg><figcaption style="text-align:center;color:rgba(255,255,255,0.5);font-size:13px;margin-top:10px">A fifth fewer people, sixty percent more revenue. The gain is the proof; the loss is carried with humility.</figcaption></figure>`,
    },
    {
      tag: 'p',
      text: `Sit with that gap, because I have had to. A fifth fewer people, and the business grew more than half again. I did not backfill every departure one for one. AI absorbed the work. That is the other half of leadership doing its job. It also cost real people, and I refuse to dress that up as a clever strategy.`,
    },
    {
      tag: 'pull-quote',
      text: `When leverage means you need fewer people, how do you lead the ones who leave, and the ones who stay, like a human being and not a spreadsheet?`,
    },
    {
      tag: 'p',
      text: `I do not have that fully solved. The math and the humanity do not always sit comfortably together.`,
    },

    // Questions
    { tag: 'h2', text: 'A few questions to sit with' },
    {
      tag: 'p',
      text: `Where are you teaching, or repeating, something you have not actually built?`,
    },
    {
      tag: 'p',
      text: `If you reorganized your own work around process, outcome, human effort in, and where AI fits, what would change first?`,
    },
    {
      tag: 'p',
      text: `And what would it take, this month, for you to ship one real thing instead of describing it?`,
    },

    // Whole argument
    { tag: 'h2', text: 'If you want the whole argument' },
    {
      tag: 'p',
      text: `I kept this plain on purpose, because the point was the honesty, not the framework. If you want the full argument, laid out with all the structure underneath it, my partners and I wrote the complete version over on Edge8: <a href="https://www.edge8.ai/post/the-other-50-percent-of-leadership" target="_blank" rel="noopener noreferrer">the other fifty percent of leadership</a>.`,
    },

    // Soft close
    {
      tag: 'conclusion-box',
      title: 'We can sit with the gap together',
      paragraphs: [
        `If you want a thinking partner while you build your own other half, not a course, not a certificate, that is the kind of work I do. We can sit with the gap together and figure out where you start.`,
        `That is also why I believe <a href="/blog/everybody-needs-a-coach">everybody needs a coach</a> who has already crossed the gap. If that is the help you want, come and <a href="/coaching">work with me directly</a>.`,
      ],
    },

    // FAQ
    {
      tag: 'faq',
      question: 'What leadership skills does the AI era actually require?',
      answer:
        'The half you already know stays in place: hire well, build culture, hold people accountable. The AI era adds a second half resting on three skills. Workflow design: mapping who does what, in what order, who owns the result, and where AI sits on the team alongside people. Information architecture: organizing what you know so it can be found and used, because if your AI cannot find it, it does not exist. Writing instructions for AI and for code: turning your vision into something a machine can run. Together these are the skills that let a leader direct AI, not just manage people.',
    },
    {
      tag: 'faq',
      question: 'What are the Four Offices of the Future?',
      answer:
        'A way to reorganize a company for the AI era around four offices: Revenue, Operations, Talent, and Innovation. Underneath all four sits a central database. With no central database there is no organized information and no leverage. For each office you ask the same four design questions: What is the process? What outcome does it generate? How many human tokens, meaning units of human effort, do you need to put in? Where does AI fit on the team?',
    },
    {
      tag: 'faq',
      question: 'How do you measure the value of AI in a business?',
      answer:
        'Stop measuring vague effort. Measure concrete units of value shipped into the digital world, such as pull requests and features, against your goals. Either you are hitting your goals or you are not. This is what infinite leverage means: one person\'s effort, multiplied by AI, showing up as real output you can count.',
    },
    {
      tag: 'faq',
      question: 'What do you do if you teach or talk about AI but have not actually built it yourself?',
      answer:
        'Name the gap first, without judgement. The distance between knowing about something and having done it is not a character flaw. Then go do the foundational work yourself: centralize your information, design one real workflow, write the instructions, and ship one concrete thing measured against a goal. The fastest builders translate vision directly into instructions a machine can run, which is why doing the core work yourself beats handing a hard vision off cold.',
    },
  ],
};
